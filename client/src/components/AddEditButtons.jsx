import React, { memo } from "react";
import Pen from "../assets/icons/Pen";
import Plus from "../assets/icons/Plus";
import Check from "../assets/icons/Check";
import { useEdit } from "../store/useEditTimer";
import { useShowPopup } from "../store/useShopPopup";

const AddEditButtons = () => {
  const { setEdit, edit } = useEdit();
  const { setShow } = useShowPopup();
  return (
    <div className="fixed flex gap-1 bottom-5 right-5 bg-[#2e2e2e] rounded-lg p-1 px-[5px] border border-[#3e3e3e]">
      <button
        onClick={setEdit}
        className="p-[10px] px-[11px] rounded-md hover:bg-[#3e3e3e] transition"
      >
        {edit ? <Check /> : <Pen />}
      </button>
      <button
        onClick={setShow}
        className={
          !edit
            ? "p-[10px] rounded-md hover:bg-[#3e3e3e] transition"
            : "p-[10px] pointer-events-none"
        }
      >
        <Plus color={!edit ? "white" : "#7e7e7e"} />
      </button>
    </div>
  );
};

export default memo(AddEditButtons);
