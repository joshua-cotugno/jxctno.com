import React from 'react';
import '../css/Footer.css';
import { Link } from 'react-router-dom';

import '../css/FontAwesomeIcons.css'; // Ensure you have a CSS file for this if needed

function Footer() {
    return (
        <footer className="footer">
            <p>Website created by Joshua Cotugno.</p>
            <p>
            <Link to="https://www.instagram.com/jxctno.bmp/" class="inline-link"><icon class="fa fa-instagram"></icon> &nbsp;jxctno.bmp</Link> | &nbsp;
            <Link to="https://x.com/jxctno" class="inline-link"><icon class="fa-brands fa-x-twitter"></icon> &nbsp;jxctno</Link> | &nbsp;
            <Link to="https://www.github.com/jxctn0" class="inline-link"><icon class="fa fa-github"></icon> &nbsp;jxctn0</Link> | &nbsp;
            <Link to="https://reddit.com/u/jxctno" class="inline-link"><icon class="fa fa-reddit"></icon> &nbsp;u/jxctno</Link>
            </p>
            <p>Powered by <Link to="https://reactjs.org/" class="inline-link">React</Link> and <Link to="https://aws.amazon.com/amplify/" class="inline-link">AWS Amplify</Link>.</p>
            <p>&copy; {new Date().getFullYear()} Joshua Cotugno. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;
