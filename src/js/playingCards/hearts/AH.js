import React from "react";

export default function HeartsA() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      face="AH"
      height="250" 
      width="175"
      preserveAspectRatio="none"
      viewBox="-106 -164.5 212 329"
  
    >
      <symbol
        id="VHA"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-270 460L-110 460M-200 450L0 -460L200 450M110 460L270 460M-120 130L120 130"
          stroke="red"
          strokeWidth="80"
          strokeLinecap="square"
          strokeMiterlimit="1.5"
          fill="none"
        />
      </symbol>
      <symbol
        id="SHA"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M0 -300C0 -400 100 -500 200 -500C300 -500 400 -400 400 -250C400 0 0 400 0 500C0 400 -400 0 -400 -250C-400 -400 -300 -500 -200 -500C-100 -500 0 -400 -0 -300Z"
          fill="red"
        />
      </symbol>
      <rect
        width="211"
        height="328"
        x="-105.5"
        y="-164"
        rx="12"
        ry="12"
        fill="white"
        stroke="black"
      />
      <use xlinkHref="#SHA" height="54" x="-27" y="-27" />
      <use xlinkHref="#VHA" height="32" x="-100.4" y="-152.5" />
      <use xlinkHref="#SHA" height="26.769" x="-97.784" y="-115.5" />
      <g transform="rotate(180)">
        <use xlinkHref="#VHA" height="32" x="-100.4" y="-152.5" />
        <use xlinkHref="#SHA" height="26.769" x="-97.784" y="-115.5" />
      </g>
    </svg>
  );
}
