import React, { useState, forwardRef, useImperativeHandle } from "react";
import CheckWithAnimation from "../../../assets/icons/CheckWithAnimation";
import WeekDayButton from "./WeekDayButton";

const AlarmDays = forwardRef((props, ref) => {
  const [alarmDays, setAlarmDays] = useState({
    repeat: false,
    days: [
      { name: "Su", value: "Sun", status: false },
      { name: "M", value: "Mon", status: false },
      { name: "Tu", value: "Tue", status: false },
      { name: "We", value: "Wed", status: false },
      { name: "Th", value: "Thu", status: false },
      { name: "Fri", value: "Fri", status: false },
      { name: "Sa", value: "Sat", status: false },
    ],
  });
  useImperativeHandle(ref, () => ({
    getDays: () => alarmDays,
  }));
  const toggleRepeat = () => {
    setAlarmDays((prev) => {
      const hasActiveDays = prev.days.some((day) => day.status);
      if (prev.repeat) {
        return {
          ...prev,
          repeat: !prev.repeat,
        };
      } else {
        return {
          ...prev,
          repeat: !prev.repeat,
          days: prev.days.map((d) => ({
            ...d,
            status: !prev.repeat && !hasActiveDays ? true : d.status,
          })),
        };
      }
    });
  };

  const buttonClasses = alarmDays.repeat
    ? "bg-customColor-blue border-customColor-blue hover:bg-[#6ca9d8] rounded-md"
    : "h-5 w-5 border border-[#b1b1b1] rounded-md";

  return (
    <div className="flex flex-col w-full gap-3">
      <div className="flex items-center gap-2">
        <button
          type="button"
          className={buttonClasses}
          onClick={toggleRepeat}
          aria-pressed={alarmDays.repeat}
        >
          {alarmDays.repeat && <CheckWithAnimation />}
        </button>
        <span className="text-sm">Repeat alarm</span>
      </div>
      <div className="flex w-full justify-between">
        {alarmDays.days.map((day, i) => (
          <WeekDayButton
            key={i}
            setAlarmDays={setAlarmDays}
            repeat={alarmDays.repeat}
            day={day}
          />
        ))}
      </div>
    </div>
  );
});

export default AlarmDays;
