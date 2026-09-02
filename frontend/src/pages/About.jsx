import React from 'react';
import { Link } from 'react-router-dom';
import { FaBullseye, FaUsers, FaLaptopCode, FaShieldAlt } from 'react-icons/fa';
import './About.css';

const values = [
  {
    icon: <FaBullseye />,
    title: 'Practice with Purpose',
    text: 'Every problem is designed to sharpen fundamentals — arrays, strings, hash maps, and more — the same building blocks used in real interviews.'
  },
  {
    icon: <FaLaptopCode />,
    title: 'Real Code Execution',
    text: 'Write solutions in Java and get instant feedback from our built-in judge with sample and hidden test cases.'
  },
  {
    icon: <FaUsers />,
    title: 'Built for Learners',
    text: 'Track solved problems, submission history, and an activity heatmap so you can see your consistency over time.'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Open & Focused',
    text: 'A lightweight platform without clutter — just problems, an editor, and the tools you need to improve every day.'
  }
];

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-inner">
          <span className="page-eyebrow">About Us</span>
          <h1>Helping developers <span className="text-gradient">level up</span> one problem at a time</h1>
          <p className="about-lead">
            CODEXA is a coding practice platform inspired by the best interview-prep tools — 
            built to be fast, focused, and accessible for students and self-taught developers.
          </p>
        </div>
      </section>

      <section className="about-mission">
        <div className="about-mission-grid">
          <div className="mission-card glass-card">
            <h2>Our Mission</h2>
            <p>
              We believe consistent practice beats cramming. CODEXA gives you a structured 
              environment to solve algorithm problems, learn from failures, and build confidence 
              before your next technical interview.
            </p>
            <p>
              From Two Sum to advanced challenges, each question includes clear descriptions, 
              constraints, starter code, and a full submission pipeline — just like the platforms 
              used by top tech companies.
            </p>
          </div>
          <div className="mission-stats glass-card">
            <div className="mission-stat">
              <span className="mission-stat-num">Java</span>
              <span className="mission-stat-label">Language supported</span>
            </div>
            <div className="mission-stat">
              <span className="mission-stat-num">24/7</span>
              <span className="mission-stat-label">Online judge</span>
            </div>
            <div className="mission-stat">
              <span className="mission-stat-num">100%</span>
              <span className="mission-stat-label">Free to practice</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="section-header">
          <span className="page-eyebrow">What we offer</span>
          <h2>Why CODEXA?</h2>
        </div>
        <div className="values-grid">
          {values.map((v, i) => (
            <div key={i} className="value-card glass-card">
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta-inner glass-card">
          <h2>Ready to start your journey?</h2>
          <p>Jump into the problem set or create a free account to save your progress.</p>
          <div className="about-cta-actions">
            <Link to="/problems" className="btn btn-primary">Explore Problems</Link>
            <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
