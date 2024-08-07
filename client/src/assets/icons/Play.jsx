import React, { memo } from "react";

const Play = ({ className, edit = false }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 36 36"
      className={className}
    >
      <path
        fill={edit ? "#999999" : "black"}
        d="M32.16 16.08L8.94 4.47A2.07 2.07 0 0 0 6 6.32v23.21a2.06 2.06 0 0 0 3 1.85l23.16-11.61a2.07 2.07 0 0 0 0-3.7Z"
      />
      <path fill="none" d="M0 0h36v36H0z" />
    </svg>
  );
};

export default memo(Play);
