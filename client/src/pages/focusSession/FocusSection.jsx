import React, { useEffect, useState } from "react";
import { useFullFocusSession } from "../../store/useFullFocusSession";

const FocusSection = () => {
  const [currentTimePeriod, setCurrentTimePeriod] = useState(0);
  const { focusSession } = useFullFocusSession();
  useEffect(() => {
    console.log(focusSession);
  }, []);
  return (
    <div className="flex items-center justify-center flex-col gap-5 bg-[#323232] rounded-[6px] px-5 pt-3 pb-7 border border-[#252525] shadow select-none">
      <div className="flex items-center justify-center relative bg-[#3c3c3c] h-64 w-64 rounded-full border-[2px] border-[#414141]">
        <span className="flex items-end text-[40px] leading-[45px]">
          {focusSession[currentTimePeriod]}{" "}
          <p className="text-2xl text-[#b8b8b8] ml-[5px]">min</p>
        </span>
        {Array(24)
          .fill(0)
          .map((_, i) => {
            return (
              <div
                key={i}
                className={`absolute bg-[#494949] w-[22px] h-[6px] rounded-full`}
                style={{ transform: `rotate(${i * 15}deg) translate(102px)` }}
              ></div>
            );
          })}
      </div>
    </div>
  );
};

export default FocusSection;
