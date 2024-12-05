import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import Equipa from './Equipa';
import Background from "./Background"; 
import Manifesto from "./Manifesto";

function App() {

  return (
    <BrowserRouter>
    <Background>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/equipa" element={<Equipa />} />
        <Route path="/manifesto" element={<Manifesto/>} />
      </Routes>
      </Background>
    </BrowserRouter>
  );
}

export default App;
