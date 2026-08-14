'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// QR code image component using next/image
function QRCode({ onClick }: { onClick: () => void }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
      style={{ cursor: 'zoom-in', display: 'inline-block', borderRadius: '4px', lineHeight: 0 }}
      title="Klik untuk perbesar"
    >
      <Image
        src="/asset/metau.jpg"
        alt="QR Code"
        width={110}
        height={110}
        style={{ objectFit: 'contain', borderRadius: '4px', display: 'block' }}
      />
    </motion.div>
  );
}

// Lightbox overlay shown when QR is clicked
function QRLightbox({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Close button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.2 }}
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          style={{
            position: 'absolute',
            top: 20,
            right: 24,
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: 'none',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(4px)',
            color: '#fff',
            fontSize: '1.3rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: 1,
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.28)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
          aria-label="Tutup"
        >
          ✕
        </motion.button>

        {/* QR image enlarged */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.75 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={e => e.stopPropagation()}
          style={{
            background: '#fff',
            borderRadius: 16,
            padding: 20,
            boxShadow: '0 30px 80px rgba(0,0,0,0.45)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <Image
            src="/asset/metau.jpg"
            alt="QR Code (besar)"
            width={280}
            height={280}
            style={{ objectFit: 'contain', borderRadius: 8, display: 'block' }}
          />
          <p style={{
            margin: 0,
            fontSize: '0.82rem',
            color: '#6B7A99',
            fontFamily: 'var(--font-body)',
            textAlign: 'center',
          }}>
            Scan QR ini untuk download META U
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
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
            <rect x="1" y="16" width="3" height="5" rx="0.5" />
            <rect x="6" y="12" width="3" height="9" rx="0.5" />
            <rect x="11" y="8" width="3" height="13" rx="0.5" />
            <rect x="16" y="4" width="3" height="17" rx="0.5" />
            <rect x="21" y="1" width="3" height="20" rx="0.5" />
          </svg>
          {/* Wifi */}
          <svg width="7.5" height="7.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M12 20h.01M8.5 16.5a5 5 0 0 1 7 0M5 13a10 10 0 0 1 14 0M1.5 9.5a15 15 0 0 1 21 0" />
          </svg>
          {/* Battery */}
          <svg width="10" height="6.5" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="1" y="1" width="18" height="12" rx="3" fill="#0B1437" />
            <path d="M21 4.5v5" strokeWidth="2.5" strokeLinecap="round" />
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
  const [qrOpen, setQrOpen] = useState(false);

  return (
    <>
      {qrOpen && <QRLightbox onClose={() => setQrOpen(false)} />}
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
            href="https://github.com/edy2209/meta-u/releases/download/v1.0.0/Meta-U-12.apk"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="btn btn-primary"
            style={{ fontSize: '1rem', padding: '14px 32px', display: 'inline-flex' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.58 11.58 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.55-.22.83L6.4 9.48A9.048 9.048 0 0 0 3 16.6h18a9.048 9.048 0 0 0-3.4-7.12zM7.5 14.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm9 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
            </svg>
            Download APK &nbsp;· Versi 1.0.0 • 116 MB
          </motion.a>
          <p style={{ marginTop: 14, fontSize: '0.8rem', color: '#A3AED0' }}>
            Tersedia gratis untuk Android&nbsp;15.0+&nbsp;·&nbsp;iOS coming soon
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
            <QRCode onClick={() => setQrOpen(true)} />
          </div>
          <p className="qr-label">Scan dan Bagikan Ke Temanmu<br />langsung di ponselmu</p>
        </motion.div>
      </div>
    </section>
    </>
  );
}
