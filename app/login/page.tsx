'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff, Loader2, Shield, Users, Zap } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const router = useRouter();
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const normalize = (value: string) => {
    let n = value.replace(/\D/g, '');
    if (n.startsWith('91') && n.length === 12) n = n.slice(2);
    if (n.startsWith('0') && n.length === 11) n = n.slice(1);
    return n;
  };

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(''); setLoading(true);
    try {
      const clean = normalize(mobile);
      if (clean.length !== 10) { setError('Please enter a valid 10-digit mobile number.'); return; }
      if (!password) { setError('Please enter your password.'); return; }

      const { data: email, error: lookupError } = await supabase.rpc('get_login_email_by_mobile', { p_mobile: clean });
      if (lookupError || !email) { setError('No account found with this mobile number.'); return; }

      const { data, error: loginError } = await supabase.auth.signInWithPassword({ email, password });
      if (loginError || !data.user) { setError('Invalid mobile number or password.'); return; }

      const { data: profile, error: profileError } = await supabase.from('profiles').select('id,is_admin,is_banned').eq('id', data.user.id).maybeSingle();
      if (profileError) { await supabase.auth.signOut(); setError('Unable to verify your account. Please try again.'); return; }
      if (profile?.is_banned) { await supabase.auth.signOut(); setError('Your account has been blocked. Please contact support.'); return; }

      const role = String(data.user.user_metadata?.role || data.user.app_metadata?.role || '').toLowerCase();
      if (role === 'customer_care' || role === 'customer-care') router.replace('/customer-care');
      else if (profile?.is_admin || role === 'super_admin' || role === 'super-admin') router.replace('/super-admin');
      else router.replace('/');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally { setLoading(false); }
  }

  return <main className="login-page">
    <div className="login-brand"><span><Zap size={28} fill="white"/></span><b>Zor<span>PDF</span></b></div>
    <div className="login-card">
      <h1>Public Login</h1>
      <p>Sign in to your ZorPDF account</p>
      <form onSubmit={handleLogin}>
        <label>Mobile Number</label>
        <div className="mobile-input"><span>+91</span><input value={mobile} onChange={e=>setMobile(e.target.value.replace(/\D/g,'').slice(0,10))} placeholder="Enter 10-digit mobile number" maxLength={10} disabled={loading}/></div>
        <label>Password</label>
        <div className="password-input"><input type={show?'text':'password'} value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter your password" disabled={loading}/><button type="button" onClick={()=>setShow(v=>!v)}>{show?<EyeOff size={17}/>:<Eye size={17}/>}</button></div>
        {error && <div className="login-error">{error}</div>}
        <button className="login-submit" disabled={loading}>{loading?<Loader2 className="spin" size={17}/>:null}{loading?'Signing in...':'Login'}</button>
      </form>
      <div className="login-divider"><span>Staff access</span></div>
      <div className="staff-links">
        <Link href="/customer-care/login"><Users size={15}/> Customer Care Login</Link>
        <Link href="/super-admin/login"><Shield size={15}/> Super Admin Login</Link>
      </div>
      <Link href="/" className="back-home">← Back to Home</Link>
    </div>
  </main>;
}
