import React from 'react';
import css from './Love.module.css';
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

const Love = () => {
  return (
    <div className={css.Love}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        variants={buttonssAnimation}
        custom={2}
        className={css.title}
      >
        👩🏻‍❤️‍💋‍👨🏽
      </motion.span>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        variants={buttonssAnimation}
        custom={3}
        className={css.list}
      >
        <li>
          <h3 className={css.data}>29.09.2022</h3>
          <p className={css.memories}>
            Цього дня ти мені написала і я був чутка в шоці, що ти рішила
            написати мені, але я сразу поняв, шо якшо-шо то без помощі на курсі
            не лишусь
          </p>
        </li>
        <li>
          <h3 className={css.data}>Амеріка</h3>
          <p className={css.memories}>
            Общались чисто як знайомі, даже здружились не сразу. Могли то кожен
            день общатись, то по днів 5 не давати про себе знати, але шось
            вертало дати про себе знати то тебе то мене.
          </p>
        </li>
        <li>
          <h3 className={css.data}>Still in Амеріка</h3>
          <p className={css.memories}>
            Сталась дуууже не камельфо ситуація для мене, тай по моїй вині, зато
            для тебе смішна
          </p>
        </li>
        <li>
          <h3 className={css.data}>Тобі не спалось</h3>
          <p className={css.memories}>
            Наш перший раз коли ми добре пообщались, і нормально здружились. Це
            ще Америка, я одного вечора з бабусьою дивився серіал по Нетфлікс. І
            тут бачу шо хтось пише, а то тииии. Я почав тобі розказувати шо за
            серіал дивимось, тай тема за темою і я поняв шо з тобою цікаво. Ця
            наша розмова для мене як початок наших дружніх відносин
          </p>
        </li>
        <li>
          <h3 className={css.data}>Маде ін Романія</h3>
          <p className={css.memories}>
            Вже не в Штатах, а на родіні. Спустя пів року спілкування накінецто
            хоть +- один часовий пояс.
          </p>
        </li>
        <li>
          <h3 className={css.data}>До 02:00АМ</h3>
          <p className={css.memories}>
            Наша перша розмова як близьких друзів. Не мені ні тобі не спалось і
            ми так розговорились, шо проходила година за годиною, а ми не хотіли
            розходитись. <br />
            <br /> P.S Доречі тоді мої мама і тато перший раз почули про тебе
          </p>
        </li>
        <li>
          <h3 className={css.data}>"Ти мені нравишся"</h3>
          <p className={css.memories}>
            Це вже Болгарія, ми вже чуть більше ніж півроку общались. Десь
            початок літа і сталась наша перша розмова по телефонууу, з камерами.
            І мені так понравилось з тобою і так говорити, а не тільки в
            переписці, ще побачив яка ти гарна і як класно смієшся і до сміху ще
            дуже гарна посмішка. <br />В мене і до того вже проявлялась
            сімпатія, але після розмови я точно поняв що ти мені нравишся, і вот
            вже десь перед сном я сказав тобі: "Ти мені нравишся". <br />І
            оказалось шо це взаєєємнооо, після того дня наші відносини почали
            рости ще стрімкіше і я цьому був дуже радий
          </p>
        </li>
        <li>
          <h3 className={css.data}>Ооосіінь</h3>
          <p className={css.memories}>
            Відносини доросли до такого, що купився білет в Варшаву задля того,
            щоб побачити найгарнішу дівчинку в світііііі.
          </p>
        </li>
        <li>
          <h3 className={css.data}>21.12.2023</h3>
          <p className={css.memories}>
            Наша перша зустріч. Як же мені було не ловко в наш перший деееень.{' '}
            <br />
            Але я ніколи не забуду той день і ті емоції. Перша секунда як тільки
            побачив тебе, я не міг повірити що це правда і що я бачу тебе перед
            собою наяву, в мене все було як в тумані аж до того моменту коли я
            помідори пересолив. Не зря кажуть коли шось пересолив, то значить
            влюбльооон
          </p>
        </li>
        <li>
          <h3 className={css.data}>22.12.2023</h3>
          <p className={css.memories}>
            А вот цей день я точно буду пам'ятати все життя. <br />
            Наша перша прогулянка, снігопад, наші перші фотки. <br />
            Але саме головне сталось ввечері, Аня тоді захотіла спати з тобою,
            але відпустила нас в кімнату чутка посидіти.
            <br />
            <br />
            Чому я сказав то про що зараз напишу, я тобі ще разів
            1000006969696969 розкажу, і наступний раз вживууу
            <br />
            <br />
            Ми зайшли в кімнату, і тут ти почула від мене: <br />
            "Я тебе люблю" <br />
            <br />А потім до всього щастя стався наш перший поілунок, і тому я
            можу назвати цей день одним з найщасливіших днів в моєму житті, тому
            що в ньому з'явилась ти як моя пара і людина з якою провести все
            своє життя❤️
          </p>
        </li>
        <li>
          <h3 className={css.data}>27.12.2023</h3>
          <p className={css.memories}>
            Одні з найгрусніших днів, тому що прийшлось прощатися, але які
            емоції та почуття я взяв з собою, таких я не мав ні разу. <br />І це
            завдяки тобі, дуже дуууже дякую тобі за все: за всі емоції, почуття,
            підтримку, за те, що завжди поряд, за те, що ти є в моєму житті ❤️.
          </p>
        </li>
        <li>
          <h3 className={css.data}>Далі більше</h3>
          <p className={css.memories}>Наша хісторі ще не дописана...</p>
          <textarea
            className={css.textarea}
            name="love"
            id="1"
            cols="30"
            rows="10"
          ></textarea>
        </li>
        <h3 className={css.laugh}>
          І ще, не переставай сміятись так, як ти смієшся, я твій сміх дуже
          люблю ❤️
        </h3>
      </motion.ul>
    </div>
  );
};

export default Love;
