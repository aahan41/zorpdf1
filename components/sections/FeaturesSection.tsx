'use client';

import { Cloud, Gift, Lock, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';

const items = [
  { icon: MessageCircle, title:'AI PDF Assistant', text:'Summarize, ask questions, translate & more.' },
  { icon: ShieldCheck, title:'Secure & Private', text:'Your files are automatically deleted after processing.' },
  { icon: Cloud, title:'Works Anywhere', text:'Use on any device, anytime, no installation required.' },
  { icon: Gift, title:'100% Free Tools', text:'No registration required for basic tools.' },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="features-strip">
      <div className="page-width feature-grid">
        {items.map(({icon: Icon,title,text}) => <div className="feature-mini" key={title}><span><Icon size={25} /></span><div><h3>{title}</h3><p>{text}</p></div><b>→</b></div>)}
      </div>
    </section>
  );
}
