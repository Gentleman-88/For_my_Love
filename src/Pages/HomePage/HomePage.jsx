import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const textAnimation = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const buttonAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const buttonsAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

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

const HomePage = () => {
  return (
    <div className="homePage">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={textAnimation}
        custom={2}
        className="hello_Page_Container"
      >
        <motion.ul variants={textAnimation} custom={4} className="title">
          <li className="list_item">Х</li>
          <li className="list_item">Е</li>
          <li className="list_item">Л</li>
          <li className="list_item">Л</li>
          <li className="list_item">О</li>
          <li className="list_item">О</li>
          <li className="list_item">У</li>
        </motion.ul>
        <motion.p variants={buttonAnimation} custom={5} className="info">
          Цей сайт зроблений для тебе Катюша
        </motion.p>
        <motion.p variants={buttonsAnimation} custom={6} className="info">
          Вибирай куда хочеш першим ділом
        </motion.p>
        <motion.ul custom={7} variants={buttonssAnimation} className="nav_list">
          <NavLink to="/Love" className="nav_item">
            Хронологія відносин
          </NavLink>
          <NavLink to="/Game" className="nav_item">
            Гра
          </NavLink>
          <NavLink to="/Photos" className="nav_item">
            Наші фоточки
          </NavLink>
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default HomePage;
