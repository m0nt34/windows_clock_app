export const getTimeInML = (time) => {
  const [hour, minute, second, milisecond] = time.split(/[:.]/).map(Number);
  return hour * 360000 + minute * 6000 + second * 100 + milisecond;
};