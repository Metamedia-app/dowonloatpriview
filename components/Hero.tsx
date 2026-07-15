'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const PhoneSpheresScene = dynamic(() => import('./PhoneSpheresScene'), { ssr: false });

// High-fidelity phone screen simulating the META U application feed
function PhoneApp() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '432px',
      position: 'relative',
      fontFamily: 'var(--font-body)',
      overflow: 'hidden',
    }}>
      {/* iOS Status Bar */}
      <div style={{
        position: 'absolute',
        top: '-22px',
        left: 0,
        right: 0,
        height: 18,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 14px',
        fontSize: '0.55rem',
        fontWeight: 600,
        color: '#0B1437',
        zIndex: 10,
      }}>
        <span>9:41</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 3.5 }}>
          {/* Signal */}
          <svg width="8.5" height="8.5" viewBox="0 0 24 24" fill="currentColor">
            <rect x="1" y="16" width="3" height="5" rx="0.5"/>
            <rect x="6" y="12" width="3" height="9" rx="0.5"/>
            <rect x="11" y="8" width="3" height="13" rx="0.5"/>
            <rect x="16" y="4" width="3" height="17" rx="0.5"/>
            <rect x="21" y="1" width="3" height="20" rx="0.5"/>
          </svg>
          {/* Wifi */}
          <svg width="8.5" height="8.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <path d="M12 20h.01M8.5 16.5a5 5 0 0 1 7 0M5 13a10 10 0 0 1 14 0M1.5 9.5a15 15 0 0 1 21 0"/>
          </svg>
          {/* Battery */}
          <svg width="12" height="7.5" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="1" y="1" width="18" height="12" rx="3" fill="#0B1437"/>
            <path d="M21 4.5v5" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* App Header & Navigation Tabs */}
      <div style={{
        background: '#ffffff',
        borderBottom: '1px solid rgba(67, 97, 238, 0.08)',
        flexShrink: 0,
        paddingTop: 2,
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '4px 12px 6px',
        }}>
          <span style={{ fontWeight: 800, fontSize: '0.72rem', color: '#4361EE', letterSpacing: '-0.01em' }}>META U</span>
          {/* Mock notification dot */}
          <div style={{ display: 'flex', gap: 5 }}>
            <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#F0F4FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.45rem' }}>🔍</span>
            </div>
            <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#F0F4FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.45rem' }}>💬</span>
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div style={{ display: 'flex', padding: '0 8px', justifyContent: 'space-around' }}>
          {['Untukmu', 'Mengikuti', 'Akademik'].map((t, idx) => (
            <div key={t} style={{
              padding: '2px 4px 6px',
              fontSize: '0.55rem',
              fontWeight: idx === 0 ? 800 : 500,
              color: idx === 0 ? '#4361EE' : '#6B7A99',
              position: 'relative',
              cursor: 'pointer',
            }}>
              {t}
              {idx === 0 && (
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '10%',
                  width: '80%',
                  height: 2,
                  background: '#4361EE',
                  borderRadius: 1,
                }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scrollable Feed Contents */}
      <div style={{
        flex: 1,
        overflowY: 'hidden',
        padding: '8px 8px 50px',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        background: '#FAF9FF',
      }}>
        {/* Post Card 1: Raka Maulana */}
        <div style={{
          background: '#ffffff',
          borderRadius: 10,
          padding: 8,
          border: '1px solid rgba(67, 97, 238, 0.05)',
          boxShadow: '0 2px 8px rgba(67, 97, 238, 0.03)',
        }}>
          {/* Card Author Info */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <div style={{
                width: 22, height: 22, borderRadius: '50%',
                background: 'linear-gradient(135deg,#4361EE,#7B2FFF)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontSize: '0.6rem', fontWeight: 'bold'
              }}>RM</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.58rem', color: '#0B1437', lineHeight: 1.1 }}>Raka Maulana</div>
                <div style={{ fontSize: '0.46rem', color: '#A3AED0' }}>Mahasiswa Informatika • 2 jam lalu</div>
              </div>
            </div>
            {/* Three Dots More Menu */}
            <span style={{ fontSize: '0.5rem', color: '#A3AED0', cursor: 'pointer', transform: 'translateY(-1px)' }}>•••</span>
          </div>

          {/* Card Body Text */}
          <p style={{
            fontSize: '0.55rem',
            color: '#2B3674',
            lineHeight: 1.4,
            marginBottom: 6,
          }}>
            Baru saja menyelesaikan project akhir semester! Semangat terus teman-teman 💪
          </p>

          {/* Embedded Editor Setup Pic (gradient mockup) */}
          <div style={{
            borderRadius: 8,
            overflow: 'hidden',
            background: '#1E1E2F',
            height: 72,
            position: 'relative',
            marginBottom: 6,
            border: '1px solid rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
          }}>
            {/* Code editor top bar */}
            <div style={{
              height: 12,
              background: '#12121e',
              display: 'flex',
              alignItems: 'center',
              padding: '0 6px',
              gap: 3,
            }}>
              <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#FF5F56' }} />
              <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#FFBD2E' }} />
              <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#27C93F' }} />
              <span style={{ fontSize: '0.35rem', color: '#6B7A99', marginLeft: 6, fontFamily: 'monospace' }}>app.js</span>
            </div>
            {/* Code content mockup */}
            <div style={{ padding: '6px 8px', fontFamily: 'monospace', fontSize: '0.42rem', color: '#A9B2C3', display: 'flex', flexDirection: 'column', gap: 2 }}>
              <div><span style={{ color: '#E06C75' }}>const</span> <span style={{ color: '#61AFEF' }}>app</span> = <span style={{ color: '#56B6C2' }}>express</span>();</div>
              <div><span style={{ color: '#E5C07B' }}>app</span>.<span style={{ color: '#61AFEF' }}>listen</span>(<span style={{ color: '#D19A66' }}>3000</span>, () =&gt; &#123;</div>
              <div style={{ paddingLeft: 6 }}><span style={{ color: '#98C379' }}>console.log("Connect!");</span></div>
              <div>&#125;);</div>
            </div>
            <div style={{
              position: 'absolute',
              bottom: 4,
              right: 6,
              fontSize: '1rem',
            }}>💻</div>
          </div>

          {/* Actions Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(67, 97, 238, 0.05)',
            paddingTop: 5,
            fontSize: '0.48rem',
            color: '#6B7A99',
            fontWeight: 500,
          }}>
            <span style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 2 }}>❤️ 128</span>
            <span style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 2 }}>💬 32</span>
            <span style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 2 }}>↗️ Bagikan</span>
          </div>
        </div>

        {/* Post Card 2: Dinda Aulia */}
        <div style={{
          background: '#ffffff',
          borderRadius: 10,
          padding: 8,
          border: '1px solid rgba(67, 97, 238, 0.05)',
          boxShadow: '0 2px 8px rgba(67, 97, 238, 0.03)',
        }}>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 5 }}>
            <div style={{
              width: 22, height: 22, borderRadius: '50%',
              background: 'linear-gradient(135deg,#06D6A0,#4361EE)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontSize: '0.6rem', fontWeight: 'bold'
            }}>DA</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.58rem', color: '#0B1437', lineHeight: 1.1 }}>Dinda Aulia</div>
              <div style={{ fontSize: '0.46rem', color: '#A3AED0' }}>Mahasiswa Desain • 4 jam lalu</div>
            </div>
          </div>
          <p style={{
            fontSize: '0.55rem',
            color: '#2B3674',
            lineHeight: 1.4,
          }}>
            Info: Perpustakaan buka sampai jam 21.00 selama ujian ✅
          </p>
        </div>
      </div>

      {/* Navigation Footer Fixed Bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 38,
        background: '#ffffff',
        borderTop: '1px solid rgba(67, 97, 238, 0.08)',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 4,
        zIndex: 5,
      }}>
        {/* Nav 1: Home (active) */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4361EE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer' }}>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
        {/* Nav 2: Search */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7A99" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer' }}>
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        {/* Nav 3: Create + */}
        <div style={{
          width: 22, height: 22, borderRadius: '50%',
          background: 'linear-gradient(135deg, #4361EE, #3A0CA3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontWeight: 'bold', fontSize: '0.8rem', cursor: 'pointer',
          boxShadow: '0 2px 6px rgba(67, 97, 238, 0.3)',
        }}>+</div>
        {/* Nav 4: Notifications */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7A99" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer' }}>
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
        {/* Nav 5: Profile */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7A99" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ cursor: 'pointer' }}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
      </div>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section className="hero">
      {/* LEFT */}
      <div className="hero-left">
        {/* Badge */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
          <div className="badge">
            🎓 Social Media untuk Kampus
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="show" className="hero-h1">
          Terhubung.<br />
          Berbagi.<br />
          <span className="gradient-text">Berkarya.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="show" className="hero-p">
          META U adalah platform sosial khusus civitas akademika Universitas Metamedia. Temukan teman, berbagi ilmu, dan raih prestasi bersama.
        </motion.p>

        {/* Buttons */}
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show" className="hero-btns">
          <a href="#download" className="btn btn-primary" style={{ padding: '13px 28px' }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 0 0-.83.22l-1.88 3.24a11.58 11.58 0 0 0-8.94 0L5.65 5.67a.643.643 0 0 0-.87-.2c-.28.18-.37.55-.22.83L6.4 9.48A9.048 9.048 0 0 0 3 16.6h18a9.048 9.048 0 0 0-3.4-7.12zM7.5 14.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm9 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
            </svg>
            Download APK
          </a>
          <a href="#fitur" className="btn btn-outline" style={{ padding: '12px 24px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5,3 19,12 5,21 5,3"/>
            </svg>
            Lihat Preview
          </a>
        </motion.div>

        {/* Safe text */}
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="show" className="hero-safe">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4361EE' }}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          Aman &amp; 100% Gratis
        </motion.div>

        {/* Social proof */}
        <motion.div custom={5} variants={fadeUp} initial="hidden" animate="show" className="hero-proof">
          <div className="avatar-stack">
            {['👨‍🎓','👩‍🎓','👨‍🏫','👩‍💻','🧑‍🎓'].map((e,i) => (
              <div key={i} className="avatar-ring" style={{ zIndex: 5 - i }}>{e}</div>
            ))}
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#0B1437' }}>10K+</div>
            <div style={{ fontSize: '0.8rem', color: '#6B7A99' }}>Mahasiswa sudah bergabung</div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT — Phone + floating 3D spheres */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 }}
      >
        {/* Three.js floating spheres */}
        <div className="phone-three-canvas">
          <PhoneSpheresScene />
        </div>

        {/* Phone Mockup */}
        <div className="phone-mockup">
          <div className="phone-inner">
            <div className="phone-notch-bar">
              <div className="phone-notch-pill" />
            </div>
            <div className="phone-screen-bg">
              <PhoneApp />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
