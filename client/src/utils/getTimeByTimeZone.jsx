export const getCurrentTimeInTimeZone = (timeZone) => {
  const options = {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const formatter = new Intl.DateTimeFormat([], options);
  const formattedDate = formatter.formatToParts(new Date());

  const dateTime = {
    year: "",
    month: "",
    day: "",
    hour: "",
    minute: "",
    dayPeriod: "",
  };

  formattedDate.forEach(({ type, value }) => {
    if (type in dateTime) {
      dateTime[type] = value;
    }
  });

  return dateTime;
};
