import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navigation from '../components/Navigation';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });

export const metadata = {
  title: 'Marvin Chaudhary | Software Engineer',
  description: 'Portfolio of Marvin Chaudhary, a Software Engineer.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <div className="noise-overlay" />
        <Navigation />
        <main>{children}</main>
        <footer style={{ textAlign: 'center', padding: '1.5rem 0', fontSize: '0.85rem', color: 'var(--text-muted)', opacity: 0.6 }}>
          © {new Date().getFullYear()} Marvin Chaudhary. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
