import React from "react";

export default function ClubsA() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      face="AC"
      height="250" 
      width="175"
      preserveAspectRatio="none"
      viewBox="-106 -164.5 212 329"

    >
      <symbol
        id="VCA"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-270 460L-110 460M-200 450L0 -460L200 450M110 460L270 460M-120 130L120 130"
          stroke="black"
          strokeWidth="80"
          strokeLinecap="square"
          strokeMiterlimit="1.5"
          fill="none"
        />
      </symbol>
      <symbol
        id="SCA"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M30 150C35 385 85 400 130 500L-130 500C-85 400 -35 385 -30 150A10 10 0 0 0 -50 150A210 210 0 1 1 -124 -51A10 10 0 0 0 -110 -65A230 230 0 1 1 110 -65A10 10 0 0 0 124 -51A210 210 0 1 1 50 150A10 10 0 0 0 30 150Z"
          fill="black"
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
      <use xlinkHref="#SCA" height="54" x="-27" y="-27" />
      <use xlinkHref="#VCA" height="32" x="-100.4" y="-152.5" />
      <use xlinkHref="#SCA" height="26.769" x="-97.784" y="-115.5" />
      <g transform="rotate(180)">
        <use xlinkHref="#VCA" height="32" x="-100.4" y="-152.5" />
        <use xlinkHref="#SCA" height="26.769" x="-97.784" y="-115.5" />
      </g>
    </svg>
  );
}
