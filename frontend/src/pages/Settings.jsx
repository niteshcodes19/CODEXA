import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { updateProfile, changePassword, getApiError } from '../services/api';
import { useToast } from '../components/Toast';
import './Settings.css';

const Settings = () => {
  const { user, refreshUser } = useAuth();
  const { addToast } = useToast();
  const [profileForm, setProfileForm] = useState({ name: user?.name || '' });

  useEffect(() => {
    if (user?.name) {
      setProfileForm({ name: user.name });
    }
  }, [user?.name]);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [savingProfile, setSavingProfile] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);

  const handleProfileSave = async (e) => {
    e.preventDefault();
    try {
      setSavingProfile(true);
      await updateProfile({ name: profileForm.name.trim() });
      await refreshUser();
      addToast('Profile updated successfully', 'success');
    } catch (err) {
      addToast(getApiError(err), 'error');
    } finally {
      setSavingProfile(false);
    }
  };

  const handlePasswordSave = async (e) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      addToast('New passwords do not match', 'error');
      return;
    }
    if (passwordForm.newPassword.length < 6) {
      addToast('Password must be at least 6 characters', 'error');
      return;
    }
    try {
      setSavingPassword(true);
      await changePassword({
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword
      });
      addToast('Password changed successfully', 'success');
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (err) {
      addToast(getApiError(err), 'error');
    } finally {
      setSavingPassword(false);
    }
  };

  return (
    <div className="settings-page">
      <div className="settings-header">
        <h1>Account Settings</h1>
        <p>Manage your profile and security preferences.</p>
      </div>

      <div className="settings-grid">
        <form className="settings-card glass-card" onSubmit={handleProfileSave}>
          <h2>Profile</h2>
          <div className="form-group">
            <label htmlFor="name">Display name</label>
            <input
              id="name"
              type="text"
              value={profileForm.name}
              onChange={(e) => setProfileForm({ name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={user?.email || ''} disabled className="input-readonly" />
          </div>
          <button type="submit" className="btn btn-primary" disabled={savingProfile}>
            {savingProfile ? 'Saving...' : 'Save profile'}
          </button>
        </form>

        <form className="settings-card glass-card" onSubmit={handlePasswordSave}>
          <h2>Change password</h2>
          <div className="form-group">
            <label htmlFor="current">Current password</label>
            <input
              id="current"
              type="password"
              value={passwordForm.currentPassword}
              onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="new">New password</label>
            <input
              id="new"
              type="password"
              value={passwordForm.newPassword}
              onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
              required
              minLength={6}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm">Confirm new password</label>
            <input
              id="confirm"
              type="password"
              value={passwordForm.confirmPassword}
              onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
              required
              minLength={6}
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={savingPassword}>
            {savingPassword ? 'Updating...' : 'Update password'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
