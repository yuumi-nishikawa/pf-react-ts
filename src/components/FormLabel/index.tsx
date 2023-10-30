import React from 'react';
import Style from './FormLabel.module.css';

const FormLabel = ({ title }) => {
  return (
    <label className={Style.labelTitle}>{title}</label>
  );
}

export default FormLabel;