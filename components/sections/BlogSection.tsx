import { ArrowRight, FileText } from 'lucide-react';
import Link from 'next/link';

const posts = [
  { title:'10 Tips to Reduce PDF File Size', date:'Sep 5, 2026', text:'Learn the best ways to compress PDF files without losing quality.' },
  { title:'How to Protect Your PDF Files', date:'Sep 3, 2026', text:'Keep your important documents safe and secure.' },
  { title:'Best PDF Tools for Students', date:'Aug 28, 2026', text:'Free and easy-to-use tools for your academic work.' },
];

export default function BlogSection() {
  return <section id="blog" className="blog-section"><div className="page-width blog-layout">
    <div className="blog-main">
      <div className="section-heading-row"><div><h2><FileText size={21} /> Latest from Our Blog</h2></div><Link href="/#blog">View All Posts <ArrowRight size={17}/></Link></div>
      <div className="blog-grid">{posts.map((p,i)=><article className="blog-card" key={p.title}><div className="blog-thumb"><span>PDF</span></div><div><h3>{p.title}</h3><p>{p.text}</p><small>{p.date}</small></div></article>)}</div>
    </div>
    <div className="bottom-side-ad"><div className="ad-box ad-side"><strong>ADVERTISEMENT (300 x 250)</strong><span>Google AdSense Sidebar (Bottom)</span><div className="adsense-logo"><span/><i/><b/></div></div></div>
  </div></section>;
}
