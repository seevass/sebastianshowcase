import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';

export default function App() {

  return (
    <MantineProvider theme={theme}>
      <Router basename="/sebastian-showcase">
          <Routes>
            <Route path="/" element={<Homepage />} /> {/* Home route */}
            <Route path="/about" element={<About />} /> {/* About route */}
          </Routes>
      </Router>
    </MantineProvider>
  );
}
