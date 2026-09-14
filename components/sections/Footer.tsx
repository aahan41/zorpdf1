'use client';

import { Instagram, Youtube, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return <footer className="site-footer">
    <div className="footer-inner page-width">
      <div className="footer-brand"><div className="footer-logo"><span><Zap size={22} fill="white"/></span><strong>Zor<span>PDF</span></strong></div><p>All PDF Tools in One Place</p><p className="footer-desc">ZorPDF provides free and easy-to-use PDF tools to help you work smarter and faster.</p><div className="socials">
        <a href="#" aria-label="Instagram"><Instagram/></a>
        <a href="#" aria-label="YouTube"><Youtube/></a>
        <a href="#" aria-label="WhatsApp">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M20.2 3.8A9.7 9.7 0 0 0 12.05 1C6.7 1 2.35 5.34 2.35 10.7c0 1.7.45 3.36 1.3 4.83L2.25 22l6.6-1.73a9.7 9.7 0 0 0 3.2.53h.01c5.35 0 9.69-4.35 9.69-9.7 0-2.6-1-5.03-2.55-6.9Z" stroke="currentColor" strokeWidth="1.8"/>
            <path d="M8.7 7.25c-.2-.45-.42-.46-.62-.47h-.53c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.64 1.1 2.82.13.18 1.88 3.02 4.67 4.12 2.31.91 2.79.73 3.29.68.5-.04 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.12-.25-.18-.53-.32-.28-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.27-.7.89-.86 1.07-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.37-1.63-1.53-1.9-.16-.27-.02-.42.12-.56.12-.12.28-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.49-.83-2.04Z" fill="currentColor"/>
          </svg>
        </a>
      </div></div>
      <div><h4>Quick Links</h4><Link href="/">Home</Link><Link href="/#tools">All Tools</Link><Link href="/#features">Features</Link><Link href="/zor-remover">Zor Remover</Link><Link href="/contact">Contact</Link></div>
      <div><h4>Legal</h4><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms of Service</Link><Link href="/privacy-policy">Cookie Policy</Link><Link href="/privacy-policy">Disclaimer</Link><Link href="/sitemap.xml">Sitemap</Link></div>
      <div><h4>Tools</h4><Link href="/tool/jpg-to-pdf">PDF Converter</Link><Link href="/tool/edit-pdf">PDF Editor</Link><Link href="/tool/pdf-compressor">PDF Compressor</Link><Link href="/tool/merge-pdf">Merge PDF</Link><Link href="/tool/split-pdf">Split PDF</Link><Link href="/#tools">All Tools</Link></div>
      <div><h4>Newsletter</h4><p>Get the latest updates and tips</p><div className="newsletter"><input placeholder="Enter your email"/><button>Subscribe</button></div></div>
    </div>
    <div className="footer-bottom page-width"><span>© 2026 ZorPDF. All rights reserved.</span><span>Made with <b>♥</b> for a smarter PDF experience.</span></div>
  </footer>;
}
