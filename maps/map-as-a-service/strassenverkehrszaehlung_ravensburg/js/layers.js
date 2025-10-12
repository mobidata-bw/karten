import { setFilePath } from '../../../../src/js/setFilePath.js';


// ==============================
// SOURCES
// ==============================
export const sourceCountRavensburg = setFilePath('geojson', 'maps/map-as-a-service/strassenverkehrszaehlung_ravensburg', 'strassenverkehrszaehlung_ravensburg');


// ==============================
// LAYERS
// ==============================
const layers = {
    source: 'sourceCountRavensburg',
    group: 'Straßenverkehrszählung Ravensburg',
};

const filter = [
    "case",
    ["!=", ["get", "KFZ_1"], null],
    [
        "+",
        ["get", "KFZ_1"],
        ["get", "RAD_1"],
        ["get", "FUSSGAENGER_1"],
        ["get", "SV_1"]
    ],
    ["!=", ["get", "KFZ_2"], null],
    [
        "+",
        ["get", "KFZ_2"],
        ["get", "RAD_2"],
        ["get", "FUSSGAENGER_2"],
        ["get", "SV_2"]
    ],
    ["!=", ["get", "KFZ_3"], null],
    [
        "+",
        ["get", "KFZ_3"],
        ["get", "RAD_3"],
        ["get", "FUSSGAENGER_3"],
        ["get", "SV_3"]
    ],
    ["!=", ["get", "KFZ_4"], null],
    [
        "+",
        ["get", "KFZ_4"],
        ["get", "RAD_4"],
        ["get", "FUSSGAENGER_4"],
        ["get", "SV_4"]
    ],
    0
];

export const layersCountRavensburg = [
    {
        id: 'countRavensburg1',
        label: 'bis 1 Tsd.',
        filter:
            [
                "<=", filter, 1000
            ],
        color: '#ffe600',
        ...layers
    },
    {
        id: 'countRavensburg2',
        label: '1 - 5 Tsd.',
        filter:
            [
                'all',
                [">", filter, 1000],
                ["<=", filter, 5000]
            ],
        color: '#f6b500',
        ...layers
    },
    {
        id: 'countRavensburg3',
        label: '5 Tsd. - 15 Tsd.',
        filter:
            [
                'all',
                [">", filter, 5000],
                ["<=", filter, 15000]
            ],
        color: '#e78300',
        ...layers
    },
    {
        id: 'countRavensburg4',
        label: '15 Tsd. - 30 Tsd.',
        filter:
            [
                'all',
                [">", filter, 15000],
                ["<=", filter, 30000]
            ],
        color: '#d25000',
        ...layers
    },
    {
        id: 'countRavensburg5',
        label: 'über 30 Tsd.',
        filter:
            [
                ">", filter, 30000
            ],
        color: '#b70101',
        ...layers
    }
];