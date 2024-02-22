import React from 'react';
import './Reset.css';
import GameState from '../../Redux/game/gameStore';
import { motion } from 'framer-motion';

const buttonssAnimation = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Reset = ({ gameState, onReset }) => {
  if (gameState === GameState.inProgress) {
    return;
  }
  return (
    <motion.button
      initial="hidden"
      whileInView="visible"
      variants={buttonssAnimation}
      custom={3}
      onClick={onReset}
      className="reset_btn"
    >
      Заново
    </motion.button>
  );
};

export default Reset;
