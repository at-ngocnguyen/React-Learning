import React from 'react';

function Hero(props) {
  const { name } = props
  return (
    <div>
      Hero name: {name}
    </div>
  );
}

export default React.memo(Hero);
