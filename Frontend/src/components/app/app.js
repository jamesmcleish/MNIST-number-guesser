import './App.css';
import React, { useState } from 'react';
import Penciltool from '../PencilTool/pencilTool.js';

function App() {
  const [prediction, setPrediction] = useState('');

  const clearWhiteboard = () => {
    window.location.reload();
  };

  const displayPrediction = () => {
    setPrediction(window.localStorage.getItem("responseData"));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Draw a single digit number.</p>
        <div className="penciltool-container">
          {/* Pass the ref to the PencilTool component */}
          <Penciltool/>
        </div>
        <button onClick={clearWhiteboard}>Clear Whiteboard</button>
        <button onClick={displayPrediction}>Display Prediction</button>
        <p>Prediction: {prediction}</p>
      </header>
    </div>
  );
}

export default App;
