import React from "react";

export default function Clubs4() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      face="4C"
      height="250" 
      width="175"
      preserveAspectRatio="none"
      viewBox="-106 -164.5 212 329"
    
    >
      <symbol
        id="SC4"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M30 150C35 385 85 400 130 500L-130 500C-85 400 -35 385 -30 150A10 10 0 0 0 -50 150A210 210 0 1 1 -124 -51A10 10 0 0 0 -110 -65A230 230 0 1 1 110 -65A10 10 0 0 0 124 -51A210 210 0 1 1 50 150A10 10 0 0 0 30 150Z"
          fill="black"
        />
      </symbol>
      <symbol
        id="VC4"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M50 460L250 460M150 460L150 -460L-300 175L-300 200L270 200"
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
      <use xlinkHref="#VC4" height="32" x="-100.4" y="-152.5" />
      <use xlinkHref="#SC4" height="26.769" x="-97.784" y="-115.5" />
      <use xlinkHref="#SC4" height="54" x="-72.167" y="-130.735" />
      <use xlinkHref="#SC4" height="54" x="18.167" y="-130.735" />
      <g transform="rotate(180)">
        <use xlinkHref="#VC4" height="32" x="-100.4" y="-152.5" />
        <use xlinkHref="#SC4" height="26.769" x="-97.784" y="-115.5" />
        <use xlinkHref="#SC4" height="54" x="-72.167" y="-130.735" />
        <use xlinkHref="#SC4" height="54" x="18.167" y="-130.735" />
      </g>
    </svg>
  );
}
