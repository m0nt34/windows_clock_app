import React, { useRef } from "react";
import { useShowPopup } from "../../../store/useShopPopup";
import Save from "../../../assets/icons/Save";
import Xmark from "../../../assets/icons/Xmark";
import SearchBar from "./SearchBar";
import { TimeZones } from "../../../data/TimeZones";
const Popup = ({ setZones }) => {
  const { show, setShow } = useShowPopup();
  const zoneRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const zoneName = zoneRef.current.getName();

    if (TimeZones.includes(zoneName)) {
      setZones((prev) => [...prev, zoneName]);
      setShow();
    }
  };

  return (
    show && (
      <div className="fixed select-none inset-0 flex z-10 items-center justify-center bg-black bg-opacity-55 ">
        <form
          className="flex flex-col gap-[5px] bg-[#222222] px-[25px] pb-[25px] pt-[17px] rounded-lg w-[350px]"
          onSubmit={handleSubmit}
        >
          <header className="flex justify-between items-center text-lg font-medium ">
            Add new location
          </header>

          <SearchBar ref={zoneRef} />
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
