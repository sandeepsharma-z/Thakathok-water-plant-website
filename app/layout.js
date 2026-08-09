import { Manrope, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-body' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' });

export const metadata = {
  title: 'ShriJal — Pure Water, Delivered',
  description: 'Fresh, trusted drinking water delivered to your doorstep. ShriJal app is coming soon.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${jakarta.variable}`}>{children}</body>
    </html>
  );
}
