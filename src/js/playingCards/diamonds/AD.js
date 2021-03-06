import React from "react";

export default function DiamondsA() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      face="AD"
      height="250" 
      width="175"
      preserveAspectRatio="none"
      viewBox="-106 -164.5 212 329"
   
    >
      <symbol
        id="VDA"
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
        id="SDA"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-400 0C-350 0 0 -450 0 -500C0 -450 350 0 400 0C350 0 0 450 0 500C0 450 -350 0 -400 0Z"
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
      <use xlinkHref="#SDA" height="54" x="-27" y="-27" />
      <use xlinkHref="#VDA" height="32" x="-100.4" y="-152.5" />
      <use xlinkHref="#SDA" height="26.769" x="-97.784" y="-115.5" />
      <g transform="rotate(180)">
        <use xlinkHref="#VDA" height="32" x="-100.4" y="-152.5" />
        <use xlinkHref="#SDA" height="26.769" x="-97.784" y="-115.5" />
      </g>
    </svg>
  );
}
