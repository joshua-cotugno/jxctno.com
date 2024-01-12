// React viewer for PDFs

import React from 'react';
import { Document, Page } from 'react-pdf';

function PDF(url) {
    return (
        <Document
            file={url}
            onLoadSuccess={onDocumentLoadSuccess}
        >
            <Page pageNumber={pageNumber} />
        </Document>
    );
}

export default PDF;