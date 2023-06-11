import React, { useLayoutEffect } from 'react';
import rough from 'roughjs/bundled/rough.esm';

const gen = rough.generator();

const DrawingTool = () => {
  useLayoutEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const rc = rough.canvas(canvas);
  });

  return (
    <canvas id='canvas' width="280" height="280">
      Canvas
    </canvas>
  );
};
export default DrawingTool;