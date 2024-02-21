import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Home.module.css';

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <div className={css.hello_Page_Container}>
        <ul className={css.title}>
          <li className={css.list_item}>Х</li>
          <li className={css.list_item}>Е</li>
          <li className={css.list_item}>Л</li>
          <li className={css.list_item}>Л</li>
          <li className={css.list_item}>О</li>
          <li className={css.list_item}>О</li>
          <li className={css.list_item}>У</li>
        </ul>
        <p className={css.info}>Цей сайт зроблений для тебе Катюша</p>
        <p className={css.info}>Вибирай куда хочеш першим ділом</p>
        <ul className={css.nav_list}>
          <NavLink to="/Love" className={css.nav_item}>
            Хронологія відносин
          </NavLink>
          <NavLink to="/Game" className={css.nav_item}>
            Гра
          </NavLink>
          <NavLink to="/Photos" className={css.nav_item}>
            Наші фоточки
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
