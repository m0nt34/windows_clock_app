import React, { useEffect, useRef, useState } from "react";
import { getCurrentTime } from "../../utils/getCurrentTime";
import {
  calculateTimeDifferenceForNonRepeat,
  calculateTimeDifferenceForRepeat,
} from "../../utils/getAlarmTime";
import { checkIfPlural } from "../../utils/checkIfPlural";
import { useDismissPopup } from "../../store/useDismissPopup";

const formatTimeDifference = ({ days, hours, minutes, seconds }) => {
  const parts = [];
  if (days) parts.push(`${days} day${checkIfPlural(days) ? "s" : ""}`);
  if (hours) parts.push(`${hours} hour${checkIfPlural(hours) ? "s" : ""}`);
  if (minutes)
    parts.push(`${minutes} minute${checkIfPlural(minutes) ? "s" : ""}`);
  if (!days && !hours && !minutes) parts.push(`${seconds} seconds`);
  return parts.join(", ");
};

const CalculateAlarmTriggerTime = ({ alarm, handleTurnDisabled }) => {
  const { setShowDismiss, setName } = useDismissPopup();
  const [timeDifference, setTimeDifference] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 2,
  });


  useEffect(() => {
    const checkIfTriggerAlarm = () => {
      if (
        timeDifference.days === 0 &&
        timeDifference.hours === 0 &&
        timeDifference.minutes === 0 &&
        timeDifference.seconds === 1 &&
        !alarm.disabled
      ) {
        setName(alarm.name);
        setShowDismiss();
        if(!alarm.days.repeat){
          handleTurnDisabled();
        }
      }
    };

    checkIfTriggerAlarm();
  }, [timeDifference, alarm.disabled]);
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = getCurrentTime();
      const { days, hours, minutes, seconds } = alarm.days.repeat
        ? calculateTimeDifferenceForRepeat(
            currentTime,
            alarm.time,
            alarm.days.days
          )
        : calculateTimeDifferenceForNonRepeat(currentTime, alarm.time);
      setTimeDifference({ days, hours, minutes, seconds });
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
