
import { setFilePath } from '../../../../src/js/setFilePath.js';


// ==============================
// SOURCES
// ==============================
export const sourceWebcam = setFilePath('geojson', 'maps/ipl/webcam', 'webcam');


// ==============================
// LAYERS
// ==============================
export const layersWebcam = [
    {
        id: 'webcam',
        group: 'Webcam-Bilder',
        label: 'Standorte',
        source: 'sourceWebcam',
        color: 'white'
    }
];