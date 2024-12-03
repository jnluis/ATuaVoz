import MyNavbar from "./components/Navbar";
import MyFooter from "./components/Footer";
import { Button } from "@nextui-org/react";
import MyPDFReader from "./components/Reader";

// Import your PDF files
import manifestoPT from './assets/ManifestoPT.pdf';
import manifestoEN from './assets/ManifestoENG.pdf';

export default function Manifesto() {
  const openPDF = (pdfPath) => {
    // Open PDF in a new window/tab
    window.open(pdfPath, '_blank');
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <MyNavbar />
        <main className="flex-1 flex flex-col items-center">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">Manifestos</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            <Button
              color="success"
              className="w-full"
              auto
              onClick={() => openPDF(manifestoPT)}
            >
              Consultar Manifesto [PT]
            </Button>
            <Button
              color="success"
              className="w-full"
              auto
              onClick={() => openPDF(manifestoEN)}
            >
              View Manifest [EN]
            </Button>
          </div>
          <div className="w-full max-w-4xl mt-6">
            <MyPDFReader fileURL={manifestoPT} />
          </div>
        </main>
        <MyFooter />
      </div>
    </>
  );
}