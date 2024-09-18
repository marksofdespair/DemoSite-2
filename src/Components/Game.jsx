import React, { useState, useEffect } from 'react';
import Board from './Board';
import './Game.css';
import '../assets/CardBack.png';
import '../assets/CardFront1.png';
import '../assets/CardFront2.png';

const initialCards = [
  { id: 1, image: 'CardFront1.png', isFlipped: false, isMatched: false },
  { id: 2, image: 'CardFront1.png', isFlipped: false, isMatched: false },
  { id: 3, image: 'CardFront2.png', isFlipped: false, isMatched: false },
  { id: 4, image: 'CardFront2.png', isFlipped: false, isMatched: false },
  // Will add more pairs as needed
];

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function Game() {
  const [cards, setCards] = useState(shuffleArray([...initialCards]));
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [isChecking, setIsChecking] = useState(false);

  const handleCardClick = (card) => {
    if (isChecking || card.isFlipped || card.isMatched) return;

    if (!firstCard) {
      setFirstCard(card);
      setCards((prev) =>
        prev.map((c) =>
          c.id === card.id ? { ...c, isFlipped: true } : c
        )
      );
    } else if (!secondCard) {
      setSecondCard(card);
      setCards((prev) =>
        prev.map((c) =>
          c.id === card.id ? { ...c, isFlipped: true } : c
        )
      );
      setIsChecking(true);
    }
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard.image === secondCard.image) {
        setCards((prev) =>
          prev.map((c) =>
            c.image === firstCard.image
              ? { ...c, isMatched: true }
              : c
          )
        );
        resetTurn();
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.id === firstCard.id || c.id === secondCard.id
                ? { ...c, isFlipped: false }
                : c
            )
          );
          resetTurn();
        }, 1000);
      }
    }
  }, [secondCard]);

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setIsChecking(false);
  };

  return (
    <div className="game">
      <Board cards={cards} onCardClick={handleCardClick} />
      <button onClick={() => setCards(shuffleArray([...initialCards]))}>Reset Game</button>
    </div>
  );
}

export default Game;
