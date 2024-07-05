import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    var newValue = event.target.value;
    setInput(newValue);
  }
  function clickHandler() {
    setItems([...items, input]);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={input} onChange={handleChange} type="text" />
        <button onClick={clickHandler}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((myitem) => {
            return <li>{myitem}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;