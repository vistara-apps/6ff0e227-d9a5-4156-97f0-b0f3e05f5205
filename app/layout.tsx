import { Providers } from './providers';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KnowYourRights Buddy',
  description: 'Instant legal rights and communication tools for critical encounters',
  openGraph: {
    title: 'KnowYourRights Buddy',
    description: 'Instant legal rights and communication tools for critical encounters',
    images: ['/og-image.png'],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': '/og-image.png',
    'fc:frame:button:1': 'View My Rights',
    'fc:frame:button:2': 'Record & Alert',
    'fc:frame:button:3': 'Settings',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen gradient-bg">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
