import React from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Photography from './components/Photography';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <About />
        <Resume />
        <Projects />
        <Photography />
        <Contact />
      </main>
      
      <footer className="container" style={{ padding: '2rem 1.5rem', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Marvin Chaudhary. Built with React & Vite.</p>
      </footer>
    </>
  );
}

export default App;
