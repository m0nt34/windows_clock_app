import React from "react";

const WeekDayButton = ({ setAlarmDays, repeat, day }) => {
  const { name, status } = day;

  const handleClick = () => {
    setAlarmDays((prev) => {
      var updatedDays;
      if (repeat) {
        updatedDays = prev.days.map((d) =>
          d.name === name ? { ...d, status: !d.status } : d
        );
      } else {
        updatedDays = prev.days.map((d) =>
          d.name === name ? { ...d, status: true } : { ...d, status: false }
        );
      }
      const hasActiveDays = updatedDays.some((d) => d.status);
      return {
        ...prev,
        days: updatedDays,
        repeat: hasActiveDays,
      };
    });
  };

  return (
    <button
      type="button"
      className={`flex items-center justify-center border text-[12px] border-customColor-blue h-8 w-8 rounded-full ${
        status && repeat
          ? "text-black bg-customColor-blue hover:bg-[#66a9d8]"
          : "text-customColor-blue hover:bg-[#2e2e2e] hover:text-[#9fd3f8] hover:border-[#9fd3f8]"
      }`}
      onClick={handleClick}
      aria-pressed={status}
    >
      {name}
    </button>
  );
};

export default WeekDayButton;
