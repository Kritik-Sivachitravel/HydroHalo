import { useEffect, useRef } from 'react';

export default function BackgroundParticles() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    for (let i = 0; i < 60; i++) {
      const p = document.createElement('div');
      const size    = 1.5 + Math.random() * 3.5;
      const isDroplet = Math.random() > 0.45;
      const opacity = 0.12 + Math.random() * 0.22;
      const duration = 14 + Math.random() * 22;
      const delay   = -(Math.random() * duration); // start mid-animation so screen fills instantly
      const drift   = (Math.random() - 0.5) * 90;

      p.style.cssText = `
        position: absolute;
        left: ${Math.random() * 100}%;
        bottom: -10px;
        width: ${size}px;
        height: ${isDroplet ? size * 1.55 : size}px;
        background: rgba(0,200,240,${opacity});
        border-radius: ${isDroplet ? '50% 50% 38% 38%' : '50%'};
        animation: bgDrift ${duration}s linear ${delay}s infinite;
        --drift: ${drift}px;
      `;
      el.appendChild(p);
    }
    return () => { el.innerHTML = ''; };
  }, []);

  return <div ref={ref} className="bg-particles-global" />;
}
