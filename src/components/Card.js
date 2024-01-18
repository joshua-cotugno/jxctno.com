import React from 'react';
import '../css/Card.css'; // Import your styles for the cards
import PropTypes from 'prop-types'; // Import PropTypes for type checking

function Card({ id, title, content, imgURL, imgAlt, redirectURL }) {
  const handleClick = () => {
      window.location.href = redirectURL; // Redirect to the specified URL if no onClick function is specified
  };

  return (
    <div id={id} className="card" onClick={handleClick}>
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
