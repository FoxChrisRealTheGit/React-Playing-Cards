import React from "react";

export default function Spades2() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      face="2S"
      height="250" 
      width="175"
      preserveAspectRatio="none"
      viewBox="-106 -164.5 212 329"
     
    >
      <symbol
        id="SS2"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M0 -500C100 -250 355 -100 355 185A150 150 0 0 1 55 185A10 10 0 0 0 35 185C35 385 85 400 130 500L-130 500C-85 400 -35 385 -35 185A10 10 0 0 0 -55 185A150 150 0 0 1 -355 185C-355 -100 -100 -250 0 -500Z"
          fill="black"
        />
      </symbol>
      <symbol
        id="VS2"
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
      <use xlinkHref="#VS2" height="32" x="-100.4" y="-152.5" />
      <use xlinkHref="#SS2" height="26.769" x="-97.784" y="-115.5" />
      <use xlinkHref="#SS2" height="54" x="-27" y="-130.667" />
      <g transform="rotate(180)">
        <use xlinkHref="#VS2" height="32" x="-100.4" y="-152.5" />
        <use xlinkHref="#SS2" height="26.769" x="-97.784" y="-115.5" />
        <use xlinkHref="#SS2" height="54" x="-27" y="-130.667" />
      </g>
    </svg>
  );
}
