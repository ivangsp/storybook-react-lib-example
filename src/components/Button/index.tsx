import React from 'react';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  const handleOnClick = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  return <button onClick={handleOnClick}>{label}</button>;
};
