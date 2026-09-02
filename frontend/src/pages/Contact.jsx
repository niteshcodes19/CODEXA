import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <span className="page-eyebrow">Contact</span>
          <h1>We&apos;d love to <span className="text-gradient">hear from you</span></h1>
          <p className="contact-lead">
            Questions, feedback, bug reports, or feature ideas — drop us a message and we&apos;ll get back to you.
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card glass-card">
              <div className="info-icon"><FaEnvelope /></div>
              <div>
                <h3>Email</h3>
                <p>support@codexa.dev</p>
              </div>
            </div>
            <div className="info-card glass-card">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <div>
                <h3>Location</h3>
                <p>Remote · Built for developers worldwide</p>
              </div>
            </div>
            <div className="info-card glass-card">
              <div className="info-icon"><FaGithub /></div>
              <div>
                <h3>Open Source</h3>
                <p>Contributions & feedback welcome on GitHub</p>
              </div>
            </div>
            <div className="contact-note glass-card">
              <p>
                <strong>Response time:</strong> We typically reply within 1–2 business days. 
                For urgent bugs, include steps to reproduce and your browser version.
              </p>
            </div>
          </div>

          <div className="contact-form-wrap glass-card">
            {submitted ? (
              <div className="contact-success">
                <div className="success-icon">✓</div>
                <h2>Message sent!</h2>
                <p>Thanks for reaching out. We&apos;ll review your message and respond soon.</p>
                <button type="button" className="btn btn-outline" onClick={() => setSubmitted(false)}>
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2>Send a message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us more..."
                    />
                  </div>
                  <button type="submit" className="btn btn-primary submit-btn">
                    <FaPaperPlane /> Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
