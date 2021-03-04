import './App.css'

import React, {useState} from 'react';
import axios from 'axios';

function App(){

  let [count, setCount] = useState(0);

  let increase = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <button onClick = {increase}>Click it</button>
      <h1>{count}</h1>

    </div>
  );
}

export default App;