import React from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import '../css/Other.css'; // Ensure you have a CSS file for this if needed

function Other() {
    return (
        <div className="other">
            <TopBar />
            <h1>Other Projects</h1>
            <p>This page includes various other projects and interests.</p>
            <Footer />
        </div>
    );
}

export default Other;
