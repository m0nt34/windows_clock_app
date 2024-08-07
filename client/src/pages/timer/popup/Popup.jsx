import React, { useRef } from "react";
import { useEdit } from "../../../store/useEditTimer";
import { useShowPopup } from "../../../store/useShopPopup";
import Save from "../../../assets/icons/Save";
import Xmark from "../../../assets/icons/Xmark";
import BinTrash from "../../../assets/icons/BinTrash";
import SetTime from "./SetTime";
import TimerNameInput from "./TimerNameInput";

const Popup = ({ setTimers }) => {
  const { show, setShow } = useShowPopup();
  const { edit, editTimer } = useEdit();
  const setTimeRef = useRef();
  const setNameRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const time = setTimeRef.current.getTime();
    const timeInSeconds = time.hours * 3600 + time.minutes * 60 + time.seconds;
    let name = setNameRef.current.getName().trim();
    const newTimer = {
      name: name === "" ? "Timer" : name,
      secs: timeInSeconds,
    };

    if (edit) {
      handleEdit(newTimer);
    } else {
      setTimers((prev) => [...prev, newTimer]);
    }
    setShow();
  };
  const handleEdit = (updatedTimer) => {
    setTimers((prev) =>
      prev.map((timer, i) =>
        i === editTimer
          ? { ...timer, name: updatedTimer.name, secs: updatedTimer.secs }
          : timer
      )
    );
  };
  const handleDelete = () => {
    setTimers((prev) => prev.filter((_, i) => editTimer !== i));
    setShow();
  };
  return (
    show && (
      <div className="fixed select-none inset-0 flex z-10 items-center justify-center bg-black bg-opacity-55">
        <form
          className="flex flex-col gap-5 bg-[#222222] px-[25px] pb-[25px] pt-[17px] rounded-lg"
          onSubmit={handleSubmit}
        >
          <div>
            <header className="flex justify-between items-center text-lg font-medium ">
              <p className="py-2">{edit ? "Edit timer" : "Add new timer"}</p>
              {edit && (
                <button
                  onClick={handleDelete}
                  className="hover:bg-[#454545] rounded-md p-2 z-10 transition duration-75"
                >
                  <BinTrash className="text-xl" />
                </button>
              )}
            </header>
          </div>
          <SetTime ref={setTimeRef} />
          <TimerNameInput ref={setNameRef} />
          <div className="flex gap-[7px]">
            <button
              type="submit"
              className="flex gap-2 items-center w-2/4 py-[5px] justify-center bg-customColor-blue hover:bg-[#6ca9d8] text-black text-sm rounded-md"
            >
              <Save />
              <p>Save</p>
            </button>
            <button
              type="button"
              onClick={setShow}
              className="flex gap-[6px] items-center w-2/4 py-[5px] justify-center bg-[#2f2f2f] hover:bg-[#343434] text-white text-sm rounded-md"
            >
              <Xmark />
              Cancel
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default Popup;
