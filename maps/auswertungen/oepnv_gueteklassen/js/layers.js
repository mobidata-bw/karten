import { setGeoJsonPath } from '../../../../src/js/setGeoJsonPath.js';


// ==============================
// SOURCES
// ==============================
export const sourceOepnvGueteklassenStuttgart = setGeoJsonPath('maps/auswertungen/oepnv_gueteklassen', 'oepnv_gueteklassen_stuttgart');
export const sourceOepnvGueteklassenKarlsruhe = {
    type: 'geojson',
    data: {
        type: 'FeatureCollection',
        features: []
    }
};
export const sourceOepnvGueteklassenFreiburg = {
    type: 'geojson',
    data: {
        type: 'FeatureCollection',
        features: []
    }

};
export const sourceOepnvGueteklassenTuebingen = {
    type: 'geojson',
    data: {
        type: 'FeatureCollection',
        features: []
    }
};


// ==============================
// LAYERS
// ==============================
const oepnvGueteklassen = {
    group: 'ÖPNV-Güteklassen',
    subGroup: 'Regierungsbezirke',
    exclusiveWithinGroup: true,
    type: 'fill',
    fillSortKey: [
        'index-of',
        ['get', 'qg'],
        ['literal', ['J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A']]
    ],
    color: [
        'match',
        ['get', 'qg'],
        'A', '#ab1417',
        'B', '#e75739',
        'C', '#fdae61',
        'D', '#fed266',
        'E', '#efef63',
        'F', '#aedc5e',
        'G', '#5fba4f',
        'H', '#5c9c7e',
        'I', '#5a84e5',
        'J', '#4b44f3',
        '#cacaca'
    ],
    fillOpacity: 0.9,
    fillOutlineColor: 'transparent'
};

export const layersOepnvGueteklassen = [
    {
        id: 'oepnvGueteklassenTuebingen',
        label: 'Tübingen',
        source: 'sourceOepnvGueteklassenTuebingen',
        visibility: 'none',
        legendColor: 'none',
        ...oepnvGueteklassen,
        url: setGeoJsonPath('maps/auswertungen/oepnv_gueteklassen', 'oepnv_gueteklassen_tuebingen').data
    },
    {
        id: 'oepnvGueteklassenFreiburg',
        label: 'Freiburg',
        source: 'sourceOepnvGueteklassenFreiburg',
        visibility: 'none',
        legendColor: 'none',
        ...oepnvGueteklassen,
        url: setGeoJsonPath('maps/auswertungen/oepnv_gueteklassen', 'oepnv_gueteklassen_freiburg').data
    },
    {
        id: 'oepnvGueteklassenKarlsruhe',
        label: 'Karlsruhe',
        source: 'sourceOepnvGueteklassenKarlsruhe',
        visibility: 'none',
        legendColor: 'none',
        ...oepnvGueteklassen,
        url: setGeoJsonPath('maps/auswertungen/oepnv_gueteklassen', 'oepnv_gueteklassen_karlsruhe').data
    },
    {
        id: 'oepnvGueteklassenStuttgart',
        label: 'Stuttgart',
        source: 'sourceOepnvGueteklassenStuttgart',
        legendColor: 'none',
        ...oepnvGueteklassen
    }
];