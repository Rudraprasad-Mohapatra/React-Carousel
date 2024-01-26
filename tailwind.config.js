/** @type {import('tailwindcss').Config} */

import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [aspectRatio,]
}

