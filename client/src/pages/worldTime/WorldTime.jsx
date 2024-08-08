import React, { useEffect, useState } from "react";
import TimeZoneBoards from "./TimeZoneBoards";
import LocalTime from "./LocalTime";
import AddEditButtons from "../timer/AddEditButtons";
import Popup from "./popup/Popup";
const WorldTime = () => {
  const [zones, setZones] = useState([]);
  return (
    <div className="flex flex-col gap-1 flex-grow px-[65px] py-11">
      <LocalTime />
      {zones.map((zone) => (
        <div key={zone}>
          <TimeZoneBoards zone={zone} />
        </div>
      ))}
      <AddEditButtons />
      <Popup setZones={setZones} />
    </div>
  );
};

export default WorldTime;
