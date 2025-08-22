<template>
  <div class="theme-color View justify-center bg-black">
    <!--Waves Container-->
    <div>
      <svg class="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" class="fill-current opacity-70" />
          <use xlink:href="#gentle-wave" x="48" y="3" class="opacity-50" />
          <use xlink:href="#gentle-wave" x="48" y="5" class="fill-current opacity-30" />
          <use xlink:href="#gentle-wave" x="48" y="5" class="fill-current opacity-10" />
        </g>
      </svg>
    </div>
    <!--Waves end-->
  </div>
</template>
