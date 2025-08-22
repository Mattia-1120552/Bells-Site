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
      50: '{Pink.50}',
      100: '{Pink.100}',
      200: '{Pink.200}',
      300: '{Pink.300}',
      400: '{Pink.400}',
      500: '{Pink.500}',
      600: '{Pink.600}',
      700: '{Pink.700}',
      800: '{Pink.800}',
      900: '{Pink.900}',
      950: '{Pink.950}',
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
})
