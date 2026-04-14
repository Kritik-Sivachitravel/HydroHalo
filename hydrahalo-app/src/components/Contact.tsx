import { useReveal } from '../hooks/useReveal';
import '../styles/Contact.css';

const sources = [
  {
    label: 'Frontiers in Microbiology (2021)',
    citation: 'Mariita et al. — Disinfection Performance of a Drinking Water Bottle System With a UV-C LED Cap Against Waterborne Pathogens',
    url: 'https://www.frontiersin.org/journals/microbiology/articles/10.3389/fmicb.2021.719578/full',
  },
  {
    label: 'Scientific Reports / Nature (2026)',
    citation: 'UV-C LED Wavelength Effects on Inactivation Kinetics, DNA Damage and Membrane Integrity in Drinking Water Indicator Bacteria',
    url: 'https://www.nature.com/articles/s41598-026-44556-8',
  },
  {
    label: 'Springer Nature (2023)',
    citation: 'Germicidal Efficacy of Continuous and Pulsed UV-C Radiation on Pathogen Models and SARS-CoV-2',
    url: 'https://link.springer.com/article/10.1007/s43630-023-00521-2',
  },
  {
    label: 'PMC — Biofilm Growth (PMC4568995)',
    citation: 'Growing and Analyzing Static Biofilms — National Center for Biotechnology Information',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4568995/',
  },
  {
    label: 'PMC — UV vs. Manual Disinfection (PMC8869636)',
    citation: 'Systematic review of UV disinfection vs. manual cleaning efficacy in healthcare settings',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8869636/',
  },
  {
    label: 'American Hospital Association (2026)',
    citation: 'AHA Fast Facts on U.S. Hospitals — 2024 data',
    url: 'https://www.aha.org/statistics/fast-facts-us-hospitals',
  },
  {
    label: 'NCES (2024)',
    citation: 'National Center for Education Statistics — IPEDS Postsecondary Institution Count, August 2024',
    url: 'https://nces.ed.gov/whatsnew/press_releases/8_21_2024.asp',
  },
  {
    label: 'Health & Fitness Association (2025)',
    citation: 'U.S. Health & Fitness Consumer Report — One in Four Americans Belonged to a Gym in 2024',
    url: 'https://www.healthandfitness.org/one-in-four-americans-belonged-to-a-gym-in-2024/',
  },
  {
    label: 'FAA Air Traffic by the Numbers (FY2024)',
    citation: 'Federal Aviation Administration — Air Traffic Organization FY2024 Statistics',
    url: 'https://www.faa.gov/air_traffic/by_the_numbers',
  },
  {
    label: 'ResearchGate — Rapid Microbial Growth in Reusable Bottles',
    citation: 'Rapid Microbial Growth in Reusable Drinking Water Bottles — colony-forming unit counts on consumer bottles',
    url: 'https://www.researchgate.net/',
  },
  {
    label: 'EPA UV Disinfection Guidance Manual',
    citation: 'U.S. Environmental Protection Agency — Ultraviolet Disinfection Guidance Manual for the Long Term 2 Enhanced Surface Water Treatment Rule',
    url: 'https://www.epa.gov/ground-water-and-drinking-water/ultraviolet-disinfection-guidance-manual',
  },
];

export default function Contact() {
  useReveal();
  return (
    <section id="contact">
      <div className="refs-block">
        <div className="section-tag center reveal">References</div>
        <h2 className="section-title reveal reveal-delay-1" style={{ textAlign: 'center' }}>
          Sources &amp; <span className="accent">Citations</span>
        </h2>
        <p className="section-body reveal reveal-delay-2" style={{ margin: '0 auto 48px', textAlign: 'center' }}>
          Every claim on this site is backed by peer-reviewed research or government data.
        </p>

        <ol className="refs-list">
          {sources.map((s, i) => (
            <li className="ref-item reveal" key={s.label} style={{ transitionDelay: `${(i % 4) * 0.08}s` }}>
              <div className="ref-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="ref-body">
                <a href={s.url} target="_blank" rel="noreferrer" className="ref-label">{s.label}</a>
                <div className="ref-citation">{s.citation}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
