import { setGeoJsonPath } from '../../../../src/js/setGeoJsonPath.js';


export const shapeRegierungsbezirke = setGeoJsonPath('maps/auswertungen/oepnv_gueteklassen', 'regierungsbezirke');

export const lineShapeRegierungsbezirke = {
    'id': 'lineShapeRegierungsbezirke',
    'type': 'line',
    'source': 'shapeRegierungsbezirke',
    'paint': {
        'line-color': 'black',
        'line-width': 1
    }
};