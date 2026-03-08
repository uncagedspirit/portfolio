import React, { useEffect, useState, useRef } from "react";

const LINES = [
  { type: "prompt",  text: "~/portfolio ", branch: "master" },
  { type: "command", text: "git log --oneline" },
  { type: "log",     hash: "c0ffee1", msg: "learned to code" },
  { type: "log",     hash: "baddad2", msg: "built cool things" },
  { type: "log",     hash: "f00dbab", msg: "graduated CS" },
  { type: "log",     hash: "deadbee", msg: "explored tech more" },
  { type: "head",    text: "HEAD -> still debugging life with coffee on the side" },
  { type: "prompt",  text: "~/portfolio ", branch: "master" },
  { type: "command", text: "npm run build" },
  { type: "success", text: "✔ success" },
  { type: "prompt",  text: "~/portfolio ", branch: "master" },
  { type: "command", text: 'echo "works on my machine"' },
  { type: "echo",    text: "works on my machine" },
  { type: "prompt",  text: "~/portfolio ", branch: "master" },
  { type: "command", text: 'git commit -m "Let\'s build something amazing together!!!"' },
];

const TYPE_SPEED    = 38;
const LINE_PAUSE    = 260;
const INSTANT_PAUSE = 70;
const LOOP_PAUSE    = 3500;

function TerminalLine({ line }) {
  switch (line.type) {
    case "prompt":
      return (
        <span>
          <span style={{ color: "#4A8F8F" }}>{line.text}</span>
          <span style={{ color: "#C4536A" }}>{line.branch}</span>
        </span>
      );
    case "command":
      return (
        <span>
          <span style={{ color: "#28C840" }}>❯</span>
          <span style={{ color: "#F4EDE4" }}> {line.text}</span>
        </span>
      );
    case "log":
      return (
        <span>
          <span style={{ color: "#C4536A" }}>{line.hash}</span>
          <span style={{ color: "#9ca3af" }}> {line.msg}</span>
        </span>
      );
    case "head":
      return <span style={{ color: "#FEBC2E" }}>{line.text}</span>;
    case "success":
      return <span style={{ color: "#28C840" }}>{line.text}</span>;
    case "echo":
      return <span style={{ color: "#9ca3af" }}>{line.text}</span>;
    default:
      return <span style={{ color: "#F4EDE4" }}>{line.text}</span>;
  }
}

export default function CommitTerminal() {
  const [renderedLines, setRenderedLines] = useState([]);
  const [typingLine,    setTypingLine]    = useState(null);
  const [showCursor,    setShowCursor]    = useState(true);
  const [done,          setDone]          = useState(false);

  // cursor blink
  useEffect(() => {
    const t = setInterval(() => setShowCursor((p) => !p), 530);
    return () => clearInterval(t);
  }, []);

  // animation loop — no scrollIntoView, no page interference
  useEffect(() => {
    let cancelled = false;

    const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

    async function playOnce() {
      setRenderedLines([]);
      setTypingLine(null);
      setDone(false);

      for (let i = 0; i < LINES.length; i++) {
        if (cancelled) return;
        const line = LINES[i];

        if (line.type === "command") {
          for (let c = 0; c <= line.text.length; c++) {
            if (cancelled) return;
            setTypingLine({ lineIdx: i, charCount: c });
            await sleep(TYPE_SPEED);
          }
          setTypingLine(null);
          setRenderedLines((prev) => [...prev, line]);
          await sleep(LINE_PAUSE);
        } else {
          setRenderedLines((prev) => [...prev, line]);
          await sleep(INSTANT_PAUSE);
        }
      }

      if (!cancelled) {
        setDone(true);
        await sleep(LOOP_PAUSE);
        if (!cancelled) playOnce(); // loop
      }
    }

    playOnce();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="pf-commit-terminal w-full">
      {/* title bar */}
      <div className="pf-commit-terminal-bar">
        <div className="pf-commit-terminal-dot" style={{ backgroundColor: "#FF5F57" }} />
        <div className="pf-commit-terminal-dot" style={{ backgroundColor: "#FEBC2E" }} />
        <div className="pf-commit-terminal-dot" style={{ backgroundColor: "#28C840" }} />
        <span className="ml-2 text-[10px] text-gray-400 font-mono select-none">
          terminal — portfolio
        </span>
      </div>

      {/* body — no overflow, no max-height, grows with content */}
      <div className="px-4 pt-4 pb-5 font-mono text-[11px] sm:text-[12.5px] leading-relaxed">
        {renderedLines.map((line, idx) => (
          <div key={idx}>
            <TerminalLine line={line} />
          </div>
        ))}

        {/* typing in progress */}
        {typingLine !== null && (() => {
          const line    = LINES[typingLine.lineIdx];
          const partial = { ...line, text: line.text.slice(0, typingLine.charCount) };
          return (
            <div className="flex items-center">
              <TerminalLine line={partial} />
              <span
                className="inline-block w-1.75 h-3.25 ml-px"
                style={{
                  backgroundColor: "#F4EDE4",
                  opacity: showCursor ? 1 : 0,
                  transition: "opacity 0.1s",
                  verticalAlign: "middle",
                }}
              />
            </div>
          );
        })()}

        {/* idle cursor after completion */}
        {done && (
          <div className="flex items-center mt-1">
            <span style={{ color: "#4A8F8F" }}>~/portfolio </span>
            <span style={{ color: "#C4536A" }}> master</span>
            <span style={{ color: "#28C840" }} className="ml-2">❯</span>
            <span
              className="inline-block w-1.75 h-3.25 ml-1.25"
              style={{
                backgroundColor: "#F4EDE4",
                opacity: showCursor ? 1 : 0,
                transition: "opacity 0.1s",
                verticalAlign: "middle",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}