import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/ui/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: { DEFAULT: "var(--docviewer-bg)", 2: "var(--docviewer-bg-subtle)" },
        border: "var(--docviewer-border)",
        ink: {
          DEFAULT: "var(--docviewer-fg)",
          secondary: "var(--docviewer-fg-secondary)",
          muted: "var(--docviewer-fg-muted)",
        },
        signal: { DEFAULT: "var(--docviewer-accent)", ring: "var(--docviewer-accent-ring)" },
      },
      fontFamily: {
        sans: ["var(--docviewer-font)"],
        display: ["var(--docviewer-font)"],
        mono: ["var(--docviewer-mono)"],
      },
    },
  },
  plugins: [typography],
};
