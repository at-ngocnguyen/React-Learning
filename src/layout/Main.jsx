import React from "react";
// import CountDown from "components/CountDown/CountDown";
import FormHooks from "components/FormHooks/index";
const Main = () => {
  return (
    <main className="page-main">
      <div className="container">
        {/* <CountDown runTime={10} />
      <CountDown runTime={12} />
      <CountDown runTime={15} />
      <div className="">
        <button className="button-circle">abc</button>
        <button className="btn-custom">abc</button>
      </div> */}
        <FormHooks />
      </div>
    </main>
  );
};

export default Main;
