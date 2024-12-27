import { createTheme } from "@mantine/core";

export const theme = createTheme({
  components: {
    AppShell: {
      defaultProps: {
        padding: "xl",
        header: { height: 0 },
        navbar: {
          width: 350,
        },
        withBorder: false,
      },
    },
  },
  breakpoints: {
    xs: '576px',  // Mobile (smaller than 576px)
    sm: '768px',  // Tablet (smaller than 768px)
    md: '1024px', // Small desktop (smaller than 1024px)
    lg: '1200px', // Large desktop (smaller than 1200px)
    xl: '1400px', // Extra large screen
  },
});
