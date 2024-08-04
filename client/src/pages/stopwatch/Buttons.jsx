import React from "react";
import Play from "../../assets/icons/Play";
import Flag from "../../assets/icons/Flag";
import Stop from "../../assets/icons/Stop";
import Goback from "../../assets/icons/Goback";
import { usePlay } from "../../store/useStartStopwatch";
import { useStopwatchStore } from "../../store/useStopwatchStore";
const Buttons = () => {
  const { play, setPlay } = usePlay();
  const { reset, setResetToFalse } = useStopwatchStore();
  const handleClick = () => {};
  return (
    <div className="flex gap-[24px]">
      <button
        type="button"
        onClick={setPlay}
        className="flex items-center justify-center p-5 rounded-full bg-customColor-blue"
      >
        {play ? <Stop /> : <Play />}
      </button>
      <button
        type="button"
        className={`flex items-center justify-center p-[18px] rounded-full bg-[#343434] border-[3px] border-[#3d3d3d] ${
          play ? "opacity-50 pointer-events-none" : null
        }`}
      >
        <Flag />
      </button>
      <button
        type="button"
        className={`flex items-center justify-center p-[18px] rounded-full bg-[#343434] border-[3px] border-[#3d3d3d] ${
          !reset && !play ? "opacity-50 pointer-events-none" : null
        }`}
      >
        <Goback />
      </button>
    </div>
  );
};

export default Buttons;
