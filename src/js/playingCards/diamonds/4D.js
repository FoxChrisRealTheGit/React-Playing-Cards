import React from "react";

export default function Diamonds4() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      face="4D"
      height="250" 
      width="175"
      preserveAspectRatio="none"
      viewBox="-106 -164.5 212 329"
      
      >
      <symbol
        id="SD4"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-400 0C-350 0 0 -450 0 -500C0 -450 350 0 400 0C350 0 0 450 0 500C0 450 -350 0 -400 0Z"
          fill="red"
        />
      </symbol>
      <symbol
        id="VD4"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M50 460L250 460M150 460L150 -460L-300 175L-300 200L270 200"
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
      <use xlinkHref="#VD4" height="32" x="-100.4" y="-152.5" />
      <use xlinkHref="#SD4" height="26.769" x="-97.784" y="-115.5" />
      <use xlinkHref="#SD4" height="54" x="-72.167" y="-130.667" />
      <use xlinkHref="#SD4" height="54" x="18.167" y="-130.667" />
      <g transform="rotate(180)">
        <use xlinkHref="#VD4" height="32" x="-100.4" y="-152.5" />
        <use xlinkHref="#SD4" height="26.769" x="-97.784" y="-115.5" />
        <use xlinkHref="#SD4" height="54" x="-72.167" y="-130.667" />
        <use xlinkHref="#SD4" height="54" x="18.167" y="-130.667" />
      </g>
    </svg>
  );
}
