import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

// Ordered from least degraded to most degraded.
// 0 = the plain "Redaction" font (cleanest), 100 = most degraded.
const LEVELS = [0, 10, 20, 35, 50, 70, 100];

const family = (n: number) => (n === 0 ? "'Redaction'" : `'Redaction ${n}'`);

interface RedactedTextProps {
  children: ReactNode;
  from?: number; // resting level (no hover)
  to?: number; // level reached on hover
  speed?: number; // ms per step
  weight?: 400 | 700; // fixed, so it never inherits from the parent
  italic?: boolean; // defaults to normal (upright)
}

function RedactedText({
  children,
  from = 0,
  to = 50,
  speed = 80,
  weight = 400,
  italic = false,
}: RedactedTextProps) {
  const [level, setLevel] = useState(from);
  const levelRef = useRef(from);
  const timer = useRef<number | undefined>(undefined);

  // Reset to the resting level whenever `from` changes (also fixes stale state after hot reload)
  useEffect(() => {
    window.clearInterval(timer.current);
    levelRef.current = from;
    setLevel(from);
  }, [from]);

  // Load every cut up front so the first hover doesn't flicker
  useEffect(() => {
    const style = italic ? "italic" : "normal";
    LEVELS.forEach((n) =>
      document.fonts.load(`${style} ${weight} 16px ${family(n)}`),
    );
    return () => window.clearInterval(timer.current);
  }, [weight, italic]);

  const stepTo = (target: number) => {
    window.clearInterval(timer.current);
    timer.current = window.setInterval(() => {
      const i = LEVELS.indexOf(levelRef.current);
      const t = LEVELS.indexOf(target);
      if (i === t) return window.clearInterval(timer.current);
      levelRef.current = LEVELS[i + (t > i ? 1 : -1)];
      setLevel(levelRef.current);
    }, speed);
  };

  return (
    <span
      onMouseEnter={() => stepTo(to)}
      onMouseLeave={() => stepTo(from)}
      style={{
        fontFamily: `${family(level)}, Georgia, serif`,
        fontWeight: weight,
        fontStyle: italic ? "italic" : "normal",
      }}
    >
      {children}
    </span>
  );
}

export default RedactedText;
