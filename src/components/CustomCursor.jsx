'use client';
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const checkHover = (e) => {
      const target = e.target;
      if (['A', 'BUTTON'].includes(target.tagName)) {
        setHovered(true);
      }
    };

    const resetHover = (e) => {
      const target = e.target;
      if (['A', 'BUTTON'].includes(target.tagName)) {
        setHovered(false);
      }
    };

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseover', checkHover);
    document.addEventListener('mouseout', resetHover);

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', checkHover);
      document.removeEventListener('mouseout', resetHover);
    };
  }, []);

  const style = {
    position: 'fixed',
    top: position.y,
    left: position.x,
    width: hovered ? '25px' : '12px',
    height: hovered ? '25px' : '12px',
    border: hovered ? '2px solid grey' : '2px solid white',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000000,
    transition: 'all 0.2s ease',
    // mixBlendMode: 'difference',
  };

  return <div style={style}></div>;
};

export default CustomCursor;
