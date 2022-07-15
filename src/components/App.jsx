import React, { useState } from "react";

function App() {

  
  const [thisItem, setThisItem] = useState("")
  const [allTasks, setAllTasks] = useState([])
  console.log(allTasks);


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={(params) => setThisItem(params.target.value)}/>
        <button onClick={
          () => setAllTasks([...allTasks, thisItem])
        }>
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
