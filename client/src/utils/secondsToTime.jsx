import { padZero } from "./PadZero";
export const secondsToTime = (secs) => {
  const hours = Math.floor(secs / 3600);
  const minutes = Math.floor((secs % 3600) / 60);
  const seconds = secs % 60;
  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
};
