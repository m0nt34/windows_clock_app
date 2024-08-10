import React from "react";
import { getCurrentTime } from "../../utils/getCurrentTime"; 

const calculateTimeDifference = (currentTime, alarmTime) => {
  const now = new Date(
    `${currentTime.month} ${currentTime.day}, ${currentTime.year} ${currentTime.hour}:${currentTime.minute} ${currentTime.dayPeriod}`
  );
  console.log(now);
  
  const alarmDate = new Date(
    `${now.toDateString()} ${alarmTime.hour}:${alarmTime.minute} ${alarmTime.period}`
  );
  console.log(alarmDate);
  
  if (alarmDate <= now) {
    alarmDate.setDate(alarmDate.getDate() + 1);
  }

  const diffInMs = alarmDate - now;

  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInMinutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));

  return { hours: diffInHours, minutes: diffInMinutes };
};


const CalculateAlarmTriggerTime = ({ alarm }) => {
  const currentTime = getCurrentTime();
  const { time, days } = alarm;

  const alarmTime = {
    hour: time.hours,
    minute: time.minutes,
    period: time.period,
  };

  const { hours, minutes } = calculateTimeDifference(currentTime, alarmTime);

  return (
    <div className="text-[13px] leading-[18px]">
      {`in ${hours} hours, ${minutes} minutes`}
    </div>
  );
};

export default CalculateAlarmTriggerTime;
