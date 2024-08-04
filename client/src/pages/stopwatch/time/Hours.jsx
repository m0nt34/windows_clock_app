import React from "react";
import { useStopwatchStore } from "../../../store/useStopwatchStore";
import { padZero } from "../../../utils/PadZero";

const Hours = () => {
  const { hours } = useStopwatchStore();

  return <div>{padZero(hours)}</div>;
};

export default Hours;
