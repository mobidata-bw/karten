import 'maplibre-gl/dist/maplibre-gl.css';
import maplibregl from 'maplibre-gl';


// ==============================
// MAP
// ==============================
export const map = new maplibregl.Map({
    container: 'map',
    center: [8.940, 48.599],
    zoom: 12,
    minZoom: 10,
    // maxBounds: [[9.378527, 47.614124], [9.560952, 47.737803]],
    attributionControl: false,
});


// ==============================
// SOURCES AND LAYERS
// ==============================
export const shape = {
    'type': 'geojson',
    'data': 'data/shapesHerrenberg.geojson'
};

export const fillShape = {
    'id': 'fillShape',
    'type': 'fill',
    'source': 'shape',
    'paint': {
        'fill-color': 'black',
        'fill-opacity': 0.1,
    }
};

export const lineShape = {
    'id': 'lineShape',
    'type': 'line',
    'source': 'shape',
    'paint': {
        'line-color': 'black',
        'line-width': 2
    }
};