import React from 'react';
import './LoveInYou.css';
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

const LoveInYou = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="love_container"
    >
      <motion.h1 className="love_title" variants={buttonssAnimation} custom={1}>
        Що я в тобі люблю
      </motion.h1>
      <motion.div
        class="birthday-present"
        initial="hidden"
        whileInView="visible"
        variants={buttonssAnimation}
        custom={1}
      >
        <div class="present">
          <input id="invisible-checkbox" type="checkbox" />
          <label class="cover" for="invisible-checkbox"></label>
          <div class="happybirthday">
            Твої оченята. Твій сміх. Твої співи. Тебе всю, всю
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoveInYou;
