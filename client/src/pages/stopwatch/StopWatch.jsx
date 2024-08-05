import React from "react";
import Time from "./time/Time";
import Buttons from "./Buttons";
import TimeLaps from "./TimeLaps";
const StopWatch = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-start flex-grow overflow-y-auto h-screen px-6 pt-[70px] pb-[50px]">
      <div className="flex flex-col gap-12 items-center justify-start">
        <Time />
        <Buttons />
      </div>
      <TimeLaps />
    </div>
  );
};

export default StopWatch;
