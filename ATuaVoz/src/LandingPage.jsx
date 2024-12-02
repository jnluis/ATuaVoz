import MyNavbar from './Navbar.jsx';
//import MyFooter from './Footer.jsx';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from "react";

export default function LandingPage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyNavbar />
      <div>
        <a >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-orange-200">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* //  <Footer /> */}
    </>
  );
}
