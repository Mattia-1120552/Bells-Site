import Aura from '@primeuix/themes/aura'
import { definePreset } from '@primeuix/themes'

export const MyPreset = definePreset(Aura, {
  semantic: {
    surface: {
      0: '#ffffff',
      50: '{Rose.50}',
      100: '{Rose.100}',
      200: '{Rose.200}',
      300: '{Rose.300}',
      400: '{Rose.400}',
      500: '{Rose.500}',
      600: '{Rose.600}',
      700: '{Rose.700}',
      800: '{Rose.800}',
      900: '{Rose.900}',
      950: '{Rose.950}',
    },
    primary: {
      50: '{Grey.50}',
      100: '{Grey.100}',
      200: '{Grey.200}',
      300: '{Grey.300}',
      400: '{Grey.400}',
      500: '{Grey.500}',
      600: '{Grey.600}',
      700: '{Grey.700}',
      800: '{Grey.800}',
      900: '{Grey.900}',
      950: '{Grey.950}',
    },
  },
  components: {
    drawer: {
      root: {
        background: '{Zinc.900}',
        color: '#fffff',
      },
    },
  },
  css: ({ dt }) => `
  .theme-color {
    color: ${dt('primary.400')};
    fill: ${dt('primary.400')};
  }
  a {
    color: ${dt('primary.500')};
  }
  .outerlayerBottomRight {
  background: linear-gradient(-45deg, ${dt('primary.500')} 1%, transparent 7%);
  }
  waves {
    color: ${dt('primary.500')};
  }
  .footer {
    background-color: ${dt('primary.500')};
  },
  `,
})
