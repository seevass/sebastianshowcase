import { createTheme, mergeThemeOverrides } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

// Wide desktop = 1510px and up. Mobile/smaller layouts = below that.
const WIDE_LAYOUT_MIN_WIDTH = "1510px";

// ---------------------------------------------------------------
// DESKTOP: all the font settings
// ---------------------------------------------------------------

export const desktopTheme = createTheme({
  breakpoints: { lg: WIDE_LAYOUT_MIN_WIDTH },

  fontFamily: "'Ari W9500', Arial, Helvetica, sans-serif",

  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",
    display: "48px",
  },

  // Consistent gaps and padding
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
  },

  // Consistent line spacing
  lineHeights: {
    xs: "0.6",
    sm: "0.8",
    md: "1",
    lg: "1.2",
    xl: "1.4",
  },

  headings: {
    fontFamily: "'Redaction 50', Georgia, serif",
    fontWeight: "400",
    sizes: {
      h1: { fontSize: "48px", lineHeight: "1.1" },
      h2: { fontSize: "32px", lineHeight: "1.2" },
      h3: { fontSize: "24px", lineHeight: "1.3" },
      h4: { fontSize: "20px", lineHeight: "1.3" },
    },
  },

  components: {
    Text: {
      defaultProps: {
        lh: "md",
      },
    },
    Button: {
      defaultProps: {
        size: "md",
        fw: 400,
      },
    },
  },
});

// ---------------------------------------------------------------
// MOBILE: only list what is different from desktop
// ---------------------------------------------------------------
export const mobileTheme = mergeThemeOverrides(
  desktopTheme,
  createTheme({
    headings: {
      sizes: {
        h1: { fontSize: "40px" },
        h2: { fontSize: "28px" },
        h3: { fontSize: "20px" },
        h4: { fontSize: "18px" },
      },
    },
  }),
);

// True on wide desktop, false on smaller layouts.
export function useIsDesktop() {
  return useMediaQuery(`(min-width: ${WIDE_LAYOUT_MIN_WIDTH})`, true, {
    getInitialValueInEffect: false,
  });
}

// Picks the right theme for the current screen width.
export function useSiteTheme() {
  return useIsDesktop() ? desktopTheme : mobileTheme;
}
