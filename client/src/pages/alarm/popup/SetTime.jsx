import React, { useState, useImperativeHandle, forwardRef, memo } from "react";
import ArrowUp from "../../../assets/icons/ArrowUp";
import ArrowDown from "../../../assets/icons/ArrowDown";

import { useTimerSelected } from "../../../store/useSelectInPopup";
import RenderTimeDisplay from "./RenderTimeDisplay";
const SetTime = forwardRef((props, ref) => {
  const [time, setTime] = useState({ hours: 7, minutes: 0, period: "AM" });
  const [selectedTime, setSelectedTime] = useState(1);
  const { setTimerSelectedToTrue } = useTimerSelected();
  useImperativeHandle(ref, () => ({
    getTime: () => time,
  }));

  const incrementTime = (unit) => {
    setTime((prevTime) => ({
      ...prevTime,
      [unit]:
        unit === "period"
          ? prevTime[unit] === "PM"
            ? "AM"
            : "PM"
          : unit === "hours"
          ? (prevTime[unit] + 1) % 13 === 0
            ? (prevTime[unit] + 2) % 13
            : (prevTime[unit] + 1) % 13
          : (prevTime[unit] + 1) % 60,
    }));
  };

  const decrementTime = (unit) => {
    setTime((prevTime) => ({
      ...prevTime,
      [unit]:
        unit === "period"
          ? prevTime[unit] === "PM"
            ? "AM"
            : "PM"
          : unit === "hours"
          ? prevTime[unit] - 1 < 1
            ? 12
            : prevTime[unit] - 1
          : prevTime[unit] - 1 < 0
          ? 59
          : prevTime[unit] - 1,
    }));
  };

  const renderControlButton = (unit, direction) => (
    <button
      type="button"
      onClick={() => {
        direction === "up" ? incrementTime(unit) : decrementTime(unit);
        unit === "hours"
          ? setSelectedTime(1)
          : unit === "minutes"
          ? setSelectedTime(2)
          : setSelectedTime(3);
      }}
      className="hover:bg-[#2e2e2e] transition rounded-[4px] p-1"
    >
      {direction === "up" ? <ArrowUp /> : <ArrowDown />}
    </button>
  );

  return (
    <div className="flex flex-col gap-[3px]" onClick={setTimerSelectedToTrue}>
      <div className="flex items-center justify-center gap-[25%]">
        {renderControlButton("hours", "up")}
        {renderControlButton("minutes", "up")}
        {renderControlButton("period", "up")}
      </div>
      <RenderTimeDisplay
        time={time}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
      <div className="flex items-center justify-center gap-[25%]">
        {renderControlButton("hours", "down")}
        {renderControlButton("minutes", "down")}
        {renderControlButton("period", "down")}
      </div>
    </div>
  );
});

export default memo(SetTime);
