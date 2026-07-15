'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '👥',
    title: 'Feed Kampus',
    desc: 'Lihat update, kegiatan, dan informasi terbaru dari kampus.',
    iconBg: '#EEF2FF',
    iconColor: '#4361EE',
  },
  {
    icon: '📚',
    title: 'Materi Akademik',
    desc: 'Upload & download materi, jurnal, tugas, dan referensi.',
    iconBg: '#ECFDF5',
    iconColor: '#06D6A0',
  },
  {
    icon: '🏆',
    title: 'Prestasi & Badge',
    desc: 'Dapatkan badge dan apresiasi atas setiap pencapaianmu.',
    iconBg: '#F5F3FF',
    iconColor: '#7B2FFF',
  },
  {
    icon: '💬',
    title: 'Diskusi & Komunitas',
    desc: 'Bergabung dalam komunitas dan diskusi sesuai minatmu.',
    iconBg: '#FFF7ED',
    iconColor: '#F48C06',
  },
  {
    icon: '🛡️',
    title: 'Aman & Terkontrol',
    desc: 'Data aman, lingkungan positif, dan moderasi oleh admin kampus.',
    iconBg: '#FFF1F2',
    iconColor: '#F72585',
  },
];

export default function Features() {
  return (
    <section id="fitur" className="features-section">
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <h2 className="section-label">
          Fitur <span className="gradient-text">Unggulan</span>
        </h2>
        <div className="section-underline" />
      </motion.div>

      {/* Cards */}
      <div className="features-strip">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="feature-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <div
              className="feature-icon"
              style={{ background: f.iconBg, color: f.iconColor }}
            >
              {f.icon}
            </div>
            <h3 className="feature-name">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
