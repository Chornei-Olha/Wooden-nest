module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        // 'montserrat-alternates': ['Montserrat Alternates', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        unbounded: ['Unbounded', 'cursive'],
      },
      colors: {
        global: {
          background1: 'var(--global-bg-1)',
          background2: 'var(--global-bg-2)',
          background3: 'var(--global-bg-3)',
          background4: 'var(--global-bg-4)',
          background5: 'var(--global-bg-5)',
          background6: 'var(--global-bg-6)',
          background7: 'var(--global-bg-7)',
          background8: 'var(--global-bg-8)',
          background9: 'var(--global-bg-9)',
          background10: 'var(--global-bg-10)',
          background11: 'var(--global-bg-11)',
          text1: 'var(--global-text-1)',
          text2: 'var(--global-text-2)',
          text3: 'var(--global-text-3)',
          text4: 'var(--global-text-4)',
          text5: 'var(--global-text-5)',
          text6: 'var(--global-text-6)',
          text7: 'var(--global-text-7)',
          text8: 'var(--global-text-8)',
          text9: 'var(--global-text-9)',
          text10: 'var(--global-text-10)',
          text11: 'var(--global-text-11)',
          text12: 'var(--global-text-12)',
        },
        chipview: {
          text1: 'var(--chipview-text-1)',
          text2: 'var(--chipview-text-2)',
        },
        edittext: {
          background1: 'var(--edittext-bg-1)',
        },
      },
    },
  },
  plugins: [],
};
