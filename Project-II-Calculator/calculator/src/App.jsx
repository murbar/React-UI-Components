import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonRow from './components/ButtonComponents/ButtonRow';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: 0 };
    this.handleNumberPress = this.handleNumberPress.bind(this);
  }

  handleNumberPress(e, value) {
    if (this.state.result === 0) {
      this.setState({ result: value });
      return;
    }
    this.setState(state => ({ result: state.result + value }));
  }

  render() {
    return (
      <div className="calculator-container">
        <CalculatorDisplay result={this.state.result} />
        <ButtonRow>
          <ActionButton text="clear" buttonStyle="button-clear" />
          <ActionButton text="÷" buttonStyle="button-action" />
        </ButtonRow>
        <ButtonRow>
          <NumberButton text="7" buttonStyle="button-number" />
          <NumberButton text="8" buttonStyle="button-number" />
          <NumberButton text="9" buttonStyle="button-number" />
          <ActionButton text="×" buttonStyle="button-action" />
        </ButtonRow>
        <ButtonRow>
          <NumberButton text="4" buttonStyle="button-number" />
          <NumberButton text="5" buttonStyle="button-number" />
          <NumberButton text="6" buttonStyle="button-number" />
          <ActionButton text="–" buttonStyle="button-action" />
        </ButtonRow>
        <ButtonRow>
          <NumberButton text="1" buttonStyle="button-number" />
          <NumberButton text="2" buttonStyle="button-number" />
          <NumberButton text="3" buttonStyle="button-number" />
          <ActionButton text="+" buttonStyle="button-action" />
        </ButtonRow>
        <ButtonRow>
          <NumberButton text="0" buttonStyle="button-zero" />
          <ActionButton text="=" buttonStyle="button-action" />
        </ButtonRow>
      </div>
    );
  }
}
