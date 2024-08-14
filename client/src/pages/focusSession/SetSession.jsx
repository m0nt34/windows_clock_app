import React, { useState } from "react";
import SetTime from "./SetTime";
import { focus, breaks } from "../../data/focusSessionTimes";
import CalculateBreaks from "./CalculateBreaks";
const SetSession = () => {
  const [session, setSession] = useState({
    focus: 0,
    breaks: 0,
  });
  const handleClick = (unit, increment) => {
    setSession((prev) => ({
      ...prev,
      [unit]: prev[unit] + (increment ? 1 : -1),
    }));
  };
  return (
    <div className="bg-[#323232] rounded-[6px] border border-[#252525] shadow">
      <header className="flex justify-center items-center w-full p-2">
        <h1 className="text-xl font-medium">Get ready to focus</h1>
      </header>
      <div className="flex w-full justify-center gap-3">
        <div className="flex flex-col items-center gap-1">
          <SetTime
            handleClick={handleClick}
            value={focus[session.focus]}
            unit="focus"
          />
          <p className="text-[#c9c9c9] font-medium">focus</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <SetTime
            handleClick={handleClick}
            value={breaks[session.breaks]}
            unit="breaks"
          />
          <p className="text-[#c9c9c9] font-medium">break</p>
        </div>
      </div>
      <CalculateBreaks />
    </div>
  );
};

export default SetSession;
