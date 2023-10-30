import React from 'react';
import style from './TopTitle.module.css';

interface Props {
  title: string;
  children?: React.ReactNode;
}


const TopTitle: React.FC<Props> = ({ title, children, ...rest }) => {
  return (
    <h2 className={style.topTitle} {...rest}>
      {title}
      {children}
    </h2>
  );
}

export default TopTitle;