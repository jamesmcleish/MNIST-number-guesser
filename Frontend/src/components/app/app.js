import './App.css';
import React, { useRef } from 'react';
import Penciltool from '../PencilTool/PencilTool';

function App() {

  // const { convertToCSV } = Penciltool();

  const clearWhiteboard = () => {
    window.location.reload();
  };

  const sendImageToAPI = () => {
    fetch("http://localhost:4000", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body:  JSON.stringify("convertToCSV")
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Draw a single digit number with your cursor and click the button below.</p>
        <div className="penciltool-container">
          {/* Pass the ref to the PencilTool component */}
          <Penciltool/>
        </div>
        <button onClick={sendImageToAPI}>Predict Number</button>
        <button onClick={clearWhiteboard}>Clear Whiteboard</button>
      </header>
    </div>
  );
}

export default App;
