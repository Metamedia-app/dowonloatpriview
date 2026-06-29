'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Download from '../components/Download';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  const marqueeItems = [
    'UPLOADS FEEDS',
    'SHARE STORY',
    'REAL-TIME CHAT',
    'INFO KAMPUS',
    'CIVITAS METAMEDIA ONLY',
    'MAHASISWA & DOSEN CONNECT',
  ];

  // Repeat the items to make the track seamless
  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Navbar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Neubrutalism Marquee Running Text */}
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {duplicatedItems.map((item, index) => (
              <div key={index} className="marquee-item">
                <span className="marquee-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <Features />

        {/* Download Section */}
        <Download />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
