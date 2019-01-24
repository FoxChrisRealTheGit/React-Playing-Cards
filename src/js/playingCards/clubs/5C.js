import React from "react";

export default function Clubs5() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      face="5C"
      height="250" 
      width="175"
      preserveAspectRatio="none"
      viewBox="-106 -164.5 212 329"

    >
      <symbol
        id="SC5"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M30 150C35 385 85 400 130 500L-130 500C-85 400 -35 385 -30 150A10 10 0 0 0 -50 150A210 210 0 1 1 -124 -51A10 10 0 0 0 -110 -65A230 230 0 1 1 110 -65A10 10 0 0 0 124 -51A210 210 0 1 1 50 150A10 10 0 0 0 30 150Z"
          fill="black"
        />
      </symbol>
      <symbol
        id="VC5"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M170 -460L-175 -460L-210 -115C-210 -115 -200 -200 0 -200C100 -200 255 -80 255 120C255 320 180 460 -20 460C-220 460 -255 285 -255 285"
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
      <use xlinkHref="#VC5" height="32" x="-100.4" y="-152.5" />
      <use xlinkHref="#SC5" height="26.769" x="-97.784" y="-115.5" />
      <use xlinkHref="#SC5" height="54" x="-72.167" y="-130.735" />
      <use xlinkHref="#SC5" height="54" x="18.167" y="-130.735" />
      <use xlinkHref="#SC5" height="54" x="-27" y="-27" />
      <g transform="rotate(180)">
        <use xlinkHref="#VC5" height="32" x="-100.4" y="-152.5" />
        <use xlinkHref="#SC5" height="26.769" x="-97.784" y="-115.5" />
        <use xlinkHref="#SC5" height="54" x="-72.167" y="-130.735" />
        <use xlinkHref="#SC5" height="54" x="18.167" y="-130.735" />
      </g>
    </svg>
  );
}
