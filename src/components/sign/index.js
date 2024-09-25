
import { useState, useEffect } from 'react';
import './style.css'

export default function SignApp() {
    useEffect(() => {
        sign()
        // return () => window.removeEventListener('click', handleMove);
    }, [])
    return (
        <>
            <div className="canvas-container">
                <canvas id="signatureCanvas" width="600" height="200"></canvas>
            </div>
            <div className="controls">
                <button id="clearButton">Clear</button>
                <button id="saveButton">Save</button>
            </div>
        </>
    )
}

function sign() {
    const canvas = document.getElementById('signatureCanvas');
    const ctx = canvas.getContext('2d');
    const clearButton = document.getElementById('clearButton');
    const saveButton = document.getElementById('saveButton');
  
    let drawing = false;
    let lastX = 0;
    let lastY = 0;
  
    canvas.addEventListener('mousedown', (e) => {
      drawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    });
  
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => drawing = false);
    canvas.addEventListener('mouseout', () => drawing = false);
  
    function draw(e) {
      if (!drawing) return;
      ctx.strokeStyle = '#000';
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.lineWidth = 4;
  
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      [lastX, lastY] = [e.offsetX, e.offsetY];
    }
  
    clearButton.addEventListener('click', () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
  
    saveButton.addEventListener('click', () => {
      const dataURL = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'signature.png';
      link.click();
    });
  }