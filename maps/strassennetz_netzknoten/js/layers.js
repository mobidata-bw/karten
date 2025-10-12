import { setFilePath } from '../../../src/js/setFilePath.js';


// ==============================
// SOURCES
// ==============================
export const sourceStrassennetz = setFilePath('pmtiles', 'maps/strassennetz_netzknoten', 'BLK_Strassennetz_250130');
export const sourceNetzknoten = setFilePath('pmtiles', 'maps/strassennetz_netzknoten', 'BLK_Netzknoten_250130');


// ==============================
// LAYERS
// ==============================
const strassennetz = {
    source: 'sourceStrassennetz',
    sourceLayer: 'strassennetz',
    type: 'line',
    group: 'Straßennetz',
    lineWidth:
        [
            "interpolate", ["linear"], ["zoom"],
            6, 2,
            12, 3
        ]
};

export const layersStrassennetz = [
    {
        id: 'strassennetz_K',
        label: 'Kreisstraße',
        color: '#a88f00',
        filter:
            [
                "==", ["get", "StrassenArt"], "K"
            ],
        ...strassennetz
    },
    {
        id: 'strassennetz_L',
        label: 'Landstraße',
        color: '#00ff00',
        filter:
            [
                "==", ["get", "StrassenArt"], "L"
            ],
        ...strassennetz
    },
    {
        id: 'strassennetz_B',
        label: 'Bundesstraße',
        color: '#0089cd',
        filter:
            [
                "==", ["get", "StrassenArt"], "B"
            ],
        ...strassennetz
    }
];

export const layersNetzknoten = [
    {
        id: 'netzknoten',
        label: 'Netzknoten',
        group: 'Netzknoten',
        source: 'sourceNetzknoten',
        sourceLayer: 'netzknoten',
        color: '#e12942',
        visibility: 'none'
    }
];