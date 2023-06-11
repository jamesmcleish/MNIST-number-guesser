import React from 'react';
import './App.css';
import DrawingTool from './components/drawingtool';
import PencilTool from './components/penciltool';


function Whiteboard() {
  
  return (
    <div className='Whiteboard'>
      <DrawingTool /> //Change this line to <PencilTool /> to render pencil
    </div>
  );
}

export default Whiteboard;

