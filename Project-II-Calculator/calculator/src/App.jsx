import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonRow from './components/ButtonComponents/ButtonRow';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: 0, operands: [0, 0], operator: null };
    this.handleNumberPress = this.handleNumberPress.bind(this);
    this.handleClearPress = this.handleClearPress.bind(this);
    this.handleOperatorPress = this.handleOperatorPress.bind(this);
    this.handleEqualsPress = this.handleEqualsPress.bind(this);
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

  handleOperatorPress(e, operator) {
    if (this.state.result === 0) return;
    this.setState(state => ({ operand: state.result, operator: operator }));
  }

  handleEqualsPress(e) {
    if (this.state.result === 0) return;
    // display result
  }

  render() {
    return (
      <div className="calculator-container">
        <CalculatorDisplay result={this.state.display} />
        <ButtonRow>
          <ActionButton
            value="c"
            display="clear"
            buttonStyle="button-clear"
            onPress={this.handleClearPress}
          />
          <ActionButton
            value="/"
            display="÷"
            buttonStyle="button-action"
            onPress={this.handleOperatorPress}
          />
        </ButtonRow>
        <ButtonRow>
          <NumberButton value="7" buttonStyle="button-number" onPress={this.handleNumberPress} />
          <NumberButton value="8" buttonStyle="button-number" onPress={this.handleNumberPress} />
          <NumberButton value="9" buttonStyle="button-number" onPress={this.handleNumberPress} />
          <ActionButton
            value="*"
            display="×"
            buttonStyle="button-action"
            onPress={this.handleOperatorPress}
          />
        </ButtonRow>
        <ButtonRow>
          <NumberButton value="4" buttonStyle="button-number" onPress={this.handleNumberPress} />
          <NumberButton value="5" buttonStyle="button-number" onPress={this.handleNumberPress} />
          <NumberButton value="6" buttonStyle="button-number" onPress={this.handleNumberPress} />
          <ActionButton
            value="-"
            display="–"
            buttonStyle="button-action"
            onPress={this.handleOperatorPress}
          />
        </ButtonRow>
        <ButtonRow>
          <NumberButton value="1" buttonStyle="button-number" onPress={this.handleNumberPress} />
          <NumberButton value="2" buttonStyle="button-number" onPress={this.handleNumberPress} />
          <NumberButton value="3" buttonStyle="button-number" onPress={this.handleNumberPress} />
          <ActionButton
            value="+"
            display="+"
            buttonStyle="button-action"
            onPress={this.handleOperatorPress}
          />
        </ButtonRow>
        <ButtonRow>
          <NumberButton value="0" buttonStyle="button-zero" onPress={this.handleNumberPress} />
          <ActionButton
            value="="
            display="="
            buttonStyle="button-action"
            onPress={this.handleEqualsPress}
          />
        </ButtonRow>
      </div>
    );
  }
}
