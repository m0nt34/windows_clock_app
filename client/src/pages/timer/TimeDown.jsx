import React, { useEffect, useRef, useState } from "react";

import BinTrash from "../../assets/icons/BinTrash";

import { useEdit } from "../../store/useEditTimer";

import TimerDigits from "./TimerDigits";
import { useShowPopup } from "../../store/useShopPopup";
const TimeDown = ({ id, name, seconds, setTimers }) => {
  const { setShow } = useShowPopup();
  const { edit, setEditTimer } = useEdit();

  const [playing, setPlaying] = useState(false);
  const handleDelete = (e) => {
    if (!playing) {
      e.stopPropagation();
      setTimers((prev) => prev.filter((_, i) => i !== id));
    }
  };
  const handleEdit = () => {
    if (edit && !playing) {
      setEditTimer(id);
      setShow();
    }
  };

  return (
    <div
      onClick={handleEdit}
      className="flex flex-col items-center gap-1 timer-box p-1 select-none"
    >
      <header className="flex w-full justify-between items-center mb-[5px]">
        <span
          className={`text-base font-bold ml-2 py-[6px] ${
            edit ? "text-[#7d7d7d]" : null
          }`}
        >
          {name}
        </span>
        {edit && (
          <button
            onClick={handleDelete}
            className="hover:bg-[#454545] rounded-md p-2"
          >
            <BinTrash className="text-xl" />
          </button>
        )}
      </header>
      <TimerDigits seconds={seconds} setPlaying={setPlaying} />
    </div>
  );
};

export default TimeDown;
