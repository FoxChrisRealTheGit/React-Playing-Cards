import React from "react";

export default function Hearts5() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      face="5H"
      height="250" 
      width="175"
      preserveAspectRatio="none"
      viewBox="-106 -164.5 212 329"

    >
      <symbol
        id="SH5"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M0 -300C0 -400 100 -500 200 -500C300 -500 400 -400 400 -250C400 0 0 400 0 500C0 400 -400 0 -400 -250C-400 -400 -300 -500 -200 -500C-100 -500 0 -400 -0 -300Z"
          fill="red"
        />
      </symbol>
      <symbol
        id="VH5"
        viewBox="-500 -500 1000 1000"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M170 -460L-175 -460L-210 -115C-210 -115 -200 -200 0 -200C100 -200 255 -80 255 120C255 320 180 460 -20 460C-220 460 -255 285 -255 285"
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
      <use xlinkHref="#VH5" height="32" x="-100.4" y="-152.5" />
      <use xlinkHref="#SH5" height="26.769" x="-97.784" y="-115.5" />
      <use xlinkHref="#SH5" height="54" x="-72.167" y="-130.667" />
      <use xlinkHref="#SH5" height="54" x="18.167" y="-130.667" />
      <use xlinkHref="#SH5" height="54" x="-27" y="-27" />
      <g transform="rotate(180)">
        <use xlinkHref="#VH5" height="32" x="-100.4" y="-152.5" />
        <use xlinkHref="#SH5" height="26.769" x="-97.784" y="-115.5" />
        <use xlinkHref="#SH5" height="54" x="-72.167" y="-130.667" />
        <use xlinkHref="#SH5" height="54" x="18.167" y="-130.667" />
      </g>
    </svg>
  );
}
