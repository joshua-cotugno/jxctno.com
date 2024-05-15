// Simple Box for content with text and imageurl passed as props.
// Will alternate left and right image placement based on ID passed as prop.
// Will also alternate background color based on ID passed as prop.

import React from 'react';
import '../css/ContentBox.css';

const ContentBox = ({ id, title, text, imageUrl }) => {
    const isEven = id % 2 === 0;
    const backgroundColor = isEven ? 'light' : 'dark';
    const imagePlacement = isEven ? 'right' : 'left';

    return (
        <div className="content-box" class="contentbox contentbox--${backgroundColor}">
            <div className="content-box__text">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div style={{ float: imagePlacement }} class="content-box__image-container">
                <img src={imageUrl} alt={title}  className="content-box__image" />
            </div>
        </div>
    );
}

export default ContentBox;

// Path: src/components/ContentBox.css