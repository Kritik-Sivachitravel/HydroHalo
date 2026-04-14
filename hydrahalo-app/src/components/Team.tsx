import { useReveal } from '../hooks/useReveal';
import '../styles/Team.css';

const members = [
  { initial: 'S', name: 'Somdatta' },
  { initial: 'K', name: 'Kritik' },
  { initial: 'A', name: 'Asmita' },
  { initial: 'J', name: 'Julian' },
  { initial: 'T', name: 'Tristan' },
];

export default function Team() {
  useReveal();
  return (
    <section id="team">
      <div className="team-header">
        <div className="section-tag center reveal">The Team</div>
        <h2 className="section-title reveal reveal-delay-1">Built at <span className="accent">Penn State</span></h2>
        <p className="section-body reveal reveal-delay-2" style={{ margin: '0 auto', textAlign: 'center' }}>
          Group 6 — Technology Entrepreneurship. Five students from different disciplines
          building something that actually matters.
        </p>
      </div>

      <div className="team-grid">
        {members.map((m, i) => (
          <div className={`team-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`} key={m.name}>
            <div className="team-avatar">{m.initial}</div>
            <div className="team-name">{m.name}</div>
          </div>
        ))}
      </div>

      <div className="team-course reveal">
        <div className="team-course-label">Course</div>
        <div className="team-course-name">Technology Entrepreneurship · Penn State University · Spring 2026</div>
      </div>
    </section>
  );
}
