import React from 'react';
import './Button.css';

function ButtonRow(props) {
  return <div className="calculator-button-row">{props.children}</div>;
}

export default ButtonRow;
