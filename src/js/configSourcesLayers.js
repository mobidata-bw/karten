import { iplPath } from '../utils/paths.js';


// ==============================
// SOURCES
// ==============================
export function addSources(map, sourceConfig) {

    const source = {
        type: sourceConfig.source.type || 'vector'
    };

    source.maxzoom = 15;
    source.minzoom = 4;

    if (source.type == 'vector') {
        if (sourceConfig.source.url) {
            source.url = sourceConfig.source.url;
        } else {
            source.tiles =
                [
                    'https://' + (sourceConfig.source.server == 'test' ? 'test-ipl' : (sourceConfig.source.server == 'dev' ? 'dev-ipl' : iplPath)) + '.mobidata-bw.de/geoserver/gwc/service/wmts/rest/' + sourceConfig.source.layer + '/' +
                    sourceConfig.source.style + '/WebMercatorQuadx2/{z}/{y}/{x}?format=application/vnd.mapbox-vector-tile'
                ]
        };
        if (source.bounds) source.bounds = sourceConfig.source.bounds;
    }
    else if (source.type == 'raster') {
        const cql = sourceConfig.source.cql ? 'cql_filter=' + encodeURIComponent(sourceConfig.source.cql) : '';
        source.tiles =
            [
                'https://' + iplPath + '.mobidata-bw.de/geoserver/ows?SERVICE=WMS&' +
                'REQUEST=GetMap&' +
                'VERSION=1.3.0&' +
                'LAYERS=' + sourceConfig.source.layer + '&' +
                'FORMAT=image/png&' +
                'TRANSPARENT=true&' +
                'CRS=EPSG:3857&' +
                'WIDTH=512&' +
                'HEIGHT=512&' +
                cql + '&' +
                'BBOX={bbox-epsg-3857}'
            ],
            source.tileSize = 512,
            source.maxzoom = 24
    }
    else if (source.type == 'geojson') {
        source.data = sourceConfig.source.data

        if (source.buffer) source.buffer = sourceConfig.source.buffer;
        if (source.tolerance) source.tolerance = sourceConfig.source.tolerance;
    };

    map.addSource(sourceConfig.id, source);

};


// ==============================
// LAYERS
// ==============================
export function addLayers(map, layerConfig) {

    const paint = {
        circle: {
            'circle-radius': layerConfig.circleRadius || 5,
            'circle-color': layerConfig.color,
            'circle-opacity': layerConfig.circleOpacity || 0.8,
            'circle-stroke-color': layerConfig.circleStrokeColor || 'black',
            'circle-stroke-width': layerConfig.circleStrokeWidth || 0.5
        },
        line: {
            'line-color': layerConfig.color,
            'line-width': layerConfig.lineWidth || 1.5,
            'line-opacity': layerConfig.lineOpacity || 1
        },
        fill: {
            'fill-color': layerConfig.color,
            'fill-opacity': layerConfig.fillOpacity || 0.9,
            'fill-outline-color': layerConfig.fillOutlineColor || 'black'
        },
        ['fill-extrusion']: {
            'fill-extrusion-color': '#4a90e2',
            'fill-extrusion-height': [
                'interpolate', ['linear'], ['zoom'],
                10, 100,
                14, 20
            ],
            'fill-extrusion-opacity': 0.8
        },
        raster: {
            'raster-resampling': 'nearest'
        }
    };
    // remove transparency if yellow or white
    if (layerConfig.color == '#fffb05' || layerConfig.color == 'white') {
        paint.circle['circle-opacity'] = 1
    } else {
        paint.circle['circle-opacity'] = 0.8
    };
    // change stroke color if black
    if (layerConfig.color == 'black') paint.circle['circle-stroke-color'] = 'white'

    const layer = {
        'id': layerConfig.id,
        'type': layerConfig.type || 'circle',
        'source': layerConfig.source,
        'source-layer': layerConfig.sourceLayer || '',
        'layout': {
            'visibility': layerConfig.visibility || 'visible'
        },
        'paint': paint[layerConfig.type || 'circle']
    };

    if (layerConfig.filter) layer.filter = layerConfig.filter;
    if (layerConfig.fillSortKey) layer.layout['fill-sort-key'] = layerConfig.fillSortKey;
    if (layerConfig.lineJoin) layer.layout['line-join'] = layerConfig.lineJoin;
    if (layerConfig.lineCap) layer.layout['line-cap'] = layerConfig.lineCap;

    map.addLayer(layer);

};