import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">Inventia</div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#offerings">Offerings</a></li>
          <li><a href="#company">Company</a></li>
          <li><a href="#product-finder">Product Finder</a></li>
          <li><a href="#blogs">Blogs & News</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="../Contact/Contact">Contact us</a></li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
    </header>
  );
};

export default Header;