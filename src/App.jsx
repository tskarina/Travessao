import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home/HomePage";
import Escola from "./pages/Escola/EscolaPage";
import Turmas from "./pages/Turmas/TurmasPage";
import Contato from "./pages/Contato/ContatoPage";
import GlobalStyles from "./GlobalStyles";
import theme from "./Theme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aescola" element={<Escola />} />
            <Route path="/turmasehorarios" element={<Turmas />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
