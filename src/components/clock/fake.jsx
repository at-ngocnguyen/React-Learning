import useClock from 'core/hook/useClock';
import React from 'react';
import './clock.scss';
const ClockFake = props => {
  const { time } = useClock();

  return (
    <div className="fake">
      {time}
    </div>
  );
};

export default ClockFake;
