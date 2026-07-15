'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="tentang" className="footer">
      <div className="footer-grid">
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: 'linear-gradient(135deg, #4361EE, #3A0CA3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden', flexShrink: 0,
              boxShadow: '0 4px 12px rgba(67,97,238,0.3)',
            }}>
              <Image src="/asset/logososmed.png" alt="META U" width={34} height={34}
                style={{ objectFit: 'cover', borderRadius: 8 }} />
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color: '#0B1437', letterSpacing: '-0.02em' }}>
              META U
            </span>
          </div>
          <p className="footer-brand-desc">
            Platform sosial mahasiswa untuk terhubung, berbagi, dan berkarya. Eksklusif untuk civitas akademika Universitas Metamedia.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <p className="footer-col-title">Navigasi</p>
          <a href="#" className="footer-link">Beranda</a>
          <a href="#fitur" className="footer-link">Fitur</a>
          <a href="#preview" className="footer-link">Preview</a>
          <a href="#tentang" className="footer-link">Tentang</a>
        </div>

        {/* Bantuan */}
        <div>
          <p className="footer-col-title">Bantuan</p>
          <a href="#" className="footer-link">FAQ</a>
          <a href="#" className="footer-link">Kebijakan Privasi</a>
          <a href="#" className="footer-link">Syarat &amp; Ketentuan</a>
          <a href="mailto:support@metamedia.ac.id" className="footer-link">Hubungi Kami</a>
        </div>

        {/* Ikuti Kami */}
        <div>
          <p className="footer-col-title">Ikuti Kami</p>
          <div className="social-row">
            <a href="#" className="social-btn" title="Instagram">𝐈</a>
            <a href="#" className="social-btn" title="YouTube">▶</a>
            <a href="#" className="social-btn" title="Twitter/X">𝕏</a>
            <a href="#" className="social-btn" title="Discord">D</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} META U. All rights reserved.
      </div>
    </footer>
  );
}
