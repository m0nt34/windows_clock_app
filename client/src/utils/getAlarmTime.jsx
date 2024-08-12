export const calculateTimeDifferenceForNonRepeat = (currentTime, alarmTime) => {
  const now = new Date(
    `${currentTime.month} ${currentTime.day}, ${currentTime.year} ${currentTime.hour}:${currentTime.minute}:${currentTime.second} ${currentTime.dayPeriod}`
  );

  const alarmDate = new Date(
    `${now.toDateString()} ${alarmTime.hours}:${alarmTime.minutes} ${
      alarmTime.period
    }`
  );

  if (alarmDate <= now) {
    alarmDate.setDate(alarmDate.getDate() + 1);
  }

  const diffInMs = alarmDate - now;

  const diffDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInHours = Math.floor(
    (diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const diffInMinutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
  const diffSeconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

  return {
    days: diffDays,
    hours: diffInHours,
    minutes: diffInMinutes,
    seconds: diffSeconds,
  };
};

export const calculateTimeDifferenceForRepeat = (
  currentTime,
  alarmTime,
  repeatDays
) => {
  const now = new Date(
    `${currentTime.month} ${currentTime.day}, ${currentTime.year} ${currentTime.hour}:${currentTime.minute}:${currentTime.second} ${currentTime.dayPeriod}`
  );

  const currentDayIndex = now.getDay();
  let daysUntilNextAlarm = null;

  if (repeatDays[currentDayIndex].status) {
    const todayAlarmDate = new Date(now);
    todayAlarmDate.setHours(
      alarmTime.hours +
        (alarmTime.period === "PM" && alarmTime.hours !== 12 ? 12 : 0),
      alarmTime.minutes,
      0,
      0
    );

    const diffInMsToday = todayAlarmDate - now;

    if (diffInMsToday > 0) {
      
      daysUntilNextAlarm = 0;
    } else {
      for (let i = 1; i < 8; i++) {
        const checkDayIndex = (currentDayIndex + i) % 7;
        if (repeatDays[checkDayIndex].status) {
          daysUntilNextAlarm = i;
          break;
        }
      }
    }
  } else {

    for (let i = 1; i < 7; i++) {
      const checkDayIndex = (currentDayIndex + i) % 7;
      if (repeatDays[checkDayIndex].status) {
        daysUntilNextAlarm = i;
        break;
      }
    }
  }

  const nextAlarmDate = new Date(now);
  nextAlarmDate.setDate(now.getDate() + daysUntilNextAlarm);
  nextAlarmDate.setHours(
    alarmTime.hours +
      (alarmTime.period === "PM" && alarmTime.hours !== 12 ? 12 : 0),
    alarmTime.minutes,
    0,
    0
  );

  const diffInMs = nextAlarmDate - now;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInHours = Math.floor(
    (diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const diffInMinutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
  const diffInSeconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

  return {
    days: diffInDays,
    hours: diffInHours,
    minutes: diffInMinutes,
    seconds: diffInSeconds,
  };
};
