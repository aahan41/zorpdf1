'use client';

import { Clock3, Globe2, Infinity, Instagram, LockKeyhole, Mail, MessageCircle, Play, Star, Youtube, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner page-width">
        <div className="footer-brand">
          <div className="footer-logo">
            <span><Zap size={19} fill="white" /></span>
            <strong>Zor<span>PDF</span></strong>
          </div>
          <p className="footer-tagline">All PDF Tools in One Place</p>
          <p className="footer-desc">Fast, secure and professional PDF tools for everyday document conversion.</p>
          <a className="footer-email" href="mailto:support@zorpdf.com">support@zorpdf.com</a>
        </div>

        <div className="footer-column">
          <h4>PRODUCT</h4>
          <Link href="/">Home</Link>
          <Link href="/#features">Features</Link>
          <Link href="/#faq">FAQ</Link>
        </div>

        <div className="footer-column">
          <h4>RESOURCES</h4>
          <Link href="/">ZorPDF Desktop</Link>
          <Link href="/">ZorPDF Mobile</Link>
        </div>

        <div className="footer-column">
          <h4>SOLUTIONS</h4>
          <Link href="/">Education</Link>
        </div>

        <div className="footer-column">
          <h4>LEGAL</h4>
          <Link href="/privacy-policy">Security</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
        </div>

        <div className="footer-column">
          <h4>COMPANY</h4>
          <Link href="/">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>

      <div className="footer-lower page-width">
        <div className="footer-social-row">
          <button className="language-select" type="button" aria-label="Select language">
            <Globe2 size={16} />
            <span>English</span>
            <span className="language-chevron">⌄</span>
          </button>

          <div className="socials-clean" aria-label="Social links">
            <a href="#" aria-label="Instagram"><Instagram size={21} /></a>
            <a href="#" aria-label="YouTube"><Youtube size={21} /></a>
            <a href="#" aria-label="WhatsApp"><MessageCircle size={21} /></a>
          </div>
        </div>

        <div className="footer-trust-row">
          <div className="trust-item">
            <span className="trust-icon"><Clock3 size={15} /></span>
            <strong>&lt; 3s</strong>
            <small>Avg. Conversion Time</small>
          </div>
          <div className="trust-item">
            <span className="trust-icon"><LockKeyhole size={15} /></span>
            <strong>256-bit</strong>
            <small>SSL Encryption</small>
          </div>
          <div className="trust-item">
            <span className="trust-icon"><Star size={15} /></span>
            <strong>4.9/5</strong>
            <small>User Rating</small>
          </div>
          <div className="trust-item">
            <span className="trust-icon"><Infinity size={16} /></span>
            <strong>Unlimited</strong>
            <small>Daily Conversions</small>
          </div>

          <a className="google-play" href="#" aria-label="Get it on Google Play">
            <span className="google-play-icon"><Play size={12} fill="currentColor" /></span>
            <span><small>GET IT ON</small><b>Google Play</b></span>
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 ZorPDF. All Rights Reserved.</span>
          <span>Made with <b>♥</b> for a smarter PDF experience.</span>
        </div>
      </div>
    </footer>
  );
}
