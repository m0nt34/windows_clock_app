import React from "react";
import Play from "../../assets/icons/Play";
import Flag from "../../assets/icons/Flag";
import Stop from "../../assets/icons/Stop";
import Goback from "../../assets/icons/Goback";
import { usePlay } from "../../store/useStartStopwatch";
import { useStopwatchStore } from "../../store/useStopwatchStore";
import { useTLTrigger } from "../../store/useTimeLapTrigger";
const Buttons = () => {
  const { play, setPlay } = usePlay();
  const { reset, setResetToTrue, setResetToFalse, incrementMilliseconds } =
    useStopwatchStore();
  const { setTLtoTrue } = useTLTrigger();
  const handleClick = () => {
    setResetToTrue();
    setPlay();
  };
  const handleReset = () => {
    setResetToFalse();
    if (play) {
      setTimeout(() => {
        setPlay();
      }, 15);
    } else {
      incrementMilliseconds();
    }
  };

  return (
    <div className="flex gap-[24px]">
      <button
        type="button"
        onClick={handleClick}
        className="flex items-center justify-center p-[22px] rounded-full bg-customColor-blue hover:bg-[#6daad9]"
      >
        {play ? <Stop className="w-6 h-6"/> : <Play className="w-6 h-6"/>}
      </button>
      <button
        type="button"
        onClick={setTLtoTrue}
        className={`flex items-center justify-center p-[18px] rounded-full bg-[#343434] border-[3px] border-[#3d3d3d] ${
          !play ? "opacity-50 pointer-events-none" : null
        }`}
      >
        <Flag />
      </button>
      <button
        type="button"
        onClick={handleReset}
        className={`flex items-center justify-center p-[20px] rounded-full bg-[#343434] border-[3px] border-[#3d3d3d] ${
          !reset && !play ? "opacity-50 pointer-events-none" : null
        }`}
      >
        <Goback className="w-6 h-6"/>
      </button>
    </div>
  );
};

export default Buttons;
