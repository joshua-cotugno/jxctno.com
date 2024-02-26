import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/TopBar.css";

function TopBar() {
    // Step 1: Create a state variable to track the current theme
    const [theme, setTheme] = useState("light");

    // Step 2: Function to toggle between dark and light themes
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        // Save the selected theme to local storage
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    // Step 3: Function to retrieve the saved theme from local storage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    return (
        <div className={`topbar ${theme === "dark" ? "dark-theme" : ""}`}>
            {/* Home */}
            <Link to="/" className="topbar-link">
                <button className="topbar-button">Home</button>
            </Link>
            {/* Computer Science */}
            <Link to="/computerscience" className="topbar-link">
                <button className="topbar-button">Computer Science</button>
            </Link>
            {/* Music */}
            <Link to="/music" className="topbar-link">
                <button className="topbar-button">Music</button>
            </Link>
            {/* About */}
            <Link to="/about" className="topbar-link">
                <button className="topbar-button">About</button>
            </Link>
            
        </div>
    );
}

export default TopBar;
