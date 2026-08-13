import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getLeaderboard } from '../services/api';
import { FaTrophy, FaMedal, FaAward, FaCrown } from 'react-icons/fa';
import './Ranking.css';

const rankIcon = (rank) => {
  if (rank === 1) return <FaCrown className="rank-icon gold" title="Rank 1" />;
  if (rank === 2) return <FaMedal className="rank-icon silver" title="Rank 2" />;
  if (rank === 3) return <FaAward className="rank-icon bronze" title="Rank 3" />;
  return <span className="rank-num">{rank}</span>;
};

const Ranking = () => {
  const { isUser } = useAuth();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await getLeaderboard();
        setData(res);
      } catch (err) {
        setError(err.message || 'Failed to load rankings');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return (
      <div className="ranking-page">
        <div className="ranking-loading"><div className="spinner" /></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="ranking-page">
        <div className="ranking-error">{error}</div>
      </div>
    );
  }

  const { leaderboard = [], totalQuestions = 0, currentUserRank, rankingCriteria = [] } = data || {};

  return (
    <div className="ranking-page">
      <div className="ranking-header">
        <div>
          <span className="page-eyebrow">Leaderboard</span>
          <h1>Global Rankings</h1>
          <p className="ranking-subtitle">
            Ranked by problems solved. Tie-breakers: accuracy, avg runtime, fewer attempts, then join date.
          </p>
        </div>
        {currentUserRank && (
          <div className="your-rank-card glass-card">
            <span className="your-rank-label">Your rank</span>
            <span className="your-rank-value">#{currentUserRank.rank}</span>
            <span className="your-rank-meta">
              {currentUserRank.solvedCount}/{totalQuestions} solved · {currentUserRank.accuracy}% accuracy
            </span>
          </div>
        )}
      </div>

      <div className="ranking-criteria glass-card">
        <h3>How ranking works</h3>
        <ol>
          {rankingCriteria.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
        <p className="criteria-note">
          Solve all {totalQuestions} problems to reach the top tier. Users who complete everything are ordered by accuracy and performance.
        </p>
      </div>

      <div className="ranking-table-wrap glass-card">
        <table className="ranking-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Solved</th>
              <th>Accuracy</th>
              <th>Avg Runtime</th>
              <th>Submissions</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.length === 0 ? (
              <tr>
                <td colSpan="6" className="ranking-empty">
                  No rankings yet. <Link to="/problems">Start solving</Link> to appear here!
                </td>
              </tr>
            ) : (
              leaderboard.map((entry, index) => (
                <tr
                  key={`rank-${entry.rank}-${index}`}
                  className={`${entry.isCurrentUser ? 'current-user-row' : ''} ${entry.solvedAll ? 'solved-all-row' : ''}`}
                >
                  <td className="col-rank">{rankIcon(entry.rank)}</td>
                  <td className="col-user">
                    <span className="user-name">{entry.name}</span>
                    {entry.solvedAll && <span className="badge-all-solved">All solved</span>}
                    {entry.isCurrentUser && <span className="badge-you">You</span>}
                  </td>
                  <td className="col-solved">
                    <span className="solved-fraction">{entry.solvedCount}/{entry.totalQuestions}</span>
                  </td>
                  <td className="col-accuracy">{entry.totalSubmissions > 0 ? `${entry.accuracy}%` : '—'}</td>
                  <td className="col-runtime">{entry.avgRuntime != null ? `${entry.avgRuntime} ms` : '—'}</td>
                  <td className="col-submissions">{entry.totalSubmissions}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {!isUser && (
        <p className="ranking-login-hint">
          <Link to="/login">Log in</Link> to highlight your row on the leaderboard.
        </p>
      )}
    </div>
  );
};

export default Ranking;
