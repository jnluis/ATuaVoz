import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import Equipa from './Equipa';
import Background from "./Background"; 
import Manifesto from "./Manifesto";
import Sugestoes from "./Sugestoes";

function App() {

  return (
    <BrowserRouter >
    <Background>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/equipa25" element={<Equipa />} />
        <Route path="/equipa26" element={<Equipa />} />
        <Route path="/manifesto" element={<Manifesto/>} />
        <Route path="/sugestoes" element={<Sugestoes />} />
      </Routes>
      </Background>
    </BrowserRouter>
  );
}

export default App;
