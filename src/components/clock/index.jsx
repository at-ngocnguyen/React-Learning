import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useClock from '../../core/hook/useClock';

Clock.propTypes = {

};


function Clock(props) {
  const { time } = useClock();
  
  return (
    <div>
      <p>{time}</p>
    </div>
  );
}

export default Clock;
