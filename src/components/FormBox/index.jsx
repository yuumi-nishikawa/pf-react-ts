import React from 'react';
import Style from './FormBox.module.css';

const FormBox = ({ children, ...rest }) => {
  return (
    <input className={Style.formBox} {...rest}>
      {children}
    </input>
  );
}

export default FormBox;