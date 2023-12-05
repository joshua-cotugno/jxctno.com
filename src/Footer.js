// Footer.js

import React from 'react';
import './css/Footer.css'; // Import your styles for the footer

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2023 Joshua Cotugno</p>
      <a href="https://www.instagram.com/jxctno.bmp" target="_blank" rel="noopener noreferrer" title="Instagram">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="mailto:jxctno@gmail.com" target="_blank" rel="noopener noreferrer" title="Gmail">
        <i className="far fa-envelope"></i>
      </a>
    </footer>
  );
}

export default Footer;
