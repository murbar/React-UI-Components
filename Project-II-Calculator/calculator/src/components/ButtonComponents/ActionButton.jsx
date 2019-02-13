import React from 'react';
import './Button.css';

function ActionButton({ value, display, buttonStyle, onPress }) {
  return (
    <button onClick={() => onPress(value)} className={buttonStyle}>
      {display}
    </button>
  );
}

export default ActionButton;
