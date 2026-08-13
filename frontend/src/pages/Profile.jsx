import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getUserProfile, getUserSubmissions, getAllQuestions, getLeaderboard } from '../services/api';
import StatsCircle from '../components/StatsCircle';
import ActivityHeatmap from '../components/ActivityHeatmap';
import { computeStreak } from '../hooks/useCodeDraft';
import './Profile.css';

const getQuestionLevel = (question) => question?.level || question?.difficulty || 'Easy';

const Profile = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [profile, setProfile] = useState(null);
  const [submissions, setSubmissions] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [rankInfo, setRankInfo] = useState(null);
  const [totalParticipants, setTotalParticipants] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchProfileData = useCallback(async () => {
    try {
      setLoading(true);
      const [profileRes, submissionsRes, questionsRes, leaderboardRes] = await Promise.all([
        getUserProfile(),
        getUserSubmissions(),
        getAllQuestions().catch(() => []),
        getLeaderboard().catch(() => null)
      ]);

      setProfile(profileRes);
      setSubmissions(Array.isArray(submissionsRes) ? submissionsRes : (submissionsRes?.submissions || []));
      setRankInfo(leaderboardRes?.currentUserRank || null);
      setTotalParticipants(leaderboardRes?.leaderboard?.length || 0);

      const list = Array.isArray(questionsRes) ? questionsRes : questionsRes?.questions || questionsRes?.data || [];
      setQuestions(list);
    } catch (error) {
      console.error('Error fetching profile data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (user) {
      fetchProfileData();
    } else {
      setLoading(false);
    }
  }, [user, location.key, fetchProfileData]);

  const difficultyTotals = useMemo(() => {
    return questions.reduce(
      (acc, q) => {
        const level = getQuestionLevel(q);
        if (level === 'Easy') acc.easy += 1;
        else if (level === 'Medium') acc.medium += 1;
        else if (level === 'Hard') acc.hard += 1;
        return acc;
      },
      { easy: 0, medium: 0, hard: 0, total: questions.length }
    );
  }, [questions]);

  const difficultySolved = useMemo(() => {
    if (profile?.stats) {
      return {
        easy: profile.stats.easy || 0,
        medium: profile.stats.medium || 0,
        hard: profile.stats.hard || 0,
        total: profile.stats.total || 0
      };
    }

    const solved = (profile?.solved_questions || []).filter(Boolean);
    return {
      easy: solved.filter((q) => getQuestionLevel(q) === 'Easy').length,
      medium: solved.filter((q) => getQuestionLevel(q) === 'Medium').length,
      hard: solved.filter((q) => getQuestionLevel(q) === 'Hard').length,
      total: solved.length
    };
  }, [profile]);

  const streak = useMemo(() => computeStreak(submissions), [submissions]);

  if (loading) {
    return (
      <div className="profile-loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!profile) {
    return <div className="profile-error">Failed to load profile.</div>;
  }

  const totalSolved = difficultySolved.total;
  const totalQuestions = difficultyTotals.total;

  const getInitials = (name) => (name ? name.charAt(0).toUpperCase() : 'U');

  const formatDate = (dateString) => {
    try {
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).format(new Date(dateString));
    } catch (e) {
      return dateString;
    }
  };

  const getStatusClass = (status) => {
    if (!status) return '';
    const s = status.toLowerCase();
    if (s.includes('accept') || s === 'ac') return 'status-ac';
    if (s.includes('wrong') || s === 'wa') return 'status-wa';
    if (s.includes('time') || s === 'tle') return 'status-tle';
    return 'status-err';
  };

  return (
    <div className="profile-container">
      <div className="profile-grid">

        <div className="profile-card user-info-card">
          <div className="avatar-circle">
            {getInitials(profile.name || user?.name)}
          </div>
          <h2 className="user-name">{profile.name || user?.name || 'User'}</h2>
          <p className="user-email">{profile.email || user?.email}</p>

          <div className="profile-rank-card">
            <span className="profile-rank-label">Global Rank</span>
            <span className="profile-rank-value">
              {rankInfo ? `#${rankInfo.rank}` : '—'}
            </span>
            {rankInfo && totalParticipants > 0 && (
              <span className="profile-rank-meta">
                of {totalParticipants} {totalParticipants === 1 ? 'user' : 'users'}
              </span>
            )}
            {rankInfo && (
              <span className="profile-rank-stats">
                {rankInfo.solvedCount}/{rankInfo.totalQuestions} solved · {rankInfo.accuracy}% accuracy
              </span>
            )}
            <Link to="/ranking" className="profile-rank-link">View leaderboard →</Link>
          </div>

          <div className="user-meta">
            <span className="meta-label">Joined</span>
            <span className="meta-value">{formatDate(profile.createdAt || new Date())}</span>
          </div>
        </div>

        <div className="profile-card stats-card">
          <h3 className="card-title">Progress</h3>
          <div className="stats-layout">
            <div className="stats-circle-container">
              <StatsCircle
                solved={totalSolved}
                total={totalQuestions}
                label="Solved"
                color="var(--accent-primary)"
              />
            </div>

            <div className="difficulty-stats">
              <div className="streak-stat">
                <span className="streak-num">{streak.current}</span>
                <span className="streak-label">Day streak</span>
                <span className="streak-best">Best: {streak.longest}</span>
              </div>
              <div className="diff-stat-item easy-stat">
                <span className="diff-label">Easy</span>
                <span className="diff-count">{difficultySolved.easy}/{difficultyTotals.easy}</span>
              </div>
              <div className="diff-stat-item medium-stat">
                <span className="diff-label">Medium</span>
                <span className="diff-count">{difficultySolved.medium}/{difficultyTotals.medium}</span>
              </div>
              <div className="diff-stat-item hard-stat">
                <span className="diff-label">Hard</span>
                <span className="diff-count">{difficultySolved.hard}/{difficultyTotals.hard}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-card heatmap-card">
          <ActivityHeatmap submissions={submissions} />
        </div>

        <div className="profile-card submissions-card">
          <h3 className="card-title">Recent Submissions</h3>

          <div className="submissions-table-wrapper">
            <table className="submissions-table">
              <thead>
                <tr>
                  <th>Problem</th>
                  <th>Status</th>
                  <th>Language</th>
                  <th>Runtime</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {submissions.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="empty-submissions">No submissions yet. Start coding!</td>
                  </tr>
                ) : (
                  submissions.slice(0, 20).map((sub, idx) => {
                    const title = sub.question?.title || sub.question_title;
                    const num = sub.question?.question_number || sub.question_number;
                    const qTitle = title
                      ? `${num ? num + '. ' : ''}${title}`
                      : 'Unknown Problem';
                    return (
                      <tr key={sub._id || idx}>
                        <td className="sub-title">{qTitle}</td>
                        <td>
                          <span className={`sub-status ${getStatusClass(sub.status)}`}>
                            {sub.status || 'Unknown'}
                          </span>
                        </td>
                        <td className="sub-lang">{sub.language || 'N/A'}</td>
                        <td className="sub-runtime">{sub.runtime ? `${sub.runtime} ms` : '-'}</td>
                        <td className="sub-date">{formatDate(sub.createdAt)}</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
