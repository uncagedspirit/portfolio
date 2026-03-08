import React, { useEffect, useState } from "react";

const CONTRIB_COLORS = [
  "#FFFFFF",       // level 0 — cream (empty)
  "#F5C2CC",       // level 1 — very light rose
  "#C4536A",       // level 2 — medium burgundy-rose
  "#8F1F35",       // level 3 — darker burgundy
  "#710117",       // level 4 — full burgundy
];

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DAYS   = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function GitHubContributions({ username = "uncagedspirit" }) {
  const [weeks, setWeeks]       = useState([]);
  const [totalYear, setTotal]   = useState(0);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(false);
  const [tooltip, setTooltip]   = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res  = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        );
        if (!res.ok) throw new Error("fetch failed");
        const data = await res.json();

        // Sum total
        const total = Object.values(data.total || {}).reduce((a, b) => a + b, 0);
        setTotal(total);

        // Group contributions into weeks (Sun→Sat columns)
        const contribs = data.contributions || [];
        const grouped  = [];
        let   week     = [];

        contribs.forEach((day, i) => {
          const dow = new Date(day.date).getDay(); // 0=Sun
          if (i === 0 && dow !== 0) {
            // Pad the first week
            for (let p = 0; p < dow; p++) week.push(null);
          }
          week.push(day);
          if (week.length === 7) {
            grouped.push(week);
            week = [];
          }
        });
        if (week.length) grouped.push(week);

        setWeeks(grouped);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [username]);

  // Extract month labels from week start dates
  const monthLabels = [];
  if (weeks.length) {
    let lastMonth = -1;
    weeks.forEach((week, wi) => {
      const firstDay = week.find(Boolean);
      if (!firstDay) return;
      const m = new Date(firstDay.date).getMonth();
      if (m !== lastMonth) {
        monthLabels.push({ wi, label: MONTHS[m] });
        lastMonth = m;
      }
    });
  }

  return (
    <div>
      <p className="pf-section-label">GITHUB CONTRIBUTIONS</p>

      <div className="w-full lg:w-full">
        <div className="pf-card-sm px-4 py-4">
          {loading && (
            <div className="flex items-center gap-2 py-6 justify-center">
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: "var(--burgundy)" }} />
              <span className="pf-muted text-xs">Loading contributions…</span>
            </div>
          )}

          {error && (
            <p className="pf-muted text-xs text-center py-4">
              Could not load contributions. Check network or username.
            </p>
          )}

          {!loading && !error && weeks.length > 0 && (
            <>
              {/* Summary */}
              <p className="pf-muted text-xs mb-3">
                <span className="pf-text-primary font-semibold">{totalYear.toLocaleString()}</span>
                {" "}contributions in the last year
              </p>

              {/* Graph container */}
              <div className="relative overflow-x-auto">
                {/* Month row */}
                <div className="flex mb-1" style={{ paddingLeft: "2rem" }}>
                  {weeks.map((_, wi) => {
                    const label = monthLabels.find((m) => m.wi === wi);
                    return (
                      <div
                        key={wi}
                        style={{ width: 12, marginRight: 2, flexShrink: 0 }}
                        className="text-center"
                      >
                        {label ? (
                          <span className="text-[8px]" style={{ color: "var(--teal-mid)" }}>
                            {label.label}
                          </span>
                        ) : null}
                      </div>
                    );
                  })}
                </div>

                {/* Grid: days × weeks */}
                <div className="flex gap-0">
                  {/* Day labels */}
                  <div className="flex flex-col gap-[0.5] mr-1" style={{ minWidth: "1.8rem" }}>
                    {DAYS.map((d, i) => (
                      <div
                        key={d}
                        style={{ height: 12, lineHeight: "12px" }}
                        className="text-right pr-1"
                      >
                        {i % 2 === 1 ? (
                          <span className="text-[8px]" style={{ color: "var(--teal-mid)" }}>{d}</span>
                        ) : null}
                      </div>
                    ))}
                  </div>

                  {/* Weeks */}
                  <div className="flex gap-0.5">
                    {weeks.map((week, wi) => (
                      <div key={wi} className="flex flex-col gap-0.5">
                        {Array.from({ length: 7 }).map((_, di) => {
                          const day = week[di];
                          if (!day) {
                            return (
                              <div
                                key={di}
                                style={{ width: 12, height: 12, borderRadius: 2, backgroundColor: "transparent" }}
                              />
                            );
                          }
                          const color = CONTRIB_COLORS[day.level] || CONTRIB_COLORS[0];
                          return (
                            <div
                              key={di}
                              style={{
                                width: 12,
                                height: 12,
                                borderRadius: 2,
                                backgroundColor: color,
                                cursor: "pointer",
                                border: day.level > 0 ? "none" : "1px solid rgba(28,74,74,0.15)",
                                transition: "transform 0.1s",
                              }}
                              title={`${day.date}: ${day.count} contribution${day.count !== 1 ? "s" : ""}`}
                              onMouseEnter={(e) => {
                                setTooltip({
                                  text: `${day.count} contribution${day.count !== 1 ? "s" : ""} on ${day.date}`,
                                  x: e.clientX,
                                  y: e.clientY,
                                });
                              }}
                              onMouseMove={(e) => {
                                setTooltip((prev) =>
                                  prev ? { ...prev, x: e.clientX, y: e.clientY } : null
                                );
                              }}
                              onMouseLeave={() => setTooltip(null)}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tooltip */}
                {tooltip && (
                  <div
                    className="fixed z-50 pointer-events-none px-2 py-1 rounded text-[10px] shadow-md"
                    style={{
                      left: tooltip.x + 10,
                      top:  tooltip.y - 30,
                      backgroundColor: "#1a1a1a",
                      color: "#F4EDE4",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tooltip.text}
                  </div>
                )}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-1 mt-3 justify-end">
                <span className="text-[9px]" style={{ color: "var(--teal-mid)" }}>Less</span>
                {CONTRIB_COLORS.map((c, i) => (
                  <div
                    key={i}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: 2,
                      backgroundColor: c,
                      border: i === 0 ? "1px solid rgba(28,74,74,0.15)" : "none",
                    }}
                  />
                ))}
                <span className="text-[9px]" style={{ color: "var(--teal-mid)" }}>More</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default GitHubContributions;