import React, { useRef } from "react";
import "../css/App.css";
import "../css/FontAwesome.css";
import TopBar from "../components/TopBar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { ContentBoxMain, ContentBoxSecondary, ImageBox, Slideshow, VideoBox, Collapse } from "../components/Content";

// Function to display computer science-related content
function ComputerScience() {
 
  return (
    <div className="App">
      {/* Render the top bar */}
      <TopBar />

      {/* Main container for computer science content */}
      <div className="container">
        {/* Cards displaying different computer science sections */}
        <Card
          id="pc"
          title="My PC Hackintosh"
          imgURL="https://i.ibb.co/CHFP7JK/hackintosh-2.jpg"
          imgAlt="My PC Hackintosh"
          content="I planned out and ordered the parts for my PC bespoke to run macOS."
        />
        <Card
          id="website"
          title="This Website"
          imgURL="https://i.ibb.co/wgP0P92/websitepic.png"
          imgAlt="Screenshot of this website"
          content="I built this website from scratch using ReactJS and CSS."
        />
        <Card
          id="assemblr"
          title="Assemblr - Computer Science A Level Project"
          imgURL="../img/assemblr.png"
          imgAlt="Assemblr"
          content="I am creating a webapp to help students learn assembly language, using a Raspberry Pi Pico."
        />
        <Card
          id="linux"
          title="Linux"
          imgURL="../img/linux.png"
          imgAlt="Linux"
          content="I have been using Linux for a few years now, and I have used many different distros."
        />
      </div>
      <div className="page-container">

        {/* Main content box */}
        <ContentBoxMain
          id="hackintosh"
          title="My PC Hackintosh"
          content={[
            "I started my hackintosh in late 2022 after my EPQ - I realised that to create music GarageBand made it much easier to use a Mac. I had a my laptop, but it was too slow to run simple music apps, even in linux. I decided to build a PC, but I wanted to run macOS on it. I found out about hackintoshes, and decided to build one.",
            "I planned out and ordered the parts for my PC bespoke to run macOS. I used an intel i5-10400F, a Gigabyte H410M motherboard, 16GB of RAM, a 1TB SSD, an RX 480 and an assortment of other parts. I installed macOS Ventura on it, and it worked perfectly.",
            "That is, until Apple decided to ban my Apple ID from using iCloud. I had to log out of everything macOS, and I used a different Apple ID to log in.",
            "That lasted for about a month, until I tried to upgrade to Sonoma. I tried to upgrade, but it failed. I tried to reinstall Ventura, but it also failed. I havent been able to get it to work since, and I have been using Windows and Fedora on it since.",
            <p><b>I plan on continuing this in the near future, and updates will be posted here!</b></p>
          ]}
        />
        <ContentBoxMain
          id="website"
          title="This Website"
          content={[
            "I built this website from scratch using ReactJS and CSS. I started by creating the basic structure of the website in plain html and css, and then I converted it to ReactJS teaching myself as I went along. I used the React Router to create the different pages.",
            "I am hosting this website on Amazon Web Services (AWS). I am using AWS Amplify to host the website, and I am using Squarespace to manage the domain name.",
            <p>Source code for this website is available on <a href="https://github.com/jxctno/jxctno.com"><icon class="fa fa-github" /> GitHub</a>.</p>
          ]} />

        <ContentBoxMain
          id="assemblr"
          title="Assemblr - Computer Science A Level Project"
          content={[
            <p>I am creating a webapp to help students learn assembly language, using a Raspberry Pi Pico. I am using the Pico as an emulator with an OLED display ro show the register values and the current instruction. It is emulating a CPU like the one on <a href="https://peterhigginson.co.uk/LMC/"><icon class="fa fa-external-link" /> Little Man Computer</a> since its designed primarily as a learning tool</p>,
            <p><i><b>This is currently a WIP, so keep an eye on this!</b></i></p>
          ]}
        />

        <ContentBoxMain
          id="linux"
          title="Linux"
          content={[
            <ImageBox
              imgURL="https://i.ibb.co/7QJZQ4V/2021-09-19-20-28-42.png"
              imgAlt="Screenshot on how I've customised my desktop to look" />,
            "I have been using Linux for a few years now, and I have used many different distros. I started with Raspberry Pi OS, and then I moved to Ubuntu, which I used for a while. I didn't really break out of the Debian ecosystem until about 2021, when I started using Fedora. Since then, I have used Fedora, Arch, Manjaro, SUSE and a few others. I have settled on Fedora as my main distro, and I use it on my laptop and my PC.",
            "I also used to use the KDE desktop environment, but I have recently switched to GNOME. I like the simplicity of GNOME, and I like the way it looks. I also like the way it works with Fedora, and the way it integrates with the rest of the system.",
            <p>'Ricing' is also something I have done a lot of. I have spent a lot of time customising my desktop, and I have made it look very nice - currently, I am using a customised version of the <a href='https://github.com/vinceliuice/Graphite-gtk-theme'><icon class='fa fa-external-link' /> Graphite GTK theme</a> styled in black and red, after the Thinkpad I use it on. I am also using the <a href='https://github.com/yeyushengfan258/Win10Sur-icon-theme'><icon class='fa fa-external-link' /> Win10Sur icon theme</a>, which I have also customised to match the rest of my desktop.</p>,
          ]}
        />

      </div>
      {/* Render the footer */}
      <Footer />
    </div>
  );
}

export default ComputerScience;
