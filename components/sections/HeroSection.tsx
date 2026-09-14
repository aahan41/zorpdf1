'use client';

import { ArrowRight, CheckCircle2, Crown, FileImage, FileText, Image as ImageIcon, Lock, Search, Sparkles, Users, Zap } from 'lucide-react';
import Link from 'next/link';

function AdBox({ side = false, label = 'Top' }: { side?: boolean; label?: string }) {
  return (
    <div className={side ? 'ad-box ad-side' : 'ad-box'}>
      <strong>ADVERTISEMENT {side ? '(300 x 250)' : '(728 x 90)'}</strong>
      <span>Google AdSense {label}</span>
      <div className="adsense-logo"><span /><i /><b /></div>
      <small>Google AdSense</small>
    </div>
  );
}

function ToolArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="art-orbit art-orbit-1" />
      <div className="art-orbit art-orbit-2" />
      <div className="floating-file file-excel"><b>X</b></div>
      <div className="floating-file file-word"><b>W</b></div>
      <div className="floating-file file-power"><b>P</b></div>
      <div className="pdf-paper">
        <div className="pdf-badge">PDF</div>
        <span /><span /><span /><span />
        <div className="paper-fold" />
      </div>
      <div className="art-note">Convert<br />Edit<br />Compress<br />and More...</div>
      <div className="art-arrow">↘</div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="top" className="hero">
      <div className="hero-ad"><AdBox label="Banner (Top)" /><div className="hero-ad-side"><div className="adsense-logo"><span /><i /><b /></div><small>Google AdSense</small></div></div>

      <div className="hero-shell">
        <div className="hero-main">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={14} /> Fast. Secure. Free. Always.</div>
            <h1>Your Complete<br /><span>PDF</span> Toolkit</h1>
            <p>Convert, edit, merge, compress, and manage your PDF files with powerful and easy-to-use tools.</p>

            <div className="hero-stats">
              <div><span className="stat-icon green"><CheckCircle2 /></span><b>100% Secure</b><small>Your files are safe</small></div>
              <div><span className="stat-icon violet"><Zap /></span><b>Super Fast</b><small>Process in seconds</small></div>
              <div><span className="stat-icon pink">∞</span><b>Free to Use</b><small>No registration</small></div>
              <div><span className="stat-icon orange"><Users /></span><b>Trusted by</b><small>Millions</small></div>
            </div>

            <div className="hero-buttons">
              <Link href="#tools" className="primary-cta">Explore All Tools <ArrowRight size={18} /></Link>
              <button className="secondary-cta" onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}><span className="play-dot">▶</span> How It Works</button>
            </div>
          </div>
          <ToolArt />
        </div>

        <aside className="hero-sidebar">
          <AdBox side label="Sidebar" />
          <div className="pro-card"><Crown size={18} /><div><b>Pro Tools</b><p>Unlock advanced features<br />and higher limits</p></div><Link href="/login">Go Pro <ArrowRight size={16} /></Link></div>
        </aside>
      </div>

      <div className="tool-search-wrap">
        <div className="tool-search">
          <Search size={20} />
          <input id="tool-search" placeholder="Search for tools... (e.g. compress, merge, jpg to pdf)" aria-label="Search tools" />
          <button onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}><Search size={16} /> Search</button>
        </div>
      </div>

      <div className="category-row">
        {['All Tools','Convert to PDF','Convert from PDF','Edit PDF','Organize PDF','Optimize PDF','Security','AI Tools','More'].map((x, i) => <span key={x} className={i === 0 ? 'cat active' : 'cat'}>{x}</span>)}
      </div>
    </section>
  );
}
