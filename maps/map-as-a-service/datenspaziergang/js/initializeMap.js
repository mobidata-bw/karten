import maplibregl from 'maplibre-gl';


export const map = new maplibregl.Map({
    container: 'map',
    center: [9.1798, 48.7759],
    zoom: window.innerWidth < 577 ? 12.5 : 14.5,
    minZoom: 6,
    // maxBounds: [[9.378527, 47.614124], [9.560952, 47.737803]],
    attributionControl: false
});

export const shape = {
    'type': 'geojson',
    data: '/karten_geojsons/maps/map-as-a-service/datenspaziergang/shapesStuttgart.geojson'
};