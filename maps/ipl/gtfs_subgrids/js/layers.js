// ==============================
// SOURCES
// ==============================
export const sourceTransitShapes = {
    layer: 'MobiData-BW:transit_shapes_with_routes',
    style: 'MobiData-BW:mdbw_transit_routes_default',
    bounds: [4.3, 45.8, 15.4, 53.8]
};


// ==============================
// LAYERS
// ==============================
export const transitShapes = {
    type: 'line',
    source: 'sourceTransitShapes',
    sourceLayer: 'transit_shapes_with_routes',
    lineWidth:
        [
            'interpolate', ['linear'], ['zoom'],
            6, 1,
            12, 2
        ],
    color: [
        'match',
        ['get', 'route_type'],
        '0', '#0065B0',
        '2', '#666666',
        '3', '#A7007E',
        '4', '#FF7F24',
        '7', '#FF0000',
        '#cacaca'
    ],
    exclusiveWithinGroup: true,
    visibility: 'none'
};