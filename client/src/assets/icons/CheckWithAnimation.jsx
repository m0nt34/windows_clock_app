import React from "react";

const CheckWithAnimation = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.25em"
      height="1.25em"
      viewBox="0 0 32 24"
    >
      <defs>
        <mask id="lineMdCheckAll0">
          <g
            fill="none"
            stroke="#fff"
            strokeDasharray="22"
            strokeDashoffset="22"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M7.5 13.5l4 4l10.75 -10.75" opacity="1">
              <animate
                attributeName="opacity"
                from="0"
                to="1"
                begin="0s"
                dur="0.1s"
                fill="freeze"
              />
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.1s"
                dur="0.2s"
                values="22;0"
              />
            </path>
          </g>
        </mask>
      </defs>
      <rect width="24" height="24" fill="black" mask="url(#lineMdCheckAll0)" />
    </svg>
  );
};

export default CheckWithAnimation;
