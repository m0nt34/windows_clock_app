import React, { useState, useEffect, useRef } from "react";
import { useTLTrigger } from "../../store/useTimeLapTrigger";
import { getCurrentTime, getTimeDifference } from "../../utils/getTime";
import { useStopwatchStore } from "../../store/useStopwatchStore";

const TimeLaps = () => {
  const { triggerTL, setTLtoFalse } = useTLTrigger();
  const { reset } = useStopwatchStore();
  const [laps, setLaps] = useState([]);
  const prevTime = useRef("00:00:00.00");
  useEffect(() => {
    if (triggerTL) {
      const currTime = getCurrentTime().trim();
      const timeDifference = getTimeDifference(currTime, prevTime.current);
      const currLap = {
        timeDif: timeDifference,
        currentTime: currTime,
      };
      setLaps((prevLaps) => [currLap, ...prevLaps]);
      prevTime.current = currTime;
      setTLtoFalse();
    }
  }, [triggerTL]);

  useEffect(() => {
    if (!reset) {
      setLaps([]);
      prevTime.current = "00:00:00.00";
    }
  }, [reset]);

  return (
    laps.length > 0 && (
      <div className="max-w-[660px] w-full select-none h-full">
        <header className="border-b-[2.5px] border-[#343434]">
          <div className="flex">
            <div className="w-[30%] py-3 text-left font-medium">Laps</div>
            <div className="w-[40%] py-3 text-left font-medium">Time</div>
            <div className="w-[30%] py-3 text-left font-medium">Total</div>
          </div>
        </header>
        <main className="laps-container">
          <ul className="flex flex-col-reverse list-none">
            {laps
              .slice()
              .reverse()
              .map((lap, index) => (
                <li key={index} className="flex">
                  <div className="w-[30%] py-[10px] text-left font-normal">
                    {index + 1}
                  </div>
                  <div className="w-[40%] py-[10px] text-left font-normal">
                    {lap.timeDif}
                  </div>
                  <div className="w-[30%] py-[10px] text-left font-normal">
                    {lap.currentTime}
                  </div>
                </li>
              ))}
          </ul>
        </main>
      </div>
    )
  );
};

export default TimeLaps;
