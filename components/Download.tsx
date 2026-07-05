'use client';

import { motion } from 'framer-motion';

export default function Download() {
  const downloadScreenContent = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '40px 16px 16px',
        background: 'var(--dark)',
        color: '#fff',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        gap: 16,
      }}
    >
      <div style={{ fontSize: '2.8rem', animation: 'float 4s ease-in-out infinite' }}>📲</div>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.4rem',
          fontWeight: 800,
          color: 'var(--yellow)',
          textTransform: 'uppercase',
          letterSpacing: 0.5,
        }}
      >
        metau v1.0
      </div>
      <p style={{ fontSize: '0.75rem', opacity: 0.85, lineHeight: 1.45, maxWidth: 180 }}>
        Masuk menggunakan Akun Portal/NIM mahasiswa kamu.
      </p>
      <div
        style={{
          marginTop: 'auto',
          width: '100%',
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '8px 10px',
          borderRadius: 8,
          border: '1.5px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <span style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--green)' }}>
          🔒 Kredensial Terenkripsi & Aman
        </span>
      </div>
    </div>
  );

  return (
    <section
      id="download"
      style={{
        padding: '100px 24px',
        maxWidth: 1200,
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="neu-card download-card-padding"
        style={{
          background: 'var(--yellow)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {/* Decorative background shapes */}
        <div
          style={{
            position: 'absolute',
            top: -20,
            left: -20,
            width: 80,
            height: 80,
            background: 'var(--pink)',
            border: '3px solid var(--dark)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -40,
            right: -20,
            width: 120,
            height: 120,
            background: 'var(--green)',
            border: '3px solid var(--dark)',
            transform: 'rotate(15deg)',
          }}
        />

        {/* 2-Column Grid inside the banner card */}
        <div className="download-grid">
          {/* Left Column (Info & Buttons) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 20,
              textAlign: 'left',
              zIndex: 2,
            }}
          >
            <span className="tag" style={{ background: 'var(--white)' }}>
              📲 Unduh Aplikasi
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: 'var(--dark)',
                maxWidth: 600,
              }}
            >
              Siap Gabung dengan <br />
              Ribuan Anak Metamedia?
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--dark)',
                maxWidth: 540,
                lineHeight: 1.6,
                fontWeight: 550,
                opacity: 0.9,
              }}
            >
              Unduh aplikasi Metau sekarang juga. Bebas pasang untuk seluruh civitas akademika Universitas Metamedia secara gratis.
            </p>

            {/* Buttons Group */}
            <div
              className="download-btn-group"
              style={{
                display: 'flex',
                gap: 16,
                marginTop: 10,
                width: '100%',
              }}
            >
              {/* Active Android apk download */}
              <motion.a
                href="/metau-release-v1.0.apk"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="neu-btn"
                style={{
                  background: 'var(--dark)',
                  color: 'var(--white)',
                  padding: '16px 28px',
                  fontSize: '1.05rem',
                  boxShadow: '4px 4px 0px var(--pink)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 2,
                  textAlign: 'left',
                  lineHeight: 1.2,
                  textDecoration: 'none',
                }}
              >
                <span style={{ fontSize: '0.7rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Unduh file untuk</span>
                <span style={{ fontWeight: 800, display: 'flex', alignItems: 'center', gap: 6 }}>
                  Android (.APK) <span style={{ fontSize: '1.2rem' }}>🤖</span>
                </span>
              </motion.a>

              {/* Disabled iOS button */}
              <div
                className="neu-btn neu-btn-disabled"
                style={{
                  background: '#e0e0e0',
                  color: '#777777',
                  padding: '16px 28px',
                  fontSize: '1.05rem',
                  border: '3px solid #888888',
                  boxShadow: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 2,
                  textAlign: 'left',
                  lineHeight: 1.2,
                  position: 'relative',
                }}
              >
                <span style={{ fontSize: '0.7rem', opacity: 0.7, textTransform: 'uppercase', letterSpacing: 0.5 }}>Belum Tersedia</span>
                <span style={{ fontWeight: 800, display: 'flex', alignItems: 'center', gap: 6 }}>
                  iPhone (.iOS) <span style={{ fontSize: '1.2rem' }}>🍏</span>
                </span>
                <span
                  style={{
                    position: 'absolute',
                    top: -10,
                    right: -10,
                    background: 'var(--orange)',
                    color: 'white',
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    padding: '2px 8px',
                    border: '2px solid var(--dark)',
                    borderRadius: '6px',
                    transform: 'rotate(-5deg)',
                    boxShadow: '1px 1px 0px #000',
                  }}
                >
                  Belum Rilis!
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.8rem', opacity: 0.85, fontWeight: 650, marginTop: 12 }}>
              Versi Terbaru: v1.0.0-Beta (120MB) • Diperbarui pada: Juni 2026
            </p>
          </div>

          {/* Right Column (Phone Mockup inside Download widget) */}
          <div className="download-phone-col" style={{ zIndex: 2 }}>
            <motion.div
              whileHover={{ rotate: -1, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="phone-mockup"
              style={{
                cursor: 'pointer',
                borderColor: 'var(--dark)',
                boxShadow: '8px 8px 0px var(--dark)',
                width: 220,
                height: 440,
              }}
            >
              <div className="phone-notch" style={{ background: 'var(--dark)' }} />
              <div className="phone-screen">{downloadScreenContent}</div>
            </motion.div>

            {/* Pink 'Free Download' badge near the phone mockup */}
            <motion.div
              className="neu-card float-anim-3"
              style={{
                position: 'absolute',
                bottom: '15%',
                right: '0px',
                background: 'var(--pink)',
                color: 'var(--white)',
                padding: '8px 16px',
                zIndex: 10,
                transform: 'rotate(-6deg)',
                fontWeight: 700,
                fontSize: '0.85rem',
                border: '2.5px solid var(--dark)',
                boxShadow: '3px 3px 0px var(--dark)',
              }}
            >
              🎓 Free Download
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
