import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";

function App() {
  return (
    <Router>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
