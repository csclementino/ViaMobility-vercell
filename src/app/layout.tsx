// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ViaMobility',
  description: 'Seu aplicativo de mobilidade urbana',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <main className="flex-grow overflow-y-auto"> {/* Container principal com scroll */}
          {children}
        </main>
      </body>
    </html>
  );
}