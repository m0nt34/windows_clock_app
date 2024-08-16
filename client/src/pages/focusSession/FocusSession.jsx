import React from "react";
import SetSession from "./SetSession";
import { useFullFocusSession } from "../../store/useFullFocusSession";
import FocusSection from "./FocusSection";
const FocusSession = () => {
  const { startFocusSession } = useFullFocusSession();
  return (
    <div className="overflow-y-auto h-screen flex-grow py-[40px] px-[50px]">
      {startFocusSession ? <FocusSection /> : <SetSession />}
    </div>
  );
};

export default FocusSession;
