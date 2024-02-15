import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Home.module.css';
import { useSelector } from 'react-redux';
import { selectUserIsLoggedIn } from '../../Redux/auth/AuthSlice.selectors';

const HomePage = () => {
  const isLoggedin = useSelector(selectUserIsLoggedIn);

  return (
    <div>
      {!isLoggedin ? (
        <>
          <ul className={css.title}>
            <li className={css.list_item_first}>Х</li>
            <li className={css.list_item}>Е</li>
            <li className={css.list_item}>Л</li>
            <li className={css.list_item}>Л</li>
            <li className={css.list_item}>О</li>
            <li className={css.list_item}>О</li>
            <li className={css.list_item_last}>У</li>
          </ul>
          <p className={css.info}>Цей сайт зроблений для Катюші на 8 березня</p>
          <ul className={css.list_reg}>
            <li className={css.list_reg_item}>Якщо перший раз</li>
            <li className={css.list_reg_item}>Якщо не перший раз</li>
          </ul>
          <div className={css.arrows}>
            <span className={css.arrow_one}>←</span>
            <span className={css.arrow_two}>→</span>
          </div>
          <ul className={css.list}>
            <NavLink to="/register" className={css.register_btn}>
              Зареєструватись
            </NavLink>
            <NavLink to="/login" className={css.login_btn}>
              Ввійти
            </NavLink>
          </ul>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HomePage;
