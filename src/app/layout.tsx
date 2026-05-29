import { Cormorant_Garamond, DM_Sans, Space_Mono, Caveat } from 'next/font/google';
import './global.css';
import { Providers } from './providers';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
});

export const metadata = {
  title: 'Uncharted, Loved | Human Design for the Messy Middle',
  description:
    'Human Design simplified for women who are building, raising, and becoming — all at once.',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${spaceMono.variable} ${caveat.variable}`}
    >
      <body className="bg-brand-cream text-brand-charcoal font-body antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
