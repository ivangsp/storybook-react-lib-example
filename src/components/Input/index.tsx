import React, { useEffect, useState } from 'react';

export interface InputProps {
  value: string;
  name: string;
  onChange?: (value: string) => void;
}

const Input = ({ name, value, onChange }: InputProps) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === 'function') {
      onChange(event.target.value);
    } else {
      setInputValue(event.target.value);
    }
  };

  return <input name={name} value={inputValue} onChange={handleOnChange} />;
};

export default Input;
