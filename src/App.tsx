import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";

import ScrollToTop from "./helpers/scrollToTop";

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Blendify from './pages/Blendify';
import GraphicDesign from './pages/GraphicDesign';
import KeyboardWarrior from './pages/KeyboardWarrior';
import Keyboards from './pages/Keyboards';
import Nishikigoi from './pages/Nishikigoi';
import Photography from './pages/Photography';
import Quickcast from './pages/Quickcast';
import SussyScript from "./pages/SussyScript";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="welcomehome" element={<Homepage />} />
          <Route path="aboutme" element={<About />} />
          <Route path="blendify" element={<Blendify />} />
          <Route path="graphicdesign" element={<GraphicDesign />} />
          <Route path="keyboardwarrior" element={<KeyboardWarrior />} />
          <Route path="keyboards" element={<Keyboards />} />
          <Route path="nishikigoi" element={<Nishikigoi />} />
          <Route path="photography" element={<Photography />} />
          <Route path="quickcast" element={<Quickcast />} />
          <Route path="sussyscript" element={<SussyScript />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}
