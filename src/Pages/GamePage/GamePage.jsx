import React from 'react';
import css from './Game.module.css';
import Board from 'components/Board/Board';

const GamePage = () => {
  return (
    <div className={css.game}>
      <Board />
      <h1 className={css.title}></h1>
    </div>
  );
};

export default GamePage;
