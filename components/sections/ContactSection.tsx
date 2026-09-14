'use client';

import { useState } from 'react';
import { CheckCircle2, Mail, MessageCircle, Send } from 'lucide-react';

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setLoading(true);
    await new Promise(r => setTimeout(r, 600));
    setLoading(false); setSent(true); e.currentTarget.reset();
  }

  return <section id="contact" className="contact-section"><div className="page-width">
    <div className="contact-title"><span>✉</span><h2>Contact</h2><p>Questions, feedback, or need help? Our customer care team is here for you.</p></div>
    <div className="contact-grid">
      <div className="contact-info">
        <div><span><Mail/></span><b>Email Us</b><p>support@zorpdf.com</p></div>
        <div><span><MessageCircle/></span><b>Live Chat</b><p>Mon–Fri, 9am–6pm</p></div>
      </div>
      <form className="contact-form" onSubmit={submit}>{sent ? <div className="sent"><CheckCircle2/><h3>Message sent!</h3><p>Thanks for reaching out. We will get back to you shortly.</p><button type="button" onClick={()=>setSent(false)}>Send another message</button></div> : <>
        <input name="name" placeholder="Your name" required/><input name="email" type="email" placeholder="you@example.com" required/><textarea name="message" rows={4} placeholder="How can we help?" required/><button disabled={loading} type="submit"><Send size={16}/>{loading?'Sending...':'Send Message'}</button>
      </>}</form>
    </div>
  </div></section>;
}
