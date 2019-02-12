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

  isClearedState() {
    return this.state.operands[0] === 0 && this.state.operands[1] === 0;
  }

  handleNumberPress(value) {
    if (this.isClearedState()) {
      const operands = [parseInt(value), 0];
      this.setState({ display: value, operands });
      return;
    }
    if (!this.state.operator) {
      const operands = this.state.operands;
      const isZero = parseInt(operands[0]) === 0;

      isZero ? (operands[0] = value) : (operands[0] += value);

      this.setState(state => ({ display: operands[0], operands }));
    }
    if (this.state.operator) {
      const operands = this.state.operands;
      const isZero = parseInt(operands[1]) === 0;

      isZero ? (operands[1] = value) : (operands[1] += value);

      this.setState(state => ({ display: operands[1], operands }));
    }
  }

  handleClearPress() {
    this.setState({ display: 0, operands: [0, 0], operator: null });
  }

  handleOperatorPress(operator) {
    if (this.isClearedState()) return;
    this.setState({ operator });
  }

  handleEqualsPress() {
    if (!this.state.operator) return;
    const { operands } = this.state;
    console.log(operands);
    const result = eval(`${parseInt(operands[0])} ${this.state.operator} ${parseInt(operands[1])}`);
    this.setState({
      display: result,
      operands: [0, 0]
    });
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
