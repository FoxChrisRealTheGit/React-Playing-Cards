import React from "react";

export default function Spades3() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      face="3S"
      height="250" 
      width="175"
      preserveAspectRatio="none"
      viewBox="-106 -164.5 212 329"
    >
      <symbol
        id="SS3"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M0 -500C100 -250 355 -100 355 185A150 150 0 0 1 55 185A10 10 0 0 0 35 185C35 385 85 400 130 500L-130 500C-85 400 -35 385 -35 185A10 10 0 0 0 -55 185A150 150 0 0 1 -355 185C-355 -100 -100 -250 0 -500Z"
          fill="black"
        />
      </symbol>
      <symbol
        id="VS3"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-250 -320L-250 -460L200 -460L-110 -80C-100 -90 -50 -120 0 -120C200 -120 250 0 250 150C250 350 170 460 -30 460C-230 460 -260 300 -260 300"
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
      <use xlinkHref="#VS3" height="32" x="-100.4" y="-152.5" />
      <use xlinkHref="#SS3" height="26.769" x="-97.784" y="-115.5" />
      <use xlinkHref="#SS3" height="54" x="-27" y="-130.667" />
      <use xlinkHref="#SS3" height="54" x="-27" y="-27" />
      <g transform="rotate(180)">
        <use xlinkHref="#VS3" height="32" x="-100.4" y="-152.5" />
        <use xlinkHref="#SS3" height="26.769" x="-97.784" y="-115.5" />
        <use xlinkHref="#SS3" height="54" x="-27" y="-130.667" />
      </g>
    </svg>
  );
}
