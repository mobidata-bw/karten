import { setFilePath } from '../../../../../src/js/setFilePath.js';


// ==============================
// SOURCES
// ==============================
export const sourceMap = setFilePath({ format: 'geojson', directory: 'maps/map-as-a-service/datenspaziergang/digitalMobil25', file: 'map' });
export const sourceAbstellverbotszonen = setFilePath({ format: 'geojson', directory: 'maps/map-as-a-service/datenspaziergang/digitalMobil25', file: 'abstellverbotszonen' });
export const sourceAbstellflaechen = setFilePath({ format: 'geojson', directory: 'maps/map-as-a-service/datenspaziergang/digitalMobil25', file: 'abstellflaechen' });


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