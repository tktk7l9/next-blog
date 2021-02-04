module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      typography: (theme) => ({
        DEFAULT: {},
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.gray.300"),
              "&:hover": {
                color: theme("colors.gray.300"),
              },
            },
            "h2 a": {
              color: theme("colors.gray.300"),
            },
            h1: {
              color: theme("colors.gray.300"),
            },
            h2: {
              color: theme("colors.gray.300"),
            },
            h3: {
              color: theme("colors.gray.400"),
            },
            h4: {
              color: theme("colors.gray.400"),
            },
            h5: {
              color: theme("colors.gray.400"),
            },
            h6: {
              color: theme("colors.gray.400"),
            },
            th: {
              color: theme("colors.gray.400"),
            },
            strong: {
              color: theme("colors.gray.400"),
            },
            code: {
              color: theme("colors.gray.400"),
            },
            figcaption: {
              color: theme("colors.gray.400"),
            },
            blockquote: {
              color: theme("colors.gray.400"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      fill: ["hover", "focus"],
    },
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
}
