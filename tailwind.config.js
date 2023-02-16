/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      '10-custom': 'calc(100vw*10/1280)',
      '11-custom': 'calc(100vw*11/1280)',
      '12-custom': 'calc(100vw*12/1280)',
      '15-custom': 'calc(100vw*15/1280)',
      '16-custom': 'calc(100vw*16/1280)',
      '18-custom': 'calc(100vw*18/1280)',
      '20-custom': 'calc(100vw*20/1280)',
      '22-custom': 'calc(100vw*22/1280)',
      '13-custom': 'calc(100vw*13/1280)',
      '14-custom': 'calc(100vw*14/1280)',
      '24-custom': 'calc(100vw*24/1280)',
      '32-custom': 'calc(100vw*32/1280)',
      '36-custom': 'calc(100vw*36/1280)',
    },
    minWidth: {
      '512': 'calc(100vw*512/1280)',
    },
    colors: {
      light: '#FFFFFF',
      primary: {
        300: '#FFCC21',
        400: '#FF963C',
        500: '#EA6C00',
      },
      secondary: {
        300: '#8FE9D0'
      },
      dark: {
        500: '#414141',
        600: '#2E2E2E',
      },
      gray: {
        300: '#8b8b8b',
        400: '#777777',
        500: '#656565'
      }
    },
    extend: {
      padding: {
        '4-custom': 'calc(100vw*4/1280)',
        '23-custom': 'calc(100vw*23/1280)',
        '32-custom': 'calc(100vw*32/1280)',
        '16-1280': 'calc(100vw*16/1280)',
        '12-1280': 'calc(100vw*12/1280)',
      },
      margin: {
        '8-1280': 'calc(100vw*8/1280)',
        '10-1280': 'calc(100vw*10/1280)',
        '12-1280': 'calc(100vw*12/1280)',
        '32-1280': 'calc(100vw*32/1280)',
        '32-1280': 'calc(100vw*32/1280)',
        '16-1280': 'calc(100vw*16/1280)',
        '24-1280': 'calc(100vw*24/1280)',
        '40-1280': 'calc(100vw*40/1280)',
        '64-1280': 'calc(100vw*64/1280)',
      },
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
      inset: {
        '76-1280': 'calc(100vw*76/1280)',
        '16-1280': 'calc(100vw*16/1280)',
        '24-1280': 'calc(100vw*24/1280)',
        '264': 'calc(100vw*264/1280)',
        '22': 'calc(100vw*22/1280)',
        '280': 'calc(100vw*280/1280)',
        '64': 'calc(100vw*64/1280)',
      },
      width: {
        '234': 'calc(100vw*234/1280)',
        '216': 'calc(100vw*216/1280)',
        '48': 'calc(100vw*48/1280)',
        '231': 'calc(100vw*231/1280)',
        '480': 'calc(100vw*480/1280)',
        '146': 'calc(100vw*146/1280)',
        '264': 'calc(100vw*264/1280)',
        '96': 'calc(100vw*96/1280)',
        '16': 'calc(100vw*16/1280)',
        '280': 'calc(100vw*280/1280)',
        '1008': 'calc(100vw*1008/1280)',
        '960': 'calc(100vw*960/1280)',
        '540': 'calc(100vw*540/1280)',
        '740': 'calc(100vw*740/1280)',
        '181': 'calc(100vw*181/1280)',
        '171': 'calc(100vw*171/1280)',
        '136': 'calc(100vw*136/1280)',
        '56': 'calc(100vw*56/1280)',
        '53': 'calc(100vw*53/1280)',
        '240': 'calc(100vw*240/1280)',
        '296': 'calc(100vw*296/1280)',
        '144': 'calc(100vw*144/1280)',
        '160': 'calc(100vw*160/1280)',
        '32': 'calc(100vw*32/1280)',
      },
      height: {
        '145': 'calc(100vw*145/1280)',
        '144': 'calc(100vw*144/1280)',
        '48': 'calc(100vw*48/1280)',
        '231': 'calc(100vw*231/1280)',
        '264': 'calc(100vw*264/1280)',
        '160': 'calc(100vw*160/1280)',
        '288': 'calc(100vw*288/1280)',
        '16': 'calc(100vw*16/1280)',
        '181': 'calc(100vw*181/1280)',
        '171': 'calc(100vw*171/1280)',
        '136': 'calc(100vw*136/1280)',
        '45': 'calc(100vw*45/1280)',
        '240': 'calc(100vw*240/1280)',
        '64': 'calc(100vw*64/1280)',
        '32': 'calc(100vw*32/1280)',
        '128': 'calc(100vw*128/1280)',
      },
      borderWidth: {
        '24': 'calc(100vw*24/1280)'
      },
      outlineWidth: {
        '24': 'calc(100vw*24/1280)'
      },
      bgGradientDeg: {
        75: '75deg',
      },
      backgroundImage: {
        'hexagon': "url('./template/img/svg/パス 48.svg')",
        'mr1': "url('./template/img/bg/MyRecommend-1.png')",
        'mr2': "url('./template/img/bg/MyRecommend-2.png')",
        'mr3': "url('./template/img/bg/MyRecommend-3.png')",
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-gradient': (angle) => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(
            theme('bgGradientDeg', {}), // name of config key. Must be unique
            {
              10: '10deg', // bg-gradient-10
              15: '15deg',
              20: '20deg',
              25: '25deg',
              30: '30deg',
              45: '45deg',
              60: '60deg',
              90: '90deg',
              91: '91deg',
              120: '120deg',
              135: '135deg',
            }
          )
        }
      )
    })
  ],
}
