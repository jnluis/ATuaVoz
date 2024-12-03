import MyNavbar from "./components/Navbar.jsx";
import MyFooter from "./components/Footer.jsx";
import CarouselWithContent from "./components/Carousel.jsx";

export default function LandingPage() {

  return (
    <>
      <div className="flex flex-col min-h-screen"> {/* Flex container */}
      <MyNavbar />
      <main className="flex-1"> {/* Main content grows to fill space */}
      <h1 className="text-orange-200">Vite + React</h1>
      <CarouselWithContent />
      </main>
      <MyFooter />
    </div>
    </>
  );
}
