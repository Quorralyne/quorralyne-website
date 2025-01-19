import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@mantine/core/styles.css';
import './globals.css';
import { MantineClientProvider } from '@/components/providers/MantineClientProvider';
import { ColorSchemeScript } from '@mantine/core';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Heather Downing - Staying Curious',
  description: 'Senior software developer and international speaker specializing in backend microservices, voice app development, and mobile cross-platform apps.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body className={inter.className}>
        <MantineClientProvider>
          {children}
        </MantineClientProvider>
      </body>
    </html>
  );
}