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

const PDFReader = ({ fileURL }) => {
  return (
    <div className="w-full max-w-4xl h-[700px] overflow-hidden">
        {/* TODO: MEXER NESTA HEIGHT QUANDO O FOOTER ESTIVER DEFINIDO */}
      <div className="h-full overflow-y-auto">
        <Root fileURL={fileURL}>
          <div className="sticky top-0 z-10  border-b p-1 flex items-center justify-center text-sm text-gray-600 gap-2">
            Zoom
            <ZoomOut className="px-3 py-1 text-gray-900 dark:text-white border-1 border-solid border-white rounded-full">-</ZoomOut>
            <CurrentZoom className="bg-white rounded-full px-3 py-1 border text-center w-16" />
            <ZoomIn className="px-3 py-1 text-gray-900 dark:text-white border-1 border-solid border-white rounded-full">+</ZoomIn>
            Page
            <CurrentPage className="bg-white rounded-full px-3 py-1 border text-center" />  
          </div>
          <Viewport>
            <Pages>
              <Page>
                <CanvasLayer />
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
  fileURL: PropTypes.node.isRequired, // Validate children prop as a node
};
