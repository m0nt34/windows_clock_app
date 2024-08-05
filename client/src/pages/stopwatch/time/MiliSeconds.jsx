import React, { useEffect, useRef } from "react";
import { usePlay } from "../../../store/useStartStopwatch";
import { useStopwatchStore } from "../../../store/useStopwatchStore";
import { padZero } from "../../../utils/PadZero";
const MiliSeconds = () => {
  const { incrementMilliseconds, milliseconds } = useStopwatchStore();
  const { play } = usePlay();
  const interval = useRef(null);

  const startStopwatch = () => {
    interval.current = setInterval(() => {
      incrementMilliseconds();
    }, 10);
  };

  const stopStopwatch = () => {
    clearInterval(interval.current);
  };

  useEffect(() => {
    if (play) {
      startStopwatch();
    } else {
      stopStopwatch();
    }

    return () => {
      stopStopwatch();
    };
  }, [play]);

  return <div>{padZero(milliseconds)}</div>;
};

export default MiliSeconds;
