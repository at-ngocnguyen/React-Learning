import React from 'react';
import useMagicColor from '../../core/hook/useMagicColor';
import './color.css'

function Color(props) {
  const color = useMagicColor();
  return (
    <div className="color" style={{ backgroundColor: color }}>

    </div>
  );
}

export default Color;
