'use client';

import { Variants, motion } from 'framer-motion';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const badgeVariants: Variants = {
    hidden: { scale: 0, rotate: -15 },
    visible: {
      scale: 1,
      rotate: -5,
      transition: { type: 'spring', stiffness: 200, damping: 10, delay: 0.6 },
    },
  };

  // Mockup elements inside the phone screen
  const screenContent = (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '40px 12px 12px' }}>
      {/* Mini App Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, paddingBottom: 8, borderBottom: '1.5px solid rgba(255,255,255,0.1)' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--yellow)', fontFamily: 'var(--font-display)' }}>metau</span>
        <span style={{ fontSize: '0.65rem', padding: '2px 6px', borderRadius: 4, background: 'rgba(255,255,255,0.15)', color: '#fff' }}>Metamedia</span>
      </div>

      {/* Stories list */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 12, overflowX: 'hidden' }}>
        {['👤 Kamu', '👩‍🎓 Budi', '👨‍🏫 Pak Dedi', '👩‍💻 Susi'].map((story, i) => (
          <div key={story} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, flexShrink: 0 }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              border: `2px solid ${i === 0 ? '#ccc' : 'var(--pink)'}`,
              background: '#333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.9rem'
            }}>
              {story.split(' ')[0]}
            </div>
            <span style={{ fontSize: '0.55rem', color: '#ccc' }}>{story.split(' ')[1]}</span>
          </div>
        ))}
      </div>

      {/* Simulated Feed Post */}
      <div className="neu-card" style={{ background: 'var(--white)', padding: 10, borderRadius: 10, boxShadow: '2px 2px 0px #000', border: '2px solid #000', marginBottom: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
          <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.5rem', fontWeight: 'bold', color: '#fff' }}>A</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#000' }}>Andi (Sistem Informasi)</span>
            <span style={{ fontSize: '0.45rem', color: '#666' }}>2 jam yang lalu</span>
          </div>
        </div>
        <p style={{ fontSize: '0.65rem', color: '#222', lineHeight: 1.3, marginBottom: 6 }}>
          Rekomendasi cafe buat nugas deket kampus Universitas Metamedia dong guys? Yang wifinya kenceng! ☕💻
        </p>
        <div style={{ display: 'flex', gap: 8, fontSize: '0.6rem', color: '#555' }}>
          <span>❤️ 24 Suka</span>
          <span>💬 12 Komentar</span>
        </div>
      </div>

      {/* Simulated Chat Bubble */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 'auto' }}>
        <div style={{ alignSelf: 'flex-start', background: 'var(--orange)', border: '1.5px solid #000', borderRadius: '8px 8px 8px 0px', padding: '4px 8px', maxWidth: '80%', boxShadow: '1px 1px 0px #000' }}>
          <p style={{ fontSize: '0.6rem', color: '#000', fontWeight: 600 }}>Tugas Pemrograman Web dikumpul besok kan ya?</p>
        </div>
        <div style={{ alignSelf: 'flex-end', background: 'var(--green)', border: '1.5px solid #000', borderRadius: '8px 8px 0px 8px', padding: '4px 8px', maxWidth: '80%', boxShadow: '1px 1px 0px #000' }}>
          <p style={{ fontSize: '0.6rem', color: '#000', fontWeight: 600 }}>Iya bener! Jam 12 siang maksimal.</p>
        </div>
      </div>
    </div>
  );

  return (
    <section
      className="hero-container"
      style={{
        position: 'relative',
        maxWidth: 1200,
        margin: '0 auto',
        overflow: 'visible',
      }}
    >
      {/* Left Column (Content) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
      >
        <motion.div variants={itemVariants}>
          <span className="tag">🚀 Khusus Kampus Metamedia</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
            fontWeight: 800,
            lineHeight: 1.05,
            color: 'var(--dark)',
          }}
        >
          Sosmed Asik
          <br />
          Anak <span style={{ color: 'var(--orange)', textDecoration: 'underline' }}>Metamedia</span>!
        </motion.h1>

        <motion.p
          variants={itemVariants}
          style={{
            fontSize: '1.2rem',
            color: '#333',
            maxWidth: 540,
            lineHeight: 1.6,
          }}
        >
          Tempat nongkrong digital paling seru buat civitas akademika Universitas Metamedia. Upload feed, bagikan story harian, chattingan seru, dan kepoin info kampus terlengkap dalam satu genggaman!
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="hero-btn-group"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            marginTop: 8,
          }}
        >
          <a href="#download" className="neu-btn neu-btn-primary">
            Download Android (APK) 🤖
          </a>
          <div className="neu-btn neu-btn-disabled" style={{ position: 'relative' }}>
            Download iOS (Disabled) 🍏
            <span style={{
              position: 'absolute',
              top: '-12px',
              right: '-10px',
              background: 'var(--pink)',
              color: 'white',
              fontSize: '0.65rem',
              fontWeight: 800,
              padding: '2px 6px',
              border: '1.5px solid var(--dark)',
              borderRadius: '6px',
              transform: 'rotate(8deg)',
              boxShadow: '1px 1px 0px #000',
            }}>
              Segera Hadir!
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="civitas-text"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginTop: 12,
            fontSize: '0.95rem',
            fontWeight: 650,
          }}
        >
          <div style={{ display: 'flex', marginRight: -6 }}>
            {['👨‍🎓', '👩‍🎓', '👨‍🏫', '👩‍💻'].map((emoji, index) => (
              <div
                key={index}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: 'var(--yellow)',
                  border: '2px solid var(--dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: index > 0 ? -10 : 0,
                  boxShadow: '1px 1px 0px var(--dark)',
                  fontSize: '1rem',
                  zIndex: 4 - index,
                }}
              >
                {emoji}
              </div>
            ))}
          </div>
          <span>1,500+ Civitas Akademika telah bergabung!</span>
        </motion.div>
      </motion.div>

      {/* Mobile-only feature highlights — visible only on HP */}
      <div className="hero-cta-mobile">
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', marginBottom: 4 }}>
          🎯 Fitur utama di Metau:
        </p>
        {[
          ['📸', 'Feed & Post'],
          ['🎞️', 'Story 24 Jam'],
          ['💬', 'Real-time Chat'],
          ['🔔', 'Info Kampus'],
          ['🎓', 'Khusus Civitas Metamedia'],
        ].map(([icon, label]) => (
          <div
            key={label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 12px',
              background: 'var(--yellow)',
              border: '2px solid var(--dark)',
              borderRadius: 10,
              boxShadow: '3px 3px 0px var(--dark)',
              fontWeight: 600,
              fontSize: '0.9rem',
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>{icon}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Right Column (Visual) — hidden on mobile via hero-phone-col class */}
      <motion.div
        className="hero-phone-col"
        initial={{ opacity: 0, x: 80, rotate: 5 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          padding: '20px 0',
        }}
      >
        {/* Phone Mockup */}
        <motion.div
          whileHover={{ rotate: 1.5, scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="phone-mockup"
          style={{ cursor: 'pointer' }}
        >
          <div className="phone-notch" />
          <div className="phone-screen">{screenContent}</div>
        </motion.div>

        {/* Circular background deco shape */}
        <div
          className="float-anim-2"
          style={{
            position: 'absolute',
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'var(--purple)',
            border: '4px solid var(--dark)',
            zIndex: -2,
            top: '5%',
            right: '10%',
            boxShadow: 'var(--shadow-xl)',
            opacity: 0.85,
          }}
        />
      </motion.div>
    </section>
  );
}
