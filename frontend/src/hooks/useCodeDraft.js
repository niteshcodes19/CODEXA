import { useEffect, useCallback } from 'react';

const draftKey = (questionId) => `mini-leetcode-draft-${questionId}`;

export const loadCodeDraft = (questionId, starterCode = '') => {
  if (!questionId) return starterCode;
  try {
    const saved = localStorage.getItem(draftKey(questionId));
    return saved != null && saved !== '' ? saved : starterCode;
  } catch {
    return starterCode;
  }
};

export const useCodeDraft = (questionId, code) => {
  useEffect(() => {
    if (!questionId || code == null) return;
    const timer = setTimeout(() => {
      try {
        localStorage.setItem(draftKey(questionId), code);
      } catch {
        // ignore storage quota
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [questionId, code]);

  const clearDraft = useCallback(() => {
    if (!questionId) return;
    try {
      localStorage.removeItem(draftKey(questionId));
    } catch {
      // ignore
    }
  }, [questionId]);

  return { clearDraft };
};

export const computeStreak = (submissions = []) => {
  const activeDays = new Set();
  submissions.forEach((sub) => {
    if (!sub.createdAt) return;
    const d = new Date(sub.createdAt);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    activeDays.add(key);
  });

  if (activeDays.size === 0) return { current: 0, longest: 0 };

  const toDateKey = (date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

  let longest = 0;
  let run = 0;
  const sorted = [...activeDays].sort();
  let prev = null;
  for (const key of sorted) {
    if (!prev) {
      run = 1;
    } else {
      const prevDate = new Date(prev);
      const currDate = new Date(key);
      const diffDays = Math.round((currDate - prevDate) / (1000 * 60 * 60 * 24));
      run = diffDays === 1 ? run + 1 : 1;
    }
    longest = Math.max(longest, run);
    prev = key;
  }

  let current = 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 0; i < 365; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    if (activeDays.has(toDateKey(d))) {
      current++;
    } else if (i > 0) {
      break;
    }
  }

  return { current, longest };
};
