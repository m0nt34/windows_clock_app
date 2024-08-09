import React, { useState, useEffect } from "react";
import Sun from "../../assets/icons/Sun";
import Moon from "../../assets/icons/Moon";
import BinTrash from "../../assets/icons/BinTrash";
import { getCurrentTimeInTimeZone } from "../../utils/getTimeByTimeZone";
import { useEdit } from "../../store/useEditTimer";
const TimeZoneBoards = ({ zone, setZones }) => {
  const { edit } = useEdit();
  const [currentTime, setCurrentTime] = useState(
    getCurrentTimeInTimeZone(zone)
  );
  const [day, setDay] = useState(true);
  useEffect(() => {
    setDay(checkIfMorning());
    const intervalId = setInterval(() => {
      setDay(checkIfMorning());
      setCurrentTime(getCurrentTimeInTimeZone(zone));
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);
  const checkIfMorning = () => {
    if (
      (parseInt(currentTime.hour) >= 8 && currentTime.dayPeriod === "PM") ||
      (parseInt(currentTime.hour) === 12 && currentTime.dayPeriod === "AM") ||
      (parseInt(currentTime.hour) <= 5 && currentTime.dayPeriod === "AM")
    ) {
      return false;
    } else {
      return true;
    }
  };
  const handleDelete = () => {
    if (edit) {
      setZones((prev) => prev.filter((zn) => zn !== zone));
    }
  };
  return (
    <div className="flex items-center gap-4 px-3 w-full bg-[#323232] h-[65px] rounded-[4px] border border-[#242424] hover:bg-[#2e2e2e] hover:border-[#363636]">
      <div
        className={
          edit ? "hover:bg-[#3e3e3e] transition rounded-md p-2" : "p-2"
        }
        onClick={handleDelete}
      >
        {edit ? <BinTrash className="w-[19.19px]" /> : day ? <Sun /> : <Moon />}
      </div>
      <div className="flex items-end text-[#bebebe] text-xl font-bold w-20">
        {currentTime.hour + ":" + currentTime.minute}
        <p className="font-normal text-[14px] leading-[22px] ml-1">
          {currentTime.dayPeriod}
        </p>
      </div>
      <div className="flex flex-col ml-[15px]">
        <span className="text-[15px] text-[#eee]">{zone}</span>
        <p className="text-[#d5d5d5] text-xs">
          {currentTime.day + "/" + currentTime.month + "/" + currentTime.year}
        </p>
      </div>
    </div>
  );
};

export default TimeZoneBoards;
