import React, { useState } from "react";
import TimeDown from "./TimeDown";
import Popup from "./Popup";
import AddEditButtons from "./AddEditButtons";
import { useEdit } from "../../store/useEditTimer";
const Timer = () => {
  const { edit } = useEdit();
  const [timers, setTimers] = useState([
    { id: 1, name: "1 min", secs: 60 },
    { id: 2, name: "3 min", secs: 180 },
    { id: 3, name: "5 min", secs: 300 },
    { id: 4, name: "10 min", secs: 600 },
    { id: 5, name: "10 min", secs: 600 },
  ]);

  return (
    <div className="overflow-y-auto h-screen flex-grow py-[40px] px-[50px]">
      <div className="timer-container">
        {timers.map((timer, i) => (
          <div key={i}>
            <TimeDown id={i} name={timer.name} seconds={timer.secs} />
          </div>
        ))}
      </div>
      <Popup setTimers={setTimers} />
      <AddEditButtons />
    </div>
  );
};

export default Timer;
