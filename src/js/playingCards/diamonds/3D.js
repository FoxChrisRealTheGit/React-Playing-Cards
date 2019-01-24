import React from "react";

export default function Diamonds3() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      face="3D"
      height="250" 
      width="175"
      preserveAspectRatio="none"
      viewBox="-106 -164.5 212 329"
  
    >
      <symbol
        id="SD3"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-400 0C-350 0 0 -450 0 -500C0 -450 350 0 400 0C350 0 0 450 0 500C0 450 -350 0 -400 0Z"
          fill="red"
        />
      </symbol>
      <symbol
        id="VD3"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-250 -320L-250 -460L200 -460L-110 -80C-100 -90 -50 -120 0 -120C200 -120 250 0 250 150C250 350 170 460 -30 460C-230 460 -260 300 -260 300"
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
      <use xlinkHref="#VD3" height="32" x="-100.4" y="-152.5" />
      <use xlinkHref="#SD3" height="26.769" x="-97.784" y="-115.5" />
      <use xlinkHref="#SD3" height="54" x="-27" y="-130.667" />
      <use xlinkHref="#SD3" height="54" x="-27" y="-27" />
      <g transform="rotate(180)">
        <use xlinkHref="#VD3" height="32" x="-100.4" y="-152.5" />
        <use xlinkHref="#SD3" height="26.769" x="-97.784" y="-115.5" />
        <use xlinkHref="#SD3" height="54" x="-27" y="-130.667" />
      </g>
    </svg>
  );
}
