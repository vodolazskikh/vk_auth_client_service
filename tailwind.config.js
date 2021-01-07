module.exports = {
  purge: ['./src/**/*.ts(x)', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing: {
      px: '1px',
      0: '0',
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      20: '20px',
      24: '24px',
      28: '28ox',
      32: '32px',
      36: '36px',
      48: '48px',
      64: '64px',
    },
    minWidth: {
      '600': '600px',
    },
    maxHeight: {
      '600': '600px',
    },
    zIndex: {
      'bottom': -1,
      'base': 0,
      'top': 1,
      'mega': 2,
      'auto': 'auto',
    },
    screens: {
      'sm': {'max': '639px'},
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}