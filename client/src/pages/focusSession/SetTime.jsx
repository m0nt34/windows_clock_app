import React from "react";
import ArrowUp from "../../assets/icons/ArrowUp";
import ArrowDown from "../../assets/icons/ArrowDown";
const SetTime = ({ handleClick, value, unit }) => {
  return (
    <div className="flex bg-[#3c3c3c] h-20 rounded-[5px] border-b border-[#8a8a8a]">
      <div className="flex items-center justify-center flex-col w-24 hover:bg-[#414141]">
        <h1 className="text-4xl">{value}</h1>
        <p className="text-[#9b9b9b] text-[12px]">mins</p>
      </div>
      <div className="flex flex-col">
        <button
          onClick={() => {
            handleClick(unit, true);
          }}
          className="border-l border-b border-[#5e5e5e] h-full px-[10px] hover:bg-[#444444]"
        >
          <ArrowUp />
        </button>
        <button
          onClick={() => {
            handleClick(unit, false);
          }}
          className="border-l border-[#5e5e5e] h-full px-[10px] hover:bg-[#444444]"
        >
          <ArrowDown />
        </button>
      </div>
    </div>
  );
};

export default SetTime;
