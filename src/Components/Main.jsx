import React from "react";

function Main() {
  return (
    <div className="calculator-grid">
      <div className="screen">
          <div className="previousOp">previous</div>
          <div className="currentOp">current</div>
      </div>
      <button className="large-btn">AC</button>
      <button>DEL</button>
      <button>/</button>
      <button>9</button>
      <button>8</button>
      <button>7</button>
      <button>*</button>
      <button>6</button>
      <button>5</button>
      <button>4</button>
      <button>+</button>
      <button>3</button>
      <button>2</button>
      <button>1</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="large-btn">=</button>
    </div>
  );
}

export default Main;
