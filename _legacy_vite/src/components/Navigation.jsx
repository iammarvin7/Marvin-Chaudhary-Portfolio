import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Resume', href: '#resume' },
    { name: 'Projects', href: '#projects' },
    { name: 'Photography', href: '#photography' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav>
      <div className="container nav-container">
        <div className="nav-logo">
          <a href="#">Marvin Chaudhary</a>
        </div>
        
        {/* Desktop Nav */}
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle (Simple) */}
        <button 
          className="mobile-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          style={{ display: 'none' /* Todo: Implement mobile menu styling if needed, keeping it simple for now */ }}
        >
          Menu
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
