import React, { useMemo, useState, useRef, useEffect } from 'react';
import './ActivityHeatmap.css';

const toDateKey = (date) => {
  const d = new Date(date);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

const getActivityLevel = (total) => {
  if (total === 0) return 0;
  if (total <= 1) return 1;
  if (total <= 3) return 2;
  if (total <= 5) return 3;
  return 4;
};

const buildHeatmapWeeks = (submissions, numWeeks = 53) => {
  const activityMap = {};

  submissions.forEach((sub) => {
    const rawDate = sub.createdAt || sub.created_at || sub.updatedAt || sub.updated_at;
    if (!rawDate) return;
    const key = toDateKey(rawDate);
    if (!activityMap[key]) {
      activityMap[key] = { accepted: 0, wrong: 0 };
    }
    if (sub.status === 'Accepted') {
      activityMap[key].accepted += 1;
    } else {
      activityMap[key].wrong += 1;
    }
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Last column is the current week; grid always includes today
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - today.getDay() - (numWeeks - 1) * 7);
  startDate.setHours(0, 0, 0, 0);

  const weeks = [];
  const current = new Date(startDate);

  for (let w = 0; w < numWeeks; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const key = toDateKey(current);
      const data = activityMap[key] || { accepted: 0, wrong: 0 };
      const total = data.accepted + data.wrong;

      week.push({
        date: key,
        dateObj: new Date(current),
        accepted: data.accepted,
        wrong: data.wrong,
        total,
        level: getActivityLevel(total),
        isFuture: current > today,
        isToday: key === toDateKey(today)
      });

      current.setDate(current.getDate() + 1);
    }
    weeks.push(week);
  }

  return weeks;
};

const formatTooltipDate = (dateObj) =>
  new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(dateObj);

const ActivityHeatmap = ({ submissions = [] }) => {
  const [tooltip, setTooltip] = useState(null);
  const scrollRef = useRef(null);
  const weeks = useMemo(() => buildHeatmapWeeks(submissions), [submissions]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [weeks]);

  const monthLabels = useMemo(() => {
    const labels = [];
    let lastMonth = -1;

    weeks.forEach((week, weekIndex) => {
      const firstDay = week.find((day) => !day.isFuture) || week[0];
      const month = firstDay.dateObj.getMonth();
      if (month !== lastMonth) {
        labels.push({
          weekIndex,
          label: firstDay.dateObj.toLocaleString('en-US', { month: 'short' })
        });
        lastMonth = month;
      }
    });

    return labels;
  }, [weeks]);

  const activeDays = useMemo(
    () => weeks.flat().filter((day) => !day.isFuture && day.total > 0).length,
    [weeks]
  );

  const handleCellEnter = (day, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const padding = 12;
    const clampedX = Math.min(
      window.innerWidth - padding,
      Math.max(padding, centerX)
    );

    setTooltip({
      date: formatTooltipDate(day.dateObj),
      accepted: day.accepted,
      wrong: day.wrong,
      total: day.total,
      x: clampedX,
      y: rect.top
    });
  };

  return (
    <div className="activity-heatmap">
      <div className="heatmap-header">
        <h3 className="card-title">Submission Activity</h3>
        <span className="heatmap-summary">{activeDays} active days in the last year</span>
      </div>

        <div className="heatmap-scroll" ref={scrollRef}>
          <div
            className="heatmap-months"
            style={{ width: `${weeks.length * 14}px` }}
          >
            {monthLabels.map(({ weekIndex, label }) => (
              <span
                key={`${label}-${weekIndex}`}
                className="heatmap-month-label"
                style={{ left: `${weekIndex * 14}px` }}
              >
                {label}
              </span>
            ))}
          </div>

        <div className="heatmap-grid-wrap">
          <div className="heatmap-day-labels">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
          </div>

          <div className="heatmap-grid">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="heatmap-week">
                {week.map((day) => (
                  <div
                    key={day.date}
                    className={`heatmap-cell level-${day.level}${day.isFuture ? ' future' : ''}${day.isToday ? ' today' : ''}`}
                    onMouseEnter={(e) => !day.isFuture && handleCellEnter(day, e)}
                    onMouseLeave={() => setTooltip(null)}
                    aria-label={`${day.date}: ${day.accepted} accepted, ${day.wrong} wrong`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="heatmap-legend">
        <span className="legend-label">Less</span>
        <div className="heatmap-cell level-0 legend-cell" />
        <div className="heatmap-cell level-1 legend-cell" />
        <div className="heatmap-cell level-2 legend-cell" />
        <div className="heatmap-cell level-3 legend-cell" />
        <div className="heatmap-cell level-4 legend-cell" />
        <span className="legend-label">More</span>
      </div>

      {tooltip && (
        <div
          className="heatmap-tooltip"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <strong>{tooltip.date}</strong>
          {tooltip.total === 0 ? (
            <p>No submissions</p>
          ) : (
            <>
              <p><span className="tooltip-accepted">{tooltip.accepted}</span> accepted</p>
              <p><span className="tooltip-wrong">{tooltip.wrong}</span> wrong</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ActivityHeatmap;
