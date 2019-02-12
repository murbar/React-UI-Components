import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonRow from './components/ButtonComponents/ButtonRow';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  const buttons = [{ value: 1, style: 'number' }];
  return (
    <div className="calculator-container">
      <CalculatorDisplay result={0} />
      <ButtonRow>
        <ActionButton text="clear" buttonStyle="button-clear" />
        <ActionButton text="÷" buttonStyle="button-action" />
      </ButtonRow>
      <ButtonRow>
        <ActionButton text="clear" buttonStyle="button-clear" />
        <ActionButton text="÷" buttonStyle="button-action" />
      </ButtonRow>
    </div>
  );
};

export default App;
