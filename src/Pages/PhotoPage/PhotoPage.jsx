import css from './Photo.module.css';
import { motion } from 'framer-motion';
import photo_first from './images/photo_first.jpg';
import photo_second from './images/photo_2024-02-21_08-34-24.jpg';
import photo_third from './images/photo_2024-02-21_08-34-32.jpg';
import photo_fourth from './images/photo_2024-02-21_08-34-36.jpg';
import photo_fifth from './images/photo_2024-02-21_08-34-42.jpg';
import photo_sixth from './images/photo_2024-02-21_09-06-25.jpg';
import photo_seventh from './images/photo_2024-02-21_09-06-29.jpg';
import photo_eighth from './images/photo_2024-02-21_09-06-36.jpg';
import photo_nineth from './images/photo_2024-02-21_09-06-40.jpg';
import photo_tenth from './images/photo_2024-02-21_09-06-43.jpg';
import photo_eleventh from './images/photo_2024-02-21_09-06-48.jpg';
import photo_tvelveth from './images/photo_2024-02-21_09-06-52.jpg';
import photo_thirteenth from './images/photo_2024-02-21_09-06-56.jpg';
import photo_fourtinth from './images/photo_2024-02-21_09-07-00.jpg';
import photo_fifteenth from './images/photo_2024-02-21_09-07-04.jpg';
import photo_sixteenth from './images/photo_2024-02-21_09-07-07.jpg';
import photo_seventeenth from './images/photo_2024-02-21_09-07-10.jpg';
import photo_eighteenth from './images/photo_2024-02-21_09-07-14.jpg';

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

const PhotoPage = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className={css.photo_page}
    >
      <motion.h1 className={css.title} variants={buttonssAnimation} custom={1}>
        Наші фооотоочкии
      </motion.h1>
      <ul className={css.photo_list}>
        <motion.li variants={buttonssAnimation} custom={2}>
          <img src={photo_first} alt="" className={css.photo_1} />
        </motion.li>
        <motion.li variants={buttonssAnimation} custom={3}>
          <img src={photo_second} alt="" className={css.photo_2} />
        </motion.li>
        <motion.li variants={buttonssAnimation} custom={4}>
          <img src={photo_third} alt="" className={css.photo_2} />
        </motion.li>
        <motion.li variants={buttonssAnimation} custom={5}>
          <img src={photo_fourth} alt="" className={css.photo_3} />
        </motion.li>
        <motion.li variants={buttonssAnimation} custom={6}>
          <img src={photo_fifth} alt="" className={css.photo_1} />
        </motion.li>
        <motion.li variants={buttonssAnimation} custom={7}>
          <img src={photo_sixth} alt="" className={css.photo_4} />
        </motion.li>
        <motion.li variants={buttonssAnimation} custom={7}>
          <img src={photo_seventh} alt="" className={css.photo_4} />
        </motion.li>
        <motion.li variants={buttonssAnimation} custom={7}>
          <img src={photo_eighth} alt="" className={css.photo_4} />
        </motion.li>
        <motion.li variants={buttonssAnimation} custom={7}>
          <img src={photo_nineth} alt="" className={css.photo_4} />
        </motion.li>
        <motion.li variants={buttonssAnimation} custom={7}>
          <img src={photo_tenth} alt="" className={css.photo_4} />
        </motion.li>
        <motion.li variants={buttonssAnimation} custom={7}>
          <img src={photo_eleventh} alt="" className={css.photo_4} />
        </motion.li>
        <motion.li variants={buttonssAnimation} custom={7}>
          <img src={photo_tvelveth} alt="" className={css.photo_4} />
        </motion.li>
        <motion.li variants={buttonssAnimation} custom={7}>
          <img src={photo_thirteenth} alt="" className={css.photo_4} />
        </motion.li>
        <motion.li variants={buttonssAnimation} custom={7}>
          <img src={photo_fourtinth} alt="" className={css.photo_5} />
        </motion.li>
        <motion.li variants={buttonssAnimation} custom={7}>
          <img src={photo_fifteenth} alt="" className={css.photo_5} />
        </motion.li>
        <motion.li variants={buttonssAnimation} custom={7}>
          <img src={photo_sixteenth} alt="" className={css.photo_6} />
        </motion.li>
        <motion.li variants={buttonssAnimation} custom={7}>
          <img src={photo_seventeenth} alt="" className={css.photo_6} />
        </motion.li>
        <motion.li variants={buttonssAnimation} custom={7}>
          <img src={photo_eighteenth} alt="" className={css.photo_7} />
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default PhotoPage;
