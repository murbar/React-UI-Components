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
    this.handleClearPress = this.handleClearPress.bind(this);
  }

  handleNumberPress(e, value) {
    if (this.state.result === 0) {
      this.setState({ result: value });
      return;
    }
    this.setState(state => ({ result: state.result + value }));
  }

  handleClearPress(e, value) {
    this.setState({ result: 0 });
  }

  render() {
    return (
      <div className="calculator-container">
        <CalculatorDisplay result={this.state.result} />
        <ButtonRow>
          <ActionButton value="clear" buttonStyle="button-clear" onPress={this.handleClearPress} />
          <ActionButton value="÷" buttonStyle="button-action" />
        </ButtonRow>
        <ButtonRow>
          <NumberButton value="7" buttonStyle="button-number" onPress={this.handleNumberPress} />
          <NumberButton value="8" buttonStyle="button-number" onPress={this.handleNumberPress} />
          <NumberButton value="9" buttonStyle="button-number" onPress={this.handleNumberPress} />
          <ActionButton value="×" buttonStyle="button-action" onPress={this.handleNumberPress} />
        </ButtonRow>
        <ButtonRow>
          <NumberButton value="4" buttonStyle="button-number" onPress={this.handleNumberPress} />
          <NumberButton value="5" buttonStyle="button-number" onPress={this.handleNumberPress} />
          <NumberButton value="6" buttonStyle="button-number" onPress={this.handleNumberPress} />
          <ActionButton value="–" buttonStyle="button-action" />
        </ButtonRow>
        <ButtonRow>
          <NumberButton value="1" buttonStyle="button-number" onPress={this.handleNumberPress} />
          <NumberButton value="2" buttonStyle="button-number" onPress={this.handleNumberPress} />
          <NumberButton value="3" buttonStyle="button-number" onPress={this.handleNumberPress} />
          <ActionButton value="+" buttonStyle="button-action" />
        </ButtonRow>
        <ButtonRow>
          <NumberButton value="0" buttonStyle="button-zero" onPress={this.handleNumberPress} />
          <ActionButton value="=" buttonStyle="button-action" />
        </ButtonRow>
      </div>
    );
  }
}
