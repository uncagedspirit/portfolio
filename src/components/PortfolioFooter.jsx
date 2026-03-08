import React, { useEffect, useState } from "react";

const NAMES = ["UncagedSpirit", "Saakshi Kobarne"];
const TYPE_SPEED   = 80;
const DELETE_SPEED = 45;
const PAUSE_AFTER  = 1600;  // pause after fully typed
const PAUSE_BEFORE = 600;   // pause before typing next name

function useTypingCycle() {
  const [idx,   setIdx]   = useState(0);
  const [text,  setText]  = useState("");
  const [phase, setPhase] = useState("typing"); // typing | pausing | deleting | waiting

  useEffect(() => {
    let t;
    const current = NAMES[idx];

    if (phase === "typing") {
      if (text.length < current.length) {
        t = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPE_SPEED);
      } else {
        // fully typed — pause before deleting
        t = setTimeout(() => setPhase("deleting"), PAUSE_AFTER);
      }
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        t = setTimeout(() => setText(current.slice(0, text.length - 1)), DELETE_SPEED);
      } else {
        // fully deleted — wait before typing next
        t = setTimeout(() => {
          setIdx((p) => (p + 1) % NAMES.length);
          setPhase("typing");
        }, PAUSE_BEFORE);
      }
    }

    return () => clearTimeout(t);
  }, [text, phase, idx]);

  return text;
}

export default function PortfolioFooter() {
  const name  = useTypingCycle();
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setBlink((p) => !p), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="w-full py-5 px-6 flex flex-col items-center gap-1"
      style={{ fontFamily: "'Courier New', Courier, monospace" }}
    >
      <p className="text-xs sm:text-sm" style={{ color: "var(--teal-mid)" }}>
        Designed and Developed by{" "}
        <span style={{ color: "var(--burgundy)", fontWeight: 600 }}>
          {name}
          <span style={{ opacity: blink ? 1 : 0, transition: "opacity 0.1s" }}>|</span>
        </span>
      </p>
      <p className="text-xs" style={{ color: "var(--teal-mid)" }}>
        ©2026. All Rights Reserved.
      </p>
    </div>
  );
}