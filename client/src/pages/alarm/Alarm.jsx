import React, { useState } from "react";
import AddEditButtons from "../../components/AddEditButtons";
import Popup from "./popup/Popup";
import CustomAlarm from "./CustomAlarm";
const Alarm = () => {
  const [alarms, setAlarms] = useState([
    {
      time: {
        hours: 7,
        minutes: 0,
        period: "AM",
      },
      name: "Alarm",
      days: {
        repeat: false,
        days: [
          {
            name: "Su",
            value: "Sun",
            status: false,
          },
          {
            name: "M",
            value: "Mon",
            status: false,
          },
          {
            name: "Tu",
            value: "Tue",
            status: false,
          },
          {
            name: "We",
            value: "Wed",
            status: false,
          },
          {
            name: "Th",
            value: "Thu",
            status: false,
          },
          {
            name: "Fri",
            value: "Fri",
            status: false,
          },
          {
            name: "Sa",
            value: "Sat",
            status: false,
          },
        ],
      },
      disabled: false,
    },
    {
      time: {
        hours: 7,
        minutes: 0,
        period: "AM",
      },
      name: "Alarm",
      days: {
        repeat: true,
        days: [
          {
            name: "Su",
            value: "Sun",
            status: false,
          },
          {
            name: "M",
            value: "Mon",
            status: false,
          },
          {
            name: "Tu",
            value: "Tue",
            status: true,
          },
          {
            name: "We",
            value: "Wed",
            status: false,
          },
          {
            name: "Th",
            value: "Thu",
            status: false,
          },
          {
            name: "Fri",
            value: "Fri",
            status: false,
          },
          {
            name: "Sa",
            value: "Sat",
            status: false,
          },
        ],
      },
      disabled: false,
    },
  ]);
  return (
    <div className="flex flex-grow overflow-y-auto h-screen py-[40px] px-[50px]">
      <div className="alarm-container">
        {alarms.map((alarm, i) => (
          <CustomAlarm key={i} id={i} alarm={alarm} setAlarms={setAlarms} />
        ))}
      </div>
      <AddEditButtons />
      <Popup setAlarms={setAlarms} />
    </div>
  );
};

export default Alarm;
