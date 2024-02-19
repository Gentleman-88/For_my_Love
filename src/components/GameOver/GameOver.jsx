import GameState from '../../Redux/game/gameStore';
import React from 'react';
import './GameOver.css';

const GameOver = ({ gameState }) => {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOWins:
      return <div className="game-over">Виграв: О</div>;
    case GameState.playerXWins:
      return <div className="game-over">Виграв: X</div>;
    case GameState.draw:
      return <div className="game-over">Нічия</div>;
    default:
      return <></>;
  }
};

export default GameOver;
