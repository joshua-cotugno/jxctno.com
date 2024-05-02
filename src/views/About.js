import React from 'react';
import '../css/About.css';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';

function About() {
    return (
        <div className="About">
            <TopBar />
            <div className="container">
                <h2>About Me</h2>
                <br />
                <br />
                <br />
                <p>
                    Hi! My name is Joshua Cotugno, and I am a student from Letchworth Garden City, England.
                    <br />
                    I am currently studying Computer Science, Music, and Physics at A-Level, and am planning to study Music Production at university.
                    <br />
                    I have a passion for technology, music, and tinkering with things to see how they work, such as building my own Hackintosh, creating my own website, and making music.
                    <br />
                    I have been playing guitar since 2020, and I love to play and write music in my free time. I also like tinkering with my home servers, learning new songs and techniques on guitar, and playing video games.
                    <br />
                    My favourite artists are My Chemical Romance, Paramore, Twenty One Pilots, and YOASOBI, specifically their combined lyrical and musical genius.
                    <br />
                    I also love to watch anime & read manga, my favourites being A Silent Voice, Frieren: Beyond Journey's End, and the manga for Tokyo Revengers.
                    <br />

                    </p>
            </div>
            <Footer />
        </div>
    );
}

export default About;