// Card.js

import React from 'react';
import './css/Card.css'; // Import your styles for the cards

function Card({ id, title, content, imgURL, imgAlt }) {
  return (
    <div id={id} className="card">
      <h2>{title}</h2>
      <img src={imgURL} alt={imgAlt}></img>
      <p>{content}</p>
    </div>
  );
}

export default Card;
