import React from 'react';
import './Button.css';

function NumberButton(props) {
  return (
    <button onClick={() => props.onPress(props.value)} className={props.buttonStyle}>
      {props.value}
    </button>
  );
}

export default NumberButton;
