import React, { useRef, useState } from "react";
import Goback from "../../assets/icons/Goback";
import BinTrash from "../../assets/icons/BinTrash";
import Play from "../../assets/icons/Play";
import Stop from "../../assets/icons/Stop";
import { secondsToTime } from "../../utils/secondsToTime";
const TimeDown = ({ name, seconds }) => {
  const [play, setPlay] = useState(false);
  const [secs, setSecs] = useState(seconds);
  const reset = useRef(false);
  const inter = useRef(null);
  const handlePlay = () => {
    setPlay((prev) => !prev);
    if (!play) {
      reset.current = true;
      inter.current = setInterval(() => {
        setSecs((prev) => {
          if (prev === 0) {
            clearInterval(inter.current);
            return prev;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(inter.current);
    }
  };

  const handleReset = () => {
    setPlay(false);
    setSecs(seconds);
    clearInterval(inter.current);
    reset.current = false;
  };
  return (
    <div className="flex flex-col items-center gap-1 timer-box p-1 select-none">
      <header className="flex w-full justify-between items-center">
        <span className="text-base font-bold ml-2">{name}</span>
        <button className="hover:bg-[#454545] rounded-md p-2">
          <BinTrash className="text-xl" />
        </button>
      </header>
      <div className="flex flex-col gap-4">
        <div className="text-center w-[9ch] font-medium text-[40px] border-[13px] border-[#3a3a3a] rounded-full px-3 py-[60px]">
          {secondsToTime(secs)}
        </div>

        <div className="flex w-full">
          <div className="flex w-full items-center justify-center gap-2">
            <button
              type="button"
              onClick={handlePlay}
              className="flex items-center justify-center p-2 hegih rounded-full bg-customColor-blue hover:bg-[#6daad9]"
            >
              {play ? (
                <Stop className="h-3 w-3" />
              ) : (
                <Play className="h-3 w-3" />
              )}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className={`flex items-center justify-center p-[7px] rounded-full bg-[#404040] border-[2px] border-[#4b4b4b] ${
                !reset.current && !play
                  ? "opacity-50 pointer-events-none"
                  : null
              }`}
            >
              <Goback className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeDown;
