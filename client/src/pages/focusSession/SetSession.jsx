import React, { useState } from "react";
import SetTime from "./SetTime";
const SetSession = () => {
  const focus = [
    10, 15, 20, 25, 30, 35, 40, 45, 50, 65, 80, 95, 110, 125, 140, 155, 170,
    185, 200, 215, 230, 240,
  ];
  const breaks = [0, 5, 10, 15];
  const [session, setSession] = useState({
    focus: 0,
    breaks: 1,
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
        <SetTime handleClick={handleClick} value={focus[session.focus]} unit="focus"/>
        <SetTime handleClick={handleClick} value={breaks[session.breaks]} unit="breaks"/>
      </div>
    </div>
  );
};

export default SetSession;
