import { setFilePath } from '../../../../src/js/setFilePath.js';


export const shapeRegierungsbezirke = setFilePath('pmtiles', 'maps/auswertungen/oepnv_gueteklassen', 'regierungsbezirke');

export const lineShapeRegierungsbezirke = {
    'id': 'lineShapeRegierungsbezirke',
    'type': 'line',
    'source': 'shapeRegierungsbezirke',
    'source-layer': 'regierungsbezirke',
    'paint': {
        'line-color': 'black',
        'line-width': 1
    },
    'layout': {
        'visibility': 'visible'
    }
};