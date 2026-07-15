'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Download from '../components/Download';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
