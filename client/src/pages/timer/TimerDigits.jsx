import React, { useEffect, useRef, useState, memo } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Goback from "../../assets/icons/Goback";
import Play from "../../assets/icons/Play";
import Stop from "../../assets/icons/Stop";
import { secondsToTime } from "../../utils/secondsToTime";
import { useEdit } from "../../store/useEditTimer";
import { getTimerEndTime } from "../../utils/getTimerEndTime";
import Bell from "../../assets/icons/Bell";
import { useDismissPopup } from "../../store/useDismissPopup";
const TimerDigits = ({ seconds, setPlaying, name }) => {
  const { setShowDismiss, setName } = useDismissPopup();
  const [play, setPlay] = useState(false);
  const [secs, setSecs] = useState(seconds);
  const reset = useRef(false);
  const inter = useRef(null);
  const { edit } = useEdit();
  useEffect(() => {
    setSecs(seconds);
  }, [seconds]);
  useEffect(() => {
    if (secs === 0) {
      setName(name);
      setShowDismiss();
    }
  }, [secs]);
  const handlePlay = () => {
    setPlay((prev) => !prev);
    if (secs === 0) {
      handleReset();
      setPlaying(false);
    } else if (!play) {
      setPlaying(true);
      reset.current = true;
      inter.current = setInterval(() => {
        setSecs((prev) => {
          if (prev === 0) {
            setPlay(false);
            clearInterval(inter.current);
            return prev;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setPlaying(false);
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
    <div className="flex flex-col gap-4">
      <div className="relative flex flex-col items-center justify-center text-center w-[9ch] font-medium  rounded-full px-3 ">
        <div className="relative flex items-center justify-center w-[210px] h-[210px]">
          <CircularProgressbar
            value={(secs / seconds) * 100}
            strokeWidth={6.5}
            styles={buildStyles({
              trailColor: "#3a3a3a",
              pathColor: reset.current ? "#73baed" : "#3a3a3a",
              textColor: edit ? "#7d7d7d" : "#1b1a1a",
              pathTransitionDuration: 1,
            })}
          />
          <p
            className={`absolute flex items-center justify-center w-full h-full text-center text-[40px] font-semibold ${
              edit ? "text-[#7d7d7d]" : "text-[#fff]"
            }`}
          >
            {secondsToTime(secs)}
          </p>
          {play && (
            <div
              className={`absolute flex items-center justify-center gap-1 bottom-[50px] bg-[#3a3a3a] text-xs w-fit font-normal py-1 px-[10px] rounded-full ${
                edit ? "text-[#7d7d7d]" : "text-[#fff]"
              }`}
            >
              <Bell size={12} edit={edit} />
              {getTimerEndTime(secs)}
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex w-full items-center justify-center gap-2">
          <button
            type="button"
            onClick={handlePlay}
            className={`flex items-center justify-center p-2 hegih rounded-full ${
              edit ? "pointer-events-none bg-[#515151]" : "bg-customColor-blue"
            } hover:bg-[#6daad9] `}
          >
            {play ? (
              <Stop className="h-3 w-3" edit={edit} />
            ) : (
              <Play className="h-3 w-3" edit={edit} />
            )}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className={`flex items-center justify-center p-[7px] rounded-full bg-[#404040] border-[2px] border-[#4b4b4b] ${
              (!reset.current && !play) || edit
                ? "opacity-50 pointer-events-none"
                : null
            }`}
          >
            <Goback className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(TimerDigits);
