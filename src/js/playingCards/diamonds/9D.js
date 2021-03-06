import React from "react";

export default function Diamonds9() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      face="9D"
      height="250" 
      width="175"
      preserveAspectRatio="none"
      viewBox="-106 -164.5 212 329"
   
    >
      <symbol
        id="SD9"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M-400 0C-350 0 0 -450 0 -500C0 -450 350 0 400 0C350 0 0 450 0 500C0 450 -350 0 -400 0Z"
          fill="red"
        />
      </symbol>
      <symbol
        id="VD9"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M250 -100A250 250 0 0 1 -250 -100L-250 -210A250 250 0 0 1 250 -210L250 210A250 250 0 0 1 0 460C-150 460 -180 400 -200 375"
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
      <use xlinkHref="#VD9" height="32" x="-100.4" y="-152.5" />
      <use xlinkHref="#SD9" height="26.769" x="-97.784" y="-115.5" />
      <use xlinkHref="#SD9" height="54" x="-72.167" y="-130.667" />
      <use xlinkHref="#SD9" height="54" x="18.167" y="-130.667" />
      <use xlinkHref="#SD9" height="54" x="-72.167" y="-61.555" />
      <use xlinkHref="#SD9" height="54" x="18.167" y="-61.555" />
      <use xlinkHref="#SD9" height="54" x="-27" y="-27" />
      <g transform="rotate(180)">
        <use xlinkHref="#VD9" height="32" x="-100.4" y="-152.5" />
        <use xlinkHref="#SD9" height="26.769" x="-97.784" y="-115.5" />
        <use xlinkHref="#SD9" height="54" x="-72.167" y="-130.667" />
        <use xlinkHref="#SD9" height="54" x="18.167" y="-130.667" />
        <use xlinkHref="#SD9" height="54" x="-72.167" y="-61.555" />
        <use xlinkHref="#SD9" height="54" x="18.167" y="-61.555" />
      </g>
    </svg>
  );
}
