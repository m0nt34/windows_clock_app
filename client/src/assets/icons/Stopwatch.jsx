import React from "react";

const Stopwatch = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="white" strokeWidth="1.5">
        <path d="M21 13a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 13V9" />
        <path strokeLinecap="round" d="M10 2h4" />
      </g>
    </svg>
  );
};

export default Stopwatch;
