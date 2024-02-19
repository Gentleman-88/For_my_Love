import React from 'react';
import './Reset.css';
import GameState from '../../Redux/game/gameStore';

const Reset = ({ gameState, onReset }) => {
  if (gameState === GameState.inProgress) {
    return;
  }
  return (
    <button onClick={onReset} className="reset_btn">
      Заново
    </button>
  );
};

export default Reset;
