import React from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import '../css/Music.css'; // Ensure you have a CSS file for this if needed
import ContentBox from "../components/ContentBox";

function Music() {
    return (
        <div className="music">
            <TopBar />
            <h1>Music Projects</h1>
            <p>This page is dedicated to my music projects and performances.</p>
            <ContentBox
                id={1}
                title="Guitar"
                text={[
                    "I've been playing guitar for a good 4 years by now, starting out on ukulele at schoool, then moved onto my mum's old Cruiser Crafter Sunburst Strat style which we retrieved from my grandparets loft along with a Marshall practice amp. I rember the forst song i ever pkayed on that was 'Zombie' by the Cranberries.",
                    "Since then, I have been in countless school concerts, performing both solo and in a band playing most guitar-like instruments (ukulele, bass and guitar). As of writing, I'm preparing for my final concert at my sixth form where I've convinced my class to join me in playing 'Cigarette Daydreams' by Cage the Elephant and 'Take Five' by Dave Brubeck."
                ]}
                imageUrl={"https://i.ibb.co/Ptm37Sj/IMG-20220706-WA0007.jpg"}
            />
            <ContentBox
            id={2}
            title="Arrangements"
            text={[
                "I've been arranging music for a while now, using ", <a href="https://musescore.com/" target="_blank" rel="noreferrer">MuseScore</a>, " to create sheet music for various instruments. I've arranged music for school concerts, personal commisions, and am starting out on selling commisions as well!",
                "I arrange for most instruments to a basic level, but I'm most comfortable with rock instruments (guitar, bass, drums) and keys. I'm currently working on a transcription of Take Five, as mentioned above, for Basoon, Electric Guitar, Drums, Bass and Piano",
                "My favourite pieces ive transcribed are probably Teenagers by My chemical Romance, Kaibutsu - YOASOBI and Trapdoor by Twenty One Pilots",
                "You can check out my MuseScore profile by clicking ",
                <a href="https://musescore.com/user/52780709/sheetmusic" target="_blank" rel="noreferrer">here!</a>,
            ]}
            imageUrl={"https://i.ibb.co/jfPgdNc/musescore-profile.png"}
            />

            <ContentBox
            id={3}
            title="Compositions"
            text={[
                "I've been composing music for a while now, starting out with simple melodies on the piano, then moving onto more complex pieces for my A Levels. I tend to lean towards Indie Rock, with inspirations coming from Lush, Twenty One Pilots, Two Door Cinema Club, Paramore and My Chemical Romance.",
                "I feel I work best when bouncing ideas with other people, so I'm always looking for people to collaborate with. I've just finished a piece for my A Level coursework, which is called 'Railhead', inspired by the book of the same name by Philip Reeve.",
                "It's an indie rock piece with a glimmering, chorus saturated guitar tone and lyrics taken from Robert Louis Stevenson's 'From a Railway Carriage'. I'm currently helping out a friend with an upbeat number as of yet, nameless.",
                "A project I am slowly gaining traction is a concept based on Stravisky's 'The Rite of Spring', but with a more modern twist. It's a long-term project, but I'm excited to see where it goes.",
                "Here is a snippet of 'Railhead':",
                <audio controls>
                    <source src="https://joshuacotugno.com/music/railhead.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            ]}
            imageUrl={"https://i.ibb.co/0j3tLwv/railhead.png"}
            />
            <Footer />
        </div>
    );
}

export default Music;
