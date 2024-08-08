import React, { forwardRef, useState, useImperativeHandle } from "react";
import Xmark from "../../../assets/icons/Xmark";
import { TimeZones } from "../../../data/TimeZones";
const SearchBar = forwardRef((props, ref) => {
  const [search, setSearch] = useState("");
  const [zoneList, setZoneList] = useState([]);
  useImperativeHandle(ref, () => ({
    getName: () => search,
  }));
  const handleNameChange = (e) => {
    const { value } = e.target;
    setZoneList(() =>
      TimeZones.filter(
        (zone) =>
          zone.toLowerCase().startsWith(value.toLowerCase()) ||
          zone.toLowerCase().includes(value.toLowerCase())
      )
    );
    if (value.length === 0) {
      setZoneList([]);
    }

    setSearch(value);
  };

  return (
    <div className="flex relative items-center justify-center gap-2 mb-6">
      <div className="flex w-full bg-[#1f1f1f] border-b-customColor-blue py-[1px] px-[10px] pr-1 rounded-[4px] border border-[#2e2e2e] my-3">
        <input
          type="text"
          value={search}
          placeholder="Enter a location"
          onChange={handleNameChange}
          className="outline-none bg-transparent w-full text-sm"
        />
        <button
          type="button"
          onClick={() => setSearch("")}
          className="flex items-center p-[5px] justify-center  hover:bg-[#343434] text-white text-sm rounded-md transition duration-75"
        >
          <Xmark color="#a3a3a3" />
        </button>
      </div>
      {search.length !== 0 && (
        <div className="absolute bg-[#2c2c2c] max-h-60 w-full top-[45px] rounded-bl-[10px] rounded-br-[10px] glass-effect">
          <ul className="flex flex-col overflow-y-auto h-full">
            {zoneList.map((zone) => (
              <li
                onClick={() => {
                  setSearch(zone);
                  setZoneList([]);
                }}
                className="text-sm py-[8px] px-2 custop-hover"
                key={zone}
              >
                {zone}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default SearchBar;
