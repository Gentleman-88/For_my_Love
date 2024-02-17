import React from 'react';
import { useDispatch } from 'react-redux';
import { apiRegisterUser } from '../../services/api';
import css from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.userName.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };

    dispatch(apiRegisterUser(formData));
    e.currentTarget.reset();
  };

  return (
    <div className={css.register_div}>
      <h1 className={css.title}>Зареєструватись</h1>
      <form onSubmit={onSubmit} className={css.sign_in}>
        <label className={css.label}>Ім'я: </label>
        <input
          type="text"
          name="userName"
          placeholder="Ім'я"
          minLength={2}
          required
          className={css.input}
        />
        <label className={css.label}>Емейл: </label>
        <input
          type="text"
          name="userEmail"
          placeholder="yourmail@gmail.com"
          required
          className={css.input}
        />
        <label className={css.label}>Пароль: </label>
        <input
          type="text"
          name="userPassword"
          placeholder="•••••••"
          minLength={7}
          required
          className={css.input}
        />
        <button type="submit" className={css.register_btn}>
          Зареєструватись
        </button>
      </form>
    </div>
  );
};

export default Register;
