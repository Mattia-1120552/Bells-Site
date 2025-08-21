<template>
  <div class="theme-color View justify-center bg-black">
    <!--Waves Container-->
    <div>
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255, 105, 180, 0.7)" />
          <!-- Hot pink -->
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255, 182, 193, 0.5)" />
          <!-- Light pink -->
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255, 192, 203, 0.3)" />
        </g>
      </svg>
    </div>
    <!--Waves end-->
  </div>
</template>
