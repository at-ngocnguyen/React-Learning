import React from 'react';
import PropTypes from 'prop-types';
import useMagicColor from '../../core/hook/useMagicColor';
import './color.css'
Color.propTypes = {

};

function Color(props) {
  const color = useMagicColor();
  return (
    <div className="color" style={{ backgroundColor: color }}>

    </div>
  );
}

export default Color;
