import React from "react";
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

function ImageBox({ id, imageURL, imageAlt, caption, wrap, align }) { // where wrap is either inline, split (text above and below)
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

function Slideshow({ id, imageURLs, imageAlts }) { // imageURLs and imageAlts are arrays
}

function VideoBox({ id, videoURL, videoAlt }) {
}

export { ContentBoxMain, ContentBoxSecondary, ImageBox, Slideshow, VideoBox };