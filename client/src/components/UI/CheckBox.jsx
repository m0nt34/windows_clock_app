import React from "react";
import CheckWithAnimation from "../../assets/icons/CheckWithAnimation";
const CheckBox = ({ check, setCheck }) => {
  const buttonClasses = check
    ? "bg-customColor-blue border-customColor-blue hover:bg-[#6ca9d8] rounded-md"
    : "h-5 w-5 border border-[#b1b1b1] rounded-md";
  return (
    <button
      type="button"
      onClick={() => setCheck((prev) => !prev)}
      className={buttonClasses}
    >
      {check && <CheckWithAnimation />}
    </button>
  );
};

export default CheckBox;
