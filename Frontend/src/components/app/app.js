import './App.css';
import React, { useRef } from 'react';
import PencilTool from '../PencilTool/PencilTool';

function App() {
  const pencilToolRef = useRef(null);

  const clearWhiteboard = () => {
    // Access the clearWhiteboard function of the PencilTool component using the ref
    window.location.reload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Draw a single digit number with your cursor and click the button below.</p>
        <div className="penciltool-container">
          {/* Pass the ref to the PencilTool component */}
          <PencilTool ref={pencilToolRef} />
        </div>
        <button>Predict Number</button>
        <button onClick={clearWhiteboard}>Clear Whiteboard</button>
      </header>
    </div>
  );
}

export default App;
