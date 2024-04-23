import React from "react"
import loader from "../assets/images/loader.svg"
const Loader = () => {
  return (
    <div className=" absolute w-full h-screen top-0 left-0 flex items-center justify-center bg-slate-800 opacity-[.8] z-[9999]">
      <div className="z-[10000]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="142" height="142" style={{shapeRendering: 'auto', display: 'block', background: 'transparent'}} xmlns:xlink="http://www.w3.org/1999/xlink">
          <g>
            <path d="M10 50A40 40 0 0 0 90 50A40 44.1 0 0 1 10 50" fill="#fa1b1b" stroke="none">
              <animateTransform attributeName="transform" type="rotate" dur="1.3157894736842106s" repeatCount="indefinite" keyTimes="0;1" values="0 50 52.05;360 50 52.05"></animateTransform>
            </path>
            <g></g>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Loader
