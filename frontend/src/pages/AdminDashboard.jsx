import React, { useState, useEffect } from 'react';
import { 
  adminGetAllQuestions, adminCreateQuestion, adminUpdateQuestion, 
  adminDeleteQuestion, adminGetStats, getApiError
} from '../services/api';
import Modal from '../components/Modal';
import LoadingSpinner from '../components/LoadingSpinner';
import { getNextQuestionNumber } from '../utils/questionNumber';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [stats, setStats] = useState({ totalQuestions: 0, totalUsers: 0, totalSubmissions: 0 });
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Modal states
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  
  // Form state
  const [formData, setFormData] = useState({
    question_number: '',
    title: '',
    description: '',
    level: 'Easy',
    tags: '',
    constraints: '',
    testcases: [],
    starter_code: { java: '' },
    driver_code: { java: '' }
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [statsData, qsData] = await Promise.all([
        adminGetStats(),
        adminGetAllQuestions()
      ]);
      setStats(statsData);
      setQuestions(qsData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const openAddModal = () => {
    setFormData({
      question_number: getNextQuestionNumber(questions),
      title: '',
      description: '',
      level: 'Easy',
      tags: '',
      constraints: '',
      testcases: [{ input: '', expected_output: '', is_sample: false }],
      starter_code: { java: '' },
      driver_code: { java: '' }
    });
    setCurrentQuestion(null);
    setIsQuestionModalOpen(true);
  };

  const openEditModal = (q) => {
    setFormData({
      ...q,
      level: q.level || q.difficulty || 'Easy',
      tags: Array.isArray(q.tags) ? q.tags.join(', ') : q.tags || '',
      testcases: q.testcases || [],
      starter_code: { java: q.starter_code?.java || '' },
      driver_code: { java: q.driver_code?.java || '' }
    });
    setCurrentQuestion(q);
    setIsQuestionModalOpen(true);
  };

  const openDeleteModal = (q) => {
    setCurrentQuestion(q);
    setIsDeleteModalOpen(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNestedChange = (category, lang, value) => {
    setFormData(prev => ({
      ...prev,
      [category]: { ...prev[category], [lang]: value }
    }));
  };

  const handleTestcaseChange = (index, field, value) => {
    const newTestcases = [...formData.testcases];
    newTestcases[index][field] = value;
    setFormData(prev => ({ ...prev, testcases: newTestcases }));
  };

  const addTestcase = () => {
    setFormData(prev => ({
      ...prev,
      testcases: [...prev.testcases, { input: '', expected_output: '', is_sample: false }]
    }));
  };

  const removeTestcase = (index) => {
    setFormData(prev => ({
      ...prev,
      testcases: prev.testcases.filter((_, i) => i !== index)
    }));
  };

  const saveQuestion = async () => {
    try {
      setSaving(true);
      const levelVal = formData.level || formData.difficulty || 'Easy';
      const payload = {
        ...formData,
        level: levelVal,
        question_number: currentQuestion
          ? currentQuestion.question_number
          : getNextQuestionNumber(questions),
        tags: typeof formData.tags === 'string' ? formData.tags.split(',').map(t => t.trim()).filter(Boolean) : formData.tags
      };
      delete payload.difficulty;
      
      if (currentQuestion) {
        await adminUpdateQuestion(currentQuestion._id, payload);
      } else {
        await adminCreateQuestion(payload);
      }
      
      setIsQuestionModalOpen(false);
      fetchData();
    } catch (err) {
      console.error(err);
      const message = getApiError(err);
      if (err.response?.status === 403) {
        alert('Admin access required. Please sign in at /vikash.');
      } else {
        alert('Error saving question: ' + message);
      }
    } finally {
      setSaving(false);
    }
  };

  const deleteQuestion = async () => {
    try {
      setSaving(true);
      await adminDeleteQuestion(currentQuestion._id);
      setIsDeleteModalOpen(false);
      fetchData();
    } catch (err) {
      console.error(err);
      alert('Error deleting question');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="admin-loading"><LoadingSpinner /></div>;

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
      </div>

      <div className="stats-row">
        <div className="stat-card border-accent">
          <div className="stat-title">Total Questions</div>
          <div className="stat-value">{stats.totalQuestions}</div>
        </div>
        <div className="stat-card border-success">
          <div className="stat-title">Total Users</div>
          <div className="stat-value">{stats.totalUsers}</div>
        </div>
        <div className="stat-card border-info">
          <div className="stat-title">Total Submissions</div>
          <div className="stat-value">{stats.totalSubmissions}</div>
        </div>
      </div>

      <div className="admin-section">
        <div className="section-header">
          <h2>Questions Management</h2>
          <button className="btn-accent" onClick={openAddModal}>+ Add Question</button>
        </div>
        
        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Difficulty</th>
                <th>Test Cases</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {questions.map(q => (
                <tr key={q._id}>
                  <td>{q.question_number}</td>
                  <td>{q.title}</td>
                  <td>
                    <span className={`badge difficulty-${(q.level || q.difficulty || 'Easy').toLowerCase()}`}>
                      {q.level || q.difficulty || 'Easy'}
                    </span>
                  </td>
                  <td>{q.testcases?.length || 0}</td>
                  <td className="actions-cell">
                    <button className="icon-btn-blue" onClick={() => openEditModal(q)}>✏️</button>
                    <button className="icon-btn-red" onClick={() => openDeleteModal(q)}>🗑️</button>
                  </td>
                </tr>
              ))}
              {questions.length === 0 && (
                <tr><td colSpan="5" className="empty-state">No questions found</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={isQuestionModalOpen} onClose={() => setIsQuestionModalOpen(false)} title={currentQuestion ? 'Edit Question' : 'Add Question'}>
        <div className="form-container">
          <div className="form-row">
            <div className="form-group">
              <label>Number</label>
              <input
                type="number"
                name="question_number"
                value={formData.question_number}
                readOnly
                disabled
                className="input-readonly"
                title="Question number is assigned automatically"
              />
            </div>
            <div className="form-group flex-2">
              <label>Title</label>
              <input type="text" name="title" value={formData.title} onChange={handleFormChange} />
            </div>
            <div className="form-group">
              <label>Difficulty</label>
              <select name="level" value={formData.level || 'Easy'} onChange={handleFormChange}>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label>Tags (comma separated)</label>
            <input type="text" name="tags" value={formData.tags} onChange={handleFormChange} />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea name="description" rows="6" value={formData.description} onChange={handleFormChange}></textarea>
          </div>

          <div className="form-group">
            <label>Constraints</label>
            <textarea name="constraints" rows="3" value={formData.constraints} onChange={handleFormChange}></textarea>
          </div>

          <div className="section-divider"><h3>Test Cases</h3></div>
          {formData.testcases.map((tc, idx) => (
            <div key={idx} className="testcase-card">
              <div className="tc-header">
                <h4>Test Case {idx + 1}</h4>
                <button className="icon-btn-red-small" onClick={() => removeTestcase(idx)}>✕</button>
              </div>
              <div className="form-group">
                <label>Input</label>
                <textarea rows="2" value={tc.input} onChange={(e) => handleTestcaseChange(idx, 'input', e.target.value)}></textarea>
              </div>
              <div className="form-group">
                <label>Expected Output</label>
                <textarea rows="2" value={tc.expected_output} onChange={(e) => handleTestcaseChange(idx, 'expected_output', e.target.value)}></textarea>
              </div>
              <div className="form-checkbox">
                <label>
                  <input type="checkbox" checked={tc.is_sample} onChange={(e) => handleTestcaseChange(idx, 'is_sample', e.target.checked)} />
                  Is Sample (visible to user)
                </label>
              </div>
            </div>
          ))}
          <button className="btn-outline w-full" onClick={addTestcase}>+ Add Test Case</button>

          <div className="section-divider"><h3>Java Starter Code</h3></div>
          <div className="form-group">
            <label>Starter Code</label>
            <textarea className="code-input" rows="6" value={formData.starter_code?.java || ''} onChange={(e) => handleNestedChange('starter_code', 'java', e.target.value)}></textarea>
          </div>

          <div className="section-divider"><h3>Java Driver Code (execution wrapper)</h3></div>
          <div className="form-group">
            <label>Driver Code</label>
            <textarea className="code-input" rows="8" value={formData.driver_code?.java || ''} onChange={(e) => handleNestedChange('driver_code', 'java', e.target.value)}></textarea>
          </div>

          <div className="modal-actions">
            <button className="btn-cancel" onClick={() => setIsQuestionModalOpen(false)}>Cancel</button>
            <button className="btn-save" onClick={saveQuestion} disabled={saving}>
              {saving ? <LoadingSpinner size="small" /> : 'Save Question'}
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} title="Delete Question">
        <div className="delete-confirm">
          <p>Are you sure you want to delete <strong>{currentQuestion?.title}</strong>?</p>
          <p className="warning-text">This action cannot be undone.</p>
          <div className="modal-actions">
            <button className="btn-cancel" onClick={() => setIsDeleteModalOpen(false)}>Cancel</button>
            <button className="btn-danger" onClick={deleteQuestion} disabled={saving}>
              {saving ? <LoadingSpinner size="small" /> : 'Delete'}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
