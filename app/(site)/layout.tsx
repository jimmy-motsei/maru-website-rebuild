import '../globals.css'; // NOTE: layout is in app/(site)/, so go up one level
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: { default: 'Maru — Sound with Soul', template: '%s · Maru' },
  description: 'Soulful, legendary, creative craftsmanship in sound.',
  metadataBase: new URL('http://localhost:3000'), // change to your prod domain later
  openGraph: {
    title: 'Maru — Sound with Soul',
    description: 'Soulful, legendary, creative craftsmanship in sound.',
    type: 'website',
    url: 'http://localhost:3000',
  },
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-dvh bg-black text-white antialiased">
        {/* Accessible skip link */}
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:m-4 focus:rounded focus:bg-white/10 focus:px-3 focus:py-2">
          Skip to content
        </a>

        <Header />

        <main id="main" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}