import { useReveal } from '../hooks/useReveal';
import '../styles/Prototype.css';

const specs = [
  { key: 'Enclosure',    val: '14" × 14" × 18" clear plexiglass, 1/8" thick' },
  { key: 'Controller',   val: 'Arduino Uno R3 (ATmega328P)' },
  { key: 'UV-C Source',  val: '265–275 nm SMD3535 LED strip, 12V DC' },
  { key: 'Water Pump',   val: '12V DC submersible, 240 L/h, IP68' },
  { key: 'Dryer',        val: '5V USB centrifugal blower, 50–75 mm' },
  { key: 'Water Inlet',  val: 'Standard 3/8" hose barb, sink connector' },
  { key: 'Safety',       val: 'Door interlock: Arduino cuts UV-C on open' },
  { key: 'Cycle Time',   val: '~60 seconds total' },
];

const bom = [
  { part: 'Arduino Uno R3',            purpose: 'Cycle controller',        cost: '$25–28' },
  { part: 'UV-C LED Strip (265–275nm)',purpose: 'Germicidal sterilization', cost: '$18–30' },
  { part: '12V Submersible Pump',      purpose: 'Water rinse',             cost: '$10–15' },
  { part: 'Blower Fan (5V USB)',        purpose: 'Drying cycle',            cost: '$8–12'  },
  { part: 'Plexiglass Sheets (×6)',    purpose: 'Enclosure walls',          cost: '$25–35' },
  { part: 'Sink Fitting (3/8")',       purpose: 'Water inlet/outlet',       cost: '$5–10'  },
  { part: 'LED Indicator + Switches',  purpose: 'Status / control',         cost: '$5–11'  },
  { part: '12V Wall Adapter',          purpose: 'Power supply',             cost: '$8–12'  },
  { part: 'Tubing + Spray Nozzle',     purpose: 'Water routing',            cost: '$10–16' },
  { part: 'Misc. (wiring, sealant)',   purpose: 'Assembly',                 cost: '$10–15' },
];

export default function Prototype() {
  useReveal();
  return (
    <section id="prototype">
      <div className="proto-layout">
        {/* Left col */}
        <div>
          <div className="section-tag reveal">The Prototype</div>
          <h2 className="section-title reveal reveal-delay-1">
            Version 1.<br />
            <span className="italic accent">Built to prove it.</span>
          </h2>
          <p className="section-body reveal reveal-delay-2">
            A working plexiglass and acrylic enclosure with an Arduino-controlled three-stage
            cycle. Every component is off-the-shelf and sourced. Total prototype build cost:
            under $200.
          </p>

          <div className="proto-specs reveal reveal-delay-3">
            {specs.map((s) => (
              <div className="spec-row" key={s.key}>
                <span className="spec-key">{s.key}</span>
                <span className="spec-val">{s.val}</span>
              </div>
            ))}
          </div>

          {/* SVG Illustration */}
          <div className="proto-visual reveal" style={{ marginTop: 32 }}>
            <KioskIllustration />
            <p className="proto-caption">Prototype diagram — UV-C cycle active</p>
          </div>
        </div>

        {/* Right col */}
        <div>
          <div className="bom-title reveal">Bill of Materials</div>
          <div className="bom-table-wrap">
          <table className="bom-table reveal reveal-delay-1">
            <thead>
              <tr><th>Component</th><th>Purpose</th><th>Est. Cost</th></tr>
            </thead>
            <tbody>
              {bom.map((b) => (
                <tr key={b.part}>
                  <td>{b.part}</td><td>{b.purpose}</td><td>{b.cost}</td>
                </tr>
              ))}
              <tr className="bom-total">
                <td colSpan={2}>Total Prototype Cost</td>
                <td>$124–184</td>
              </tr>
            </tbody>
          </table>
          </div>

          <div className="unit-economics reveal reveal-delay-2">
            <div className="unit-econ-title">Unit Economics at Scale</div>
            <div className="unit-econ-grid">
              <div>
                <div className="unit-num">$3,833</div>
                <div className="unit-desc">Annual revenue per machine<br /><span>conservative: 15 uses/day</span></div>
              </div>
              <div>
                <div className="unit-num gold">~4 mo.</div>
                <div className="unit-desc">Payback period<br /><span>on production cost</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KioskIllustration() {
  return (
    <svg viewBox="0 0 375 300" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: 380, height: 'auto', display: 'block', margin: '0 auto 12px' }}>
      <defs>
        <radialGradient id="kuvg" cx="55%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#9060ff" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#9060ff" stopOpacity="0"/>
        </radialGradient>
        <style>{`
          .kfan  { animation: kfanSpin 1.4s linear infinite; transform-box: fill-box; transform-origin: center; }
          .kuv   { animation: kuvPulse 2.8s ease-in-out infinite; }
          .kled  { animation: kledBlink 1.8s ease-in-out infinite; }
          .kspr  { animation: ksprayAnim 1.6s ease-in-out infinite; }
          .kd1   { animation: kdripFall 2.2s ease-in infinite 0s; }
          .kd2   { animation: kdripFall 2.2s ease-in infinite 0.55s; }
          .kd3   { animation: kdripFall 2.2s ease-in infinite 1.1s; }
          .kd4   { animation: kdripFall 2.2s ease-in infinite 1.65s; }
          @keyframes kfanSpin  { to { transform: rotate(360deg); } }
          @keyframes kuvPulse  { 0%,100%{opacity:0.3} 50%{opacity:0.85} }
          @keyframes kledBlink { 0%,100%{opacity:0.4} 50%{opacity:1} }
          @keyframes ksprayAnim{ 0%,100%{opacity:0.2} 60%{opacity:1} }
          @keyframes kdripFall { 0%{transform:translateY(0);opacity:0.65} 100%{transform:translateY(35px);opacity:0} }
        `}</style>
      </defs>

      {/* Back wall */}
      <polygon points="100,46 265,46 265,223 100,223" fill="rgba(7,12,25,0.92)" stroke="rgba(0,200,240,0.07)" strokeWidth="1"/>
      {/* UV glow */}
      <ellipse className="kuv" cx="182" cy="125" rx="92" ry="62" fill="url(#kuvg)"/>
      {/* UV-C LED strip */}
      <rect x="112" y="56" width="140" height="4" rx="2" fill="rgba(150,80,255,0.2)" stroke="rgba(150,80,255,0.55)" strokeWidth="1"/>
      {[122,140,158,176,194,212,230,248].map((x,i) => (
        <circle key={x} cx={x} cy="58" r="2.2" fill="#a060ff" className="kuv" style={{animationDelay:`${(i%4)*0.25}s`}}/>
      ))}
      {/* UV rays */}
      {[[140,61,128,100],[160,61,155,108],[183,61,182,115],[206,61,212,108],[228,61,240,100]].map(([x1,y1,x2,y2],i)=>(
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={`rgba(150,80,255,${0.18+i*0.04})`} strokeWidth={1.2+i*0.15} strokeLinecap="round"/>
      ))}
      {/* Spray nozzle */}
      <circle cx="127" cy="72" r="5.5" fill="rgba(0,200,240,0.1)" stroke="rgba(0,200,240,0.6)" strokeWidth="1.5"/>
      <g className="kspr">
        {[[121,77,108,98],[125,78,120,104],[128,78,128,106],[131,78,137,104],[135,77,148,98]].map(([x1,y1,x2,y2],i)=>(
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={`rgba(0,200,240,${0.65+i*0.05})`} strokeWidth={1.2+i*0.15} strokeLinecap="round"/>
        ))}
      </g>
      {/* Grate floor */}
      <polygon points="45,235 210,235 265,203 100,203" fill="rgba(16,32,60,0.72)" stroke="rgba(0,200,240,0.4)" strokeWidth="1.5"/>
      {[72,99,126,153,180].map(x=>(
        <line key={x} x1={x} y1="235" x2={x+55} y2="203" stroke="rgba(0,200,240,0.22)" strokeWidth="0.9"/>
      ))}
      {[0,15,28].map((dy,i)=>(
        <line key={i} x1="45" y1={235-dy} x2="265" y2={203-dy} stroke={`rgba(0,200,240,${0.18-i*0.04})`} strokeWidth="0.9"/>
      ))}
      {/* Bottle */}
      <rect x="96"  y="162" width="30" height="71" rx="4.5" fill="rgba(232,184,75,0.1)"  stroke="rgba(232,184,75,0.8)" strokeWidth="1.8"/>
      <rect x="103" y="147" width="16" height="17" rx="3"   fill="rgba(232,184,75,0.08)" stroke="rgba(232,184,75,0.7)" strokeWidth="1.8"/>
      <ellipse cx="111" cy="147" rx="8" ry="4" fill="rgba(232,184,75,0.22)" stroke="rgba(232,184,75,0.9)" strokeWidth="1.8"/>
      {/* Left face */}
      <polygon points="45,78 100,46 100,223 45,235" fill="rgba(200,232,248,0.03)" stroke="rgba(200,232,248,0.28)" strokeWidth="1.5"/>
      {/* Right face */}
      <polygon points="210,78 265,46 265,223 210,235" fill="rgba(200,232,248,0.04)" stroke="rgba(200,232,248,0.28)" strokeWidth="1.5"/>
      {/* Front face */}
      <polygon points="45,78 210,78 210,235 45,235" fill="rgba(200,232,248,0.025)" stroke="rgba(200,232,248,0.38)" strokeWidth="1.8"/>
      <line x1="128" y1="78" x2="128" y2="235" stroke="rgba(200,232,248,0.15)" strokeWidth="1" strokeDasharray="4,4"/>
      {/* Top face/lid */}
      <polygon points="45,78 210,78 265,46 100,46" fill="rgba(200,232,248,0.055)" stroke="rgba(200,232,248,0.42)" strokeWidth="1.8"/>
      <ellipse cx="228" cy="58" rx="10" ry="6" fill="rgba(200,100,80,0.14)" stroke="rgba(200,100,80,0.5)" strokeWidth="1.5"/>
      <ellipse cx="252" cy="50" rx="6"  ry="3.8" fill="rgba(0,200,240,0.15)" stroke="rgba(0,200,240,0.5)" strokeWidth="1.5"/>
      <ellipse className="kled" cx="252" cy="50" rx="3.2" ry="2.2" fill="rgba(0,200,240,0.65)"/>
      <ellipse cx="132" cy="54" rx="6.5" ry="4" fill="rgba(0,200,240,0.1)" stroke="rgba(200,232,248,0.45)" strokeWidth="1.5"/>
      {/* Water inlet pipe */}
      <line x1="132" y1="22" x2="132" y2="54" stroke="rgba(200,232,248,0.6)" strokeWidth="2.5" strokeLinecap="round"/>
      <rect x="125" y="14" width="14" height="10" rx="2.5" fill="rgba(18,35,65,0.95)" stroke="rgba(200,232,248,0.55)" strokeWidth="1.5"/>
      {/* External dryer fan */}
      <path d="M 265,52 C 274,48 278,38 285,30" fill="none" stroke="rgba(200,100,80,0.42)" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="285" cy="25" r="22" fill="rgba(18,34,62,0.95)" stroke="rgba(200,100,80,0.65)" strokeWidth="2"/>
      <g className="kfan" style={{transformOrigin:'285px 25px'}}>
        <path d="M 285,25 L 276,11 Q 283,9  291,13 Z" fill="rgba(200,100,80,0.5)"/>
        <path d="M 285,25 L 299,16 Q 300,23 297,30 Z" fill="rgba(200,100,80,0.5)"/>
        <path d="M 285,25 L 294,39 Q 287,41 279,37 Z" fill="rgba(200,100,80,0.5)"/>
        <path d="M 285,25 L 271,34 Q 270,27 273,20 Z" fill="rgba(200,100,80,0.5)"/>
      </g>
      <circle cx="285" cy="25" r="4.5" fill="rgba(200,100,80,0.45)" stroke="rgba(200,100,80,0.85)" strokeWidth="1.5"/>
      {/* Water drips */}
      {[70,108,148,182].map((cx,i)=>(
        <circle key={cx} cx={cx} cy="242" r="2.2" fill="rgba(0,200,240,0.55)" className={`kd${i+1}`}/>
      ))}
      {/* Labels */}
      <line x1="258" y1="60" x2="275" y2="78" stroke="rgba(150,80,255,0.5)" strokeWidth="1" strokeDasharray="4,2"/>
      <rect x="275" y="68" width="95" height="30" rx="4" fill="rgba(10,8,30,0.72)"/>
      <text x="282" y="82"  fontFamily="Inter,sans-serif" fontSize="11" fontWeight="600" fill="rgba(180,120,255,1)">UV-C LED Strip</text>
      <text x="282" y="94"  fontFamily="Inter,sans-serif" fontSize="10" fill="rgba(180,120,255,0.7)">265–275 nm germicidal</text>
      <line x1="254" y1="52" x2="275" y2="104" stroke="rgba(0,200,240,0.4)" strokeWidth="1" strokeDasharray="4,2"/>
      <rect x="275" y="98" width="80" height="18" rx="4" fill="rgba(10,8,30,0.72)"/>
      <text x="282" y="111" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="600" fill="rgba(0,210,255,0.95)">Status LED</text>
      <rect x="240" y="-5" width="90" height="18" rx="4" fill="rgba(10,8,30,0.72)"/>
      <text x="248" y="7"   fontFamily="Inter,sans-serif" fontSize="11" fontWeight="600" fill="rgba(240,130,100,1)">Blower / Dryer</text>
      <rect x="104" y="5"   width="76" height="18" rx="4" fill="rgba(10,8,30,0.72)"/>
      <text x="110" y="18"  fontFamily="Inter,sans-serif" fontSize="11" fontWeight="600" fill="rgba(200,232,248,0.95)">Water inlet</text>
      <line x1="47" y1="238" x2="8" y2="262" stroke="rgba(0,200,240,0.4)" strokeWidth="1" strokeDasharray="4,2"/>
      <rect x="0" y="256" width="80" height="28" rx="4" fill="rgba(10,8,30,0.72)"/>
      <text x="6" y="269"  fontFamily="Inter,sans-serif" fontSize="11" fontWeight="600" fill="rgba(0,210,255,0.95)">Drain grate</text>
      <text x="6" y="280"  fontFamily="Inter,sans-serif" fontSize="10" fill="rgba(0,210,255,0.65)">water falls through</text>
      <line x1="126" y1="190" x2="158" y2="210" stroke="rgba(232,184,75,0.45)" strokeWidth="1" strokeDasharray="4,2"/>
      <rect x="155" y="206" width="96" height="18" rx="4" fill="rgba(10,8,30,0.72)"/>
      <text x="161" y="219" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="600" fill="rgba(232,184,75,0.95)">Water bottle</text>
    </svg>
  );
}
