import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Editor } from '@monaco-editor/react';
import { getQuestion, getAllQuestions, runCode, submitCode } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../components/Toast';
import { loadCodeDraft, useCodeDraft } from '../hooks/useCodeDraft';
import LoadingSpinner from '../components/LoadingSpinner';
import { FaChevronLeft, FaChevronRight, FaList } from 'react-icons/fa';
import './Workspace.css';

const Workspace = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isUser, isAdmin, refreshUser } = useAuth();
  const { addToast } = useToast();
  const [question, setQuestion] = useState(null);
  const [allQuestions, setAllQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Layout state
  const [leftWidth, setLeftWidth] = useState(40);
  const [showConsole, setShowConsole] = useState(false);
  const [consoleTab, setConsoleTab] = useState('testcase'); // 'testcase' or 'result'
  
  // Editor state (Java-only platform)
  const language = 'java';
  const [code, setCode] = useState('');
  const [customInput, setCustomInput] = useState('');
  
  // Execution state
  const [executing, setExecuting] = useState(false);
  const [result, setResult] = useState(null);
  const [evaluatingSubmit, setEvaluatingSubmit] = useState(false);
  const [liveTestCount, setLiveTestCount] = useState(0);
  const [totalExpectedTests, setTotalExpectedTests] = useState(50);

  const { clearDraft } = useCodeDraft(id, code);
  const dividerRef = useRef(null);
  const runRef = useRef(() => {});
  const submitRef = useRef(() => {});

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        setLoading(true);
        setError(null);
        const [data, allRes] = await Promise.all([
          getQuestion(id),
          getAllQuestions().catch(() => [])
        ]);

        const list = Array.isArray(allRes) ? allRes : allRes?.questions || allRes?.data || [];
        setAllQuestions(list.sort((a, b) => (a.question_number || 0) - (b.question_number || 0)));
        setQuestion(data);
        
        if (data.starter_code) {
          setCode(loadCodeDraft(id, data.starter_code.java || ''));
        }
        
        if (data.testcases && data.testcases.length > 0) {
          const sample = data.testcases.find(t => t.is_sample) || data.testcases[0];
          setCustomInput(sample.input);
        }
      } catch (err) {
        setError(err.message || 'Failed to load question');
      } finally {
        setLoading(false);
      }
    };
    fetchQuestion();
  }, [id]);

  const handleResetCode = () => {
    if (question?.starter_code?.java) {
      clearDraft();
      setCode(question.starter_code.java);
      addToast('Code reset to starter template', 'info');
    }
  };

  const requireUserSession = () => {
    if (isUser) return true;
    if (isAdmin) {
      navigate('/vikash');
      return false;
    }
    navigate('/login');
    return false;
  };

  const handleRun = async () => {
    if (!requireUserSession()) return;
    setExecuting(true);
    setEvaluatingSubmit(false);
    setShowConsole(true);
    setConsoleTab('result');
    setResult({ status: 'Executing sample test...', type: 'run' });
    try {
      const res = await runCode({ questionId: id, language, code, input: customInput });
      setResult({ ...res, type: 'run' });
      if (res.error) addToast('Run failed — check result panel', 'error');
    } catch (err) {
      setResult({ error: err.message, status: 'Error', type: 'run' });
      addToast(err.message || 'Run failed', 'error');
    } finally {
      setExecuting(false);
    }
  };

  const handleSubmit = async () => {
    if (!requireUserSession()) return;
    setExecuting(true);
    setShowConsole(true);
    setConsoleTab('result');
    setResult({ status: 'Evaluating...', type: 'submit' });
    setEvaluatingSubmit(true);
    setLiveTestCount(0);

    const estTotal = 50;
    setTotalExpectedTests(estTotal);

    let count = 0;
    const timer = setInterval(() => {
      count += 1;
      if (count <= estTotal - 3) {
        setLiveTestCount(count);
      }
    }, 20);

    try {
      const res = await submitCode({ questionId: id, language, code });
      clearInterval(timer);

      const actualTotal = res.total || 50;
      setTotalExpectedTests(actualTotal);
      const targetCount = res.status === 'Accepted' ? actualTotal : Math.min(res.passed + 1, actualTotal);

      let cur = Math.min(count, actualTotal);
      const stepTimer = setInterval(() => {
        if (cur < targetCount) {
          cur += 1;
          setLiveTestCount(cur);
        } else {
          clearInterval(stepTimer);
          setEvaluatingSubmit(false);
          setResult({ ...res, type: 'submit' });
          if (res.status === 'Accepted') {
            addToast('🎉 Accepted! All test cases passed.', 'success');
            refreshUser().catch(() => {});
          } else {
            addToast(res.status || 'Submission failed', 'error');
          }
        }
      }, 12);
    } catch (err) {
      clearInterval(timer);
      setEvaluatingSubmit(false);
      setResult({ error: err.message, status: 'Error', type: 'submit' });
      addToast(err.message || 'Submit failed', 'error');
    } finally {
      setExecuting(false);
    }
  };

  runRef.current = handleRun;
  submitRef.current = handleSubmit;

  // Drag logic for divider
  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, []);

  const handleMouseMove = useCallback((e) => {
    const newLeftWidth = (e.clientX / window.innerWidth) * 100;
    if (newLeftWidth > 20 && newLeftWidth < 80) {
      setLeftWidth(newLeftWidth);
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        if (e.shiftKey) submitRef.current();
        else runRef.current();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  if (loading) return <div className="workspace-loading"><LoadingSpinner /></div>;
  if (error) return <div className="workspace-error">{error}</div>;
  if (!question) return <div className="workspace-error">Question not found</div>;

  const currentIndex = allQuestions.findIndex(q => q._id === id || q._id === question._id);
  const prevQuestion = currentIndex > 0 ? allQuestions[currentIndex - 1] : null;
  const nextQuestion = currentIndex >= 0 && currentIndex < allQuestions.length - 1 ? allQuestions[currentIndex + 1] : null;

  return (
    <div className="workspace-container">
      {/* Left Panel */}
      <div className="workspace-left" style={{ width: `${leftWidth}%` }}>
        <div className="question-header">
          <div className="question-nav">
            <Link to="/problems" className="nav-btn" title="Problem List">
              <FaList /> <span>Problem List</span>
            </Link>
            <div className="nav-arrows">
              <button
                className="nav-btn icon-only"
                disabled={!prevQuestion}
                onClick={() => prevQuestion && navigate(`/workspace/${prevQuestion._id}`)}
                title="Previous problem"
              >
                <FaChevronLeft />
              </button>
              <button
                className="nav-btn icon-only"
                disabled={!nextQuestion}
                onClick={() => nextQuestion && navigate(`/workspace/${nextQuestion._id}`)}
                title="Next problem"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
          <h2>{question.question_number}. {question.title}</h2>
          <div className="question-meta">
            <span className={`badge difficulty-${(question.level || 'Easy').toLowerCase()}`}>
              {question.level || 'Easy'}
            </span>
            {question.tags && question.tags.map((tag, i) => (
              <span key={i} className="badge tag-badge">{tag}</span>
            ))}
          </div>
        </div>
        
        <div className="question-body">
          <div className="description-text" dangerouslySetInnerHTML={{ __html: (question.description || '').replace(/\n/g, '<br/>') }} />
          
          {question.testcases && question.testcases.filter(t => t.is_sample).length > 0 && (
            <div className="examples-section">
              <h3>Examples</h3>
              {question.testcases.filter(t => t.is_sample).map((tc, idx) => (
                <div key={idx} className="example-box">
                  <h4>Example {idx + 1}:</h4>
                  <div className="example-content">
                    <p><strong>Input:</strong> <code>{tc.input}</code></p>
                    <p><strong>Output:</strong> <code>{tc.expected_output}</code></p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {question.constraints && (
            <div className="constraints-section">
              <h3>Constraints:</h3>
              <ul className="constraints-list">
                {(question.constraints || '').split('\n').filter(c => c.trim()).map((c, i) => (
                  <li key={i}><code>{c}</code></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Resizer */}
      <div className="workspace-resizer" onMouseDown={handleMouseDown} ref={dividerRef} />

      {/* Right Panel */}
      <div className="workspace-right" style={{ width: `${100 - leftWidth}%` }}>
        {/* Editor Area */}
        <div className="editor-container" style={{ flex: showConsole ? '1 1 50%' : '1 1 100%' }}>
          <div className="editor-header">
            <span className="language-badge">Java</span>
            <button className="icon-btn reset-btn" onClick={handleResetCode} title="Reset to starter code">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 11-9-9c2.52 0 4.93 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /></svg>
            </button>
          </div>
          <div className="editor-wrapper">
            <Editor
              height="100%"
              language="java"
              theme="vs-dark"
              value={code}
              onChange={(val) => setCode(val)}
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                fontFamily: 'JetBrains Mono, monospace',
                padding: { top: 16 }
              }}
            />
          </div>
        </div>

        {/* Console Area */}
        {showConsole && (
          <div className="console-container">
            <div className="console-header">
              <button 
                className={`console-tab ${consoleTab === 'testcase' ? 'active' : ''}`}
                onClick={() => setConsoleTab('testcase')}
              >
                Testcase
              </button>
              <button 
                className={`console-tab ${consoleTab === 'result' ? 'active' : ''}`}
                onClick={() => setConsoleTab('result')}
              >
                Result
              </button>
              <button className="icon-btn close-console" onClick={() => setShowConsole(false)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
            
            <div className="console-body">
              {consoleTab === 'testcase' ? (
                <div className="testcase-tab">
                  <textarea 
                    value={customInput} 
                    onChange={(e) => setCustomInput(e.target.value)}
                    placeholder="Enter custom testcase input here..."
                  />
                </div>
              ) : (
                <div className="result-tab">
                  {evaluatingSubmit ? (
                    <div className="eval-card">
                      <div className="eval-header">
                        <div className="eval-spinner-ring"></div>
                        <div className="eval-title-group">
                          <h3 className="eval-title">Evaluating Submission</h3>
                          <p className="eval-subtitle">Running test cases against solution...</p>
                        </div>
                      </div>

                      <div className="eval-metric-box">
                        <div className="eval-counter-row">
                          <span className="eval-test-label">Test Cases</span>
                          <span className="eval-counter-digits">
                            <strong className="eval-passed-num">{liveTestCount}</strong> / {totalExpectedTests} Passed
                          </span>
                        </div>
                        <div className="eval-progress-bar-bg">
                          <div 
                            className="eval-progress-bar-fill" 
                            style={{ width: `${Math.min(100, Math.round((liveTestCount / totalExpectedTests) * 100))}%` }}
                          />
                        </div>
                      </div>

                      <div className="eval-live-ticker">
                        <span className="ticker-dot"></span>
                        <span>Evaluating test case #{Math.min(liveTestCount + 1, totalExpectedTests)}...</span>
                      </div>
                    </div>
                  ) : !result ? (
                    <div className="result-empty">Run code or submit to see results</div>
                  ) : (
                    <div className={`result-content ${result.status === 'Accepted' ? 'success' : result.status === 'Error' ? 'error' : 'warning'}`}>
                      <div className="result-status-header">
                        <div className={`status-badge-icon ${result.status === 'Accepted' ? 'icon-success' : 'icon-fail'}`}>
                          {result.status === 'Accepted' ? '✓' : '✕'}
                        </div>
                        <div>
                          <h3 className="result-status">{result.status}</h3>
                          {result.type === 'submit' && result.passed !== undefined && (
                            <p className="result-status-sub">
                              {result.status === 'Accepted' 
                                ? `All ${result.total} test cases passed successfully!` 
                                : `Passed ${result.passed} of ${result.total} test cases (Failed at testcase #${result.passed + 1})`}
                            </p>
                          )}
                        </div>
                      </div>

                      {result.error && (
                        <div className="result-error-box">
                          <pre>{result.error}</pre>
                        </div>
                      )}
                      
                      {result.type === 'run' && result.output !== undefined && (
                        <div className="run-result">
                          <div className="result-pill-row">
                            <span className="stat-pill">⚡ Runtime: {result.runtime}ms</span>
                          </div>
                          <h4>Output:</h4>
                          <pre className="output-box">{result.output}</pre>
                        </div>
                      )}
                      
                      {result.type === 'submit' && result.passed !== undefined && (
                        <div className="submit-result">
                          <div className="result-pill-row">
                            <span className="stat-pill">⚡ Runtime: {result.runtime}ms</span>
                            <span className={`stat-pill ${result.status === 'Accepted' ? 'stat-pill-success' : 'stat-pill-fail'}`}>
                              🎯 {result.passed} / {result.total} Passed
                            </span>
                          </div>

                          {result.error_message && (
                            <div className="result-error-box">
                              <pre>{result.error_message}</pre>
                            </div>
                          )}
                          
                          {result.status !== 'Accepted' && result.failing_testcase && (
                            <div className="failing-testcase-details">
                              <h4>Failing Testcase (Test #{result.passed + 1}):</h4>
                              <div className="detail-row">
                                <span className="label">Input:</span>
                                <code>{result.failing_testcase.input}</code>
                              </div>
                              <div className="detail-row">
                                <span className="label">Expected:</span>
                                <code className="expected-val">{result.failing_testcase.expected}</code>
                              </div>
                              <div className="detail-row">
                                <span className="label">Output:</span>
                                <code className="actual-val">{result.failing_testcase.actual || '""'}</code>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Bar */}
        <div className="action-bar">
          <div className="action-bar-left">
            <button className="console-toggle" onClick={() => setShowConsole(!showConsole)}>
              Console {showConsole ? '▼' : '▲'}
            </button>
            <span className="shortcut-hint">Ctrl+Enter Run · Ctrl+Shift+Enter Submit</span>
          </div>
          <div className="action-buttons">
            <button className="btn outline-btn run-btn" onClick={handleRun} disabled={executing}>
              {executing && consoleTab === 'result' && result?.type === 'run' ? <LoadingSpinner size="small" /> : 'Run'}
            </button>
            <button className="btn filled-btn submit-btn" onClick={handleSubmit} disabled={executing}>
              {executing && consoleTab === 'result' && result?.type === 'submit' ? <LoadingSpinner size="small" /> : 'Submit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
