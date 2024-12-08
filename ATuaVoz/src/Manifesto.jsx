import { useState, useEffect } from "react";
import { 
  Card, 
  CardBody, 
  Button 
} from "@nextui-org/react";
import MyNavbar from "./components/Navbar";
import MyFooter from "./components/Footer";
import MyPDFReader from "./components/Reader";
import { FaTriangleExclamation } from "react-icons/fa6";

// Import your PDF files
import manifestoPT from "./assets/ManifestoPT.pdf";
import manifestoEN from "./assets/ManifestoENG.pdf";

export default function Manifesto() {
  const [currentPDF, setCurrentPDF] = useState(manifestoPT);
  const [language, setLanguage] = useState("PT");
  const [isMobileView, setIsMobileView] = useState(false);
  const [showMobileAlert, setShowMobileAlert] = useState(true);

  // Check screen size and update state
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Automatically dismiss alert after 7 seconds
  useEffect(() => {
    let timeoutId;
    if (isMobileView && showMobileAlert) {
      timeoutId = setTimeout(() => {
        setShowMobileAlert(false);
      }, 7000); // 7 seconds
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isMobileView, showMobileAlert]);

  const openPDF = (pdfPath) => {
    // Open PDF in a new window/tab
    window.open(pdfPath, "_blank");
  };

  const toggleLanguage = () => {
    if (language === "PT") {
      setCurrentPDF(manifestoEN);
      setLanguage("EN");
    } else {
      setCurrentPDF(manifestoPT);
      setLanguage("PT");
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <MyNavbar />
        <main className="flex-1 flex flex-col items-center">
          {isMobileView && showMobileAlert && (
            <div className="w-full max-w-4xl mb-4 px-4">
              <Card 
                className="bg-yellow-50 border-yellow-200 border-2 relative"
              >
                <CardBody className="flex flex-row items-center space-x-3">
                  <FaTriangleExclamation className="text-yellow-600" />
                  <p className="text-yellow-800 flex-1">
                  Para uma melhor experiência de leitura, ajuste o nível de zoom do PDF.
                  </p>
                </CardBody>
              </Card>
            </div>
          )}
          
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">Manifestos</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl px-4">
            <Button
              color="primary"
              className="w-full text-white"
              onClick={() => openPDF(manifestoPT)}
            >
              Consultar Manifesto [PT]
            </Button>
            <Button
              color="primary"
              className="w-full text-white"
              onClick={() => openPDF(manifestoEN)}
            >
              View Manifest [EN]
            </Button>
          </div>
          
          <div className="w-full max-w-4xl mt-6 px-4">
            <MyPDFReader
              fileURL={currentPDF}
              language={language}
              toggleLanguage={toggleLanguage}
            />
          </div>
        </main>
        <MyFooter />
      </div>
    </>
  );
}