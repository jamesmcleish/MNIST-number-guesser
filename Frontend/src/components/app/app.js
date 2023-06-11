import './App.css';
import React from 'react'
import Whiteboard from '../whiteboard/whiteboard';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>Draw a single digit number on the whiteboard and click enter.</p>
        <button>Click Me</button>
        <Whiteboard/>
      </header>
    </div>
  );
}

export default App;
