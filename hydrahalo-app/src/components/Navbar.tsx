import { useEffect, useState } from 'react';
import HydraLogo from './HydraLogo';

const links = [
  { href: '#problem',   label: 'The Problem' },
  { href: '#how',       label: 'How It Works' },
  { href: '#science',   label: 'Science' },
  { href: '#market',    label: 'Market' },
  { href: '#prototype', label: 'Prototype' },
  { href: '#team',      label: 'Team' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Section highlight
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive('#' + e.target.id); });
      },
      { threshold: 0.35 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a className="nav-logo" href="#hero">
        <div className="nav-logo-mark">
          <HydraLogo size={34} />
        </div>
        HydroHalo
      </a>

      <ul className={`nav-links${open ? ' open' : ''}`}>
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className={active === l.href ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
            References
          </a>
        </li>
      </ul>

      <button className={`nav-toggle${open ? ' open' : ''}`} onClick={() => setOpen((o) => !o)} aria-label="Menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}
