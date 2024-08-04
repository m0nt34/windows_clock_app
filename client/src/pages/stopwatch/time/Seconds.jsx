import React from "react";
import { useStopwatchStore } from "../../../store/useStopwatchStore";
import { padZero } from "../../../utils/PadZero";

const Seconds = () => {
  const { seconds } = useStopwatchStore();
  
  return <div>{padZero(seconds)}</div>;
};

export default Seconds;
