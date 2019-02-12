import React from 'react';
import './Button.css';

function ActionButton(props) {
  return (
    <button onClick={() => props.onPress(props.value)} className={props.buttonStyle}>
      {props.display}
    </button>
  );
}

export default ActionButton;
