import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
  // function onEntry(entry) {
  //   entry.forEach(change => {
  //     if (change.isIntersecting) {
  //       change.target.classList.add('element-show');
  //     }
  //   });
  // }

  // let options = {
  //   threshold: [0.5],
  // };
  // let observer = new IntersectionObserver(onEntry, options);
  // let elements = document.querySelectorAll('.element-animation');

  // for (let elm of elements) {
  //   observer.observe(elm);
  // }

  return (
    <div className="homePage">
      <div className="hello_Page_Container">
        <ul className="title">
          <li className="list_item">Х</li>
          <li className="list_item">Е</li>
          <li className="list_item">Л</li>
          <li className="list_item">Л</li>
          <li className="list_item">О</li>
          <li className="list_item">О</li>
          <li className="list_item">У</li>
        </ul>
        <p className="info">Цей сайт зроблений для тебе Катюша</p>
        <p className="info">Вибирай куда хочеш першим ділом</p>
        <ul className="nav_list">
          <NavLink to="/Love" className="nav_item">
            Хронологія відносин
          </NavLink>
          <NavLink to="/Game" className="nav_item">
            Гра
          </NavLink>
          <NavLink to="/Photos" className="nav_item">
            Наші фоточки
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
