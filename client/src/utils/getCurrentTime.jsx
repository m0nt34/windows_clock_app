export const getCurrentTime = () => {
  const options = {
    year: "numeric",
    month: "2-digit",
    weekday: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  const formatter = new Intl.DateTimeFormat([], options);
  const formattedDate = formatter.formatToParts(new Date());

  const dateTime = {
    year: "",
    month: "",
    weekday: "",
    day: "",
    hour: "",
    minute: "",
    second: "",
    dayPeriod: "",
  };

  formattedDate.forEach(({ type, value }) => {
    if (type in dateTime) {
      dateTime[type] = value;
    }
  });

  return dateTime;
};
