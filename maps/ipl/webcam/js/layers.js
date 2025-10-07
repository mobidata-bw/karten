
import { setGeoJsonPath } from '../../../../src/js/setGeoJsonPath.js';


// ==============================
// SOURCES
// ==============================
export const sourceWebcam = setGeoJsonPath('maps/ipl/webcam', 'webcam');


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