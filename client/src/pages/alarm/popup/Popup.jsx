import React, { useRef } from "react";
import { useEdit } from "../../../store/useEditTimer";
import { useShowPopup } from "../../../store/useShopPopup";
import Save from "../../../assets/icons/Save";
import Xmark from "../../../assets/icons/Xmark";
import BinTrash from "../../../assets/icons/BinTrash";
import SetTime from "./SetTime";
import TimerNameInput from "./TimerNameInput";
import AlarmDays from "./AlarmDays";

const Popup = ({ setAlarms }) => {
  const { show, setShow } = useShowPopup();
  const { edit, editTimer } = useEdit();
  const setTimeRef = useRef();
  const setNameRef = useRef();
  const setDaysRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newAlarmObj = {
      time: setTimeRef.current.getTime(),
      name: setNameRef.current.getName(),
      days: setDaysRef.current.getDays(),
      disabled: false,
    };
    if (edit) {
      handleEdit(newAlarmObj);
    } else {
      setAlarms((prev) => [...prev, newAlarmObj]);
    }
    setShow();
  };
  const handleEdit = (newAlarmObj) => {
    setAlarms((prev) =>
      prev.map((alarm, i) =>
        i === editTimer
          ? {
              ...alarm,
              time: newAlarmObj.time,
              name: newAlarmObj.name,
              days: newAlarmObj.days,
              disabled: alarm.disabled,
            }
          : alarm
      )
    );
  };
  const handleDelete = () => {
    setAlarms((prev) => prev.filter((_, i) => editTimer !== i));
    setShow();
  };
  return (
    show && (
      <div className="fixed select-none inset-0 flex z-10 items-center justify-center bg-black bg-opacity-55">
        <form
          className="flex flex-col gap-2 bg-[#222222] px-[25px] pb-[25px] pt-[17px] rounded-lg"
          onSubmit={handleSubmit}
        >
          <div>
            <header className="flex justify-between items-center text-lg font-medium ">
              <p className="py-2">{edit ? "Edit alarm" : "Add new alarm"}</p>
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
          <AlarmDays ref={setDaysRef} />

          <div className="flex gap-[7px] mt-5">
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
