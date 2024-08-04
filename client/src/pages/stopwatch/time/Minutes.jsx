import React from "react";
import { useStopwatchStore } from "../../../store/useStopwatchStore";
import { padZero } from "../../../utils/PadZero";

const Minutes = () => {
  const { minutes } = useStopwatchStore();

  return <div>{padZero(minutes)}</div>;
};

export default Minutes;
