import React, { useEffect, useState } from "react";
import TimeDown from "./TimeDown";
import Popup from "./popup/Popup";
import AddEditButtons from "../../components/AddEditButtons";

const Timer = () => {
  const [timers, setTimers] = useState([
    { name: "1 min", secs: 60 },
    { name: "3 min", secs: 180 },
    { name: "5 min", secs: 300 },
    { name: "10 min", secs: 600 },
  ]);
  return (
    <div className="overflow-y-auto h-screen flex-grow py-[40px] px-[50px]">
      <div className="timer-container">
        {timers.map((timer, i) => (
          <div key={i}>
            <TimeDown
              id={i}
              name={timer.name}
              seconds={timer.secs}
              setTimers={setTimers}
            />
          </div>
        ))}
      </div>
      <Popup setTimers={setTimers} />
      <AddEditButtons />
    </div>
  );
};

export default Timer;
