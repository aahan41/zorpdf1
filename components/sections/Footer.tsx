'use client';

import { Facebook, Instagram, Linkedin, Mail, Twitter, Youtube, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return <footer className="site-footer">
    <div className="footer-inner page-width">
      <div className="footer-brand"><div className="footer-logo"><span><Zap size={22} fill="white"/></span><strong>Zor<span>PDF</span></strong></div><p>All PDF Tools in One Place</p><p className="footer-desc">ZorPDF provides free and easy-to-use PDF tools to help you work smarter and faster.</p><div className="socials"><a href="#" aria-label="YouTube"><Youtube/></a><a href="#" aria-label="Facebook"><Facebook/></a><a href="#" aria-label="X"><Twitter/></a><a href="#" aria-label="Instagram"><Instagram/></a><a href="#" aria-label="LinkedIn"><Linkedin/></a></div></div>
      <div><h4>Quick Links</h4><Link href="/">Home</Link><Link href="/#tools">All Tools</Link><Link href="/#features">Features</Link><Link href="/zor-remover">Zor Remover</Link><Link href="/#blog">Blog</Link><Link href="/#contact">Contact</Link></div>
      <div><h4>Legal</h4><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-and-conditions">Terms of Service</Link><Link href="/privacy-policy">Cookie Policy</Link><Link href="/privacy-policy">Disclaimer</Link><Link href="/sitemap.xml">Sitemap</Link></div>
      <div><h4>Tools</h4><Link href="/tool/jpg-to-pdf">PDF Converter</Link><Link href="/tool/edit-pdf">PDF Editor</Link><Link href="/tool/pdf-compressor">PDF Compressor</Link><Link href="/tool/merge-pdf">Merge PDF</Link><Link href="/tool/split-pdf">Split PDF</Link><Link href="/#tools">All Tools</Link></div>
      <div><h4>Newsletter</h4><p>Get the latest updates and tips</p><div className="newsletter"><input placeholder="Enter your email"/><button>Subscribe</button></div></div>
    </div>
    <div className="footer-bottom page-width"><span>© 2026 ZorPDF. All rights reserved.</span><span>Made with <b>♥</b> for a smarter PDF experience.</span></div>
  </footer>;
}
