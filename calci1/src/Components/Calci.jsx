import React from 'react';
import { useState } from 'react';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNumber1Change = (e) => {
    setNumber1(Number(e.target.value));
  };

  const handleNumber2Change = (e) => {
    setNumber2(Number(e.target.value));
  };

  const handleAddition = () => {
    setResult(number1 + number2);
  };

  const handleSubtraction = () => {
    setResult(number1 - number2);
  };

  const handleMultiplication = () => {
    setResult(number1 * number2);
  };

  const handleDivision = () => {
    setResult(number1 / number2);
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input type="number" value={number1} onChange={handleNumber1Change} />
      <input type="number" value={number2} onChange={handleNumber2Change} />
      <br />
      <button onClick={handleAddition}>Addition</button>
      <button onClick={handleSubtraction}>Subtraction</button>
      <button onClick={handleMultiplication}>Multiplication</button>
      <button onClick={handleDivision}>Division</button>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;













