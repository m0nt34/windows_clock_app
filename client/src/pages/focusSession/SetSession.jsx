import React, { useState } from "react";
import SetTime from "./SetTime";
import CalculateBreaks from "./CalculateBreaks";
import { useFullFocusSession } from "../../store/useFullFocusSession";
import Play from "../../assets/icons/Play";
const SetSession = () => {
  const { toggleStartFocusSession } = useFullFocusSession();
  return (
    <div className="flex flex-col gap-5 bg-[#323232] rounded-[6px] px-5 pt-3 pb-7 border border-[#252525] shadow select-none">
      <header className="flex justify-center items-center w-full p-2">
        <h1 className="text-3xl font-medium">Get ready to focus</h1>
      </header>
      <div className="flex w-full justify-center gap-5">
        <div className="flex flex-col items-center gap-1">
          <SetTime unit="focus" />
          <p className="text-[#c9c9c9] font-medium">focus</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <SetTime unit="breaks" />
          <p className="text-[#c9c9c9] font-medium">break</p>
        </div>
      </div>
      <CalculateBreaks />
      <div className="flex w-full items-center justify-center mt-2">
        <button
          onClick={toggleStartFocusSession}
          type="button"
          className="flex justify-center items-center gap-[10px] bg-customColor-blue px-3 py-[5px] rounded-[5px] text-black hover:bg-[#68a8d6]"
        >
          <Play />
          Start focus session
        </button>
      </div>
    </div>
  );
};

export default SetSession;
