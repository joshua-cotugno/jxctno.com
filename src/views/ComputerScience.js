import React from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import '../css/ComputerScience.css'; // Ensure you have a CSS file for this if needed
import ContentBox from '../components/ContentBox';

function ComputerScience() {
    return (
        <div className="computer-science">
            <TopBar />
            <h1>Computer Science Projects</h1>
            <p>Here are some of my projects related to computer science.</p>

            <ContentBox
                id={1}
                title="Hackintosh [WIP]"
                text={["I am currently working on a Hackintosh build (albeit slowly). I bought multiple components specifically for this project, to getmyself a working MacOS machine. I have successfully installed MacOS Ventura on my PC previously, but after upgrading to Sonoma, the whole thing collapsed. Currently it's just runnning Windows 11 & Fedora, but over the summer (2024) I plan to get MacOS running again.",
                <p>Specs</p>,
                <ul>
                    <li>Intel Core i5-10400F</li>
                    <li>Gigabyte H410M S2H*</li>
                    <li>16GB DDR4 RAM</li>
                    <li>ASUS ROG RX-460 8GB</li>
                    <li>1TB NVMe (Boot drive for Win 11)+ 1TB SATA SSD (Boot Drive for Fedora)</li>
                </ul>,
                <p class="footnote">*Currently in the process of replacing with MSI Z490-A PRO ATX, but my case is a mATX... :p</p>


                ]}
                imageUrl="https://i.ibb.co/CHFP7JK/hackintosh-2.jpg"
            />

            <ContentBox
            id={2}
            title="Linux Escapades"
            text={[
                "As mensioned above, I regularly use linux as my daily driver. I have used Fedora, Ubuntu, and Arch based distros, but cannot bring myself away from fedora - It is just so easy to use, and although Debian distros are where I started out on a Raspberry Pi 4 (stopping through Manjaro and ChromeOS/FydeOS), I just keep falling back to Fedora. I'm currently running Fedora 39 on my trusty Thinkpad, and a clone of the system on my PC",
                "In my time with linux (almost 5 years now - I started with Raspbian jessie on an old Sony VIAO notebook thats probably older than me), I have ventured into many a desktop enviroment, having tried out quite a few - Gnome + RhinoOS's XFCE revamp being my favourites. I currently am using a slightly tweaked version of",
                <a href="https://github.com/vinceliuice/WhiteSur-gtk-theme"> WhiteSur </a>, 
                "on Gnome, with some custom cursors and powerlevel10k as my ZSH theming engine."
            ]}
            imageUrl="https://i.ibb.co/097TDbM/image.png"/>
            <Footer />
        </div>
    );
}

export default ComputerScience;
