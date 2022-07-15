import React, { useState } from "react";

function App() {

  const [thisItem, setThisItem] = useState("")

  console.log(thisItem);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={(params) => setThisItem(params.target.value)}/>
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
