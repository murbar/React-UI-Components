import React from 'react';
import './Button.css';

function NumberButton({ value, buttonStyle, onPress }) {
  return (
    <button onClick={() => onPress(value)} className={buttonStyle}>
      {value}
    </button>
  );
}

export default NumberButton;
