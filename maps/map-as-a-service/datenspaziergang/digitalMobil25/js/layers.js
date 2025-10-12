import { setFilePath } from '../../../../../src/js/setFilePath.js';


// ==============================
// SOURCES
// ==============================
export const sourceMap = setFilePath('geojson', 'maps/map-as-a-service/datenspaziergang/digitalMobil25', 'map');
export const sourceAbstellverbotszonen = setFilePath('geojson', 'maps/map-as-a-service/datenspaziergang/digitalMobil25', 'abstellverbotszonen');
export const sourceAbstellflaechen = setFilePath('geojson', 'maps/map-as-a-service/datenspaziergang/digitalMobil25', 'abstellflaechen');


// ==============================
// LAYERS
// ==============================
export const layersRoute = [
    {
        id: 'route',
        type: 'line',
        source: 'sourceMap',
        color: 'black',
        filter: [
            '==', ['geometry-type'], 'LineString'
        ],
        lineWidth:
            [
                'interpolate', ['linear'], ['zoom'],
                14, 3,
                20, 5
            ]
    }
];

export const layersStations = [
    {
        id: 'stations',
        source: 'sourceMap',
        color: 'black',
        filter: [
            '==', ['geometry-type'], 'Point'
        ],
        color: 'black',
        circleRadius: 6,
        circleOpacity: 1
    }
];

export const layersScooterZones = [
    {
        id: 'abstellverbotszonen',
        label: 'Abstellverbotszonen',
        type: 'fill',
        source: 'sourceAbstellverbotszonen',
        color: 'yellow',
        fillOpacity: 0.5
    },
    {
        id: 'abstellflaechen',
        label: 'Abstellflächen',
        type: 'fill',
        source: 'sourceAbstellflaechen',
        color: 'lightgreen',
        fillOpacity: 0.5
    }
];