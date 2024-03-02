import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <div>
      <header className={css.header}>
        <NavLink to="/" className={css.btn}>
          ❤️
        </NavLink>
        <NavLink to="/love" className={css.btn_rel}>
          Хронологія наших відносин
        </NavLink>
        <NavLink to="/Game" className={css.btn_photo}>
          Хрестики/Нолікі
        </NavLink>
        <NavLink to="/Photos" className={css.btn_photo}>
          Наші топові фоточки
        </NavLink>
        <NavLink to="/LoveInYou" className={css.btn_rel}>
          Що я в тобі люблююю
        </NavLink>
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Navigation;
