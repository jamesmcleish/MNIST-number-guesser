import './App.css';
import React, { useRef } from 'react';
import PencilTool from '../PencilTool/PencilTool';

function App() {
  
  const pencilToolRef = useRef(null);

  const clearWhiteboard = () => {
    window.location.reload();
  };

  const canvasRef = useRef(null);

  const sendImageToAPI = () => {
    // const canvas = canvasRef.current;
    // const dataURL = canvas.toDataURL();
    fetch("http://localhost:4000", {
      method: 'POST',
      body: JSON.stringify( "image: dataURL" ),
      headers: {
        'Content-Type': 'application/json',
      },
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
          <PencilTool ref={pencilToolRef} />
        </div>
        <button onClick={sendImageToAPI}>Predict Number</button>
        <button onClick={clearWhiteboard}>Clear Whiteboard</button>
      </header>
    </div>
  );
}

export default App;
