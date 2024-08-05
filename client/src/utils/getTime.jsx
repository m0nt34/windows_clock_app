import { useStopwatchStore } from "../store/useStopwatchStore";
import { padZero } from "./PadZero";
import { getTimeInML } from "./getTimeInML";
export const getCurrentTime = () => {
  const { milliseconds, seconds, minutes, hours } =
    useStopwatchStore.getState();
  return `
    ${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}.${padZero(
    milliseconds
  )}
    `;
};

export const getTimeDifference = (currTime, prevTime) => {
  const currTimeML = getTimeInML(currTime);
  const prevTimeML = getTimeInML(prevTime);

  const timeDifference = currTimeML - prevTimeML;

  const Hours = Math.floor(timeDifference / 360000);
  const Minutes = Math.floor((timeDifference % 360000) / 6000);
  const Seconds = Math.floor((timeDifference % 6000) / 100);
  const MiliSeconds = timeDifference % 100;

  return `${padZero(Hours)}:${padZero(Minutes)}:${padZero(Seconds)}.${padZero(
    MiliSeconds
  )}`;
};
