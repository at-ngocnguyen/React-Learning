import React, { useState } from 'react';
import ClockReal from '../components/clock';
import ClockFake from '../components/clock/fake';
import { Button } from 'react-bootstrap';

Clock.propTypes = {

};

function Clock(props) {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Button variant="outline-primary" onClick={() => setShow(!show)}>{show ? 'Close' : 'Open'}</Button>
      {show && <ClockReal />}
      {show && <ClockFake />}
    </div>
  );
}

export default Clock;
