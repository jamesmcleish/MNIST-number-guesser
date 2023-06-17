import './App.css';
import React, { useRef } from 'react';
import Penciltool from '../PencilTool/PencilTool';

function App() {

  const clearWhiteboard = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Draw a single digit number with your cursor and click the button below.</p>
        <div className="penciltool-container">
          {/* Pass the ref to the PencilTool component */}
          <Penciltool/>
        </div>
        <button onClick={clearWhiteboard}>Clear Whiteboard</button>
      </header>
    </div>
  );
}

export default App;
