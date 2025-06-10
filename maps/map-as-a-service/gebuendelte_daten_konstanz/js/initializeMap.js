export const shapeKonstanz = {
    'type': 'geojson',
    data: 'https://www.mobidata-bw.de/karten_geojsons/maps/map-as-a-service/gebuendelte_daten_konstanz/shapesKonstanz.geojson'
};

export const fillShapeKonstanz = {
    'id': 'fillShapeKonstanz',
    'type': 'fill',
    'source': 'shapeKonstanz',
    'paint': {
        'fill-color': 'black',
        'fill-opacity': 0.1,
    }
};

export const lineShapeKonstanz = {
    'id': 'lineShapeKonstanz',
    'type': 'line',
    'source': 'shapeKonstanz',
    'paint': {
        'line-color': 'black',
        'line-width': 2
    }
};