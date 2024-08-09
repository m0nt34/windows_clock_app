import React, { useEffect, useState } from "react";
import BinTrash from "../../assets/icons/BinTrash";
import { useEdit } from "../../store/useEditTimer";
import { useShowPopup } from "../../store/useShopPopup";
import { padZero } from "../../utils/PadZero";
import ShowWeekDays from "./ShowWeekDays";
import Bell from "../../assets/icons/Bell";
const CustomAlarm = ({ id, alarm, setAlarms }) => {
  const { setShow } = useShowPopup();
  const { edit, setEditTimer } = useEdit();

  const handleDelete = (e) => {};
  const handleEdit = () => {
    if (edit) {
      setEditTimer(id);
      setShow();
    }
  };
  return (
    <div
      onClick={handleEdit}
      className="flex flex-col items-center gap-1 px-4 py-3  select-none alarm-box"
    >
      <header className="flex w-full items-start justify-between mb-[5px]  text-white">
        <span
          className={`text-[65px] flex items-end font-semibold gap-[5px] leading-[45px] ${
            edit ? "text-[#7d7d7d]" : null
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
              className="relative flex items-center h-5 w-10 border border-[#a1a1a1] rounded-full group"
            >
              <div className="absolute left-1 h-3 w-3 bg-[#d1d1d1] rounded-full group-hover:h-[14px] group-hover:w-[14px] group-hover:left-[3px] group-active:h-[14px] group-active:w-[18px] group-active:left-[3px] transition-all duration-300" />
            </button>
          )}
        </div>
      </header>
      <div className="w-full flex">
        <Bell size={15} edit={edit} />
      </div>
      <div className="w-full text-white font-semibold text-[22px]">
        {alarm.name}
      </div>
      <div className="flex w-full">
        <div className="flex max-w-[280px] w-full justify-between">
          {alarm.days.days.map((day, i) => (
            <ShowWeekDays key={i} day={day} repeat={alarm.days.repeat} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CustomAlarm;
