import { useEffect, useRef, useState } from 'react';
import '../styles/WaterIntro.css';

interface WaterIntroProps {
  onComplete: () => void;
}

export default function WaterIntro({ onComplete }: WaterIntroProps) {
  const [phase, setPhase] = useState<'drop' | 'splash' | 'ripple' | 'reveal' | 'done'>('drop');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  // Ripple wave animation on canvas
  useEffect(() => {
    if (phase !== 'ripple') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const numRipples = 5;
      for (let i = 0; i < numRipples; i++) {
        const delay = i * 0.22;
        const progress = Math.max(0, t - delay);
        const maxR = Math.hypot(canvas.width, canvas.height) * 0.85;
        const r = progress * maxR * 0.65;
        const alpha = Math.max(0, 0.45 - progress * 0.38);
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0,200,240,${alpha})`;
        ctx.lineWidth = 2 - i * 0.3;
        ctx.stroke();
      }
      t += 0.006;
      if (t < 1.6) {
        animRef.current = requestAnimationFrame(draw);
      }
    };
    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, [phase]);

  // Phase sequencing
  useEffect(() => {
    // drop falls slowly (0–2000ms)
    const t1 = setTimeout(() => setPhase('splash'), 2000); // impact + splash
    const t2 = setTimeout(() => setPhase('ripple'), 2700); // ripples spread
    const t3 = setTimeout(() => setPhase('reveal'), 4400); // brand fades in
    const t4 = setTimeout(() => {
      setPhase('done');   // triggers CSS fade-out on overlay
      onComplete();       // starts site fade-in simultaneously (cross-fade)
    }, 5800);
    const t5 = setTimeout(() => {}, 7200); // placeholder — overlay is gone via CSS fade
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div className={`water-intro water-intro--${phase}`}>
      <canvas ref={canvasRef} className="water-intro__canvas" />

      {/* Background glow */}
      <div className="water-intro__bg" />

      {/* Drop */}
      <div className="water-intro__drop-wrap">
        <svg className="water-intro__drop" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30 4 C30 4 6 34 6 50 C6 64 17 74 30 74 C43 74 54 64 54 50 C54 34 30 4 30 4Z"
            fill="url(#dropGrad)"
            stroke="rgba(0,200,240,0.6)"
            strokeWidth="1"
          />
          <ellipse cx="22" cy="36" rx="5" ry="10" fill="rgba(255,255,255,0.2)" transform="rotate(-20 22 36)" />
          <defs>
            <radialGradient id="dropGrad" cx="40%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#60e8ff" />
              <stop offset="60%" stopColor="#00a8d0" />
              <stop offset="100%" stopColor="#005a80" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Splash particles */}
      {(phase === 'splash' || phase === 'ripple') && (
        <div className="water-intro__splash">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="splash-particle" style={{
              '--angle': `${(i / 14) * 360}deg`,
              '--dist': `${60 + Math.random() * 80}px`,
              '--size': `${3 + Math.random() * 5}px`,
              animationDelay: `${Math.random() * 0.15}s`,
            } as React.CSSProperties} />
          ))}
          {/* Splash arc drops */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`arc-${i}`} className="splash-arc" style={{
              '--angle': `${-60 + (i / 7) * 120}deg`,
              '--dist': `${40 + Math.random() * 60}px`,
              animationDelay: `${i * 0.03}s`,
            } as React.CSSProperties} />
          ))}
        </div>
      )}

      {/* Brand reveal */}
      <div className="water-intro__brand">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          {/* Halo */}
          <ellipse cx="24" cy="11" rx="14" ry="5"
            fill="none" stroke="url(#haloGrad)" strokeWidth="2.5"
            strokeDasharray="4 2" opacity="0.9" />
          {/* Drop body */}
          <path d="M24 14 C24 14 12 28 12 36 C12 43 17.4 47 24 47 C30.6 47 36 43 36 36 C36 28 24 14 24 14Z"
            fill="url(#introDropGrad)" />
          <ellipse cx="19" cy="29" rx="3" ry="6" fill="rgba(255,255,255,0.22)" transform="rotate(-15 19 29)" />
          <defs>
            <linearGradient id="introDropGrad" x1="12" y1="14" x2="36" y2="47" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#80eeff" />
              <stop offset="100%" stopColor="#0088cc" />
            </linearGradient>
            <linearGradient id="haloGrad" x1="10" y1="11" x2="38" y2="11" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00c8f0" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#00c8f0" />
              <stop offset="100%" stopColor="#00c8f0" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
        <span>HydroHalo</span>
      </div>

      {/* Reveal overlay that wipes away */}
      <div className="water-intro__wipe" />
    </div>
  );
}
