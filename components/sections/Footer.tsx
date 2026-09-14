'use client';

import { Facebook, Instagram, Linkedin, Mail, Twitter, Youtube, Zap, Globe2, Clock3, LockKeyhole, Star, Infinity, Play, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner page-width">
        <div className="footer-brand">
          <div className="footer-logo">
            <span><Zap size={21} fill="white" /></span>
            <strong>Zor<span>PDF</span></strong>
          </div>
          <p>All PDF Tools in One Place</p>
          <p className="footer-desc">ZorPDF provides free and easy-to-use PDF tools to help you work smarter and faster.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <Link href="/">Home</Link>
          <Link href="/#tools">All Tools</Link>
          <Link href="/#features">Features</Link>
          <Link href="/zor-remover">Zor Remover</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div>
          <h4>Legal</h4>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms of Service</Link>
          <Link href="/privacy-policy">Cookie Policy</Link>
          <Link href="/privacy-policy">Disclaimer</Link>
          <Link href="/sitemap.xml">Sitemap</Link>
        </div>

        <div>
          <h4>Tools</h4>
          <Link href="/tool/jpg-to-pdf">PDF Converter</Link>
          <Link href="/tool/edit-pdf">PDF Editor</Link>
          <Link href="/tool/pdf-compressor">PDF Compressor</Link>
          <Link href="/tool/merge-pdf">Merge PDF</Link>
          <Link href="/tool/split-pdf">Split PDF</Link>
          <Link href="/#tools">All Tools</Link>
        </div>

        <div>
          <h4>Newsletter</h4>
          <p>Get the latest updates and tips</p>
          <div className="newsletter"><input placeholder="Enter your email" /><button>Subscribe</button></div>
        </div>
      </div>

      <div className="footer-lower page-width">
        <div className="footer-social-language">
          <button className="language-selector" type="button" aria-label="Language">
            <Globe2 size={15} /> <span>English</span> <span className="language-chevron">⌄</span>
          </button>
          <div className="footer-socials" aria-label="Social links">
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="YouTube"><Youtube /></a>
            <a href="#" aria-label="WhatsApp"><MessageCircle /></a>
          </div>
        </div>

        <div className="footer-trust">
          <div className="trust-item"><span><Clock3 /></span><strong>&lt; 3s</strong><small>Avg. Conversion Time</small></div>
          <div className="trust-item"><span><LockKeyhole /></span><strong>256-bit</strong><small>SSL Encryption</small></div>
          <div className="trust-item"><span><Star /></span><strong>4.9/5</strong><small>User Rating</small></div>
          <div className="trust-item"><span><Infinity /></span><strong>Unlimited</strong><small>Daily Conversions</small></div>
          <a className="google-play" href="#" aria-label="Get it on Google Play"><Play size={16} fill="currentColor" /><span><small>GET IT ON</small><b>Google Play</b></span></a>
        </div>
      </div>

      <div className="footer-bottom page-width">
        <span>© 2026 ZorPDF. All rights reserved.</span>
        <span>Made with <b>♥</b> for a smarter PDF experience.</span>
      </div>
    </footer>
  );
}
