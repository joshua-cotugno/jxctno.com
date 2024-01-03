import React, { useEffect } from "react";
import "./css/Content.css";

function ContentBoxMain({ id, title, content }) { // content is a large array where each element is a paragraph
    return (
        <div id={id} className="content-box-main">
            <h2>{title}</h2>
            {content.map((paragraph) => (
                <p>{paragraph}</p>
            ))}
        </div>
    );
}

function ContentBoxSecondary({ id, title, content }) {
    return (
        <div id={id} className="content-box-secondary">
            <h2>{title}</h2>
            {content.map((paragraph) => (
                <p>{paragraph}</p>
            ))}
        </div>
    );
}

function Slideshow({ id, imageURLs, imageAlts }) { // imageURLs and imageAlts are arrays
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
            <span>HELLO I AM HERE</span>
        </div>
    );
}


function Collapse({ title, content }) {
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
        <div className="collapsible">
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
