'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Headphones, LogOut, MessageCircle, RefreshCw, ShieldCheck, Users } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function CustomerCarePage(){
 const router=useRouter(); const [email,setEmail]=useState(''); const [loading,setLoading]=useState(true);
 useEffect(()=>{supabase.auth.getUser().then(({data})=>{if(!data.user){router.replace('/customer-care/login');return}const role=String(data.user.user_metadata?.role||data.user.app_metadata?.role||'').toLowerCase();if(role!=='customer_care'&&role!=='customer-care'){router.replace('/');return}setEmail(data.user.email||'');setLoading(false)})},[router]);
 async function out(){await supabase.auth.signOut();router.replace('/login')}
 if(loading)return <div className="staff-dashboard loading">Checking Customer Care access...</div>;
 return <main className="staff-dashboard"><header><div className="staff-brand"><span><Headphones/></span><div><b>ZorPDF Customer Care</b><small>Support & Service Panel</small></div></div><button onClick={out}><LogOut size={16}/> Logout</button></header><div className="staff-content"><div className="staff-welcome"><ShieldCheck/><div><h1>Customer Care Dashboard</h1><p>Signed in as {email}</p></div></div><div className="staff-cards"><div><Users/><b>Customers</b><strong>Manage customer support requests</strong></div><div><MessageCircle/><b>Support</b><strong>Handle questions and feedback</strong></div><div><RefreshCw/><b>Activity</b><strong>Review recent support activity</strong></div></div></div></main>
}
