import React, { useState } from "react";

import CheckBox from "../../components/UI/CheckBox";
const CalculateBreaks = () => {
  const [check, setCheck] = useState(false);
  return (
    <div className="flex flex-col gap-3 items-center justify-center w-full">
      <span>You'll have {!check ? 1 : "no"} breaks</span>
      <div className="flex items-center gap-2">
        <CheckBox check={check} setCheck={setCheck} />
        <span className="text-sm">Skip breaks</span>
      </div>
    </div>
  );
};

export default CalculateBreaks;
