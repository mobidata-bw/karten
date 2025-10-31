import { setFilePath } from '../../../src/js/setFilePath.js';


// ==============================
// SOURCES
// ==============================
export const sourceInrix = setFilePath({ format: 'mbtiles', file: 'inrix', promoteId: 'XDSegID' });


// ==============================
// LAYERS
// ==============================
export const layersInrix = [
    {
        id: 'inrix',
        group: 'INRIX',
        type: 'line',
        label: 'Straßenabschnitte',
        source: 'sourceInrix',
        sourceLayer: 'inrix',
        color: 'red',
        lineWidth:
            [
                "interpolate", ["linear"], ["zoom"],
                6, 1,
                12, 4
            ]
    }
];