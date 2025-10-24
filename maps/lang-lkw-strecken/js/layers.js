import { setFilePath } from '../../../src/js/setFilePath.js';


// ==============================
// SOURCES
// ==============================
export const sourceTruckRoutes = setFilePath({ format: 'geojson', directory: 'maps/lang-lkw-strecken', file: 'lang-lkw-strecken' });


// ==============================
// LAYERS
// ==============================
export const layersTruckRoutes = [
    {
        id: 'lang-lkw-strecken',
        label: 'Strecken',
        group: 'Lang-LKW-Strecken',
        type: 'line',
        source: 'sourceTruckRoutes',
        color: '#C4001F'
    }
];