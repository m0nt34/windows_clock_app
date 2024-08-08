import React, { useState, useEffect } from "react";
import Sun from "../../assets/icons/Sun";
import Moon from "../../assets/icons/Moon";
import { getCurrentTime } from "../../utils/getCurrentTime";
const LocalTime = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [day, setDay] = useState(true);
  useEffect(() => {
    setDay(checkIfMorning());
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);
  const checkIfMorning = () => {
    if (
      (currentTime.hour >= 8 && currentTime.dayPeriod === "PM") ||
      (currentTime.hour === 12 && currentTime.dayPeriod === "PM") ||
      (currentTime.hour <= 5 && currentTime.dayPeriod === "AM")
    ) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div className="flex items-center gap-6 px-3 w-full bg-[#323232] h-[65px] rounded-[4px] border border-[#242424] hover:bg-[#2e2e2e] hover:border-[#363636]">
      <div className="w-5">{day ? <Sun /> : <Moon />}</div>
      <div className="flex items-end text-[#bebebe] text-xl font-bold w-20">
        {currentTime.hour + ":" + currentTime.minute}
        <p className="font-normal text-[14px] leading-[22px] ml-1">
          {currentTime.dayPeriod}
        </p>
      </div>
      <div className="flex flex-col">
        <span className="text-[15px] text-[#eee]">Local time</span>
        <p className="text-[#d5d5d5] text-xs">
          {currentTime.day + "/" + currentTime.month + "/" + currentTime.year}
        </p>
      </div>
    </div>
  );
};

export default LocalTime;
