import React, { useEffect, useState } from "react";
import Clock from "../assets/images/clock.png";
import Xmark from "../assets/icons/Xmark";
import { useDismissPopup } from "../store/useDismissPopup";
import alarmSound from "../assets/audio/windows_10_timerAlarm.mp3";
import { getCurrentTime } from "../utils/getCurrentTime";
const DismissPopup = () => {
  const [currTime] = useState(getCurrentTime);
  const {
    showDismiss,
    setShowDismiss,
    dismissName,
    showTimeOnDismiss,
    dismissMainName,
  } = useDismissPopup();

  useEffect(() => {
    const audio = new Audio(alarmSound);
    audio.loop = true;

    if (showDismiss) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [showDismiss]);
  return (
    <div
      className={`absolute select-none ${
        showDismiss ? "right-3" : "right-[-400px]"
      } bottom-3 bg-[#252525] w-[370px] border border-[#252525] rounded-sm px-[10px] py-2 transition-all duration-200`}
    >
      <header className="flex justify-between pt-1">
        <div className="flex items-center text-[13px] gap-2">
          <img src={Clock} className="h-4" />
          <p>Clock</p>
        </div>
        <button
          onClick={setShowDismiss}
          className="hover:text-white text-[12px]"
        >
          <Xmark />
        </button>
      </header>
      <div className="flex flex-col py-4 mb-2">
        <h1 className="font-medium">{dismissMainName}</h1>
        <p className="flex items-center text-[#868686] leading-[16px] mb-1">
          {dismissName}
        </p>
        {showTimeOnDismiss && (
          <p className="flex items-center text-[#868686] leading-[16px]">
            {currTime.hour}:{currTime.minute} {currTime.dayPeriod}
          </p>
        )}
      </div>
      <button
        onClick={setShowDismiss}
        className="bg-[#515151] border-[2px] border-[#515151] text-sm py-1 font-medium w-full hover:border-[#999999]"
      >
        Dismiss
      </button>
    </div>
  );
};

export default DismissPopup;
