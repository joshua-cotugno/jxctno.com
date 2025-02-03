import React from "react";
import "../styles/Links.css";

const LinkItem = ({ icon, destination, label }) => {
  return (
    <a
      href={destination}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button"
    >
      <i className={`${icon} mr-2`}></i> {label}
    </a>
  );
};

const Links = () => {
  const linkData = [
    { icon: "fab fa-youtube", destination: "https://youtube.com/@PurplePropaganda", label: "YouTube" },
    { icon: "fab fa-instagram", destination: "https://instagram.com/purple.propaganda", label: "Instagram" },
    { icon: "fab fa-tiktok", destination: "https://tiktok.com/@purple.propaganda", label: "TikTok" },
    { icon: "fab fa-soundcloud", destination: "https://soundcloud.com/", label: "SoundCloud (COMING SOON)" }
  ];

  return (
    <div className="flex flex-col space-y-4 mt-6">
      {linkData.map((link, index) => (
        <LinkItem key={index} {...link} />
      ))}
    </div>
  );
};

export default Links;