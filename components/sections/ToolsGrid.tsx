'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, FileImage, FileOutput, FileText, Heart, Image as ImageIcon, Minimize2, Pencil, RotateCw, Scissors, Shuffle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export type ToolId =
  | 'jpg-to-pdf' | 'pdf-to-jpg' | 'png-to-jpg' | 'word-to-pdf' | 'pdf-to-word'
  | 'pdf-compressor' | 'merge-pdf' | 'split-pdf' | 'rotate-pdf' | 'edit-pdf';

export interface Tool {
  id: ToolId; title: string; description: string; from: string; to: string;
  icon: React.ComponentType<any>; gradient: string; iconBg: string; accept: string;
}

export const tools: Tool[] = [
  { id:'jpg-to-pdf', title:'JPG to PDF', description:'Convert JPG images to a single PDF file.', from:'JPG', to:'PDF', icon:ImageIcon, gradient:'', iconBg:'tool-red', accept:'.jpg,.jpeg' },
  { id:'pdf-to-jpg', title:'PDF to JPG', description:'Extract high-quality images from PDF.', from:'PDF', to:'JPG', icon:FileImage, gradient:'', iconBg:'tool-blue', accept:'.pdf' },
  { id:'png-to-jpg', title:'PNG to JPG', description:'Convert PNG images to JPG format.', from:'PNG', to:'JPG', icon:ImageIcon, gradient:'', iconBg:'tool-green', accept:'.png' },
  { id:'word-to-pdf', title:'Word to PDF', description:'Convert Word documents to PDF files.', from:'DOCX', to:'PDF', icon:FileText, gradient:'', iconBg:'tool-violet', accept:'.doc,.docx' },
  { id:'pdf-to-word', title:'PDF to Word', description:'Convert PDF into editable Word files.', from:'PDF', to:'DOCX', icon:FileOutput, gradient:'', iconBg:'tool-orange', accept:'.pdf' },
  { id:'pdf-compressor', title:'PDF Compressor', description:'Reduce PDF file size while maintaining quality.', from:'PDF', to:'PDF', icon:Minimize2, gradient:'', iconBg:'tool-blue', accept:'.pdf' },
  { id:'merge-pdf', title:'Merge PDF', description:'Combine multiple PDFs into one file.', from:'PDF', to:'PDF', icon:Shuffle, gradient:'', iconBg:'tool-red', accept:'.pdf' },
  { id:'split-pdf', title:'Split PDF', description:'Split a PDF into multiple files.', from:'PDF', to:'PDF', icon:Scissors, gradient:'', iconBg:'tool-green', accept:'.pdf' },
  { id:'rotate-pdf', title:'Rotate PDF', description:'Rotate pages in your PDF file.', from:'PDF', to:'PDF', icon:RotateCw, gradient:'', iconBg:'tool-violet', accept:'.pdf' },
  { id:'edit-pdf', title:'Edit PDF', description:'Edit text, images, and annotations in PDFs.', from:'PDF', to:'PDF', icon:Pencil, gradient:'', iconBg:'tool-red', accept:'.pdf' },
];

const badges: Record<string,string> = {
  'jpg-to-pdf':'Popular','pdf-to-jpg':'Popular','png-to-jpg':'Popular','word-to-pdf':'Popular','pdf-to-word':'Hot',
  'pdf-compressor':'Hot','merge-pdf':'Hot','split-pdf':'New','rotate-pdf':'New',
};

function ToolCard({ tool, onOpen }: { tool: Tool; onOpen: (id: ToolId) => void }) {
  const [liked, setLiked] = useState(false);
  return (
    <article className="tool-card" onClick={() => onOpen(tool.id)}>
      <div className="tool-card-top"><span className={`tool-badge ${badges[tool.id] === 'Hot' ? 'hot' : badges[tool.id] === 'New' ? 'new' : ''}`}>{badges[tool.id] || ''}</span><button onClick={(e) => { e.stopPropagation(); setLiked(v => !v); }} aria-label="Favorite"><Heart size={17} fill={liked ? 'currentColor' : 'none'} /></button></div>
      <div className={`tool-icon ${tool.iconBg}`}><tool.icon className="h-7 w-7" /></div>
      <h3>{tool.title}</h3>
      <p>{tool.description}</p>
      <span className="tool-arrow"><ArrowRight size={17} /></span>
    </article>
  );
}

export default function ToolsGrid() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? tools.filter(t => `${t.title} ${t.description}`.toLowerCase().includes(q)) : tools;
  }, [query]);

  return (
    <section id="tools" className="tools-section">
      <div className="page-width">
        <div className="section-heading-row"><div><h2><span>🔥</span> Popular PDF Tools</h2><p>Most used tools for your daily PDF tasks</p></div><button onClick={() => setQuery('')}>View All Tools <ArrowRight size={18} /></button></div>
        <div className="tool-grid">
          {visible.map(tool => <ToolCard key={tool.id} tool={tool} onOpen={(id) => router.push(`/tool/${id}`)} />)}
        </div>
      </div>
      <div className="mid-ad"><div className="ad-box"><strong>ADVERTISEMENT (728 x 90)</strong><span>Google AdSense Banner (Middle)</span></div></div>
    </section>
  );
}
