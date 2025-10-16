
import { setFilePath } from '../../../../src/js/setFilePath.js';


// ==============================
// SOURCES
// ==============================
export const sourceWebcam = setFilePath({ format: 'geojson', directory: 'maps/ipl/webcam', file: 'webcam' });


// ==============================
// LAYERS
// ==============================
export const layersWebcam = [
    {
        id: 'webcam',
        group: 'Webcam-Bilder',
        label: 'Standorte',
        source: 'sourceWebcam',
        color: 'grey'
    }
];