import React from 'react';
import css from './Game.module.css';
import TicTacToe from 'components/TicTacToe/TicTacToe';

const GamePage = () => {
  return (
    <div className={css.game}>
      <TicTacToe />
    </div>
  );
};

export default GamePage;
