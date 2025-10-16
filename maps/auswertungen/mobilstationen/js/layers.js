import { setFilePath } from '../../../../src/js/setFilePath.js';


// ==============================
// SOURCES
// ==============================
export const sourceMobilstationen = setFilePath({ format: 'mbtiles', file: 'mobilstationen' });
export const sourceOEV = setFilePath({ format: 'mbtiles', file: 'oev' });
export const sourceScooter = setFilePath({ format: 'mbtiles', file: 'scooter' });
export const sourceFahrrad = setFilePath({ format: 'mbtiles', file: 'fahrrad' });
export const sourceMIV = setFilePath({ format: 'mbtiles', file: 'miv' });


// ==============================
// LAYERS
// ==============================
const mobilitaetsAngebote = {
    visibility: 'none'
};
const ohneMS = {
    circleStrokeWidth:
        [
            'case',
            ['in', 'anMS', ['get', 'layer']], 1.5,
            0.5
        ]
};

export const layersMobilstationen = [
    {
        id: 'mobilstationen',
        group: 'Mobilstationen',
        label: 'Standorte',
        source: 'sourceMobilstationen',
        sourceLayer: 'mobilstationen',
        type: 'fill',
        color: '#9b9c96',
        fillOpacity: 0.5
    }
];

export const layersOEV = [
    {
        id: 'sonderformen',
        group: 'Öffentlicher Verkehr',
        label: 'Fähranleger',
        source: 'sourceOEV',
        sourceLayer: 'oev',
        color: 'orange',
        filter:
            [
                'any',
                ['>=', ['index-of', 'Sonderformen', ['get', 'layer']], 0]
            ],
        ...mobilitaetsAngebote,
        ...ohneMS
    },
    {
        id: 'bus',
        group: 'Öffentlicher Verkehr',
        label: 'Bushaltestelle',
        source: 'sourceOEV',
        sourceLayer: 'oev',
        color: '#a5027d',
        filter:
            [
                'any',
                ['>=', ['index-of', 'Bus', ['get', 'layer']], 0]
            ],
        ...mobilitaetsAngebote,
        ...ohneMS
    },
    {
        id: 'subahn',
        group: 'Öffentlicher Verkehr',
        label: 'Straßen- oder U-Bahn-Haltestelle',
        source: 'sourceOEV',
        sourceLayer: 'oev',
        color: '#008d4f',
        filter:
            [
                'any',
                ['>=', ['index-of', 'SUBahn', ['get', 'layer']], 0]
            ],
        ...mobilitaetsAngebote,
        ...ohneMS
    },
    {
        id: 'spnv',
        group: 'Öffentlicher Verkehr',
        label: 'Bahnhof',
        source: 'sourceOEV',
        sourceLayer: 'oev',
        color: '#f01414',
        filter:
            [
                'any',
                ['>=', ['index-of', 'SPNV', ['get', 'layer']], 0]
            ],
        ...mobilitaetsAngebote,
        ...ohneMS
    }
];

export const layersScooter = [
    {
        id: 'scooter',
        group: 'Weitere Angebote',
        label: 'Scooter',
        source: 'sourceScooter',
        sourceLayer: 'scooter',
        color: '#5353ec',
        ...mobilitaetsAngebote,
        ...ohneMS
    }
];

export const layersFahrrad = [
    {
        id: 'fahrrad',
        group: 'Weitere Angebote',
        label: 'Fahrrad',
        source: 'sourceFahrrad',
        sourceLayer: 'fahrrad',
        color: '#b9d8ae',
        ...mobilitaetsAngebote,
        ...ohneMS
    }
];

export const layersMIV = [
    {
        id: 'miv',
        group: 'Weitere Angebote',
        label: 'MIV',
        source: 'sourceMIV',
        sourceLayer: 'miv',
        color: '#fbe870',
        ...mobilitaetsAngebote,
        ...ohneMS
    }
];