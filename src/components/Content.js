import React, { useEffect, useState, useRef } from "react";
import "../css/Content.css";


function ContentBoxMain({ id, title, content }) { // content is a large array where each element is a paragraph
  return (
    <div id={id} className="content-box-main">
      <h1 className="mainTitle"><a className="topLink" href="#headBar">{title} <icon className="up fa fa-arrow-up" /></a></h1>
      {content.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
      <br /><br />
    </div>
  );
}

function ContentBoxSecondary({ id, title, content }) {
  return (
    <div id={id} className="content-box-secondary">
      <h2 className="mainTitle"><a className="topLink" href="#headBar">{title} <icon className="up fa fa-arrow-up" /></a></h2>
      {content.map((paragraph) => (
        <p>{paragraph}</p>
      ))
      }
      <br />
    </div>
  );
}


function Slideshow({ id, imageURLs, imageAlts }) {
  // State to keep track of the current slide index
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    // Function to handle next/previous controls
    const plusSlides = (n) => {
      showSlides(slideIndex + n);
    };

    // Function to handle thumbnail image controls
    const currentSlide = (n) => {
      showSlides(n);
    };

    // Function to display slides
    const showSlides = (n) => {
      let newIndex = n;
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");

      // Reset to the first slide if exceeded the total number of slides
      if (newIndex > slides.length) {
        newIndex = 1;
      }
      // Set to the last slide if going backward from the first slide
      if (newIndex < 1) {
        newIndex = slides.length;
      }

      // Hide all slides
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      // Remove "active" class from all dots
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      // Display the current slide
      slides[newIndex - 1].style.display = "block";
      // Add "active" class to the corresponding dot
      dots[newIndex - 1].className += " active";

      // Update the slide index in the state
      setSlideIndex(newIndex);
    };

    // Initial call to display the first slide
    showSlides(slideIndex);
  }, [slideIndex]); // Depend on slideIndex to re-run the effect when it changes

  return (
    <div id={id} className="slideshow">
      {/* Slideshow container */}
      <div className="slideshow-container">
        {/* Full-width images with number and caption text */}
        {imageURLs.map((url, index) => (
          <div key={index} className={`mySlides fade ${index === slideIndex - 1 ? "active" : ""}`}>
            <div className="numbertext">
              {index + 1} / {imageURLs.length}
            </div>
            <img src={url} alt={imageAlts[index]} style={{ width: '100%' }} />
            <div className="text">Caption Text</div>
          </div>
        ))}

        {/* Next and previous buttons */}
        <a className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>
      </div>
      <br />

      {/* The dots/circles */}
      <div style={{ textAlign: 'center' }}>
        {imageURLs.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === slideIndex - 1 ? "active" : ""}`}
            onClick={() => currentSlide(index + 1)}
          ></span>
        ))}
      </div>
    </div>
  );
}

function VideoBox({ id, videoURL, videoAlt }) {
}
// ... existing imports and components

function ImageBox({ id, imageURL, imageAlt, caption, wrap, align }) {
  let classList; // Declare classList before using it

  if (align === undefined) {
    align = "left";
  }

  if (wrap === "inline") {
    classList = "image-box inline";
  } else if (wrap === "split") {
    classList = "image-box split";
  } else {
    classList = "image-box";
  }

  return (
    <div id={id} className={classList}>
      <img src={imageURL} alt={imageAlt} align={align} />
      <p>{caption}</p>
      <span></span>
    </div>
  );
}


function Collapse({ title, content, ident }) {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  }, []);

  return (
    <div className="collapsible" id={ident}>
      <button className="collapsible-button" onClick={() => setOpen(!open)}>
        {title}
      </button>
      {open && (
        <div className="collapsible-content">
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
}



export { ContentBoxMain, ContentBoxSecondary, ImageBox, Slideshow, VideoBox, Collapse };
