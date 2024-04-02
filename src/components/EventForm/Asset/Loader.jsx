import React from 'react'
import './loader.css'
const Loader = () => {
  return (
    <div>
      <div class="container">
        <div class="liquid"></div>
        <div class="liquid"></div>
        <div class="liquid"></div>
        <div class="liquid"></div>
      </div>
      <svg>
        <filter id="gooey">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          <feColorMatrix
            values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 20 -10
        "
          />
        </filter>
      </svg>
    </div>
  );
}

export default Loader