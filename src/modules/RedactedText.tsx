import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

// Order the animation steps through. 0 = the plain "Redaction" font.
const LEVELS = [100, 70, 50, 35, 20, 10, 0];

const family = (n: number) => (n === 0 ? "'Redaction'" : `'Redaction ${n}'`);

interface RedactedTextProps {
  children: ReactNode;
  from?: number; // cut reached on hover
  to?: number; // resting cut
  speed?: number; // ms per step
}

function RedactedText({
  children,
  from = 50,
  to = 10,
  speed = 80,
}: RedactedTextProps) {
  const [level, setLevel] = useState(to);
  const levelRef = useRef(to);
  const timer = useRef<number | undefined>(undefined);

  // Load every cut up front so the first hover doesn't flicker
  useEffect(() => {
    LEVELS.forEach((n) => document.fonts.load(`16px ${family(n)}`));
    return () => window.clearInterval(timer.current);
  }, []);

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
      onMouseEnter={() => stepTo(from)}
      onMouseLeave={() => stepTo(to)}
      style={{ fontFamily: `${family(level)}, Georgia, serif` }}
    >
      {children}
    </span>
  );
}

export default RedactedText;
