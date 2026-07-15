'use client';

import { motion } from 'framer-motion';

// Simple SVG QR code pattern (for visual demo only)
function QRCode() {
  return (
    <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer frame */}
      <rect x="2" y="2" width="106" height="106" rx="8" fill="#f0f4ff" stroke="#4361EE" strokeWidth="2"/>
      {/* Top-left finder */}
      <rect x="12" y="12" width="28" height="28" rx="3" fill="#0B1437"/>
      <rect x="17" y="17" width="18" height="18" rx="2" fill="#f0f4ff"/>
      <rect x="21" y="21" width="10" height="10" rx="1" fill="#0B1437"/>
      {/* Top-right finder */}
      <rect x="70" y="12" width="28" height="28" rx="3" fill="#0B1437"/>
      <rect x="75" y="17" width="18" height="18" rx="2" fill="#f0f4ff"/>
      <rect x="79" y="21" width="10" height="10" rx="1" fill="#0B1437"/>
      {/* Bottom-left finder */}
      <rect x="12" y="70" width="28" height="28" rx="3" fill="#0B1437"/>
      <rect x="17" y="75" width="18" height="18" rx="2" fill="#f0f4ff"/>
      <rect x="21" y="79" width="10" height="10" rx="1" fill="#0B1437"/>
      {/* Data modules (random pattern) */}
      {[
        [48,12],[52,12],[56,12],[60,12],
        [48,18],[56,18],[60,18],
        [48,24],[52,24],[60,24],
        [52,30],[56,30],
        [12,48],[18,48],[24,48],[30,48],
        [12,52],[24,52],[30,52],
        [12,56],[18,56],[24,56],
        [12,60],[24,60],[30,60],
        [48,48],[54,48],[60,48],[66,48],[72,48],[78,48],[84,48],[90,48],[96,48],
        [48,54],[60,54],[72,54],[84,54],[96,54],
        [48,60],[54,60],[60,60],[66,60],[78,60],[84,60],[90,60],
        [48,66],[60,66],[72,66],[78,66],
        [48,72],[54,72],[60,72],[66,72],[84,72],[90,72],[96,72],
        [48,78],[60,78],[72,78],[78,78],[84,78],
        [48,84],[54,84],[66,84],[72,84],[78,84],[84,84],[96,84],
        [48,90],[60,90],[66,90],[78,90],[90,90],[96,90],
        [48,96],[54,96],[60,96],[72,96],[84,96],
      ].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="4" height="4" rx="0.5" fill="#0B1437"/>
      ))}
    </svg>
  );
}

// Mini install screen for phone
function InstallScreen() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '276px',
      position: 'relative',
      fontFamily: 'var(--font-body)',
      color: '#0B1437',
      alignItems: 'center',
    }}>
      {/* iOS Status Bar */}
      <div style={{
        position: 'absolute',
        top: '-22px',
        left: 0,
        right: 0,
        height: 14,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 8px',
        fontSize: '0.5rem',
        fontWeight: 600,
        color: '#0B1437',
        zIndex: 10,
      }}>
        <span>9:41</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
          {/* Signal */}
          <svg width="7.5" height="7.5" viewBox="0 0 24 24" fill="currentColor">
            <rect x="1" y="16" width="3" height="5" rx="0.5"/>
            <rect x="6" y="12" width="3" height="9" rx="0.5"/>
            <rect x="11" y="8" width="3" height="13" rx="0.5"/>
            <rect x="16" y="4" width="3" height="17" rx="0.5"/>
            <rect x="21" y="1" width="3" height="20" rx="0.5"/>
          </svg>
          {/* Wifi */}
          <svg width="7.5" height="7.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M12 20h.01M8.5 16.5a5 5 0 0 1 7 0M5 13a10 10 0 0 1 14 0M1.5 9.5a15 15 0 0 1 21 0"/>
          </svg>
          {/* Battery */}
          <svg width="10" height="6.5" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="1" y="1" width="18" height="12" rx="3" fill="#0B1437"/>
            <path d="M21 4.5v5" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* Center Top Title */}
      <div style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 4px 10px',
        borderBottom: '1px solid rgba(67, 97, 238, 0.08)',
        marginBottom: 14,
        flexShrink: 0,
      }}>
        <span style={{ fontSize: '0.62rem', fontWeight: 600, color: '#6B7A99', cursor: 'pointer' }}>←</span>
        <span style={{ fontSize: '0.62rem', fontWeight: 700, color: '#0B1437' }}>Instal Aplikasi</span>
        <span style={{ fontSize: '0.62rem', color: 'transparent' }}>→</span>
      </div>

      {/* Large App Logo */}
      <div style={{
        width: 54,
        height: 54,
        borderRadius: 14,
        background: 'linear-gradient(135deg, #4361EE, #3A0CA3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 6px 16px rgba(67, 97, 238, 0.25)',
        marginBottom: 8,
        color: '#fff',
        fontSize: '1.4rem',
        fontWeight: 800,
        flexShrink: 0,
      }}>
        M
      </div>

      {/* App details info */}
      <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0B1437', marginBottom: 2 }}>META U</div>
      <div style={{ fontSize: '0.52rem', color: '#6B7A99', marginBottom: 12 }}>Versi 1.0.0 • 25 MB</div>

      {/* Unduh button inside simulator */}
      <div style={{
        background: 'linear-gradient(135deg, #4361EE, #3A0CA3)',
        color: '#ffffff',
        borderRadius: 20,
        padding: '6px 14px',
        fontSize: '0.62rem',
        fontWeight: 700,
        cursor: 'pointer',
        boxShadow: '0 3px 8px rgba(67, 97, 238, 0.3)',
        marginBottom: 14,
        transition: '0.2s',
      }}>
        Unduh Sekarang
      </div>

      {/* System compatibility specs text */}
      <div style={{
        textAlign: 'center',
        fontSize: '0.48rem',
        color: '#A3AED0',
        lineHeight: 1.3,
      }}>
        <div style={{ fontWeight: 600, color: '#6B7A99' }}>Persyaratan Sistem</div>
        <div>Android 7.0 ke atas</div>
      </div>
    </div>
  );
}

export default function Download() {
  return (
    <section id="download" className="download-section">
      <div className="download-card">
        {/* Left: Phone mockup */}
        <motion.div
          className="download-phone"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <div className="dl-phone-wrap">
            <div className="dl-phone-inner">
              <InstallScreen />
            </div>
          </div>
        </motion.div>

        {/* Middle: Text + button */}
        <motion.div
          className="download-middle"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 }}
        >
          <h2 className="download-title">Unduh Sekarang</h2>
          <p className="download-sub">
            Gabung dengan ribuan mahasiswa lainnya di META U dan mulai perjalanan kampusmu yang lebih seru.
          </p>
          <motion.a
            href="/metau-release-v1.0.apk"
            download
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="btn btn-primary"
            style={{ fontSize: '1rem', padding: '14px 32px', display: 'inline-flex' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.58 11.58 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.55-.22.83L6.4 9.48A9.048 9.048 0 0 0 3 16.6h18a9.048 9.048 0 0 0-3.4-7.12zM7.5 14.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm9 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
            </svg>
            Download APK &nbsp;· Versi 1.0.0 • 25 MB
          </motion.a>
          <p style={{ marginTop: 14, fontSize: '0.8rem', color: '#A3AED0' }}>
            Tersedia gratis untuk Android&nbsp;8.0+&nbsp;·&nbsp;iOS coming soon
          </p>
        </motion.div>

        {/* Right: QR code */}
        <motion.div
          className="download-qr"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
        >
          <div className="qr-box">
            <QRCode />
          </div>
          <p className="qr-label">Scan untuk unduh<br />langsung di ponselmu</p>
        </motion.div>
      </div>
    </section>
  );
}
