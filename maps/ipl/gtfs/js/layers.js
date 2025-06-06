// ==============================
// SOURCES
// ==============================
export const sourceTransitStops = {
    layer: 'MobiData-BW:transit_stops',
    style: 'MobiData-BW:mdbw_transit_stops_default',
    bounds: [-9.1, 38.7, 30.5, 56.9],
    // server: 'test'
};

export const sourceTransitStations = {
    layer: 'MobiData-BW:transit_stations_with_served_routes',
    style: 'MobiData-BW:mdbw_transit_stations_default',
    bounds: [-9.1, 38.7, 30.5, 56.9],
    // server: 'test'
};

// TRANSIT SHAPES
const sourcesTransitShapes = {
    type: 'raster',
    layer: 'MobiData-BW:transit_shapes_with_routes',
    // server: 'test'
};

export const sourceTransitShapes = [
    {
        id: 'sourceTransitShapes_Bus',
        cql: "route_type = '3'",
        ...sourcesTransitShapes
    },
    {
        id: 'sourceTransitShapes_Regionalverkehr',
        cql: "route_type = '2'",
        ...sourcesTransitShapes
    },
    {
        id: 'sourceTransitShapes_StrassenStadtBahn',
        cql: "route_type = '0'",
        ...sourcesTransitShapes
    },
    {
        id: 'sourceTransitShapes_UBahn',
        cql: "route_type = '1'",
        ...sourcesTransitShapes
    },
    {
        id: 'sourceTransitShapes_Faehre',
        cql: "route_type = '4'",
        ...sourcesTransitShapes
    },
    {
        id: 'sourceTransitShapes_Seilbahn',
        cql: "route_type = '7'",
        ...sourcesTransitShapes
    }
];


// ==============================
// LAYERS
// ==============================
const transitStops = {
    source: 'sourceTransitStops',
    sourceLayer: 'transit_stops',
    group: 'Haltesteige',
    circleRadius: [
        "interpolate", ["linear"], ["zoom"],
        6, 4,
        12, 5
    ]
};

const transitStations = {
    source: 'sourceTransitStations',
    sourceLayer: 'transit_stations_with_served_routes',
    group: 'Bahnhöfe und Haltestellen',
    circleRadius: [
        "interpolate", ["linear"], ["zoom"],
        6, 4,
        12, 5
    ],
    visibility: 'none'
};

const transitShapes = {
    type: 'raster',
    group: 'ÖPNV-Linien',
    layer: 'MobiData-BW:transit_shapes_with_routes',
    style: 'mdbw_transit_routes_default',
    visibility: 'none'
};


export const layersTransitStops = [
    {
        id: 'transitStops_Haltestelle',
        label: 'Haltestelle',
        filter:
            [
                'any',
                ['==', ['get', 'location_type'], 'stop'],
                ['==', ['get', 'location_type'], null]
            ],
        color: '#f1c40f',
        ...transitStops
    },
    {
        id: 'transitStops_Bahnhof',
        label: 'Bahnhof',
        ...transitStops,
        filter:
            [
                '==', ['get', 'location_type'], 'station'
            ],
        color: '#27ae60'
    },
];

export const layersTransitStations = [
    {
        id: 'transitStations_Bushaltestelle',
        label: 'Bushaltestelle',
        filter:
            [
                '==', ['get', 'prio_route_type'], 3
            ],
        color: '#d9c022',
        ...transitStations,
    },
    {
        id: 'transitStations_Bahnhof',
        label: 'Bahnhof',
        filter:
            [
                '==', ['get', 'prio_route_type'], 2
            ],
        color: '#e4010b',
        ...transitStations
    },
    {
        id: 'transitStations_StrassenUBahnHaltestelle',
        label: 'Straßen-/U-Bahn-Haltestelle',
        filter:
            [
                '==', ['get', 'prio_route_type'], 0
            ],
        color: '#0065b0',
        ...transitStations
    },
    {
        id: 'transitStations_Faehranleger',
        label: 'Fähranleger',
        filter:
            [
                '==', ['get', 'prio_route_type'], 4
            ],
        color: '#FF7F24',
        ...transitStations
    }
];

export const layersTransitShapes = [
    {
        id: 'transitShapes_Bus',
        label: 'Bus',
        source: sourceTransitShapes[0].id,
        cql: sourceTransitShapes[0].cql,
        color: '#a7007e',
        ...transitShapes
    },
    {
        id: 'transitShapes_Regionalverkehr',
        label: 'Regionalverkehr',
        source: sourceTransitShapes[1].id,
        cql: sourceTransitShapes[1].cql,
        color: '#666666',
        ...transitShapes
    },
    {
        id: 'transitShapes_StrassenStadtBahn',
        label: 'Straßen- und Stadtbahn',
        source: sourceTransitShapes[2].id,
        cql: sourceTransitShapes[2].cql,
        color: '#0065B0',
        ...transitShapes
    },
    {
        id: 'transitShapes_UBahn',
        label: 'U-Bahn',
        source: sourceTransitShapes[3].id,
        cql: sourceTransitShapes[3].cql,
        color: '#0065B0',
        ...transitShapes
    },
    {
        id: 'transitShapes_Faehre',
        label: 'Fähre',
        source: sourceTransitShapes[4].id,
        cql: sourceTransitShapes[4].cql,
        color: '#FF7F24',
        ...transitShapes
    },
    {
        id: 'transitShapes_Seilbahn',
        label: 'Seilbahn',
        source: sourceTransitShapes[5].id,
        cql: sourceTransitShapes[5].cql,
        color: '#FF0000',
        ...transitShapes
    }
];