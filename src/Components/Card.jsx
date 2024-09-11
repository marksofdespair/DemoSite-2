import React from 'react';
import './Card.css';

function Card({ card, onClick, isFlipped }) {
  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={() => onClick(card)}>
      <div className="card-front">
        <img src={card.image} alt="card front" />
      </div>
      <div className="card-back"></div>
    </div>
  );
}

export default Card;
