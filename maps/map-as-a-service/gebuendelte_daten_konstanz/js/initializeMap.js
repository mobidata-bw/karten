import { setFilePath } from '../../../../src/js/setFilePath.js';


export const shapeKonstanz = setFilePath({ format: 'geojson', directory: 'shapes', file: 'shapeKonstanz' });

export const fillShapeKonstanz = {
    'id': 'fillShapeKonstanz',
    'type': 'fill',
    'source': 'shapeKonstanz',
    'paint': {
        'fill-color': 'black',
        'fill-opacity': 0.1,
    },
    'layout': {
        'visibility': 'visible'
    }
};

export const lineShapeKonstanz = {
    'id': 'lineShapeKonstanz',
    'type': 'line',
    'source': 'shapeKonstanz',
    'paint': {
        'line-color': 'black',
        'line-width': 2
    },
    'layout': {
        'visibility': 'visible'
    }
};