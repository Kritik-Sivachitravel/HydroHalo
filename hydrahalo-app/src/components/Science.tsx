import { useReveal } from '../hooks/useReveal';
import '../styles/Science.css';

const studies = [
  {
    journal: 'Frontiers in Microbiology · 2021',
    title: 'Disinfection Performance of a Drinking Water Bottle System With a UV-C LED Cap Against Waterborne Pathogens',
    authors: 'Mariita et al. · Crystal IS / Asahi Kasei · doi:10.3389/fmicb.2021.719578',
    finding: 'The most directly applicable study to HydraHalo\'s concept: UV-C LED caps applied to inoculated stainless-steel water bottles under worst-case stationary conditions. 55-second UV-C cycle tested.',
    result: '99.99% E. coli inactivation in 55 seconds (LRV4)',
    url: 'https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2021.719578/full',
  },
  {
    journal: 'Scientific Reports (Nature) · 2026',
    title: 'UV-C LED Wavelength Effects on Inactivation Kinetics, DNA Damage and Membrane Integrity in Drinking Water Indicator Bacteria',
    authors: 'Scientific Reports · doi:10.1038/s41598-026-44556-8',
    finding: 'Tested five UV-C wavelengths against E. coli and Enterococcus faecium. 265 nm achieved highest inactivation efficiency per unit fluence. DNA lesions were largely irreversible — no significant bacterial recovery after exposure.',
    result: 'Up to 6-log inactivation below 7 mJ/cm² · 265nm confirmed optimal',
    url: 'https://www.nature.com/articles/s41598-026-44556-8',
  },
  {
    journal: 'Photochemical & Photobiological Sciences · 2023',
    title: 'Germicidal Efficacy of Continuous and Pulsed UV-C Radiation on Pathogen Models and SARS-CoV-2',
    authors: 'Springer Nature · doi:10.1007/s43630-023-00521-2',
    finding: 'Direct comparison of UV-C LEDs and mercury lamps across bacteria, endospores, and SARS-CoV-2. E. coli Log 4.1 reduction at 18 mJ/cm². SARS-CoV-2 effectively inactivated.',
    result: 'Log 4.1 E. coli reduction · SARS-CoV-2 effectively inactivated',
    url: 'https://link.springer.com/article/10.1007/s43630-023-00521-2',
  },
  {
    journal: 'U.S. EPA / WHO · Regulatory Recognition',
    title: 'UV Disinfection Accepted for Municipal Drinking Water Treatment',
    authors: 'EPA LT2ESWTR · WHO Drinking Water Guidelines',
    finding: 'The U.S. EPA accepts UV disinfection for inactivation credits for Cryptosporidium, Giardia, and viruses. WHO recognizes UV-C as an approved point-of-use disinfection method. Clinically deployed since 1910.',
    result: 'EPA-accepted · WHO-recognized · Clinically deployed since 1910',
    url: 'https://www.epa.gov/ground-water-and-drinking-water/ultraviolet-disinfection-guidance-manual',
  },
];

export default function Science() {
  useReveal();
  return (
    <section id="science">
      <div className="science-layout">
        <div className="science-left">
          <div className="section-tag reveal">The Science</div>
          <h2 className="section-title reveal reveal-delay-1">
            Not a trend.<br />
            <span className="italic">100+ years of</span><br />
            <span className="accent">proven science.</span>
          </h2>
          <p className="section-body reveal reveal-delay-2">
            UV-C germicidal irradiation has been used in municipal water treatment since 1910.
            Photons at 265 nm are absorbed by bacterial DNA, causing irreversible structural damage
            that permanently blocks cell division.
          </p>

          <div className="mechanism-visual reveal reveal-delay-3">
            <div className="mech-label">DNA damage mechanism</div>
            <div className="dna-wrap">
              <div className="dna-diagram">
                {[['T','A'],['C','G'],['T','T'],['A','T'],['G','C']].map(([l, r], i) => (
                  <div className="dna-row" key={i}>
                    <div className="dna-backbone-l" />
                    <div className={`dna-base base-${l.toLowerCase()}${i === 2 ? ' damaged' : ''}`}>{l}</div>
                    <div className="dna-bond" />
                    <div className={`dna-base base-${r.toLowerCase()}${i === 2 ? ' damaged' : ''}`}>{r}</div>
                    <div className="dna-backbone-r" />
                  </div>
                ))}
              </div>
              <div className="dna-explanation">
                <div className="arrow-beam" />
                <div className="arrow-label">265nm UV-C →</div>
                <p className="mech-desc">
                  Adjacent thymine bases fuse (<span style={{ color: '#f09060' }}>highlighted</span>),
                  forming cyclobutane pyrimidine dimers. DNA polymerase cannot copy across the
                  lesion → bacterium cannot divide → permanently inactivated.
                </p>
              </div>
            </div>
            <div className="mech-advantage">
              <div className="mech-label">Key advantage</div>
              <p className="mech-desc">
                Bacteria cannot develop genetic resistance to UV-C. The physics of photon
                absorption don't change with microbial evolution — unlike antibiotics.
              </p>
            </div>
          </div>
        </div>

        <div className="science-studies">
          {studies.map((s, i) => (
            <div className={`study-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}`} key={s.journal}>
              <div className="study-journal">{s.journal}</div>
              <div className="study-title-text">{s.title}</div>
              <div className="study-authors">{s.authors}</div>
              <div className="study-finding">{s.finding}</div>
              <div className="study-result">{s.result}</div>
              <a className="study-link" href={s.url} target="_blank" rel="noreferrer">
                → Read full paper
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
