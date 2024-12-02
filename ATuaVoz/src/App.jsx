import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LandingPage from './LandingPage'
import Equipa from './Equipa'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/equipa" element={<Equipa />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
