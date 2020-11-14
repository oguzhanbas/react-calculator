import './App.css';
import Button from './components/Button';
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
import { useState } from 'react';

function App() {

  const [input, setInput] = useState("");
  const [previousNumber, setPreviousNumber] = useState("");
  const [currentNumber, setCurrentNumber] = useState("");
  const [operator, setOperator] = useState("");

  const addToInput = val => { setInput(input + val); setCurrentNumber(input + val); };

  const addDecimal = val => { if (input.indexOf(".") === -1) { setInput(input + val); } };

  const addZeroToInput = val => { if (input !== "") { setInput(input + val); } };

  const clearInput = () => { setInput(""); };

  const add = () => { if (input != "") { setPreviousNumber(input); setInput(""); setOperator("plus"); } };

  const subtract = () => { if (input != "") { setPreviousNumber(input); setInput(""); setOperator("subtract"); } };

  const multiply = () => { if (input != "") { setPreviousNumber(input); setInput(""); setOperator("multiply"); } };

  const divide = () => { if (input != "") { setPreviousNumber(input); setInput(""); setOperator("divide"); } };

  const evaluate = () => {

    setCurrentNumber(input);

    if (operator == "plus") { setInput(parseInt(previousNumber) + parseInt(currentNumber)); }
    else if (operator == "subtract") { setInput(parseInt(previousNumber) - parseInt(currentNumber)); }
    else if (operator == "multiply") { setInput(parseInt(previousNumber) * parseInt(currentNumber)); }
    else if (operator == "divide") { setInput(parseInt(previousNumber) / parseInt(currentNumber)); }

  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <h1>HESAP MAKİNESİ</h1>
        <div className="row">
          <Input>{input}</Input>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={divide}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={multiply}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={add}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addDecimal}>.</Button>
          <Button handleClick={addZeroToInput}>0</Button>
          <Button handleClick={evaluate}>=</Button>
          <Button handleClick={subtract}>-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={clearInput}>Temizle</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
