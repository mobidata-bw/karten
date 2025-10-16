import { setFilePath } from '../../../../src/js/setFilePath.js';


// ==============================
// SOURCES
// ==============================
export const sourceKonstanzPls = setFilePath({ format: 'geojson', directory: 'maps/map-as-a-service/gebuendelte_daten_konstanz', file: 'konstanz_pls' });
export const sourceKonstanzBehindertenparken = setFilePath({ format: 'geojson', directory: 'maps/map-as-a-service/gebuendelte_daten_konstanz', file: 'konstanz_behindertenparken' });


// ==============================
// LAYERS
// ==============================
export const layersKonstanzPls = [
    {
        id: 'konstanzPls',
        label: 'Parkleitsystem',
        subGroup: 'Parken',
        source: 'sourceKonstanzPls',
        color: '#d85959'
    }
];

export const layersKonstanzBehindertenparken = [
    {
        id: 'konstanzBehindertenparken',
        label: 'Behindertenparken',
        subGroup: 'Parken',
        source: 'sourceKonstanzBehindertenparken',
        color: '#325ff2'
    }
];