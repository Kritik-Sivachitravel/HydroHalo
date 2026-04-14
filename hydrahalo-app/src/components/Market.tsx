import { useReveal } from '../hooks/useReveal';
import '../styles/Market.css';

const markets = [
  { icon: '✈️', title: 'Airports',           num: '~530',  desc: 'Commercial service airports in the U.S. (FAA, 2024). The FAA serves 3M+ passengers per day across 44,000+ daily flights. Post-security water refill stations are prime placement locations.',   source: 'FAA Air Traffic by the Numbers (FY2024) · BTS Top 50 U.S. Airports' },
  { icon: '🏥', title: 'Hospitals',          num: '6,100', desc: 'Total U.S. hospitals as of 2024 (AHA 2024). Infection control is a primary operational priority. Staff carry bottles into patient areas all day — a clear hygiene risk facilities are motivated to address.',    source: 'American Hospital Association Fast Facts 2026 (2024 data)' },
  { icon: '🏋️', title: 'Gyms & Fitness',    num: '77M',   desc: 'U.S. fitness facility members in 2024 — a record high, up 20% since 2019. ~31,000 health clubs operate nationally. Members bring bottles to every class; sweat accelerates bacterial growth significantly.', source: 'HFA 2025 U.S. Health & Fitness Consumer Report (April 2025)' },
  { icon: '🎓', title: 'Universities',       num: '5,819', desc: 'Title IV postsecondary institutions in the 2023-24 academic year (NCES). Strong sustainability culture, existing water refill infrastructure, and a large captive user base. Penn State is our first pilot target.',  source: 'NCES IPEDS Press Release, August 21, 2024' },
];

const streams = [
  { label: 'Per-Use Fee',          value: '$1.00–1.50',   desc: 'End user pays per cycle. HydraHalo retains 70%; institution keeps 30% as passive revenue. $1.50 ceiling validated by customer discovery surveys.' },
  { label: 'Machine Sale / Lease', value: '$2,000–3,500', desc: 'Outright purchase at production scale, or $150–250/month lease. Lease model lowers barrier to entry and creates a long-term relationship.' },
  { label: 'Maintenance Contract', value: '$300–600/yr',  desc: 'Annual contract covering scheduled cleaning, repairs, UV-C LED replacement, and filter changes. Sticky, recurring revenue per unit deployed.' },
];

export default function Market() {
  useReveal();
  return (
    <section id="market">
      <div className="market-intro">
        <div className="section-tag reveal">Market Opportunity</div>
        <h2 className="section-title reveal reveal-delay-1">
          Four massive markets.<br />
          <span className="italic accent">Zero direct competitors.</span>
        </h2>
        <p className="section-body reveal reveal-delay-2">
          HydraHalo operates on a B2B placement model — targeting institutions where large numbers
          of people carry reusable bottles daily. No existing automated, brand-agnostic water bottle
          cleaning kiosk serves this institutional market.
        </p>
      </div>

      <div className="market-grid">
        {markets.map((m, i) => (
          <div className={`market-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`} key={m.title}>
            <div className="market-card-icon">{m.icon}</div>
            <div className="market-card-title">{m.title}</div>
            <div className="market-card-num">{m.num}</div>
            <div className="market-card-desc">{m.desc}</div>
            <div className="market-card-source">Source: {m.source}</div>
          </div>
        ))}
      </div>

      <div className="revenue-model reveal">
        <h3>Business Model: B2B Placement + Revenue Share</h3>
        <div className="revenue-streams">
          {streams.map((s) => (
            <div className="revenue-stream" key={s.label}>
              <div className="stream-label">{s.label}</div>
              <div className="stream-value">{s.value}</div>
              <div className="stream-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
