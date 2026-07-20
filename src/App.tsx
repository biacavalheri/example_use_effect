import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Exercicio1 from "./pages/Exercicio1";
import Exercicio2 from "./pages/Exercicio2";
import Exercicio3 from "./pages/Exercicio3";
import Exercicio4 from "./pages/Exercicio4";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/ex1" element={<Exercicio1 />} />
        <Route path="/ex2" element={<Exercicio2 />} />
        <Route path="/ex3" element={<Exercicio3 />} />
        <Route path="/ex4" element={<Exercicio4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;