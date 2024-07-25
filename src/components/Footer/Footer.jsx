// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h3>Contact</h3>
          <p>703/704, Hubtown Solaris, Professor NS Phadke Rd, Andheri (E), Mumbai, Maharashtra – 400069</p>
          <p>info@inventiahealthcare.com</p>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#research">Research & Development</a></li>
            <li><a href="#manufacturing">Manufacturing</a></li>
            <li><a href="#business">Business Development</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li><a href="#team">Meet the team</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Media Center</h3>
          <ul>
            <li><a href="#news">Blogs & News</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 1985-2023. All Rights Reserved.</p>
        <ul>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;