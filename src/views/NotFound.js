import React from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import '../css/NotFound.css'; // Make sure to have a CSS for styling

function NotFound() {
    return (
        <div className="not-found">
            <TopBar />
            <h1>404 Error</h1>
            <p>The page you are looking for doesn't exist.</p>
            <Footer />
        </div>
    );
}

export default NotFound;
