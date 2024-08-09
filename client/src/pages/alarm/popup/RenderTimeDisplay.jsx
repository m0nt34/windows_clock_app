import React, { useEffect, useState } from "react";
import { padZero } from "../../../utils/PadZero";
import { useTimerSelected } from "../../../store/useSelectInPopup";
const RenderTimeDisplay = ({ time, selectedTime = 1, setSelectedTime }) => {
  const { timerSelected } = useTimerSelected();

  useEffect(() => {
    if (!timerSelected) {
      setSelectedTime(0);
    } else if (timerSelected && selectedTime === 0) {
      setSelectedTime(1);
    }
  }, [timerSelected]);
  return (
    <div
      className={`flex gap-3 items-center justify-center text-[36px] font-bold border ${
        timerSelected
          ? "bg-[#1f1f1f] border-b-customColor-blue "
          : "bg-[#2e2e2e] border-b-[#ccc] text-[#acacac]"
      } border-[#292929] rounded-[4px] p-1 border-b text-[#a6a6a6]`}
    >
      <span
        onClick={() => setSelectedTime(1)}
        className={`flex items-center justify-center w-[70px] aspect-square rounded-[4px] ${
          selectedTime === 1 ? "bg-[#2c2c2c] text-white" : ""
        }`}
      >
        {padZero(time.hours)}
      </span>
      <p className="mb-2">:</p>
      <span
        onClick={() => setSelectedTime(2)}
        className={`flex items-center justify-center w-[70px] aspect-square rounded-[4px] ${
          selectedTime === 2 ? "bg-[#2c2c2c] text-white" : ""
        }`}
      >
        {padZero(time.minutes)}
      </span>
      <p className="mb-2">:</p>
      <span
        onClick={() => setSelectedTime(3)}
        className={`flex items-center justify-center w-[70px] aspect-square rounded-[4px] ${
          selectedTime === 3 ? "bg-[#2c2c2c] text-white" : ""
        }`}
      >
        {time.period}
      </span>
    </div>
  );
};

export default RenderTimeDisplay;
