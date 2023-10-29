import React from 'react';
import Style from './Button.module.css';

const SignButton = ({ title }) => {
  return (
    <button className={Style.button}>{title}</button>
  );
}

export default SignButton;