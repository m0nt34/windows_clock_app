import React, { useEffect, useState } from "react";
import BinTrash from "../../assets/icons/BinTrash";
import { useEdit } from "../../store/useEditTimer";
import { useShowPopup } from "../../store/useShopPopup";
import { padZero } from "../../utils/PadZero";
import ShowWeekDays from "./ShowWeekDays";
import Bell from "../../assets/icons/Bell";
import CalculateAlarmTriggerTime from "./CalculateAlarmTriggerTime";
const CustomAlarm = ({ id, alarm, setAlarms }) => {
  const { setShow } = useShowPopup();
  const { edit, setEditTimer } = useEdit();

  const handleDelete = (e) => {
    e.stopPropagation();
    setAlarms((prev) => {
      return prev.filter((_, i) => id !== i);
    });
  };
  const handleEdit = () => {
    if (edit) {
      setEditTimer(id);
      setShow();
    }
  };
  const handleTurnDisabled = () => {
    setAlarms((prev) =>
      prev.map((alarm, i) =>
        id === i ? { ...alarm, disabled: !alarm.disabled } : alarm
      )
    );
  };
  return (
    <div
      onClick={handleEdit}
      className="flex flex-col items-center gap-1 px-4 py-3  select-none alarm-box"
    >
      <header className="flex w-full items-start justify-between mb-[5px]  text-white">
        <span
          className={`text-[70px] flex items-end font-semibold gap-[5px] leading-[55px] ${
            edit || alarm.disabled ? "text-[#7d7d7d]" : null
          }`}
        >
          {alarm.time.hours}:{padZero(alarm.time.minutes)}
          <p className="font-bold text-[14px] leading-[5px]">
            {alarm.time.period}
          </p>
        </span>
        <div>
          {edit ? (
            <button
              onClick={handleDelete}
              className="hover:bg-[#454545] rounded-md p-2"
            >
              <BinTrash className="text-xl" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleTurnDisabled}
              className={`relative flex items-center h-5 w-10 border ${
                alarm.disabled
                  ? "border-[#a1a1a1]"
                  : "border-customColor-blue bg-customColor-blue"
              } rounded-full group`}
            >
              <div
                className={`absolute ${
                  alarm.disabled
                    ? "left-1 group-hover:left-[3px] group-active:left-[3px] bg-[#d1d1d1]"
                    : "right-1 group-hover:right-[3px] group-active:right-[3px] bg-black"
                } h-3 w-3 rounded-full group-hover:h-[14px] group-hover:w-[14px] group-active:h-[14px] group-active:w-[18px] `}
              />
            </button>
          )}
        </div>
      </header>
      <div
        className={`w-full flex items-end gap-2 mt-2 ${
          edit || alarm.disabled ? "text-[#7d7d7d]" : null
        }`}
      >
        <Bell size={16} edit={edit || alarm.disabled} />
        <CalculateAlarmTriggerTime alarm={alarm} />
      </div>
      <div
        className={`w-full ${
          edit || alarm.disabled ? "text-[#7d7d7d]" : null
        } font-semibold text-[22px]`}
      >
        {alarm.name}
      </div>
      <div className="flex w-full">
        <div className="flex max-w-[280px] w-full justify-between">
          {alarm.days.days.map((day, i) => (
            <ShowWeekDays
              key={i}
              day={day}
              repeat={alarm.days.repeat}
              disabled={alarm.disabled}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CustomAlarm;
