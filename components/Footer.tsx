'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--dark)',
        borderTop: '8px solid var(--dark)',
        padding: '60px 24px 40px',
        marginTop: 80,
        position: 'relative',
      }}
    >
      {/* Decorative top accent line */}
      <div style={{
        position: 'absolute',
        top: -8,
        left: 0,
        width: '100%',
        height: 8,
        background: 'repeating-linear-gradient(45deg, var(--yellow), var(--yellow) 10px, var(--dark) 10px, var(--dark) 20px)',
      }} />

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 32,
          paddingBottom: 40,
        }}
      >
        {/* Brand Box */}
        <div style={{
          background: 'var(--cream)',
          border: '3px solid var(--dark)',
          borderRadius: 16,
          padding: 24,
          boxShadow: '6px 6px 0px var(--yellow)',
          color: 'var(--dark)',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              background: 'var(--yellow)',
              border: '2px solid var(--dark)',
              borderRadius: 12,
              padding: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '2px 2px 0px var(--dark)',
            }}>
              <Image
                src="/asset/logososmed.png"
                alt="Metau Logo"
                width={36}
                height={36}
                style={{ borderRadius: 6, display: 'block' }}
              />
            </div>
            <span style={{ fontSize: '1.6rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>
              M<span style={{ color: 'var(--purple)' }}>u</span>
            </span>
          </div>
          <p style={{ fontSize: '0.9rem', fontWeight: 550, lineHeight: 1.5, opacity: 0.9 }}>
            Sosial media eksklusif civitas akademika Universitas Metamedia. Temukan, bagikan, dan diskusikan semua hal seputar kampusmu dalam satu aplikasi.
          </p>
        </div>

        {/* Quick Links Box */}
        <div style={{
          background: 'var(--cream)',
          border: '3px solid var(--dark)',
          borderRadius: 16,
          padding: 24,
          boxShadow: '6px 6px 0px var(--pink)',
          color: 'var(--dark)',
        }}>
          <h4 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.15rem',
            fontWeight: 800,
            marginBottom: 20,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: 'var(--dark)',
            borderBottom: '2px solid var(--dark)',
            paddingBottom: 6,
            display: 'inline-block',
          }}>
            Tautan Cepat 🔗
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, fontSize: '0.95rem', fontWeight: 700 }}>
            <li>
              <a href="#" style={{ color: 'var(--dark)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                🏠 Halaman Utama
              </a>
            </li>
            <li>
              <a href="#fitur" style={{ color: 'var(--dark)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                ✨ Fitur Unggulan
              </a>
            </li>
            <li>
              <a href="#download" style={{ color: 'var(--dark)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                📲 Unduh APK
              </a>
            </li>
          </ul>
        </div>

        {/* Contact/Info Box */}
        <div style={{
          background: 'var(--cream)',
          border: '3px solid var(--dark)',
          borderRadius: 16,
          padding: 24,
          boxShadow: '6px 6px 0px var(--green)',
          color: 'var(--dark)',
        }}>
          <h4 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.15rem',
            fontWeight: 800,
            marginBottom: 20,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: 'var(--dark)',
            borderBottom: '2px solid var(--dark)',
            paddingBottom: 6,
            display: 'inline-block',
          }}>
            Hubungi Kami 🎓
          </h4>
          <p style={{ fontSize: '0.9rem', fontWeight: 550, lineHeight: 1.6 }}>
            📍 <strong>Universitas Metamedia</strong> <br />
            Jl. Raya Metamedia No. 45, Kota Padang <br />
            📧 support@metamedia.ac.id
          </p>
        </div>
      </div>

      {/* Credit */}
      <div style={{
        maxWidth: 1200,
        margin: '20px auto 0',
        paddingTop: 24,
        borderTop: '2px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16,
        fontSize: '0.85rem',
        color: '#aaa',
        fontWeight: 500,
      }}>
        <p>© {new Date().getFullYear()} Universitas Metamedia. All rights reserved.</p>
        <p style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          Made with <span style={{ color: 'var(--pink)' }}>💖</span> for Metamedia Students
        </p>
      </div>
    </footer>
  );
}
