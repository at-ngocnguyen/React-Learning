import React from 'react';
import useClock from '../../core/hook/useClock';



function ClockReal(props) {
  const { time } = useClock();
  
  return (
    <div className="real">
      <p>{time}</p>
    </div>
  );
}

export default ClockReal;
