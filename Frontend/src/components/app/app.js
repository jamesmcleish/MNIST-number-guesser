import './App.css';
import React from 'react'
import Whiteboard from '../whiteboard/whiteboard';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>Type a number on the whiteboard and click enter.</p>
        <Whiteboard/>
        <button>Click Me</button>
      </header>
    </div>
  );
}

export default App;
