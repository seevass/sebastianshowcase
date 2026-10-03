import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "./fonts/redaction/fonts.css";

import App from "./App.tsx";
import { useSiteTheme } from "./theme";

// useSiteTheme is a hook, so it has to run inside a component.
function Root() {
  const theme = useSiteTheme();
  return (
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
