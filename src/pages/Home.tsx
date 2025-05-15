import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import ProblemStatement from '../components/home/ProblemStatement';
import Solution from '../components/home/Solution';
import TechShowcase from '../components/home/TechShowcase';
import LiveDemo from '../components/home/LiveDemo';
import StatsDashboard from '../components/home/StatsDashboard';
import TeamSection from '../components/home/TeamSection';
import InvestorPortal from '../components/home/InvestorPortal';
import MediaCoverage from '../components/home/MediaCoverage';

const Home: React.FC = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="overflow-x-hidden">
      <section id="hero">
        <Hero />
      </section>
      <section id="problem" className="quantum-gradient">
        <ProblemStatement />
      </section>
      <section id="solution" className="bg-quantum-darkest grid-background">
        <Solution />
      </section>
      <section id="tech" className="quantum-gradient">
        <TechShowcase />
      </section>
      <section id="demo" className="bg-quantum-darkest">
        <LiveDemo />
      </section>
      <section id="stats" className="quantum-gradient">
        <StatsDashboard />
      </section>
      <section id="team" className="bg-quantum-dark">
        <TeamSection />
      </section>
      <section id="investors" className="quantum-gradient">
        <InvestorPortal />
      </section>
      <section id="media" className="bg-quantum-darkest grid-background">
        <MediaCoverage />
      </section>
    </main>
  );
};

export default Home;