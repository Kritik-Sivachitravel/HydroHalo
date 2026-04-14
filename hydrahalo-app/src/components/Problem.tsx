import { useReveal } from '../hooks/useReveal';
import '../styles/Problem.css';

const bacteria = [
  { num: '20.8M', unit: 'Colony Forming Units (CFUs)', desc: 'Found on a single reusable water bottle — more bacteria than a toilet seat, door handle, or kitchen sink.', source: 'ResearchGate — Rapid Microbial Growth in Reusable Drinking Water Bottles' },
  { num: '1–2M',  unit: 'CFUs per mL of water', desc: 'Generated inside a bottle in a single day when left undisturbed with standing water.', source: 'ResearchGate — Rapid Microbial Growth study' },
  { num: '48h',   unit: 'Biofilm formation window', desc: 'Microorganisms form a biofilm on bottle interiors in as little as 48 hours. Rinsing with water cannot remove established biofilm.', source: 'PMC — Growing and Analyzing Static Biofilms (PMC4568995)' },
  { num: '30–50%',unit: 'Manual cleaning success rate', desc: 'Even in controlled healthcare settings, only 30–50% of targeted surfaces are properly cleaned via manual methods.', source: 'PMC systematic review — UV disinfection vs. manual (PMC8869636)' },
];

const insights = [
  { icon: '🎓', title: 'College students', body: 'wash their bottles every few days at best — many cite lack of time and no dishwasher access in dorms.' },
  { icon: '🏃', title: 'Gym-goers and athletes', body: 'refill multiple times daily but clean only when bottles smell or show visible buildup.' },
  { icon: '🏥', title: 'Healthcare workers', body: "carry bottles through patient areas all day. Full sanitization between patients simply isn't feasible during a busy shift." },
  { icon: '✈️', title: 'Travelers', body: 'refill bottles at water fountains across airports — high-traffic environments with no cleaning infrastructure.' },
];

export default function Problem() {
  useReveal();
  return (
    <section id="problem">
      <div className="problem-grid">
        <div className="problem-left">
          <div className="section-tag reveal">The Problem</div>
          <h2 className="section-title reveal reveal-delay-1">
            Reusable bottles are<br />
            a <span className="accent">hidden health risk</span>
          </h2>
          <p className="section-body reveal reveal-delay-2">
            Narrow openings, rubber seals, built-in straws — modern bottle designs are nearly
            impossible to clean properly. Most people rinse and go. The result: bacterial counts
            that rival toilet seats, in the object people put their mouth on dozens of times a day.
          </p>

          <div className="insight-block reveal reveal-delay-3">
            <h3>What our customer discovery found</h3>
            {insights.map((i) => (
              <div className="insight-item" key={i.title}>
                <div className="insight-icon">{i.icon}</div>
                <div className="insight-text">
                  <strong>{i.title}</strong> {i.body}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bacteria-cards reveal reveal-delay-2">
          {bacteria.map((b) => (
            <div className="bacteria-card" key={b.num}>
              <div className="bacteria-card-num">{b.num}</div>
              <div className="bacteria-card-unit">{b.unit}</div>
              <div className="bacteria-card-desc">{b.desc}</div>
              <div className="bacteria-card-source">Source: {b.source}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
