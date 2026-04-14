import HydraLogo from './HydraLogo';

export default function Footer() {
  return (
    <footer>
      <div className="footer-brand">
        <HydraLogo size={26} />
        HydraHalo
      </div>
      <div className="footer-copy">© 2026 HydraHalo · Penn State University · Group 6</div>
      <div className="footer-links">
        <a href="#problem">Problem</a>
        <a href="#how">Solution</a>
        <a href="#science">Science</a>
        <a href="#market">Market</a>
        <a href="#prototype">Prototype</a>
        <a href="#contact">References</a>
      </div>
    </footer>
  );
}
