import { iplPath } from '../../utils/paths.js';


// ==============================
// SOURCES
// ==============================
export function addSources(map, sourceConfig) {

    const source = {
        type: sourceConfig.source.type || 'vector'
    };

    if (source.type == 'vector') {
        source.tiles =
            [
                'https://' + iplPath + '.mobidata-bw.de/geoserver/gwc/service/wmts/rest/' + sourceConfig.source.layer + '/' +
                sourceConfig.source.style + '/WebMercatorQuadx2/{z}/{y}/{x}?format=application/vnd.mapbox-vector-tile'
            ],
            source.minzoom = 4,
            source.maxzoom = 15;

        if (source.bounds) {
            source.bounds = sourceConfig.source.bounds
        }
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

        if (source.buffer) {
            source.buffer = sourceConfig.source.buffer
        };
        if (source.tolerance) {
            source.tolerance = sourceConfig.source.tolerance
        };
      
        // source.cluster = true;             
        // source.clusterMaxZoom = 14;
        // source.clusterRadius = 2
    }

    map.addSource(sourceConfig.id, source);

};


// ==============================
// LAYERS
// ==============================
export function addLayers(map, layerConfig) {

    const paint = {
        circle: {
            'circle-radius': layerConfig.circleRadius || 5, // default: '5'
            'circle-color': layerConfig.color,
            'circle-opacity': layerConfig.circleOpacity || 0.8,
            'circle-stroke-color': layerConfig.circleStrokeColor || 'black',
            'circle-stroke-width': layerConfig.circleStrokeWidth || 0.5
        },
        line: {
            'line-color': layerConfig.color,
            'line-width': layerConfig.lineWidth || 1.5,
            'line-opacity': layerConfig.lineOpacity || 1,
        },
        fill: {
            'fill-color': layerConfig.color,
            'fill-opacity': layerConfig.fillOpacity || 0.9,
            'fill-outline-color': layerConfig.fillOutlineColor || 'black'
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
    if (layerConfig.color == 'black') {
       paint.circle['circle-stroke-color'] = 'white'
    }  

    const layer = {
        'id': layerConfig.id,
        'type': layerConfig.type || 'circle', // default: 'circle'
        'source': layerConfig.source,
        'source-layer': layerConfig.sourceLayer || '', // default: ''
        'layout': {
            'visibility': layerConfig.visibility || 'visible' // default: 'visible'
        },
        'paint': paint[layerConfig.type || 'circle'], // default: 'circle'     
    };

    if (layerConfig.filter) {
        layer.filter = layerConfig.filter
    };
    if (layerConfig.fillSortKey) {
        layer.layout['fill-sort-key'] = layerConfig.fillSortKey
    };

    map.addLayer(layer);

};