'use client';

import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ToolsGrid from '@/components/sections/ToolsGrid';
import FeaturesSection from '@/components/sections/FeaturesSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return <div className="zorpdf-site"><Navbar/><main><HeroSection/><ToolsGrid/><FeaturesSection/><BlogSection/><ContactSection/></main><Footer/></div>;
}
