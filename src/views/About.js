import React from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import '../css/About.css'; // Ensure you have a CSS file for this if needed

function About() {
    return (
        <div className="about">
            <TopBar />
            <h1>About Me</h1>
            <p>More information about my background, interests, and professional journey.</p>
            <Footer />
        </div>
    );
}

export default About;
