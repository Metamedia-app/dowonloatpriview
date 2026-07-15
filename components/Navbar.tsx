'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
      className={`navbar${scrolled ? ' scrolled' : ''}`}
    >
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#" className="nav-logo">
          <div className="nav-logo-icon">
            <Image
              src="/asset/logososmed.png"
              alt="META U"
              width={36}
              height={36}
              style={{ objectFit: 'cover', borderRadius: 8 }}
              priority
            />
          </div>
          <span className="nav-logo-text">META U</span>
        </a>

        {/* Nav links */}
        <nav className="nav-links">
          <a href="#" className="nav-link">Beranda</a>
          <a href="#fitur" className="nav-link">Fitur</a>
          <a href="#preview" className="nav-link">Preview</a>
          <a href="#tentang" className="nav-link">Tentang</a>
        </nav>

        {/* CTA */}
        <motion.a
          href="#download"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="btn btn-primary"
          style={{ fontSize: '0.88rem', padding: '11px 22px' }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7,10 12,15 17,10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download APK
        </motion.a>
      </div>
    </motion.header>
  );
}
