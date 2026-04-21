import { useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';
import '../styles/HowItWorks.css';

const steps = [
  {
    icon: '💧', num: 1, title: 'High-Pressure Rinse', time: '~20 seconds',
    desc: 'A pressurized water spray flushes the bottle interior and lid — removing visible debris, residue, and early-stage biofilm before UV-C exposure. UV-C works by line-of-sight; a pre-rinse is the scientifically correct first step.',
  },
  {
    icon: '💨', num: 2, title: 'Warm-Air Drying', time: '~10 seconds',
    desc: 'A blower fan circulates warm air through the bottle. Residual moisture scatters UV photons and reduces effective dose delivery. Drying before sterilization maximizes UV-C kill rate and prevents bacterial regrowth.',
  },
  {
    icon: '✨', num: 3, title: 'UV-C Sterilization', time: '~30 seconds',
    desc: 'UV-C LEDs at 265–275 nm — the peak germicidal wavelength — irradiate the clean, dry interior. Photons are absorbed by bacterial DNA, forming pyrimidine dimers that permanently block replication.',
  },
];

export default function HowItWorks() {
  useReveal();
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stepsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="how">
      <div className="how-header">
        <div className="section-tag center reveal">How It Works</div>
        <h2 className="section-title reveal reveal-delay-1">
          Three stages.<br /><span className="italic accent">One clean bottle.</span>
        </h2>
        <p className="section-body reveal reveal-delay-2" style={{ margin: '0 auto', textAlign: 'center' }}>
          HydroHalo sequences each stage in the order the science recommends — rinse first to
          remove debris, dry to maximize UV-C efficiency, then sterilize.
        </p>
      </div>

      <div className="cycle-steps" ref={stepsRef}>
        {steps.map((s, i) => (
          <div className={`cycle-step reveal${i > 0 ? ` reveal-delay-${i}` : ''}`} key={s.num}>
            <div className="step-icon-wrap">
              <div className="step-icon-bg" />
              <div className="step-icon-inner">{s.icon}</div>
              <div className="step-number">{s.num}</div>
            </div>
            <div className="step-title">{s.title}</div>
            <div className="step-desc">{s.desc}</div>
            <span className="step-time">{s.time}</span>
          </div>
        ))}
      </div>

      <div className="cycle-total reveal">
        <span className="cycle-total-num">60s</span>
        <div>
          <div className="cycle-total-label">Total cycle time</div>
          <div className="cycle-total-desc">
            Place bottle → close door → retrieve a clean, dry, sterilized bottle
          </div>
        </div>
      </div>
    </section>
  );
}
