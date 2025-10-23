import { setFilePath } from '../../../../src/js/setFilePath.js';


export const shapeTransitAssociations = setFilePath({ format: 'mbtiles', file: 'verkehrsverbuende' });

export const lineShapeTransitAssociations = {
    'id': 'lineShapeTransitAssociations',
    'type': 'line',
    'source': 'shapeTransitAssociations',
    'source-layer': 'verkehrsverbuende',
    'paint': {
        'line-color': 'black',
        'line-width': 2
    },
    'layout': {
        'visibility': 'visible'
    }
};