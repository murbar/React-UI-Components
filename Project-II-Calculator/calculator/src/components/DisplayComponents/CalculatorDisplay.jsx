import React from 'react';
import './Display.css';

function CalculatorDisplay(props) {
  return <div className="calculator-display">{props.result}</div>;
}

export default CalculatorDisplay;
