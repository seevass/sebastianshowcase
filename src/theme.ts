import { createTheme } from "@mantine/core";

export const theme = createTheme({
  components: {
    AppShell: {
      defaultProps: {
        padding: "xl",
        header: { height: 50 },
        navbar: {
          width: 400,
        },
        withBorder: false,
      },
    },
  },
});
