import React from "react";

export default function Diamonds2() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      face="2D"
      height="250" 
      width="175"
      preserveAspectRatio="none"
      viewBox="-106 -164.5 212 329"
    
    >
      <symbol
        id="SD2"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-400 0C-350 0 0 -450 0 -500C0 -450 350 0 400 0C350 0 0 450 0 500C0 450 -350 0 -400 0Z"
          fill="red"
        />
      </symbol>
      <symbol
        id="VD2"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-225 -225C-245 -265 -200 -460 0 -460C 200 -460 225 -325 225 -225C225 -25 -225 160 -225 460L225 460L225 300"
          stroke="red"
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
      <use xlinkHref="#VD2" height="32" x="-100.4" y="-152.5" />
      <use xlinkHref="#SD2" height="26.769" x="-97.784" y="-115.5" />
      <use xlinkHref="#SD2" height="54" x="-27" y="-130.667" />
      <g transform="rotate(180)">
        <use xlinkHref="#VD2" height="32" x="-100.4" y="-152.5" />
        <use xlinkHref="#SD2" height="26.769" x="-97.784" y="-115.5" />
        <use xlinkHref="#SD2" height="54" x="-27" y="-130.667" />
      </g>
    </svg>
  );
}
