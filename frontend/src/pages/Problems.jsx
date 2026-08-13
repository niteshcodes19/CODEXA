import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getAllQuestions, getUserProfile } from '../services/api';
import { FaSearch, FaCheck, FaExclamationCircle, FaRandom } from 'react-icons/fa';
import './Problems.css';

const Problems = () => {
  const navigate = useNavigate();
  const { isUser, loading: authLoading } = useAuth();
  const [questions, setQuestions] = useState([]);
  const [solvedQuestions, setSolvedQuestions] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [tagFilter, setTagFilter] = useState('All');

  useEffect(() => {
    if (authLoading) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const qRes = await getAllQuestions();
        let loadedQuestions = [];
        if (qRes && qRes.questions) loadedQuestions = qRes.questions;
        else if (Array.isArray(qRes)) loadedQuestions = qRes;
        else if (qRes && qRes.data) loadedQuestions = qRes.data;

        setQuestions(loadedQuestions);

        if (isUser) {
          try {
            const profile = await getUserProfile();
            if (profile?.solved_questions) {
              const solvedIds = profile.solved_questions.map(sq => typeof sq === 'object' ? sq._id : sq);
              setSolvedQuestions(new Set(solvedIds));
            }
          } catch (err) {
            if (err.response?.status !== 401) {
              console.error('Error fetching profile:', err);
            }
          }
        } else {
          setSolvedQuestions(new Set());
        }
      } catch (error) {
        console.error('Error fetching questions:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [isUser, authLoading]);

  const allTags = useMemo(() => {
    const tags = new Set();
    questions.forEach((q) => (q.tags || []).forEach((t) => tags.add(t)));
    return ['All', ...Array.from(tags).sort()];
  }, [questions]);

  const filteredQuestions = questions.filter(q => {
    const matchesSearch = q.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficultyFilter === 'All' || q.level === difficultyFilter;
    const matchesTag = tagFilter === 'All' || (q.tags || []).includes(tagFilter);
    const isSolved = solvedQuestions.has(q._id);
    const matchesStatus =
      statusFilter === 'All' ||
      (statusFilter === 'Solved' && isSolved) ||
      (statusFilter === 'Unsolved' && !isSolved);
    return matchesSearch && matchesDifficulty && matchesTag && matchesStatus;
  }).sort((a, b) => (a.question_number || 0) - (b.question_number || 0));

  const colSpan = isUser ? 5 : 4;

  const pickRandom = () => {
    if (filteredQuestions.length === 0) return;
    const pick = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
    navigate(`/workspace/${pick._id || pick.id}`);
  };

  return (
    <div className="problems-container">
      <div className="problems-header">
        <div className="problems-title-row">
          <h1 className="problems-title">
            Problem Set <span className="problems-count">({filteredQuestions.length})</span>
          </h1>
          <button type="button" className="btn-random" onClick={pickRandom} disabled={filteredQuestions.length === 0}>
            <FaRandom /> Random
          </button>
        </div>
        
        <div className="problems-controls">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search problems..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="difficulty-tabs">
            {['All', 'Easy', 'Medium', 'Hard'].map(diff => (
              <button
                key={diff}
                type="button"
                className={`diff-tab ${difficultyFilter === diff ? 'active' : ''} ${diff.toLowerCase()}`}
                onClick={() => setDifficultyFilter(diff)}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        <div className="problems-filters-row">
          {isUser && (
            <div className="status-tabs">
              {['All', 'Solved', 'Unsolved'].map((status) => (
                <button
                  key={status}
                  type="button"
                  className={`status-tab ${statusFilter === status ? 'active' : ''}`}
                  onClick={() => setStatusFilter(status)}
                >
                  {status}
                </button>
              ))}
            </div>
          )}

          {allTags.length > 1 && (
            <div className="tag-filters">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={`tag-chip ${tagFilter === tag ? 'active' : ''}`}
                  onClick={() => setTagFilter(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="problems-table-wrapper">
        <table className="problems-table">
          <thead>
            <tr>
              <th className="col-status">Status</th>
              <th className="col-id">#</th>
              <th className="col-title">Title</th>
              <th className="col-difficulty">Difficulty</th>
              {isUser && <th className="col-acceptance">Acceptance</th>}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              Array.from({ length: 5 }).map((_, idx) => (
                <tr key={`skeleton-${idx}`} className="skeleton-row">
                  <td><div className="skeleton-block icon"></div></td>
                  <td><div className="skeleton-block id"></div></td>
                  <td><div className="skeleton-block title"></div></td>
                  <td><div className="skeleton-block diff"></div></td>
                  {isUser && <td><div className="skeleton-block acc"></div></td>}
                </tr>
              ))
            ) : filteredQuestions.length === 0 ? (
              <tr>
                <td colSpan={colSpan} className="empty-state">
                  <FaExclamationCircle className="empty-icon" />
                  <p>No questions found matching your criteria.</p>
                </td>
              </tr>
            ) : (
              filteredQuestions.map((q, index) => {
                const isSolved = solvedQuestions.has(q._id);
                return (
                  <tr key={q._id || index} className="problem-row">
                    <td className="col-status">
                      {isSolved && <FaCheck className="status-icon solved" title="Solved" />}
                    </td>
                    <td className="col-id">{q.question_number || index + 1}</td>
                    <td className="col-title">
                      <Link to={`/workspace/${q._id || q.id}`} className="problem-link">
                        {q.title}
                      </Link>
                    </td>
                    <td className="col-difficulty">
                      <span className={`diff-badge ${q.level?.toLowerCase()}`}>
                        {q.level}
                      </span>
                    </td>
                    {isUser && (
                      <td className="col-acceptance">
                        {q.acceptanceRate != null ? q.acceptanceRate : '0'}%
                      </td>
                    )}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Problems;
