import MyNavbar from "./Navbar";
import MyFooter from "./Footer";

export default function Equipa() {
  return (
    <>
      <div className="flex flex-col min-h-screen"> {/* Flex container */}
      <MyNavbar />
      <main className="flex-1"> {/* Main content grows to fill space */}
      <h1> Equipa </h1>
      </main>
      <MyFooter />
    </div>
    </>
  );
}