import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from './LandingPage';
import Equipa from './Equipa';
import Background from "./Background"; 

function App() {

  return (
    <BrowserRouter>
    <Background>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/equipa" element={<Equipa />} />
      </Routes>
      </Background>
    </BrowserRouter>
  );
}

export default App;
