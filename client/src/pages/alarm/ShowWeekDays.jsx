import React from "react";

const ShowWeekDays = ({ day, repeat }) => {
  
  return (
    <div
      className={`flex items-center justify-center text-[11px] w-[27px] h-[27px] rounded-full ${
        repeat
          ? day.status
            ? "bg-customColor-blue text-black"
            : ""
          : ""
      }`}
    >
      {day.name}
    </div>
  );
};

export default ShowWeekDays;
