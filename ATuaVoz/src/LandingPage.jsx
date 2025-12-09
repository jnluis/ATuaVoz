import MyNavbar from "./components/Navbar.jsx";
import MyFooter from "./components/Footer.jsx";
import CarouselWithContent from "./components/Carousel.jsx";
import InstagramFeed from "./components/InstagramFeed.jsx";

export default function LandingPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Flex container */}
        <MyNavbar />
        <main className="grow">
          <CarouselWithContent />
          <InstagramFeed /> 
        </main>
        <MyFooter />
      </div>
    </>
  );
}