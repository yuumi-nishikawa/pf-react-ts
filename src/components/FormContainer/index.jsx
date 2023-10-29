import react from 'react';
import Style from './FormContainer.module.css';

const FormContainer = ({ children, ...rest }) => {
  return (
    <form className={Style.formContainer} {...rest}>
      {children}
    </form>
  );
}

export default FormContainer;