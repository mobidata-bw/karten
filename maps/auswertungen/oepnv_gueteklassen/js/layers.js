import { setFilePath } from '../../../../src/js/setFilePath.js';


// ==============================
// SOURCES
// ==============================
export const sourceOepnvGueteklassen = setFilePath({ format: 'mbtiles', file: 'oepnv_gueteklassen' });


// ==============================
// LAYERS
// ==============================
const oepnvGueteklassen = {
    group: 'ÖPNV-Güteklassen',
    type: 'fill',
    source: 'sourceOepnvGueteklassen',
    sourceLayer: 'oepnvGueteklassen',
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
        fillSortKey: 0,
        ...oepnvGueteklassen
    },
    {
        id: 'oepnvGueteklassen_I',
        label: 'I',
        filter: [
            '==', ['get', 'quality_gr'], 'I'
        ],
        color: '#5a84e5',
        fillSortKey: 1,
        ...oepnvGueteklassen
    },
    {
        id: 'oepnvGueteklassen_H',
        label: 'H',
        filter: [
            '==', ['get', 'quality_gr'], 'H'
        ],
        color: '#5c9c7e',
        fillSortKey: 2,
        ...oepnvGueteklassen
    },
    {
        id: 'oepnvGueteklassen_G',
        label: 'G',
        filter: [
            '==', ['get', 'quality_gr'], 'G'
        ],
        color: '#5fba4f',
        fillSortKey: 3,
        ...oepnvGueteklassen
    },
    {
        id: 'oepnvGueteklassen_F',
        label: 'F',
        filter: [
            '==', ['get', 'quality_gr'], 'F'
        ],
        color: '#aedc5e',
        fillSortKey: 4,
        ...oepnvGueteklassen
    },
    {
        id: 'oepnvGueteklassen_E',
        label: 'E',
        filter: [
            '==', ['get', 'quality_gr'], 'E'
        ],
        color: '#efef63',
        fillSortKey: 5,
        ...oepnvGueteklassen
    },
    {
        id: 'oepnvGueteklassen_D',
        label: 'D',
        filter: [
            '==', ['get', 'quality_gr'], 'D'
        ],
        color: '#fed266',
        fillSortKey: 6,
        ...oepnvGueteklassen
    },
    {
        id: 'oepnvGueteklassen_C',
        label: 'C',
        filter: [
            '==', ['get', 'quality_gr'], 'C'
        ],
        color: '#fdae61',
        fillSortKey: 7,
        ...oepnvGueteklassen
    },
    {
        id: 'oepnvGueteklassen_B',
        label: 'B',
        filter: [
            '==', ['get', 'quality_gr'], 'B'
        ],
        color: '#e75739',
        fillSortKey: 8,
        ...oepnvGueteklassen
    },
    {
        id: 'oepnvGueteklassen_A',
        label: 'A',
        filter: [
            '==', ['get', 'quality_gr'], 'A'
        ],
        color: '#ab1417',
        fillSortKey: 9,
        ...oepnvGueteklassen
    }
];