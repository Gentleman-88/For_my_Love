import GameState from '../../Redux/game/gameStore';
import React from 'react';

const GameOver = ({ gameState }) => {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOWins:
      return 'Ігрок О виграв';
    default:
      return <></>;
  }
};

export default GameOver;
