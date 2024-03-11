import React, { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function Pdf() {
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [drawing, setDrawing] = useState(false);
  const [lines, setLines] = useState([]);
  const canvasRef = useRef(null);

  const onFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setPageNumber(1);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const onPageChange = (newPage) => {
    setPageNumber(newPage);
  };

  const startDrawing = (e) => {
    setDrawing(true);
    const { offsetX, offsetY } = e.nativeEvent;
    setLines((prevLines) => [...prevLines, { x: offsetX, y: offsetY }]);
  };

  const draw = (e) => {
    if (!drawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
    setLines((prevLines) => [...prevLines, { x: offsetX, y: offsetY }]);
  };

  const endDrawing = () => {
    setDrawing(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.strokeStyle = "black";
      context.lineWidth = 2;

      lines.forEach((line, index) => {
        if (index === 0) {
          context.beginPath();
          context.moveTo(line.x, line.y);
        } else {
          context.lineTo(line.x, line.y);
        }
      });

      // Draw the entire path when the mouse is released
      if (!drawing) {
        context.stroke();
      }
    }
  }, [lines, drawing, canvasRef]);

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      {file && (
        <div className="main">
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              pageNumber={pageNumber}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={endDrawing}
              onMouseOut={endDrawing}
            >
              {/* <canvas
                ref={canvasRef}
                width={300}
                height={200}
                style={{ border: "1px solid black", cursor: "crosshair" }}
              /> */}
            </Page>
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <div>
            {pageNumber > 1 && (
              <button onClick={() => onPageChange(pageNumber - 1)}>
                Previous Page
              </button>
            )}
            {pageNumber < numPages && (
              <button onClick={() => onPageChange(pageNumber + 1)}>
                Next Page
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Pdf;
