'use client';

import { Instagram, Youtube, Zap } from 'lucide-react';
import Link from 'next/link';

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M3 12h18M12 3c2.5 2.5 3.5 5.5 3.5 9S14.5 18.5 12 21M12 3c-2.5 2.5-3.5 5.5-3.5 9S9.5 18.5 12 21" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.2 3.8A9.7 9.7 0 0 0 12.05 1C6.7 1 2.35 5.34 2.35 10.7c0 1.7.45 3.36 1.3 4.83L2.25 22l6.6-1.73a9.7 9.7 0 0 0 3.2.53h.01c5.35 0 9.69-4.35 9.69-9.7 0-2.6-1-5.03-2.55-6.9Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.7 7.25c-.2-.45-.42-.46-.62-.47h-.53c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.64 1.1 2.82.13.18 1.88 3.02 4.67 4.12 2.31.91 2.79.73 3.29.68.5-.04 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.12-.25-.18-.53-.32-.28-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.27-.7.89-.86 1.07-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.37-1.63-1.53-1.9-.16-.27-.02-.42.12-.56.12-.12.28-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.49-.83-2.04Z" fill="currentColor" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m12 3 2.78 5.63 6.22.9-4.5 4.38 1.06 6.19L12 17.18l-5.56 2.92 1.06-6.19L3 9.53l6.22-.9L12 3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function InfinityIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7.5 7.5c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c3.1 0 5-4.5 9-4.5 2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5c-3.1 0-5-4.5-9-4.5" transform="translate(0 -4.5)" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7L8 5Z" />
    </svg>
  );
}

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
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>

      <div className="footer-lower page-width">
        <div className="footer-social-row">
          <button className="language-select" type="button" aria-label="Select language">
            <GlobeIcon />
            <span>English</span>
            <span className="language-chevron">⌄</span>
          </button>

          <div className="socials-clean" aria-label="Social links">
            <a href="#" aria-label="Instagram"><Instagram size={21} /></a>
            <a href="#" aria-label="YouTube"><Youtube size={21} /></a>
            <a href="#" aria-label="WhatsApp"><WhatsAppIcon /></a>
          </div>
        </div>

        <div className="footer-trust-row">
          <div className="trust-item">
            <span className="trust-icon"><ClockIcon /></span>
            <strong>&lt; 3s</strong>
            <small>Avg. Conversion Time</small>
          </div>
          <div className="trust-item">
            <span className="trust-icon"><LockIcon /></span>
            <strong>256-bit</strong>
            <small>SSL Encryption</small>
          </div>
          <div className="trust-item">
            <span className="trust-icon"><StarIcon /></span>
            <strong>4.9/5</strong>
            <small>User Rating</small>
          </div>
          <div className="trust-item">
            <span className="trust-icon"><InfinityIcon /></span>
            <strong>Unlimited</strong>
            <small>Daily Conversions</small>
          </div>

          <a className="google-play" href="#" aria-label="Get it on Google Play">
            <span className="google-play-icon"><PlayIcon /></span>
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
