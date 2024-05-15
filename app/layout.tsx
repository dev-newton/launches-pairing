import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Navbar from './_components/Navbar';
import './globals.scss';

export const metadata: Metadata = {
  title: 'SpaceX',
  description: 'Welcome to SpaceX',
};

const lato = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
