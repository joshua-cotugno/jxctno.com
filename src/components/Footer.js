import React from 'react';
import '../css/Footer.css';
import { Link } from 'react-router-dom';

import '../css/FontAwesomeIcons.css'; // Ensure you have a CSS file for this if needed

function Footer() {
    return (
        <footer className="footer">
            <p>Website created by Joshua Cotugno.</p>
            <p>Find me on <Link to="https://www.instagram.com/jxctno.bmp/">Instagram</Link></p>
            <p>Powered by <Link to="https://reactjs.org/">React</Link> and <Link to="https://aws.amazon.com/amplify/">AWS Amplify</Link>.</p>
            <p>&copy; {new Date().getFullYear()} Joshua Cotugno. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;
