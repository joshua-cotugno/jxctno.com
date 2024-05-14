import React from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import '../css/ComputerScience.css'; // Ensure you have a CSS file for this if needed

function ComputerScience() {
    return (
        <div className="computer-science">
            <TopBar />
            <h1>Computer Science Projects</h1>
            <p>Here are some of my projects related to computer science.</p>
            <Footer />
        </div>
    );
}

export default ComputerScience;
