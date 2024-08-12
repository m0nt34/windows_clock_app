import { padZero } from "./PadZero";
export const secondsToTime = (secs) => {
  const hours = Math.floor(secs / 3600);
  const minutes = Math.floor((secs % 3600) / 60);
  const seconds = secs % 60;
  return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
};

export const secondsToAmPmClock = (secs) => {
  let hours = Math.floor(secs / 3600) % 24;
  const minutes = Math.floor((secs % 3600) / 60);

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return `${padZero(hours)}:${padZero(minutes)} ${ampm}`;
};