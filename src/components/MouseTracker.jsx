import React, { useState, useEffect } from 'react';

 function MouseTracker () {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x:event.clientX, y: event.clientY });
      console.log(event.clientX, event.clientY);
    };
  
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove); 
    }
  }, []);
  
}

export default MouseTracker;
