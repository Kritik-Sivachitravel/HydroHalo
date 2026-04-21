import { useState, useCallback } from 'react';
import './styles/globals.css';

import WaterIntro          from './components/WaterIntro';
import BackgroundParticles from './components/BackgroundParticles';
import Cursor              from './components/Cursor';
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import Problem    from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Science    from './components/Science';
import Market     from './components/Market';
import Prototype  from './components/Prototype';
import Team       from './components/Team';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const onIntroComplete = useCallback(() => setIntroComplete(true), []);

  return (
    <>
      <WaterIntro onComplete={onIntroComplete} />

      <div
        style={{
          opacity: introComplete ? 1 : 0,
          transition: 'opacity 1.5s ease',
          pointerEvents: introComplete ? 'auto' : 'none',
        }}
      >
        <BackgroundParticles />
        <Cursor />
        <Navbar />
        <main>
          <Hero />
          <Problem />
          <HowItWorks />
          <Science />
          <Market />
          <Prototype />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
