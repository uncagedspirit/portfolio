import React, { useEffect, useState } from "react";

const CONTRIB_COLORS = [
  "#FFFFF2",
  "#F5C2CC",
  "#C4536A",
  "#8F1F35",
  "#710117",
];

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DAYS   = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const CACHE_KEY = "gh_contrib_uncagedspirit";

function buildWeeks(contributions) {
  const grouped = [];
  let week = [];
  contributions.forEach((day, i) => {
    const dow = new Date(day.date).getDay();
    if (i === 0 && dow !== 0) {
      for (let p = 0; p < dow; p++) week.push(null);
    }
    week.push(day);
    if (week.length === 7) { grouped.push(week); week = []; }
  });
  if (week.length) grouped.push(week);
  return grouped;
}

function SkeletonGrid() {
  return (
    <>
      <style>{`
        @keyframes pf-skeleton-pulse {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.8; }
        }
      `}</style>
      <div className="flex gap-0.5" style={{ paddingLeft: "2rem" }}>
        {Array.from({ length: 52 }).map((_, wi) => (
          <div key={wi} className="flex flex-col gap-0.5">
            {Array.from({ length: 7 }).map((_, di) => (
              <div
                key={di}
                style={{
                  width: 12, height: 12, borderRadius: 2,
                  backgroundColor: "rgba(28,74,74,0.12)",
                  animation: "pf-skeleton-pulse 1.6s ease-in-out infinite",
                  animationDelay: `${((wi + di) % 8) * 100}ms`,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default function GitHubContributions({ username = "uncagedspirit" }) {
  const [weeks,   setWeeks]   = useState([]);
  const [total,   setTotal]   = useState(0);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(false);
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    async function load() {
      // Try sessionStorage cache first — instant second visit
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const { weeks: w, total: t } = JSON.parse(cached);
          setWeeks(w);
          setTotal(t);
          setLoading(false);
          return;
        }
      } catch (_) {}

      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        );
        if (!res.ok) throw new Error();
        const data = await res.json();
        const t = Object.values(data.total || {}).reduce((a, b) => a + b, 0);
        const w = buildWeeks(data.contributions || []);
        try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({ weeks: w, total: t })); } catch (_) {}
        setTotal(t);
        setWeeks(w);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [username]);

  const monthLabels = [];
  if (weeks.length) {
    let lastMonth = -1;
    weeks.forEach((week, wi) => {
      const firstDay = week.find(Boolean);
      if (!firstDay) return;
      const m = new Date(firstDay.date).getMonth();
      if (m !== lastMonth) { monthLabels.push({ wi, label: MONTHS[m] }); lastMonth = m; }
    });
  }

  return (
    <div>
      <p className="pf-section-label">GITHUB CONTRIBUTIONS</p>
      <div className="w-full lg:w-full">
        <div className="pf-card-sm px-4 py-4">

          {error && (
            <p className="pf-muted text-xs text-center py-4">Could not load contributions.</p>
          )}

          <p className="pf-muted text-xs mb-3">
            {loading ? (
              <span style={{ display:"inline-block", width:160, height:10, borderRadius:4, backgroundColor:"rgba(28,74,74,0.12)" }} />
            ) : (
              <><span className="pf-text-primary font-semibold">{total.toLocaleString()}</span> contributions in the last year</>
            )}
          </p>

          <div className="relative overflow-x-auto" style={{ overflowY: "visible" }}>
            {!loading && weeks.length > 0 && (
              <div className="flex mb-1" style={{ paddingLeft: "2rem" }}>
                {weeks.map((_, wi) => {
                  const label = monthLabels.find((m) => m.wi === wi);
                  return (
                    <div key={wi} style={{ width:12, marginRight:2, flexShrink:0 }} className="text-center">
                      {label ? <span className="text-[8px]" style={{ color:"var(--teal-mid)" }}>{label.label}</span> : null}
                    </div>
                  );
                })}
              </div>
            )}

            {loading && <SkeletonGrid />}

            {!loading && !error && weeks.length > 0 && (
              <div className="flex gap-0">
                <div className="flex flex-col gap-0.5 mr-1" style={{ minWidth:"1.8rem" }}>
                  {DAYS.map((d, i) => (
                    <div key={d} style={{ height:12, lineHeight:"12px" }} className="text-right pr-1">
                      {i % 2 === 1 ? <span className="text-[8px]" style={{ color:"var(--teal-mid)" }}>{d}</span> : null}
                    </div>
                  ))}
                </div>
                <div className="flex gap-0.5">
                  {weeks.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-0.5">
                      {Array.from({ length:7 }).map((_, di) => {
                        const day = week[di];
                        if (!day) return <div key={di} style={{ width:12, height:12, borderRadius:2, backgroundColor:"transparent" }} />;
                        const color = CONTRIB_COLORS[day.level] || CONTRIB_COLORS[0];
                        return (
                          <div
                            key={di}
                            style={{
                              width:12, height:12, borderRadius:2,
                              backgroundColor: color,
                              cursor: "default",
                              border: day.level > 0 ? "none" : "1px solid rgba(28,74,74,0.15)",
                            }}
                            onMouseEnter={(e) => setTooltip({ text:`${day.count} contribution${day.count!==1?"s":""} on ${day.date}`, x:e.clientX, y:e.clientY })}
                            onMouseMove={(e) => setTooltip((p) => p ? {...p, x:e.clientX, y:e.clientY} : null)}
                            onMouseLeave={() => setTooltip(null)}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tooltip && (
              <div className="fixed z-50 pointer-events-none px-2 py-1 rounded text-[10px] shadow-md"
                style={{ left:tooltip.x+10, top:tooltip.y-30, backgroundColor:"#1a1a1a", color:"#F4EDE4", whiteSpace:"nowrap" }}>
                {tooltip.text}
              </div>
            )}
          </div>

          {!loading && (
            <div className="flex items-center gap-1 mt-3 justify-end">
              <span className="text-[9px]" style={{ color:"var(--teal-mid)" }}>Less</span>
              {CONTRIB_COLORS.map((c, i) => (
                <div key={i} style={{ width:10, height:10, borderRadius:2, backgroundColor:c, border:i===0?"1px solid rgba(28,74,74,0.15)":"none" }} />
              ))}
              <span className="text-[9px]" style={{ color:"var(--teal-mid)" }}>More</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}