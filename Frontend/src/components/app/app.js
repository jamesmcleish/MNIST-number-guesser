import './App.css';
import React from 'react'
import Whiteboard from '../whiteboard/whiteboard';
import Penciltool from '../PencilTool/PencilTool';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>Draw a single digit number with your cursor and click the button the button below.</p>
          <div className='Whiteboard'>
            <Penciltool />
          </div>
        <button>Click Me</button>
      </header>
    </div>
  );
}

export default App;
