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

  const amOrpm = () => {
    if (hours < 1) {
      hours = 12;
      return "AM";
    }
    if (hours < 12) {
      return "AM";
    }
    if (hours >= 12 && hours < 13) {
      return "PM";
    }
    if (hours > 12) {
      hours = hours - 12;
      return "PM";
    }
  };
  const ampm = amOrpm();
  return `${padZero(hours)}:${padZero(minutes)} ${ampm}`;
};
