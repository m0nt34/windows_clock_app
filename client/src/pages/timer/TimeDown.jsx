import React from "react";

import BinTrash from "../../assets/icons/BinTrash";

import { useEdit } from "../../store/useEditTimer";

import TimerDigits from "./TimerDigits";
const TimeDown = ({ id, name, seconds }) => {
  const { edit } = useEdit();

  return (
    <div className="flex flex-col items-center gap-1 timer-box p-1 select-none">
      <header className="flex w-full justify-between items-center">
        <span
          className={`text-base font-bold ml-2 py-[6px] ${
            edit ? "text-[#7d7d7d]" : null
          }`}
        >
          {name}
        </span>
        {edit && (
          <button className="hover:bg-[#454545] rounded-md p-2">
            <BinTrash className="text-xl" />
          </button>
        )}
      </header>
      <TimerDigits seconds={seconds} />
    </div>
  );
};

export default TimeDown;
