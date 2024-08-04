import React from "react";
import MiliSeconds from "./MiliSeconds";
import Seconds from "./Seconds";
import Minutes from "./Minutes";
import Hours from "./Hours";
const Time = () => {
  return (
    <div className="flex justify-center items-end text-[110px] select-none">
      <div className="flex justify-center relative ">
        <Hours />
        <p className="absolute text-2xl bottom-[-8px]">hr</p>
      </div>
      <p className="leading-[185px]">:</p>
      <div className="flex justify-center relative ">
        <Minutes />
        <p className="absolute text-2xl bottom-[-8px]">min</p>
      </div>
      <p className="leading-[185px]">:</p>
      <div className="flex justify-center relative ">
        <Seconds />
        <p className="absolute text-2xl bottom-[-8px]">sec</p>
      </div>
      .
      <span className="flex items-end text-[80px] leading-[140px]">
        <MiliSeconds />
      </span>
    </div>
  );
};

export default Time;
