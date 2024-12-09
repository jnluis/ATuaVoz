import MyNavbar from "./components/Navbar.jsx";
import MyFooter from "./components/Footer.jsx";
import CarouselWithContent from "./components/Carousel.jsx";

export default function LandingPage() {
  return (
    <>
      <div className="flex flex-col max-h-screen">
        {" "}
        {/* Flex container */}
        <MyNavbar />
        <main className="flex flex-col h-full">
          {" "}
          <CarouselWithContent />
        </main>
        <MyFooter />
      </div>
    </>
  );
}
