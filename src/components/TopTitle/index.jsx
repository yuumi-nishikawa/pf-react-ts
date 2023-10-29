import React from 'react';
import style from './TopTitle.module.css';

const TopTitle = ({ title, children, ...rest }) => {
  return (
    <h2 className={style.topTitle} {...rest}>
      {title}
      {children}
    </h2>
  );
}

export default TopTitle;