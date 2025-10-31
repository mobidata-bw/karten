import { setFilePath } from '../../../../src/js/setFilePath.js';


// ==============================
// SOURCES
// ==============================
export const sourceQuerschnittsdaten = setFilePath({ format: 'geojson', directory: 'maps/auswertungen/afzs', file: 'Querschnittsdaten', generateId: true });
export const sourceZentraleBahnhoefe = setFilePath({ format: 'geojson', directory: 'maps/auswertungen/afzs', file: 'zentraleBahnhoefe', generateId: true });


// ==============================
// LAYERS
// ==============================
const querschnittsdaten = {
    source: 'sourceQuerschnittsdaten',
    group: 'AFZS',
    type: 'line',    
    lineCap: 'round'   
};

const attribute = '22.10.2025_Querschnitt_Querschnitt';

export const layersQuerschnittsdaten = [
    {
        id: 'querschnittsdaten9',
        label: 'über 17.500',
        filter: [
            '>', ['get', attribute], 17500
        ],
        color: '#070667',
        lineWidth: 10,
        ...querschnittsdaten
    },
    {
        id: 'querschnittsdaten8',
        label: '15.000 - 17.500',
        filter: [
            'all',
            ['>', ['get', attribute], 15000],
            ['<=', ['get', attribute], 17500]
        ],
        color: '#151878',
        lineWidth: 9,
        ...querschnittsdaten
    },
    {
        id: 'querschnittsdaten7',
        label: '10.000 - 15.000',
        filter: [
            'all',
            ['>', ['get', attribute], 10000],
            ['<=', ['get', attribute], 15000]
        ],
        color: '#232989',
        lineWidth: 8,
        ...querschnittsdaten
    },
    {
        id: 'querschnittsdaten6',
        label: '7.500 - 10.000',
        filter: [
            'all',
            ['>', ['get', attribute], 7500],
            ['<=', ['get', attribute], 10000]
        ],
        color: '#313B9A',
        lineWidth: 7,
        ...querschnittsdaten
    },
    {
        id: 'querschnittsdaten5',
        label: '5.000 - 7.500',
        filter: [
            'all',
            ['>', ['get', attribute], 5000],
            ['<=', ['get', attribute], 7500]
        ],
        color: '#3F4CAB',
        lineWidth: 6,
        ...querschnittsdaten
    },
    {
        id: 'querschnittsdaten4',
        label: '3.750 - 5.000',
        filter: [
            'all',
            ['>', ['get', attribute], 3750],
            ['<=', ['get', attribute], 5000]
        ],
        color: '#4C5EBB',
        lineWidth: 5,
        ...querschnittsdaten
    },
    {
        id: 'querschnittsdaten3',
        label: '2.500 - 3.750',
        filter: [
            'all',
            ['>', ['get', attribute], 2500],
            ['<=', ['get', attribute], 3750]
        ],
        color: '#5A6FCC',
        lineWidth: 4,
        ...querschnittsdaten
    },
    {
        id: 'querschnittsdaten2',
        label: '1.000 - 2.500',
        filter: [
            'all',
            ['>', ['get', attribute], 1000],
            ['<=', ['get', attribute], 2500]
        ],
        color: '#6881DD',
        lineWidth: 3,
        ...querschnittsdaten
    },
    {
        id: 'querschnittsdaten1',
        label: 'unter 1.000',
        filter: [
            '<', ['get', attribute], 1000
        ],
        color: '#7692EE',
        lineWidth: 2,
        ...querschnittsdaten
    },
    {
        id: 'afzs0',
        label: 'Ohne Zählung',
        filter: [
            '==', ['get', attribute], null
        ],
        color: 'black',
        lineWidth: 2,
        ...querschnittsdaten
    }
];


export const layersZentraleBahnhoefe = [
    {
        id: 'zentraleBahnhoefe',
        group: 'Zentrale Bahnhöfe',
        label: 'Zentrale Bahnhöfe',
        source: 'sourceZentraleBahnhoefe',
        color: 'red',
        circleRadius: 7
    }
];