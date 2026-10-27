import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./fonts/redaction/redaction.css";
import "./fonts/franklin-gothic/franklin-gothic.css";

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
