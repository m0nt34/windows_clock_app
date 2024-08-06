import { secondsToAmPmClock } from "./secondsToTime";
export const getTimerEndTime = (seconds) => {
  const date = new Date();
  const timeToSeconds =
    date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
  return secondsToAmPmClock(timeToSeconds + seconds);
};
