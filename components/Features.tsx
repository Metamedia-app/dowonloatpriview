'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '📸',
    title: 'Feed & Post',
    desc: 'Bagikan momen kampusmu — tugas kece, kegiatan UKM, atau sekadar selfie di kantin.',
    bg: 'var(--yellow)',
  },
  {
    icon: '🎞️',
    title: 'Story 24 Jam',
    desc: 'Update story harian yang otomatis hilang dalam 24 jam. Pas buat info dadakan!',
    bg: 'var(--orange)',
  },
  {
    icon: '💬',
    title: 'Real-time Chat',
    desc: 'DM teman sekelas, dosen, atau alumni langsung dari aplikasi tanpa nomor HP.',
    bg: 'var(--pink)',
  },
  {
    icon: '🔔',
    title: 'Notifikasi Kampus',
    desc: 'Dapat info jadwal kuliah, pengumuman, dan event langsung di timeline-mu.',
    bg: 'var(--purple)',
  },
  {
    icon: '👥',
    title: 'Komunitas Prodi',
    desc: 'Bergabung dengan grup prodi, angkatan, dan komunitas minat yang ada di kampus.',
    bg: 'var(--green)',
  },
  {
    icon: '🎓',
    title: 'Khusus Civitas',
    desc: 'Eksklusif untuk mahasiswa, dosen, dan alumni Universitas Metamedia. Aman dan terpercaya.',
    bg: 'var(--blue)',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Features() {
  return (
    <section
      id="fitur"
      style={{
        padding: '100px 24px',
        maxWidth: 1200,
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        style={{ textAlign: 'center', marginBottom: 64 }}
      >
        <span className="tag" style={{ marginBottom: 16 }}>✨ Fitur Unggulan</span>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginTop: 12,
          }}
        >
          Semua yang kamu butuhkan
          <br />
          <span style={{ color: 'var(--purple)' }}>ada di sini 🚀</span>
        </h2>
        <p style={{ marginTop: 16, color: '#555', fontSize: '1.1rem', maxWidth: 500, margin: '16px auto 0' }}>
          Satu aplikasi untuk seluruh aktivitas sosial civitas akademika Universitas Metamedia.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="features-grid">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="neu-card"
            style={{
              background: f.bg,
              padding: '32px 28px',
              cursor: 'default',
            }}
          >
            <div
              style={{
                fontSize: '2.5rem',
                marginBottom: 16,
                display: 'inline-block',
                animation: `float ${5 + i}s ease-in-out infinite`,
              }}
            >
              {f.icon}
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.3rem',
                fontWeight: 800,
                marginBottom: 10,
              }}
            >
              {f.title}
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, opacity: 0.85 }}>{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Decorative circle — pure CSS float animation, no Framer Motion scroll tracking */}
      <div
        className="float-anim-2"
        style={{
          position: 'absolute',
          right: '5%',
          top: '15%',
          width: 180,
          height: 180,
          borderRadius: '50%',
          border: '4px solid var(--dark)',
          background: 'var(--pink)',
          boxShadow: 'var(--shadow-xl)',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
    </section>
  );
}
