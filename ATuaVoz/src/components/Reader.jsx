import {
  Root,
  Viewport,
  Pages,
  Page,
  CanvasLayer,
  ZoomIn,
  ZoomOut,
  CurrentZoom,
  CurrentPage
} from "@fileforge/pdfreader";
import PropTypes from "prop-types";
import { Button } from "@nextui-org/react";

const PDFReader = ({ fileURL, language, toggleLanguage }) => {
  return (
    <div className="h-[700px] overflow-hidden">
      <div className="h-full overflow-y-auto">
        <Root fileURL={fileURL}>
          <div className="sticky top-0 z-10 border-b p-1 flex flex-wrap items-center justify-center text-black gap-2">
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline dark:text-white">Zoom</span>
              <ZoomOut className="px-2 py-1 dark:text-white border-solid border-white rounded-full text-base">-</ZoomOut>
              <CurrentZoom className="bg-white rounded-full px-2 py-1 border text-center w-12 text-xs sm:text-sm" />
              <ZoomIn className="px-2 py-1 dark:text-white border-solid border-white rounded-full text-sm">+</ZoomIn>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline dark:text-white">Page</span>
              <CurrentPage className="bg-white rounded-full px-2 py-1 border text-center w-12 text-xs sm:text-sm" />
            </div>
            
            <Button
              color="primary"
              size="sm"
              className="ml-2 px-3 py-1 text-xs sm:text-sm  text-white"
              onClick={toggleLanguage}
            >
              {language === "PT" 
                ? "Switch to English" 
                : "Mudar para Português"}
            </Button>
          </div>
          
          <Viewport className="w-full">
            <Pages>
              <Page>
                <CanvasLayer className="scale-75 md:scale-100"/>
              </Page>
            </Pages>
          </Viewport>
        </Root>
      </div>
    </div>
  );
};

export default PDFReader;

PDFReader.propTypes = {
  fileURL: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  toggleLanguage: PropTypes.func.isRequired,
};