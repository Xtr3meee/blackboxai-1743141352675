/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/@solana/wallet-adapter-svelte/**/*.{js,ts,svelte}'
  ],
  theme: {
    extend: {
      colors: {
        solana: {
          green: '#00FFA3',
          purple: '#9945FF',
          blue: '#03E1FF',
          pink: '#FF1F7D',
          yellow: '#FBA43A'
        }
      }
    },
  },
  plugins: [],
}