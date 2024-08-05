import React from "react";
import Pen from "../../assets/icons/Pen";
import Plus from "../../assets/icons/Plus";
import { useEdit } from "../../store/useEditTimer";
const AddEditButtons = () => {
  const { setEdit } = useEdit();
  
  return (
    <div className="fixed flex gap-1 bottom-5 right-9 bg-[#2e2e2e] rounded-lg p-1 px-[5px] border border-[#3e3e3e]">
      <button onClick={setEdit} className="p-2 px-[9px] rounded-md hover:bg-[#3e3e3e] transition">
        <Pen />
      </button>
      <button className="p-2 rounded-md hover:bg-[#3e3e3e] transition">
        <Plus />
      </button>
    </div>
  );
};

export default AddEditButtons;
