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
  }

  isClearedState = () => {
    return this.state.operands[0] === 0 && this.state.operands[1] === 0;
  };

  handleNumberPress = value => {
    if (this.isClearedState()) {
      const operands = [parseInt(value), 0];
      this.setState({ display: value, operands });
      return;
    }

    const operands = this.state.operands;
    const operandIndex = this.state.operator ? 1 : 0;
    const operandIsZero = parseInt(operands[operandIndex]) === 0;

    if (operandIsZero) {
      operands[operandIndex] = value;
    } else {
      operands[operandIndex] += value;
    }

    this.setState({ display: operands[operandIndex], operands });
  };

  handleClearPress = () => {
    this.setState({ display: 0, operands: [0, 0], operator: null });
  };

  handleOperatorPress = operator => {
    if (this.isClearedState()) return;

    this.setState({ operator });
  };

  handleEqualsPress = () => {
    if (!this.state.operator) return;

    const { operands } = this.state;
    const maxLength = 12;
    const [o1, o2] = operands.map(o => parseInt(o));

    let result = eval(`${o1} ${this.state.operator} ${o2}`).toString();

    if (result.length > maxLength) result = result.substring(0, maxLength);

    this.setState({ display: result, operands: [0, 0] });
  };

  render() {
    const makeNumButton = num => {
      return (
        <NumberButton
          key={num}
          value={num}
          buttonStyle="button-number"
          onPress={this.handleNumberPress}
        />
      );
    };

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
          {[7, 8, 9].map(n => makeNumButton(n))}
          <ActionButton
            value="*"
            display="×"
            buttonStyle="button-action"
            onPress={this.handleOperatorPress}
          />
        </ButtonRow>
        <ButtonRow>
          {[4, 5, 6].map(n => makeNumButton(n))}
          <ActionButton
            value="-"
            display="–"
            buttonStyle="button-action"
            onPress={this.handleOperatorPress}
          />
        </ButtonRow>
        <ButtonRow>
          {[1, 2, 3].map(n => makeNumButton(n))}
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
