// Basic credits page

import React from 'react';
import '../css/Credits.css';
import TopBar from '../TopBar';
import Footer from '../Footer';

// <script src="https://kit.fontawesome.com/8f6f16e58d.js" crossorigin="anonymous"></script> goes in index.html in public folder


function Credits() {
    return (
        <div className="Credits">
            <TopBar />
            <div className="container">
                <h2>Credits</h2>
                <br />
                <br />
                <br />
                <p>
                    This website was made using React.js, a JavaScript library for building user interfaces.
                    <br />
                    <br />
                    The source code for this website can be found on <a href="https://github.com/joshua-cotugno/jxctno.com"><i className='fa-brands fa-github'></i> GitHub</a>.
                    <br />
                    <br />
                    The source code for the original website can be found on <a href="https://github.com/jxctno/jxctno.github.io"><i className='fa-brands fa-github'></i> GitHub</a>.
                    <br />
                    <br />
                    The images on this website are mine unless otherwise stated.
                    <br />
                    <br />
                    The images on this website are hosted with <a href="https://imgbb.com"><i className='fa fa-link'></i> ImgBB</a>.
                    <br />
                    <br />
                    The icons on this website are from <a href="https://fontawesome.com"><i className='fa fa-link'></i> Font Awesome</a>.
                    <br />
                    <br />
                    This website is hosted with <a href="https://aws.amazon.com"><i className='fa-brands fa-amazon'></i> Amazon Web Services</a>.
                    <br />
                    <br />
                    Thank you for visiting my website! I hope you enjoyed it!
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default Credits;