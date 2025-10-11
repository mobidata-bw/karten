import { setFilePath } from '../../../../src/js/setFilePath.js';


// ==============================
// SOURCES
// ==============================
export const sourceOepnvGueteklassen = setFilePath('pmtiles', 'maps/auswertungen/oepnv_gueteklassen', 'oepnv_gueteklassen');


// ==============================
// LAYERS
// ==============================
const oepnvGueteklassen = {
    group: 'ÖPNV-Güteklassen',
    type: 'fill',
    source: 'sourceOepnvGueteklassen',
    sourceLayer: 'oepnvGueteklassen',
    // fillSortKey: [
    //     'index-of',
    //     ['get', 'quality_gr'],
    //     ['literal', ['J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A']]
    // ],
    // color: [
    //     'match',
    //     ['get', 'quality_gr'],
    //     'A', '#ab1417',
    //     'B', '#e75739',
    //     'C', '#fdae61',
    //     'D', '#fed266',
    //     'E', '#efef63',
    //     'F', '#aedc5e',
    //     'G', '#5fba4f',
    //     'H', '#5c9c7e',
    //     'I', '#5a84e5',
    //     'J', '#4b44f3',
    //     '#cacaca'
    // ],
    fillOpacity: 0.9,
    fillOutlineColor: 'transparent'
};

export const layersOepnvGueteklassen = [
      {
        id: 'oepnvGueteklassen_J',
        label: 'J',
        filter: [
            '==', ['get', 'quality_gr'], 'J'
        ],
        color: '#4b44f3',
        ...oepnvGueteklassen
    },
    {
        id: 'oepnvGueteklassen_I',
        label: 'I',
        filter: [
            '==', ['get', 'quality_gr'], 'I'
        ],
        color: '#5a84e5',
        ...oepnvGueteklassen
    },
    {
        id: 'oepnvGueteklassen_H',
        label: 'H',
        filter: [
            '==', ['get', 'quality_gr'], 'H'
        ],
        color: '#5c9c7e',
        ...oepnvGueteklassen
    },
    {
        id: 'oepnvGueteklassen_G',
        label: 'G',
        filter: [
            '==', ['get', 'quality_gr'], 'G'
        ],
        color: '#5fba4f',
        ...oepnvGueteklassen
    },
    {
        id: 'oepnvGueteklassen_F',
        label: 'F',
        filter: [
            '==', ['get', 'quality_gr'], 'F'
        ],
        color: '#aedc5e',
        ...oepnvGueteklassen
    },
    {
        id: 'oepnvGueteklassen_E',
        label: 'E',
        filter: [
            '==', ['get', 'quality_gr'], 'E'
        ],
        color: '#efef63',
        ...oepnvGueteklassen
    },
    {
        id: 'oepnvGueteklassen_D',
        label: 'D',
        filter: [
            '==', ['get', 'quality_gr'], 'D'
        ],
        color: '#fed266',
        ...oepnvGueteklassen
    },
    {
        id: 'oepnvGueteklassen_C',
        label: 'C',
        filter: [
            '==', ['get', 'quality_gr'], 'C'
        ],
        color: '#fdae61',
        ...oepnvGueteklassen
    },
    {
        id: 'oepnvGueteklassen_B',
        label: 'B',
        filter: [
            '==', ['get', 'quality_gr'], 'B'
        ],
        color: '#e75739',
        ...oepnvGueteklassen
    },
    {
        id: 'oepnvGueteklassen_A',
        label: 'A',
        filter: [
            '==', ['get', 'quality_gr'], 'A'
        ],
        color: '#ab1417',
        ...oepnvGueteklassen
    }
];