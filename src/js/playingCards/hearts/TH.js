import React from "react";

export default function Hearts10() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      face="TH"
      height="250" 
      width="175"
      preserveAspectRatio="none"
      viewBox="-106 -164.5 212 329"
    >
      <symbol
        id="SHT"
        viewBox="-600 -600 1200 1200"
        preserveAspectRatio="xMinYMid"
      >
        <path
          d="M0 -300C0 -400 100 -500 200 -500C300 -500 400 -400 400 -250C400 0 0 400 0 500C0 400 -400 0 -400 -250C-400 -400 -300 -500 -200 -500C-100 -500 0 -400 -0 -300Z"
          fill="red"
        />
      </symbol>
      <symbol
        id="VHT"
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
      <use xlinkHref="#VHT" height="32" x="-100.4" y="-152.5" />
      <use xlinkHref="#SHT" height="26.769" x="-97.784" y="-115.5" />
      <use xlinkHref="#SHT" height="54" x="-72.167" y="-130.667" />
      <use xlinkHref="#SHT" height="54" x="18.167" y="-130.667" />
      <use xlinkHref="#SHT" height="54" x="-72.167" y="-61.555" />
      <use xlinkHref="#SHT" height="54" x="18.167" y="-61.555" />
      <use xlinkHref="#SHT" height="54" x="-27" y="-96.111" />
      <g transform="rotate(180)">
        <use xlinkHref="#VHT" height="32" x="-100.4" y="-152.5" />
        <use xlinkHref="#SHT" height="26.769" x="-97.784" y="-115.5" />
        <use xlinkHref="#SHT" height="54" x="-72.167" y="-130.667" />
        <use xlinkHref="#SHT" height="54" x="18.167" y="-130.667" />
        <use xlinkHref="#SHT" height="54" x="-72.167" y="-61.555" />
        <use xlinkHref="#SHT" height="54" x="18.167" y="-61.555" />
        <use xlinkHref="#SHT" height="54" x="-27" y="-96.111" />
      </g>
    </svg>
  );
}
