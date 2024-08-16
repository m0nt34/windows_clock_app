import React from "react";
import { useFullFocusSession } from "../../store/useFullFocusSession";
import { times } from "../../data/focusSessionTimes";
import { calculatePercentage } from "../../utils/calculatePercentage";
import { useSession } from "../../store/useSetSessionTimes";
const FocusSessionBar = () => {
  const { session } = useSession();
  const { focusSession } = useFullFocusSession();
  return (
    <div className="flex max-w-[600px] items-center justify-start w-full h-5 rounded-full overflow-hidden">
      {focusSession.map((fs, i) => {
        const percentage = calculatePercentage(fs, times[session.focus]);
        return (
          <div
            key={i}
            style={{ width: `${percentage}%` }}
            className={`flex items-center justify-center h-full ${
              i % 2 === 0 ? "bg-[#16cca2]" : "bg-[#5a5a5a]"
            } transition-all text-[11px] font-semibold`}
          >
            {fs}
            {!(fs === 5 && times[session.focus] >= 200) && (
              <p className="text-[8px] mt-[2px]">m</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FocusSessionBar;
