import React, { useEffect, useState } from "react";
import { getCurrentTime } from "../../utils/getCurrentTime";
import {
  calculateTimeDifferenceForNonRepeat,
  calculateTimeDifferenceForRepeat,
} from "../../utils/getAlarmTime";
import { checkIfPlural } from "../../utils/checkIfPlural";

const formatTimeDifference = ({ days, hours, minutes }) => {
  const parts = [];
  if (days) parts.push(`${days} day${checkIfPlural(days) ? "s" : ""}`);
  if (hours) parts.push(`${hours} hour${checkIfPlural(hours) ? "s" : ""}`);
  if (minutes)
    parts.push(`${minutes} minute${checkIfPlural(minutes) ? "s" : ""}`);
  return parts.join(", ");
};

const CalculateAlarmTriggerTime = ({ alarm }) => {
  const [timeDifference, setTimeDifference] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });
 
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = getCurrentTime();
      const { days, hours, minutes } = alarm.days.repeat
        ? calculateTimeDifferenceForRepeat(
            currentTime,
            alarm.time,
            alarm.days.days
          )
        : calculateTimeDifferenceForNonRepeat(currentTime, alarm.time);
      setTimeDifference({ days, hours, minutes });
    }, 1000);

    return () => clearInterval(interval);
  }, [alarm.time, alarm.days.repeat, alarm.days.days]);

  return (
    <div className="text-[13px] leading-[18px]">
      in {formatTimeDifference(timeDifference)}
    </div>
  );
};
export default CalculateAlarmTriggerTime;
