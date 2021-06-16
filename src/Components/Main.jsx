import React, { useState } from "react";

function Main() {

  const [currentOp, setCurrentOp] = useState("");
  const [previousOp, setPreviousOp] = useState("");
  const [arithmetic, setArithmetic] = useState("")
  
    // Clears the screen
  const clear = () => {
    setCurrentOp("");
    setPreviousOp("");
    setArithmetic("");
  };

  // Deletes the currentOp
  const del = () =>{
    setCurrentOp("");
  }

  // Handles the numerical input
  const handleInput = (e) => {

      setCurrentOp(currentOp.concat(e.target.value))

  };

  // Responsible for setting the state of the operator and previousOp whenever an operator button is clicked
  // Also resets the currentOp
  const operator = (e) => {
      setCurrentOp("")
      setPreviousOp(currentOp)
      setArithmetic(e.target.value)
  };

  // Does the computation based on the current operator
  const compute = () =>{
    // This switch case looks at the state of the operator/arithmetic to determine which case to execute
    switch(arithmetic){

        // Using parseFloat instead of parseInt to accommodate for numbers with decimals 
        case "+": setCurrentOp(parseFloat(previousOp) + parseFloat(currentOp));
        break;
        case "-": setCurrentOp(parseFloat(previousOp) - parseFloat(currentOp));
        break;
        case "*": setCurrentOp(parseFloat(previousOp) * parseFloat(currentOp));
        break;
        case "/": setCurrentOp(parseFloat(previousOp) / parseFloat(currentOp));
        break;
    }
    // Clears the operator after each computation
    setArithmetic("")
  }

  return (
    <div className="calculator-grid">
      <div className="screen">
        <div className="previousOp">{previousOp}</div>
        <div className="currentOp">{arithmetic + " " + currentOp}</div>
      </div>
      <button onClick={clear} className="large-btn">
        AC
      </button>
      <button onClick={del}>DEL</button>

      <button onClick={operator} value="/">/</button>

      <button onClick={handleInput} value="7">
        7
      </button>
      <button onClick={handleInput} value="8">
        8
      </button>
      <button onClick={handleInput} value="9">
        9
      </button>

      <button onClick={operator} value="*">*</button>

      <button onClick={handleInput} value="4">
        4
      </button>
      <button onClick={handleInput} value="5">
        5
      </button>
      <button onClick={handleInput} value="6">
        6
      </button>

      <button onClick={operator} value="+">+</button>

      <button onClick={handleInput} value="1">
        1
      </button>
      <button onClick={handleInput} value="2">
        2
      </button>
      <button onClick={handleInput} value="3">
        3
      </button>

      <button onClick={operator} value="-">-</button>

      <button onClick={handleInput} value=".">.</button>
      <button onClick={handleInput} value="0">
        0
      </button>
      <button className="large-btn" onClick={compute}>
        =
      </button>
    </div>
  );
}

export default Main;
