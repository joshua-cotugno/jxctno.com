import React from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import '../css/Credits.css'; // Ensure you have a CSS file for this if needed

function Credits() {
    return (
        <div className="credits">
            <TopBar />
            <h1>Credits</h1>
            <p>Acknowledgments and credits for contributions to my projects.</p>
            <Footer />
        </div>
    );
}

export default Credits;
