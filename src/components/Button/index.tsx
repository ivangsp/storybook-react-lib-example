import React from 'react';
import { Variant } from '../../types';
import { ButtonStyled } from './ButtonStyles';

export type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  variant: Variant;
};

const Button: React.FC<ButtonProps> = ({ onClick, variant, children }) => {
  const handleOnClick = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <ButtonStyled variant={variant} onClick={handleOnClick}>
      <div>{children}</div>
    </ButtonStyled>
  );
};

export default Button;
