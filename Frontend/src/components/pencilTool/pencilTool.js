import React, { useLayoutEffect, useState, useRef } from 'react';

var pos = { x: 0, y: 0 };

const Penciltool = () => {
  const [lines, setLines] = useState([]);
  const [drawing, setDrawing] = useState(false);
  const contextRef = useRef(null);

  useLayoutEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'white';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 10;
    contextRef.current = ctx;

    lines.forEach((line) => {
      line.points.forEach((point, index) => {
        if (index === 0) {
          contextRef.current.moveTo(point.x, point.y);
        } else {
          contextRef.current.lineTo(point.x, point.y);
        }
      });
      contextRef.current.stroke();
    });
  }, [lines]);

  const startDrawing = (event) => {
    setDrawing(true);
    const { clientX, clientY } = event;
    const canvas = document.getElementById('canvas');
    const rect = canvas.getBoundingClientRect();
    pos.x = clientX - rect.left; // Adjust x coordinate based on canvas position
    pos.y = clientY - rect.top;  // Adjust y coordinate based on canvas position

    setLines((prevLines) => [...prevLines, { points: [pos] }]);
  };

  const finishDrawing = () => {
    setDrawing(false);
  };

  const draw = (event) => {
    if (!drawing) return;

    const { clientX, clientY } = event;
    const canvas = document.getElementById('canvas');
    const rect = canvas.getBoundingClientRect();
    pos.x = clientX - rect.left; // Adjust x coordinate based on canvas position
    pos.y = clientY - rect.top;  // Adjust y coordinate based on canvas position

    setLines((prevLines) => {
      const lastLine = prevLines[prevLines.length - 1];
      const newPoints = [...lastLine.points, pos];
      const newLines = [...prevLines];
      newLines[newLines.length - 1] = { points: newPoints };
      return newLines;
    });

    contextRef.current.lineTo(pos.x, pos.y);
    contextRef.current.stroke();
  };

  const convertToCSV = () => {
    let csvContent = 'x,y\n';

    lines.forEach((line) => {
      line.points.forEach((point) => {
        csvContent += `${point.x},${point.y}\n`;
      });
    });

    // Create a temporary element to download the CSV file
    const element = document.createElement('a');
    element.href = URL.createObjectURL(new Blob([csvContent], { type: 'text/csv' }));
    element.download = 'drawing.csv';
    element.click();
  };

  return (
    <canvas
      id='canvas'
      width={280}
      height={280}
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
    >
      Canvas
    </canvas>
  );
};

export default Penciltool;