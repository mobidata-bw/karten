import { setFilePath } from '../../../../src/js/setFilePath.js';


export const shapeTransitAssociations = setFilePath({ format: 'mbtiles', file: 'verkehrsverbuende' });
export const centroidsTransitAssocications = setFilePath({ format: 'geojson', directory: 'maps/ipl/gtfs_subgrids', file: 'verkehrsverbuende_zentroide' });

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

export const transitAssociationsSigns = {
    'id': 'transitAssociationsSigns',
    'type': 'symbol',
    'source': 'centroidsTransitAssocications',
    'paint': {
        'text-color': '#111',
        'text-halo-color': '#fff',
        'text-halo-width': 1.5
    },
    'layout': {
        'visibility': 'visible',
        'text-field': ['get', 'Verbundkürzel'],
        'text-size': 15,
        'text-font': ['literal', ['Open Sans Bold', 'Open Sans Regular']],
        'text-anchor': 'center',
        'text-offset': [0, 0],
        'text-allow-overlap': false
    }
};