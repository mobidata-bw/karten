// ==============================
// SOURCES
// ==============================
export const sourceRoute = {
    type: 'geojson',
    data: '/karten_geojsons/maps/map-as-a-service/datenspaziergang/route.geojson'
    // data: 'data/route.geojson'  
};

export const sourceStations = {
    type: 'geojson',
    data: '/karten_geojsons/maps/map-as-a-service/datenspaziergang/stations.geojson'
    // data: 'data/stations.geojson'  
};

export const sourceAbstellzonen = {
    type: 'geojson',
    data: '/karten_geojsons/maps/map-as-a-service/datenspaziergang/abstellzonen.geojson'
    // data: 'data/abstellzonen.geojson'
};


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

