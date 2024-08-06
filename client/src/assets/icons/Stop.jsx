import React from "react";

const Stop = ({className ,edit=false}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="4 4 16 16"
      className={className}
    >
      <rect width="4" height="14" x="6" y="5" fill={edit?"#999999":"black"} rx="1" />
      <rect width="4" height="14" x="14" y="5" fill={edit?"#999999":"black"} rx="1" />
    </svg>
  );
};

export default Stop;
