import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaRocket, FaChartLine, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { getAllQuestions } from '../services/api';
import './Home.css';

const Home = () => {
  const [problemCount, setProblemCount] = useState(null);

  useEffect(() => {
    getAllQuestions()
      .then((data) => {
        const list = Array.isArray(data) ? data : data?.questions || data?.data || [];
        setProblemCount(list.length);
      })
      .catch(() => setProblemCount(0));
  }, []);

  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="hero-bg-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-1" aria-hidden="true" />
        <div className="hero-glow hero-glow-2" aria-hidden="true" />

        <div className="hero-inner">
          <div className="hero-text">
            <span className="page-eyebrow hero-badge">
              <span className="badge-dot" /> Practice · Submit · Improve
            </span>
            <h1 className="hero-title">
              Master coding interviews with <span className="text-gradient">Mini LeetCode</span>
            </h1>
            <p className="hero-subtitle">
              Solve curated algorithm problems in Java, run code against a real judge, 
              and track your progress with a profile built for serious practice.
            </p>
            <div className="hero-actions">
              <Link to="/problems" className="btn btn-primary btn-lg">
                Start Solving <FaArrowRight />
              </Link>
              <Link to="/about" className="btn btn-outline btn-lg">Learn More</Link>
            </div>
            <ul className="hero-checklist">
              <li><FaCheckCircle /> Instant code judge</li>
              <li><FaCheckCircle /> Java-only judge</li>
              <li><FaCheckCircle /> Free to use</li>
            </ul>
          </div>

          <div className="hero-visual">
            <div className="code-window glass-card">
              <div className="code-window-bar">
                <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
                <span className="code-window-title">TwoSum.java</span>
              </div>
              <pre className="code-preview"><code>{`class Solution {
  public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
      int need = target - nums[i];
      if (map.containsKey(need)) {
        return new int[] { map.get(need), i };
      }
      map.put(nums[i], i);
    }
    return new int[] {};
  }
}`}</code></pre>
              <div className="code-result">
                <span className="result-badge accepted">Accepted</span>
                <span className="result-meta">2 / 2 testcases · 42ms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-features">
        <div className="section-header">
          <span className="page-eyebrow">Features</span>
          <h2>Everything you need to practice</h2>
          <p>A focused toolkit inspired by top interview platforms — without the noise.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card glass-card">
            <div className="feature-icon"><FaCode /></div>
            <h3>Curated Problems</h3>
            <p>Classic questions with descriptions, constraints, sample test cases, and Java starter templates.</p>
          </div>
          <div className="feature-card glass-card">
            <div className="feature-icon"><FaRocket /></div>
            <h3>Run & Submit</h3>
            <p>Test against custom input or submit for full evaluation against hidden test cases.</p>
          </div>
          <div className="feature-card glass-card">
            <div className="feature-icon"><FaChartLine /></div>
            <h3>Track Progress</h3>
            <p>Solved counts by difficulty, submission history, and a LeetCode-style activity heatmap.</p>
          </div>
        </div>
      </section>

      <section className="home-stats">
        <div className="stats-grid">
          <div className="stat-card glass-card">
            <span className="stat-number">{problemCount ?? '—'}</span>
            <span className="stat-label">Problems</span>
          </div>
          <div className="stat-card glass-card">
            <span className="stat-number">Java</span>
            <span className="stat-label">Language</span>
          </div>
          <div className="stat-card glass-card">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Code Judge</span>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="cta-card glass-card">
          <h2>Ready to level up?</h2>
          <p>Create a free account and start building your streak today.</p>
          <div className="cta-actions">
            <Link to="/register" className="btn btn-primary btn-lg">Sign Up Free</Link>
            <Link to="/contact" className="btn btn-outline btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
