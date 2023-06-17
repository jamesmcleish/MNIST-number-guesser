import React, { useLayoutEffect, useState, useRef, useEffect } from 'react';

var pos = { x: 0, y: 0 };

const Penciltool = () => {
  const [lines, setLines] = useState([]);
  const [drawing, setDrawing] = useState(false);
  const contextRef = useRef(null);
  

  useLayoutEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'black';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 20;
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

  function convertCanvasToImageArray(canvas) {
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    const imageArray = [];
    
      for (let i = 0; i < imageData.length; i += 4) {
        const r = imageData[i];
        const g = imageData[i + 1];
        const b = imageData[i + 2];
        const grayscale = Math.round(0.2989 * r + 0.587 * g + 0.114 * b);
        imageArray.push(grayscale);
      }
    const resizedImageArray = [];
    const resizeFactor = Math.sqrt(imageArray.length / 784); // Square root of 28 (approximately 5.29)
    const rowSize = canvas.width / 28;
    for (let i = 0; i < 28; i++) {
      for (let j = 0; j < 28; j++) {
        const pixelIndex = Math.round((i * rowSize * 4) * canvas.width + (j * resizeFactor));
        const pixelValue = imageArray[pixelIndex];
        resizedImageArray.push(pixelValue > 0 ? 255 : 0);
      }
    }
  
    return resizedImageArray;
  }


  useEffect(() => {
    const handleMouseUp = () => {
      const canvas = document.getElementById('canvas');
      const imageArray = convertCanvasToImageArray(canvas);

      fetch('http://localhost:4000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ csvData: imageArray }),
      })
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData);
        })
        .catch((error) => {
          console.log(`error: ${error}`);
        });
    };

    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <canvas
      id='canvas'
      width={280}
      height={280}
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
    >
    </canvas>
  );
};

export default Penciltool;