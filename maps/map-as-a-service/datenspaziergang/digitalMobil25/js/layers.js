import { setGeoJsonPath } from '../../../../../src/js/setGeoJsonPath.js';


// ==============================
// SOURCES
// ==============================
export const sourceRoute = setGeoJsonPath('maps/map-as-a-service/datenspaziergang/digitalMobil25', 'map');
export const sourceAbstellzonen = setGeoJsonPath('maps/map-as-a-service/datenspaziergang/digitalMobil25', 'abstellzonen');


// ==============================
// LAYERS
// ==============================
export const layersRoute = [
    {
        id: 'line',
        type: 'line',
        source: 'sourceRoute',
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
    },
    {
        id: 'stations',
        source: 'sourceRoute',
        color: 'black',
        filter: [
            '==', ['geometry-type'], 'Point'
        ],
        color: 'black',
        circleRadius: 6,
        circleOpacity: 1
    }
];

export const layersAbstellzonen = [
    {
        id: 'abstellverbotszonen',
        label: 'Abstellverbotszonen',
        type: 'fill',
        source: 'sourceAbstellzonen',
        color: 'yellow',
        fillOpacity: 0.5,
        filter:
            [
                '==', ['get', 'layer'], 'Abstellverbotszonen'
            ]
    },
    {
        id: 'abstellflaechen',
        label: 'Abstellflächen',
        type: 'fill',
        source: 'sourceAbstellzonen',
        color: 'lightgreen',
        fillOpacity: 0.5,
        filter:
            [
                '==', ['get', 'layer'], 'E-Scooter-Abstellflächen'
            ]
    }
];