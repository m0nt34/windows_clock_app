import React, { useState } from "react";
import { useEdit } from "../../store/useEditTimer";
import { useShowPopup } from "../../store/useShopPopup";
import ArrowUp from "../../assets/icons/ArrowUp";
import ArrowDown from "../../assets/icons/ArrowDown";
const Popup = ({ setTimers }) => {
  //const { add, setAdd } = useAdd();
  const { show, setShow } = useShowPopup();
  const { edit } = useEdit();

  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  return (
    show && (
      <div className="fixed inset-0 flex z-10 items-center justify-center bg-black bg-opacity-55 ">
        <div className="bg-[#222222] px-[25px] py-[15px] rounded-lg">
          <header className="text-lg font-medium">Add new timer</header>
          <div>
            <div>
              <button className="hover:bg-[#2e2e2e] transition rounded-[4px] p-1">
                <ArrowUp />
              </button>
              <button className="hover:bg-[#2e2e2e] transition rounded-[4px] p-1">
                <ArrowUp />
              </button>
              <button className="hover:bg-[#2e2e2e] transition rounded-[4px] p-1">
                <ArrowUp />
              </button>
            </div>
            <div className="flex text-[36px] font-bold bg-[#1f1f1f] border border-[#292929]">
              {hours}:{minutes}:{seconds}
            </div>
            <div>
              <button className="hover:bg-[#2e2e2e] transition rounded-[4px] p-1">
                <ArrowDown />
              </button>
              <button className="hover:bg-[#2e2e2e] transition rounded-[4px] p-1">
                <ArrowDown />
              </button>
              <button className="hover:bg-[#2e2e2e] transition rounded-[4px] p-1">
                <ArrowDown />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
