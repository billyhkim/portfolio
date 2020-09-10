module.exports = {
  purge: ['./**/{pages,components,tailwind}/**/*.{js,jsx,ts,tsx,css}'],
  theme: {
    extend: {},
    flexGrow: {
      default: 1,
      2: 2,
      3: 3,
      7: 7,
    },
  },
  variants: {},
  plugins: [],
  future: { removeDeprecatedGapUtilities: true },
  corePlugins: {
    preflight: false,
  },
};
