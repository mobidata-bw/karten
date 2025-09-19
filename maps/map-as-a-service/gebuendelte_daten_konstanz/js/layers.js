import { setGeoJsonPath } from '../../../../src/js/setGeoJsonPath.js';


// ==============================
// SOURCES
// ==============================
export const sourceKonstanzPls = setGeoJsonPath('maps/map-as-a-service/gebuendelte_daten_konstanz', 'konstanz_pls');
export const sourceKonstanzBehindertenparken = setGeoJsonPath('maps/map-as-a-service/gebuendelte_daten_konstanz', 'konstanz_behindertenparken');


// ==============================
// LAYERS
// ==============================
export const layersKonstanzPls= [
    {
        id: 'konstanzPls',
        label: 'Parkleitsystem',
        subGroup: 'Parken',
        source: 'sourceKonstanzPls',      
        color: '#d85959'
    }   
];

export const layersKonstanzBehindertenparken= [
    {
        id: 'konstanzBehindertenparken',
        label: 'Behindertenparken',
        subGroup: 'Parken',
        source: 'sourceKonstanzBehindertenparken',      
        color: '#325ff2'
    }   
];