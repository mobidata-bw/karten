import { setFilePath } from '../../../../../src/js/setFilePath.js';


// ==============================
// SOURCES
// ==============================
export const sourceRoute = setFilePath({ format: 'geojson', directory: 'maps/map-as-a-service/datenspaziergang/klimaschutz-im-verkehr', file: 'route' });
export const sourceStations = setFilePath({ format: 'geojson', directory: 'maps/map-as-a-service/datenspaziergang/klimaschutz-im-verkehr', file: 'stations' });
export const sourceAbstellverbotszonen = setFilePath({ format: 'geojson', directory: 'maps/map-as-a-service/datenspaziergang/klimaschutz-im-verkehr', file: 'abstellverbotszonen' });
export const sourceAbstellflaechen = setFilePath({ format: 'geojson', directory: 'maps/map-as-a-service/datenspaziergang/klimaschutz-im-verkehr', file: 'abstellflaechen' });


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

