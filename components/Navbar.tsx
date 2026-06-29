'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'var(--cream)',
        borderBottom: '3px solid var(--dark)',
      }}
    >
      <div
        className="navbar-container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
          height: 70,
        }}
      >
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}
        >
          {/* Logo image in yellow neubrutal box */}
          <div style={{
            width: 44,
            height: 44,
            background: 'var(--yellow)',
            border: '2.5px solid var(--dark)',
            borderRadius: 12,
            boxShadow: '3px 3px 0px var(--dark)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            flexShrink: 0,
            marginLeft: 10,
          }}>
            <Image
              src="/asset/logososmed.png"
              alt="Metau"
              width={38}
              height={38}
              style={{ borderRadius: 8, display: 'block', objectFit: 'cover' }}
              priority
            />
          </div>
          {/* Brand name */}
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.55rem',
            fontWeight: 800,
            color: 'var(--dark)',
            letterSpacing: '-0.5px',
            marginLeft: 5,
          }}>
            M<span style={{ color: 'var(--purple)' }}>u</span>
          </span>
        </motion.a>

        {/* Right side nav */}
        <nav style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <a
            href="#fitur"
            className="nav-link"
            style={{
              textDecoration: 'none',
              color: 'var(--dark)',
              fontWeight: 700,
              fontSize: '0.95rem',
            }}
          >
            Fitur
          </a>
          <motion.a
            href="#download"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: '0.9rem',
              padding: '10px 20px',
              background: 'var(--dark)',
              color: 'var(--yellow)',
              border: '2.5px solid var(--dark)',
              borderRadius: 10,
              boxShadow: '3px 3px 0px var(--purple)',
              textDecoration: 'none',
              transition: 'box-shadow 0.15s, transform 0.15s',
            }}
          >
            Download APK 🤖
          </motion.a>
        </nav>
      </div>
    </motion.header>
  );
}
