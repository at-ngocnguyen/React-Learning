import React from "react";
import CountDown from "components/CountDown/CountDown";
const Main = () => {
  return (
    <main className="page-main container">
      <CountDown runTime={10} />
      <CountDown runTime={12} />
      <CountDown runTime={15} />
    </main>
  );
};

export default Main;
