import React from 'react';
import Card from './Card';
import './Board.css';

function Board({ cards, onCardClick }) {
  return (
    <div className="board">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          onClick={onCardClick}
          isFlipped={card.isFlipped || card.isMatched}
        />
      ))}
    </div>
  );
}

export default Board;
