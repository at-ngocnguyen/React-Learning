import useClock from 'core/hook/useClock';
import React from 'react';

function ClockReal(props) {
  const { time } = useClock();
  
  return (
    <div className="real">
      <p>{time}</p>
    </div>
  );
}

export default ClockReal;
