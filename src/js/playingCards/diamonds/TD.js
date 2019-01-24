import React from "react";

export default function Diamonds10() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      face="TD"
      height="250" 
      width="175"
      preserveAspectRatio="none"
      viewBox="-106 -164.5 212 329"
    
    >
      <symbol
        id="SDT"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-400 0C-350 0 0 -450 0 -500C0 -450 350 0 400 0C350 0 0 450 0 500C0 450 -350 0 -400 0Z"
          fill="red"
        />
      </symbol>
      <symbol
        id="VDT"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-260 430L-260 -430M-50 0L-50 -310A150 150 0 0 1 250 -310L250 310A150 150 0 0 1 -50 310Z"
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
      <use xlinkHref="#VDT" height="32" x="-100.4" y="-152.5" />
      <use xlinkHref="#SDT" height="26.769" x="-97.784" y="-115.5" />
      <use xlinkHref="#SDT" height="54" x="-72.167" y="-130.667" />
      <use xlinkHref="#SDT" height="54" x="18.167" y="-130.667" />
      <use xlinkHref="#SDT" height="54" x="-72.167" y="-61.555" />
      <use xlinkHref="#SDT" height="54" x="18.167" y="-61.555" />
      <use xlinkHref="#SDT" height="54" x="-27" y="-96.111" />
      <g transform="rotate(180)">
        <use xlinkHref="#VDT" height="32" x="-100.4" y="-152.5" />
        <use xlinkHref="#SDT" height="26.769" x="-97.784" y="-115.5" />
        <use xlinkHref="#SDT" height="54" x="-72.167" y="-130.667" />
        <use xlinkHref="#SDT" height="54" x="18.167" y="-130.667" />
        <use xlinkHref="#SDT" height="54" x="-72.167" y="-61.555" />
        <use xlinkHref="#SDT" height="54" x="18.167" y="-61.555" />
        <use xlinkHref="#SDT" height="54" x="-27" y="-96.111" />
      </g>
    </svg>
  );
}
