import { createTheme, mergeThemeOverrides } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

// Desktop = 1510px and up. Mobile = below that. This is the only breakpoint.
const DESKTOP_MIN_WIDTH = "1510px";

// ---------------------------------------------------------------
// DESKTOP: all the font settings
// ---------------------------------------------------------------
export const desktopTheme = createTheme({
  breakpoints: {
    lg: DESKTOP_MIN_WIDTH,
  },

  // Body text, buttons, nav links
  fontFamily: "Poppins, system-ui, sans-serif",

  fontSizes: {
    xs: "12px", // fine print
    sm: "14px", // captions, hints
    md: "16px", // body text, buttons
    lg: "18px",
    xl: "20px",
  },

  lineHeights: {
    md: "1.6", // body text
  },

  // Every <Title> (h1-h6)
  headings: {
    fontFamily: "'Redaction 50', Georgia, serif",
    fontWeight: "400", // use "700" for the Bold cut
    sizes: {
      h1: { fontSize: "48px", lineHeight: "1.1" }, // name / page title
      h2: { fontSize: "32px", lineHeight: "1.2" },
      h3: { fontSize: "24px", lineHeight: "1.3" },
    },
  },

  components: {
    Text: { defaultProps: { lh: 1.6 } },
    Button: { defaultProps: { size: "md", fw: 600 } },
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
      },
    },
    fontSizes: {
      xs: "12px", // fine print
      sm: "14px", // captions, hints
      md: "16px", // body text, buttons
      lg: "18px",
      xl: "20px",
    },
  }),
);

// True on desktop, false on mobile. Use this instead of useMediaQuery.
export function useIsDesktop() {
  return useMediaQuery(`(min-width: ${DESKTOP_MIN_WIDTH})`, true, {
    getInitialValueInEffect: false, // read the width immediately, no flash
  });
}

// Picks the right theme for the current screen width.
export function useSiteTheme() {
  return useIsDesktop() ? desktopTheme : mobileTheme;
}
