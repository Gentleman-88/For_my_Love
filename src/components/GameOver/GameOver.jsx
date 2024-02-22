import GameState from '../../Redux/game/gameStore';
import React from 'react';
import './GameOver.css';
import { motion } from 'framer-motion';

const buttonssAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const GameOver = ({ gameState }) => {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOWins:
      return (
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={buttonssAnimation}
          custom={1}
          className="game-over"
        >
          Виграв: О
        </motion.div>
      );
    case GameState.playerXWins:
      return (
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={buttonssAnimation}
          custom={1}
          className="game-over"
        >
          Виграв: X
        </motion.div>
      );
    case GameState.draw:
      return (
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={buttonssAnimation}
          custom={1}
          className="game-over"
        >
          Нічия
        </motion.div>
      );
    default:
      return <></>;
  }
};

export default GameOver;
