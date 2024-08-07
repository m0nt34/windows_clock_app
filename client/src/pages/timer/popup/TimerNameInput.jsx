import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  memo,
} from "react";
import Edit from "../../../assets/icons/Edit";
import Xmark from "../../../assets/icons/Xmark";
import { useTimerSelected } from "../../../store/useSelectInPopup";
const TimerNameInput = forwardRef((props, ref) => {
  const { setTimerSelectedToFalse, timerSelected } = useTimerSelected();
  const [name, setName] = useState("Timer");
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    getName: () => name,
  }));
  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value);
    console.log(name);
  };
  const handleClick = () => {
    setTimerSelectedToFalse();
    inputRef.current.select();
  };
  return (
    <div
      className="flex items-center justify-center gap-2 mb-4"
      onClick={handleClick}
    >
      <Edit />
      <div
        className={`flex w-full ${
          !timerSelected
            ? "bg-[#1f1f1f] border-b-customColor-blue"
            : "bg-[#2e2e2e] border-b-[#ccc]"
        } py-[1px] px-[10px] pr-1 rounded-[4px] border border-[#2e2e2e] my-3`}
      >
        <input
          type="text"
          ref={inputRef}
          value={name}
          onChange={handleNameChange}
          className="outline-none bg-transparent w-full text-sm"
        />
        <button
          type="button"
          onClick={() => setName("")}
          className={`flex items-center p-[5px] justify-center  hover:bg-[#343434] text-white ${
            timerSelected ? "opacity-0 pointer-events-none" : null
          } text-sm rounded-md transition duration-75`}
        >
          <Xmark color="#a3a3a3" />
        </button>
      </div>
    </div>
  );
});

export default memo(TimerNameInput);
