import React from 'react';
import './Button.css';

function ActionButton(props) {
  return (
    <button onClick={props.onPress} className={props.buttonStyle}>
      {props.value}
    </button>
  );
}

export default ActionButton;
