import maplibregl from 'maplibre-gl';


// ==============================
// MAP
// ==============================
export const map = new maplibregl.Map({
    container: 'map',
    center: [8.940, 48.599],
    style: 'https://tiles.mobidata-bw.de/styles/streets/style.json',
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