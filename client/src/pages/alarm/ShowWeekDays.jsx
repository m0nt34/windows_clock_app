import React from "react";
import { useEdit } from "../../store/useEditTimer";

const ShowWeekDays = ({ day, repeat, disabled }) => {

  const { edit } = useEdit();
  return (
    <div
      className={`flex items-center justify-center text-[11px] w-[27px] h-[27px] rounded-full ${
        repeat
          ? day.status
            ? disabled || edit
              ? "bg-[#727272]"
              : "bg-customColor-blue text-black"
            : ""
          : ""
      }`}
    >
      {day.name}
    </div>
  );
};

export default ShowWeekDays;
