// Footer.js

import React from 'react';
import '../css/Footer.css'; // Import your styles for the footer
import '../css/FontAwesome.css'; // Import your styles for the footer

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2023 Joshua Cotugno</p>
      <a className="socials" href="https://instagram.com/jxctno.bmp"><i className="fa fa-instagram"></i>&nbsp; @jxctno.bmp</a>
      <a className="socials" href="mailto:jxctno@jxctno.com"><i className="fa fa-envelope"></i>&nbsp; jxctno@jxctno.com</a>
      <a href="./credits">Credits</a>
    </footer>
  );
}

export default Footer;
