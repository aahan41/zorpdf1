'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff, Loader2, Users, Zap } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function CustomerCareLogin() {
  const router=useRouter(); const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [show,setShow]=useState(false); const [loading,setLoading]=useState(false); const [error,setError]=useState('');
  async function submit(e:FormEvent){e.preventDefault();setLoading(true);setError('');try{
    const {data,error}=await supabase.auth.signInWithPassword({email,password});
    if(error||!data.user) throw new Error('Invalid email or password.');
    const role=String(data.user.user_metadata?.role||data.user.app_metadata?.role||'').toLowerCase();
    if(role!=='customer_care'&&role!=='customer-care'){await supabase.auth.signOut();throw new Error('This account is not authorized for Customer Care.');}
    router.replace('/customer-care');
  }catch(e:any){setError(e?.message||'Login failed.')}finally{setLoading(false)}}
  return <main className="login-page"><div className="login-card"><div className="login-brand" style={{position:'static',justifyContent:'center',marginBottom:20}}><span><Zap size={26} fill="white"/></span><b>Zor<span>PDF</span></b></div><h1>Customer Care Login</h1><p>Authorized customer care staff only</p><form onSubmit={submit}><label>Email</label><input className="staff-input" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="staff@zorpdf.com" required/><label>Password</label><div className="password-input"><input type={show?'text':'password'} value={password} onChange={e=>setPassword(e.target.value)} required/><button type="button" onClick={()=>setShow(v=>!v)}>{show?<EyeOff size={17}/>:<Eye size={17}/>}</button></div>{error&&<div className="login-error">{error}</div>}<button className="login-submit" disabled={loading}>{loading?<Loader2 className="spin" size={17}/>:<Users size={16}/>} {loading?'Checking...':'Login to Customer Care'}</button></form><Link href="/login" className="back-home">← Back to Login</Link></div></main>
}
