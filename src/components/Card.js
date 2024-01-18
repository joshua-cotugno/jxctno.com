import React, { useRef } from 'react';
import '../css/Card.css'; // Import your styles for the cards
import PropTypes from 'prop-types'; // Import PropTypes for type checking

function Card({ id, title, content, imgURL, imgAlt, redirectURL }) {
  const handleClick = () => {
      if (redirectURL[0] === '#') {
          const element = document.getElementById(redirectURL.substring(1));
          if (element) {
              console.log(`Scrolling to ${redirectURL}`);
              element.scrollIntoView({ behavior: 'smooth' });
          }
      } else {
        window.location = redirectURL;
      }
  };

  return (
    <div id={id + "-card"} className="card" onClick={handleClick}>
      <h2 className='card-title'>{title}</h2>
      <div className="imgContainer">
      <img src={imgURL} alt={imgAlt} width="100%" />
      </div>
      <p>{content}</p>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  redirectURL: PropTypes.string.isRequired,
};

export default Card;
