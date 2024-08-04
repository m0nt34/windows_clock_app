import React from "react";

const TimeLaps = () => {
  return (
    <table className="max-w-[660px] w-full select-none">
      <thead>
        <tr className="border-b-[2.5px] border-[#343434]">
          <th className="w-[30%] py-3 text-left font-medium">Laps</th>
          <th className="w-[40%] py-3 text-left font-medium">Time</th>
          <th className="w-[30%] py-3 text-left font-medium">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-3 text-left font-normal">1</td>
          <td className="py-3 text-left font-normal">00:00:00.00</td>
          <td className="py-3 text-left font-normal">00:00:00.00</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TimeLaps;
 