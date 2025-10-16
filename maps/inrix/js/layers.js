import { setFilePath } from '../../../src/js/setFilePath.js';


// ==============================
// SOURCES
// ==============================
export const sourceInrix = setFilePath({ format: 'mbtiles', file: 'inrix' });


// ==============================
// LAYERS
// ==============================
const layers = {
    group: 'INRIX',
    type: 'line',
    lineWidth:
        [
            "interpolate", ["linear"], ["zoom"],
            6, 1,
            12, 2
        ]
};


export const layersInrix = [
    {
        id: 'inrix',
        label: 'Straßenabschnitte',
        source: 'sourceInrix',
        sourceLayer: 'inrix',
        color: '#C4001F',
        ...layers
    }
];