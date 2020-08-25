import React, { useState } from 'react';
import useClock from '../../core/hook/useClock';
import './fake.css'
const Fake = props => {
  const { time } = useClock();

  return (
    <div  className="fake">
      {time}
    </div>
  );
};

Fake.propTypes = {

};

export default Fake;
