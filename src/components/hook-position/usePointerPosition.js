import { useState, useEffect } from 'react';

export function usePointerPosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function handleMove(e) {
      console.info( e.clientX)
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('click', handleMove);
    return () => window.removeEventListener('click', handleMove);
  }, []);
  return position;
}
