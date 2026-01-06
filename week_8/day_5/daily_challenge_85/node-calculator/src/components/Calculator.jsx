import { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const addNumbers = () => {
    setResult(Number(num1) + Number(num2));
  };

  return (
    <div className="calculator-container">
      <h1 className="title">Adding Two Numbers</h1>

      <div className="inputs">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>

      <button className="add-btn" onClick={addNumbers}>
        Add Them!
      </button>

      <div className="result">{result}</div>
    </div>
  );
}
