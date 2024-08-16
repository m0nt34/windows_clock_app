import React, { useEffect, useState } from "react";
import { calculateBreaks } from "../../utils/calculateFocusSessionBreaks";
import CheckBox from "../../components/UI/CheckBox";
import { useSession } from "../../store/useSetSessionTimes";
import { mergeArrays } from "../../utils/mergeArrays";
import { useFullFocusSession } from "../../store/useFullFocusSession";
import FocusSessionBar from "./FocusSessionBar";
const CalculateBreaks = () => {
  const [check, setCheck] = useState(false);
  const [breaksAm, setBreaksAm] = useState(0);
  const { setFocusSession } = useFullFocusSession();
  const { session } = useSession();
  useEffect(() => {
    const { focusAr, breakAr } = calculateBreaks(session, check);
    setBreaksAm(breakAr.length);
    setFocusSession(mergeArrays(focusAr, breakAr));
  }, [session, check]);
  
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full">
      <span className="text-xl">You'll have {!check && breaksAm ? breaksAm : "no"} breaks</span>
      <div className="flex items-center gap-2 mb-2">
        <CheckBox check={check} setCheck={setCheck} />
        <span className="flex items-center justify-center text-base">Skip breaks</span>
      </div>
      <FocusSessionBar/>
    </div>
  );
};

export default CalculateBreaks;
