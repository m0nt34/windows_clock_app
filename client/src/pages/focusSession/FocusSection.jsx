import React, { useEffect, useMemo, useRef, useState } from "react";
import { useFullFocusSession } from "../../store/useFullFocusSession";
import Play from "../../assets/icons/Play";
import Stop from "../../assets/icons/Stop";
import GoBack from "../../assets/icons/Goback";
import ThreeDots from "../../assets/icons/ThreeDots";
import Check from "../../assets/icons/Check";
import plant from "../../assets/images/plant.png";
import { useDismissPopup } from "../../store/useDismissPopup";
const FocusSection = () => {
  const currentTimePeriod = useRef(0);
  const timer = useRef(null);
  const { focusSession, toggleStartFocusSession } = useFullFocusSession();
  const { setShowDismiss, setShowTimeOnDismiss, setMainName, setName } =
    useDismissPopup();
  const [secs, setSecs] = useState(focusSession[currentTimePeriod.current] * 60); // Updated to minutes
  const [playing, setPlaying] = useState(true);

  const [show, setShow] = useState(false);
  const [showTime, setShowTime] = useState(true);

  useEffect(() => {
    if (playing) {
      timer.current = setInterval(() => {
        setSecs((prev) => {
          if (prev === 0) {
            if (currentTimePeriod.current + 0.5 > focusSession.length) {
              clearInterval(timer.current);
              setPlaying(false);
            } else {
              currentTimePeriod.current += 0.5;
            }
            return currentTimePeriod.current >= focusSession.length
              ? 0
              : focusSession[currentTimePeriod.current] * 60; // Updated to minutes
          } else {
            return prev - 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(timer.current);
    }

    return () => clearInterval(timer.current);
  }, [playing, focusSession]);

  useEffect(() => {
    if (secs === 0 && currentTimePeriod.current + 1 >= focusSession.length) {
      setName("You have finished your focus session");
      setMainName("Great job!");
      setShowTimeOnDismiss(false);
      setShowDismiss();
    }
  }, [secs]);

  const timerDisplay = useMemo(() => {
    const checkIfBlue = (i) => {
      const x =
        ((focusSession[currentTimePeriod.current] * 60 - secs) * 24) / // Updated to minutes
        (focusSession[currentTimePeriod.current] * 60); // Updated to minutes
      return x > i;
    };
    return (
      <div className="flex items-center justify-center relative bg-[#3c3c3c] h-64 w-64 rounded-full border-[2px] border-[#414141]">
        <span className="flex items-end text-[40px] leading-[45px]">
          {showTime ? (
            <>
              {secs < 60 ? secs % 60 : Math.floor(secs / 60)}{" "}
              <p className="text-2xl text-[#b8b8b8] ml-[5px]">
                {secs < 60 ? "sec" : "min"}{" "}
              </p>
            </>
          ) : (
            <img src={plant} className="h-36" />
          )}
        </span>
        {Array(24)
          .fill(0)
          .map((_, i) => {
            return (
              <div
                key={i}
                className={`absolute ${
                  checkIfBlue(i) ? "bg-customColor-blue" : "bg-[#494949]"
                } w-[22px] h-[6px] rounded-full`}
                style={{ transform: `rotate(${i * 15}deg) translate(102px)` }}
              ></div>
            );
          })}
      </div>
    );
  }, [secs, showTime]);

  return (
    <div className="flex items-center justify-center flex-col gap-5 bg-[#323232] rounded-[6px] px-5 pt-3 pb-7 border border-[#252525] shadow select-none">
      <header className="flex w-full text-2xl font-semibold">
        {currentTimePeriod.current % 2 === 0
          ? `Focus period (${Math.floor(
              currentTimePeriod.current / 2 + 1
            )} of ${Math.floor(focusSession.length / 2 + 1)})`
          : `Break`}
      </header>
      {timerDisplay}
      <div className="flex gap-2 items-center justify-center w-full">
        <button
          className="bg-customColor-blue p-2 rounded-full hover:bg-[#68aada]"
          onClick={() => {
            setPlaying((prev) => !prev);
            setShow(false);
          }}
        >
          {playing ? <Stop /> : <Play />}
        </button>
        {!playing && (
          <button
            onClick={() => {
              toggleStartFocusSession();
              setShow(false);
            }}
            className="bg-[#3e3e3e] p-[7.5px] rounded-full border-[1px] border-[#494949]"
          >
            <GoBack />
          </button>
        )}
        <div className="relative">
          {show && (
            <button
              onClick={() => {
                setShow((prev) => !prev);
                setShowTime((prev) => !prev);
              }}
              className="flex bottom-[38px] absolute p-2 pr-4 bg-[#2e2e2e] rounded-lg border border-[#252525] whitespace-nowrap overflow-hidden text-ellipsis transition hover:bg-[#3b3b3b] hover:border-[#3b3b3b]"
            >
              <div className="flex items-center justify-center w-[30px] h-[25px]">
                {showTime && <Check />}
              </div>
              Show time remaining
            </button>
          )}
          <button
            onClick={() => setShow((prev) => !prev)}
            className="bg-[#3e3e3e] p-[7.5px] rounded-full border-[1px] border-[#494949]"
          >
            <ThreeDots />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FocusSection;
