import React, { useState } from "react";
import Counter from "./Counter";
import "./App.css";

function App() {
  const [val, setVal] = useState(0);
  const handleIncrementButton = () => {
    console.log("Increment click");
    setVal(val + 1);
  }
  const handleDecrementButton = () => {
    console.log("Decrement click");
    setVal(val - 1);
  }
  return (
    <div className="App">
      <h1><u>Counter App</u></h1>
      <Counter 
        val={val} 
        handleIncrementButton={handleIncrementButton} 
        handleDecrementButton={handleDecrementButton} 
      />
    </div>
  );
}

export default App;