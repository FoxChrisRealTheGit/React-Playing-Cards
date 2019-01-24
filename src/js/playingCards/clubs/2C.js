import React from "react";

export default function Clubs2() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      face="2C"
      height="250" 
      width="175"
      preserveAspectRatio="none"
      viewBox="-106 -164.5 212 329"
    >
      <symbol
        id="SC2"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M30 150C35 385 85 400 130 500L-130 500C-85 400 -35 385 -30 150A10 10 0 0 0 -50 150A210 210 0 1 1 -124 -51A10 10 0 0 0 -110 -65A230 230 0 1 1 110 -65A10 10 0 0 0 124 -51A210 210 0 1 1 50 150A10 10 0 0 0 30 150Z"
          fill="black"
        />
      </symbol>
      <symbol
        id="VC2"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-225 -225C-245 -265 -200 -460 0 -460C 200 -460 225 -325 225 -225C225 -25 -225 160 -225 460L225 460L225 300"
          stroke="black"
          strokeWidth="80"
          strokeLinecap="square"
          strokeMiterlimit="1.5"
          fill="none"
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
      <use xlinkHref="#VC2" height="32" x="-100.4" y="-152.5" />
      <use xlinkHref="#SC2" height="26.769" x="-97.784" y="-115.5" />
      <use xlinkHref="#SC2" height="54" x="-27" y="-130.735" />
      <g transform="rotate(180)">
        <use xlinkHref="#VC2" height="32" x="-100.4" y="-152.5" />
        <use xlinkHref="#SC2" height="26.769" x="-97.784" y="-115.5" />
        <use xlinkHref="#SC2" height="54" x="-27" y="-130.735" />
      </g>
    </svg>
  );
}
