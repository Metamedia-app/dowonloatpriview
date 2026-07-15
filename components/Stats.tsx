'use client';

import { motion } from 'framer-motion';

const stats = [
  { icon: '👤', number: '10K+', label: 'Pengguna Aktif' },
  { icon: '🏛️', number: '50+', label: 'Program Studi' },
  { icon: '📄', number: '20K+', label: 'Materi Tersedia' },
  { icon: '🏆', number: '5K+', label: 'Prestasi Diraih' },
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="stat-item"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <div className="stat-icon-wrap">{s.icon}</div>
            <div className="stat-number">{s.number}</div>
            <div className="stat-label">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
