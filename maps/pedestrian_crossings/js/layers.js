import { setFilePath } from '../../../src/js/setFilePath.js';


// ==============================
// SOURCES
// ==============================
export const sourceFootway = setFilePath({ format: 'mbtiles', file: 'footway' });
export const sourceMarked = setFilePath({ format: 'mbtiles', file: 'marked' });
export const sourceUncontrolled = setFilePath({ format: 'mbtiles', file: 'uncontrolled' });
export const sourceZebra = setFilePath({ format: 'mbtiles', file: 'zebra' });


// ==============================
// LAYERS
// ==============================
const layers = {
    group: 'Fußgängerüberwege'
};


export const layersPedestrianCrossings = [
    {
        id: 'uncontrolled',
        label: 'Uncontrolled',
        source: 'sourceUncontrolled',
        sourceLayer: 'uncontrolled',
        color: '#C4001F',
        ...layers
    },
    {
        id: 'footway',
        label: 'Footway',
        source: 'sourceFootway',
        sourceLayer: 'footway',
        color: '#75b9a2',
        ...layers
    },
    {
        id: 'marked',
        label: 'Marked',
        source: 'sourceMarked',
        sourceLayer: 'marked',
        color: '#ffe280',
        ...layers
    },
    {
        id: 'zebra',
        label: 'Zebra',
        source: 'sourceZebra',
        sourceLayer: 'zebra',
        color: '#366491',
        ...layers
    }
];