// ==============================
// SOURCES
// ==============================
export const sourceOepnvGueteklassenStuttgart = {
    type: 'geojson',
    data: 'https://www.mobidata-bw.de/karten_geojsons/maps/auswertungen/oepnv_gueteklassen/oepnv_gueteklassen_stuttgart.geojson',
};
export const sourceOepnvGueteklassenKarlsruhe = {
    type: 'geojson',
    data: 'https://www.mobidata-bw.de/karten_geojsons/maps/auswertungen/oepnv_gueteklassen/oepnv_gueteklassen_karlsruhe.geojson',
};
export const sourceOepnvGueteklassenFreiburg = {
    type: 'geojson',
    data: 'https://www.mobidata-bw.de/karten_geojsons/maps/auswertungen/oepnv_gueteklassen/oepnv_gueteklassen_freiburg.geojson',
};
export const sourceOepnvGueteklassenTuebingen = {
    type: 'geojson',
    data: 'https://www.mobidata-bw.de/karten_geojsons/maps/auswertungen/oepnv_gueteklassen/oepnv_gueteklassen_tuebingen.geojson',
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
        ['get', 'quality_gr'],
        ['literal', ['J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A']]
    ],
    color: [
        'match',
        ['get', 'quality_gr'],
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
    fillOpacity: 1,
    fillOutlineColor: 'transparent'
};


export const layersOepnvGueteklassen = [
    {
        id: 'oepnvGueteklassenTuebingen',
        label: 'Tübingen',
        source: 'sourceOepnvGueteklassenTuebingen',
        visibility: 'none',
        legendColor: 'none',
        ...oepnvGueteklassen
    },
    {
        id: 'oepnvGueteklassenFreiburg',
        label: 'Freiburg',
        source: 'sourceOepnvGueteklassenFreiburg',
        visibility: 'none',
        legendColor: 'none',
        ...oepnvGueteklassen
    },
    {
        id: 'oepnvGueteklassenKarlsruhe',
        label: 'Karlsruhe',
        source: 'sourceOepnvGueteklassenKarlsruhe',
        visibility: 'none',
        legendColor: 'none',
        ...oepnvGueteklassen
    },
    {
        id: 'oepnvGueteklassenStuttgart',
        label: 'Stuttgart',
        source: 'sourceOepnvGueteklassenStuttgart',
        legendColor: 'none',
        ...oepnvGueteklassen
    }
];