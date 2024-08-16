import React from "react";
import ArrowUp from "../../assets/icons/ArrowUp";
import ArrowDown from "../../assets/icons/ArrowDown";
import { useSession } from "../../store/useSetSessionTimes";
import { times } from "../../data/focusSessionTimes";

const SetTime = ({ unit }) => {
  const { session, setSession } = useSession();
  const handleValidation = (inc) => {
    const currentValue = session[unit];

    return inc
      ? unit === "focus"
        ? times[currentValue] + 1 < 240
        : times[currentValue] + 1 < 15
      : times[currentValue] - 1 > 5;
  };

  return (
    <div className="flex bg-[#3c3c3c] h-20 rounded-[5px] border-b border-[#8a8a8a]">
      <div className="flex items-center justify-center flex-col w-32 hover:bg-[#414141]">
        <h1 className="text-4xl">
          {unit === "breaks"
            ? session["focus"] > 4
              ? times[session[unit]]
              : 0
            : times[session[unit]]}
        </h1>
        <p className="text-[#9b9b9b] text-[12px]">mins</p>
      </div>
      <div className="flex flex-col">
        <button
          onClick={() => {
            if (handleValidation(true)) {
              setSession(unit, session[unit] + 1);
            }
          }}
          className="border-l border-b border-[#5e5e5e] h-full px-3 hover:bg-[#444444]"
        >
          <ArrowUp />
        </button>
        <button
          onClick={() => {
            if (handleValidation(false)) {
              setSession(unit, session[unit] - 1);
            }
          }}
          className="border-l border-[#5e5e5e] h-full px-3 hover:bg-[#444444]"
        >
          <ArrowDown />
        </button>
      </div>
    </div>
  );
};

export default SetTime;
