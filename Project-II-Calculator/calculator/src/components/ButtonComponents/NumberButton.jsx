import React from 'react';
import './Button.css';

function NumberButton(props) {
  return (
    <button onClick={e => props.onPress(e, props.value)} className={props.buttonStyle}>
      {props.value}
    </button>
  );
}

export default NumberButton;
