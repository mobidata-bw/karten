// ==============================
// SOURCES
// ==============================
export const sourceRoute = {
    type: 'geojson',
    data: '/karten_geojsons/maps/map-as-a-service/datenspaziergang/route.geojson' 
};

export const sourceStations = {
    type: 'geojson',
    data: '/karten_geojsons/maps/map-as-a-service/datenspaziergang/stations.geojson'   
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
                "interpolate", ["linear"], ["zoom"],
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