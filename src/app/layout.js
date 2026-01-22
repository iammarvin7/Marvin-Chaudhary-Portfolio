import { Inter, Space_Grotesk, Bebas_Neue } from 'next/font/google';
import './globals.css';
import Navigation from '../components/Navigation';
import ResumeButton from '../components/ResumeButton';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' });

export const metadata = {
  title: 'Marvin Chaudhary | Software Engineer',
  description: 'Portfolio of Marvin Chaudhary, a Software Engineer.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${bebasNeue.variable}`}>
      <body>
        <div className="noise-overlay" />
        <Navigation />
        <ResumeButton />
        <main style={{ paddingTop: '50px' }}>{children}</main>
        <footer style={{ textAlign: 'center', padding: '1.5rem 0', fontSize: '0.85rem', color: 'var(--text-muted)', opacity: 0.6 }}>
          © {new Date().getFullYear()} Marvin Chaudhary. All rights reserved.
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
