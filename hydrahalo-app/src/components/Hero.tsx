import { useEffect, useRef } from 'react';
import '../styles/Hero.css';

const stats = [
  { num: '20.8M', label: 'CFUs found on a single reusable bottle' },
  { num: '48h',   label: 'Time for biofilm to form without cleaning' },
  { num: '99.99%',label: 'Bacterial kill rate via UV-C (peer-reviewed)' },
  { num: '60s',   label: 'Complete cleaning cycle — start to finish' },
];

const statMap: Record<string, { val: number; suffix: string; decimals: number; final: string }> = {
  '20.8M':  { val: 20.8,  suffix: 'M', decimals: 1, final: '20.8M'  },
  '48h':    { val: 48,    suffix: 'h', decimals: 0, final: '48h'    },
  '99.99%': { val: 99.99, suffix: '%', decimals: 2, final: '99.99%' },
  '60s':    { val: 60,    suffix: 's', decimals: 0, final: '60s'    },
};

function animateCounter(el: HTMLElement, val: number, suffix: string, decimals: number, final: string) {
  const duration = 1400;
  const start = performance.now();
  const step = (now: number) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const current = eased * val;
    el.textContent = decimals > 0
      ? current.toFixed(decimals) + suffix
      : Math.floor(current) + suffix;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = final;
  };
  requestAnimationFrame(step);
}

export default function Hero() {
  const particleRef = useRef<HTMLDivElement>(null);

  // Particles
  useEffect(() => {
    const container = particleRef.current;
    if (!container) return;
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.cssText = `
        left:${Math.random() * 100}%;
        animation-duration:${6 + Math.random() * 10}s;
        animation-delay:${Math.random() * 8}s;
        --drift:${(Math.random() - 0.5) * 120}px;
        width:${1 + Math.random() * 2}px;
        height:${1 + Math.random() * 2}px;
        opacity:${0.3 + Math.random() * 0.5};
      `;
      container.appendChild(p);
    }
    return () => { container.innerHTML = ''; };
  }, []);

  // Counter animation
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.hero-stat-num');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          const key = el.dataset.key!;
          const cfg = statMap[key];
          if (cfg) animateCounter(el, cfg.val, cfg.suffix, cfg.decimals, cfg.final);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="particles" ref={particleRef} />

      <div className="uv-ring-container">
        <div className="uv-ring" /><div className="uv-ring" />
        <div className="uv-ring" /><div className="uv-ring" />
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          UV-C Germicidal Technology · Scientifically Validated
        </div>

        <h1 className="hero-h1">
          Your bottle is<br />
          <span className="accent">dirtier than</span><br />
          <span className="italic">you think.</span>
        </h1>

        <p className="hero-sub">
          HydroHalo is an automated water bottle sanitization kiosk — combining a high-pressure
          rinse, warm-air drying, and UV-C sterilization into a single 60-second cycle. Deployed
          in airports, hospitals, gyms, and universities.
        </p>

        <div className="hero-ctas">
          <a href="#how" className="btn-primary">See How It Works →</a>
          <a href="#science" className="btn-outline">The Science</a>
        </div>

        <div className="hero-stats">
          {stats.map((s) => (
            <div className="hero-stat" key={s.num}>
              <span className="hero-stat-num" data-key={s.num}>{s.num}</span>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        Scroll
      </div>
    </section>
  );
}
