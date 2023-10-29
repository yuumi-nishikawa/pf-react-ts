import React, { useState } from 'react';
import Style from './MobileMenu.module.css';
import { Link } from 'react-router-dom';

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={Style.mobileMenu}>
      <div className={`${Style.menuButton} ${isOpen ? Style.open : ''}`} onClick={toggleMenu}>
        <div className={Style.bar}></div>
        <div className={Style.bar}></div>
        <div className={Style.bar}></div>
      </div>
      {isOpen && (
        <div className={Style.menuItems}>
          <ul className={Style.nav}>
            <li className={Style.nav__item}>
              <Link to="/signIn" onClick={toggleMenu}>ログイン</Link>
            </li>
            <li className={Style.nav__item}>
              <Link to="/signUp" onClick={toggleMenu}>新規登録</Link>
            </li>
            <li className={Style.nav__item}>
              <Link to="/writing" onClick={toggleMenu}>ジャーナリングしてみよう</Link>
            </li>
            <li className={Style.nav__item}>
              <Link to="/articles" onClick={toggleMenu}>今までの記録</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
