// Footer.js

import React from 'react';
import './css/Footer.css'; // Import your styles for the footer
import './css/FontAwesome.css'; // Import your styles for the footer

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2023 Joshua Cotugno</p>
      <a class="socials" href="https://instagram.com/jxctno.bmp"><i class="fa fa-instagram"></i> @jxctno.bmp</a>
      <a class="socials" href="mailto:jxctno@jxctno.com"><i class="fa fa-envelope"></i> jxctno@jxctno.com</a>
    </footer>
  );
}

export default Footer;
