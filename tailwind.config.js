/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0A0C10',
        surface: '#12151B',
        surface2: '#181C24',
        line: '#232833',
        ink: '#E9EAEC',
        'ink-muted': '#7C8494',
        'ink-faint': '#4B5261',
        dev: {
          DEFAULT: '#4CE0C4',
          dim: '#2E8C79',
        },
        design: {
          DEFAULT: '#F0A857',
          dim: '#9C6E38',
        },
        paper: '#FAF9F6',
        'paper-line': '#E7E4DD',
        charcoal: '#151515',
        'charcoal-muted': '#6B6B63',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
        body: ['InterVariable', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        heading: ['"Bebas Neue"', 'sans-serif'],
        friendly: ['"Nunito Variable"', 'Nunito', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 7.5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
      },
    },
  },
  plugins: [],
}
