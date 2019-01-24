import React from "react";

export default function Spades10() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      face="TS"
      height="250"
      width="175"
      preserveAspectRatio="none"
      viewBox="-106 -164.5 212 329"
    >
      <symbol
        id="SST"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M0 -500C100 -250 355 -100 355 185A150 150 0 0 1 55 185A10 10 0 0 0 35 185C35 385 85 400 130 500L-130 500C-85 400 -35 385 -35 185A10 10 0 0 0 -55 185A150 150 0 0 1 -355 185C-355 -100 -100 -250 0 -500Z"
          fill="black"
        />
      </symbol>
      <symbol
        id="VST"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-260 430L-260 -430M-50 0L-50 -310A150 150 0 0 1 250 -310L250 310A150 150 0 0 1 -50 310Z"
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
      <use xlinkHref="#VST" height="32" x="-100.4" y="-152.5" />
      <use xlinkHref="#SST" height="26.769" x="-97.784" y="-115.5" />
      <use xlinkHref="#SST" height="54" x="-72.167" y="-130.667" />
      <use xlinkHref="#SST" height="54" x="18.167" y="-130.667" />
      <use xlinkHref="#SST" height="54" x="-72.167" y="-61.555" />
      <use xlinkHref="#SST" height="54" x="18.167" y="-61.555" />
      <use xlinkHref="#SST" height="54" x="-27" y="-96.111" />
      <g transform="rotate(180)">
        <use xlinkHref="#VST" height="32" x="-100.4" y="-152.5" />
        <use xlinkHref="#SST" height="26.769" x="-97.784" y="-115.5" />
        <use xlinkHref="#SST" height="54" x="-72.167" y="-130.667" />
        <use xlinkHref="#SST" height="54" x="18.167" y="-130.667" />
        <use xlinkHref="#SST" height="54" x="-72.167" y="-61.555" />
        <use xlinkHref="#SST" height="54" x="18.167" y="-61.555" />
        <use xlinkHref="#SST" height="54" x="-27" y="-96.111" />
      </g>
    </svg>
  );
}
