import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import { siteConfig } from '@/data/portfolioData';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Sami Amin"
  },
  description: siteConfig.description,
  keywords: ["Self-taught Developer", "Computing Student", "Next.js 15", "TypeScript", "Automation Scripts"],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'Sami Amin Technical Portfolio',
    images: [{
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: 'Sami Amin Academic and Technical Portfolio Card'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.className}`}>
      <body className="bg-slate-900 text-slate-100 antialiased min-h-screen flex flex-col pt-16">
        <Navbar />
        <main className="flex-grow" id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
