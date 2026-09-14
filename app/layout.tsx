import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/lib/authContext';
import VisitTracker from '@/components/VisitTracker';
import HelpBot from '@/components/HelpBot';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'ZorPDF - All PDF Tools in One Place',
  description:
    'Fast, secure and free online file converter. Convert JPG to PDF, PDF to JPG, Word to PDF, PDF to Word and more. No signup required.',
  keywords:
    'file converter, JPG to PDF, PDF to JPG, Word to PDF, PDF to Word, online converter, free converter',
  authors: [{ name: 'ZorPDF' }],
  openGraph: {
    title: 'ZorPDF - All PDF Tools in One Place',
    description:
      'Fast, secure and free online file converter. No signup required.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZorPDF - All PDF Tools in One Place',
    description:
      'Fast, secure and free online file converter. No signup required.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>
          <VisitTracker />
          {children}
          <HelpBot />
        </AuthProvider>
      </body>
    </html>
  );
}
