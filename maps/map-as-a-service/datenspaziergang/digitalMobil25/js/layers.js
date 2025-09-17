// ==============================
// SOURCES
// ==============================
export const sourceRoute = {
    type: 'geojson',
    // data: '/karten_geojsons/maps/map-as-a-service/datenspaziergang/route.geojson'
    data: 'data/map.geojson'  
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