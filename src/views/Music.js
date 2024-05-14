import React from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import '../css/Music.css'; // Ensure you have a CSS file for this if needed

function Music() {
    return (
        <div className="music">
            <TopBar />
            <h1>Music Projects</h1>
            <p>This page is dedicated to my music projects and performances.</p>
            <Footer />
        </div>
    );
}

export default Music;
