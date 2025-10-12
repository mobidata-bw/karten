import { setFilePath } from '../../../../src/js/setFilePath.js';


// ==============================
// SOURCES
// ==============================
export const sourceStations = setFilePath('geojson', 'maps/auswertungen/afzs', 'stations');
export const sourceAfzs = setFilePath('pmtiles', 'maps/auswertungen/afzs', 'afzs');


// ==============================
// LAYERS
// ==============================
const afzs = {
    source: 'sourceAfzs',
    sourceLayer: 'afzs',
    group: 'AFZS',
    type: 'line',
    lineCap: 'round'
};

const attribute = 'Querschnitt';

export const layersAfzs = [
    {
        id: 'afzs1',
        label: 'unter 1.000',
        filter: [
            '<', ['get', attribute], 1000
        ],
        color: '#7692EE',
        lineWidth: 2,
        ...afzs
    },
    {
        id: 'afzs2',
        label: '1.000 - 2.500',
        filter: [
            'all',
            ['>', ['get', attribute], 1000],
            ['<=', ['get', attribute], 2500]
        ],
        color: '#6881DD',
        lineWidth: 3,
        ...afzs
    },
    {
        id: 'afzs3',
        label: '2.500 - 3.750',
        filter: [
            'all',
            ['>', ['get', attribute], 2500],
            ['<=', ['get', attribute], 3750]
        ],
        color: '#5A6FCC',
        lineWidth: 4,
        ...afzs
    },
    {
        id: 'afzs4',
        label: '3.750 - 5.000',
        filter: [
            'all',
            ['>', ['get', attribute], 3750],
            ['<=', ['get', attribute], 5000]
        ],
        color: '#4C5EBB',
        lineWidth: 5,
        ...afzs
    }, {
        id: 'afzs5',
        label: '5.000 - 7.500',
        filter: [
            'all',
            ['>', ['get', attribute], 5000],
            ['<=', ['get', attribute], 7500]
        ],
        color: '#3F4CAB',
        lineWidth: 6,
        ...afzs
    },
    {
        id: 'afzs6',
        label: '7.500 - 10.000',
        filter: [
            'all',
            ['>', ['get', attribute], 7500],
            ['<=', ['get', attribute], 10000]
        ],
        color: '#313B9A',
        lineWidth: 7,
        ...afzs
    },
    {
        id: 'afzs7',
        label: '10.000 - 15.000',
        filter: [
            'all',
            ['>', ['get', attribute], 10000],
            ['<=', ['get', attribute], 15000]
        ],
        color: '#232989',
        lineWidth: 8,
        ...afzs
    },
    {
        id: 'afzs8',
        label: '15.000 - 17.500',
        filter: [
            'all',
            ['>', ['get', attribute], 15000],
            ['<=', ['get', attribute], 17500]
        ],
        color: '#151878',
        lineWidth: 9,
        ...afzs
    },
    {
        id: 'afzs9',
        label: 'über 17.500',
        filter: [
            '>', ['get', attribute], 17500
        ],
        color: '#070667',
        lineWidth: 10,
        ...afzs
    }
];

export const layersStations = [
    {
        id: 'stations',
        group: 'Zentrale Bahnhöfe',
        label: 'Zentrale Bahnhöfe',
        source: 'sourceStations',
        color: 'red',
        circleRadius: 7
    }
];