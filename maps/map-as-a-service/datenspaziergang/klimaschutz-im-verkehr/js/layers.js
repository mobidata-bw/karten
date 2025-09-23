import { setGeoJsonPath } from '../../../../../src/js/setGeoJsonPath.js';


// ==============================
// SOURCES
// ==============================
export const sourceRoute = setGeoJsonPath('maps/map-as-a-service/datenspaziergang/klimaschutz-im-verkehr', 'route');
export const sourceStations = setGeoJsonPath('maps/map-as-a-service/datenspaziergang/klimaschutz-im-verkehr', 'stations');
export const sourceAbstellverbotszonen = setGeoJsonPath('maps/map-as-a-service/datenspaziergang/klimaschutz-im-verkehr', 'abstellverbotszonen');
export const sourceAbstellflaechen = setGeoJsonPath('maps/map-as-a-service/datenspaziergang/klimaschutz-im-verkehr', 'abstellflaechen');


// ==============================
// LAYERS
// ==============================
export const layersRoute = [
    {
        id: 'route',
        type: 'line',
        source: 'sourceRoute',
        color: 'black',
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
        source: 'sourceStations',
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

