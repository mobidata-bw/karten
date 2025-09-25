import { setGeoJsonPath } from '../../../../src/js/setGeoJsonPath.js';


// ==============================
// SOURCES
// ==============================
export const sourceMobilstationen = setGeoJsonPath('maps/auswertungen/mobilstationen', 'Mobilstationen');
export const sourceOEV = setGeoJsonPath('maps/auswertungen/mobilstationen', 'OEV');
export const sourceScooter = setGeoJsonPath('maps/auswertungen/mobilstationen', 'Scooter');
export const sourceFahrrad = setGeoJsonPath('maps/auswertungen/mobilstationen', 'Fahrrad');
export const sourceMIV = setGeoJsonPath('maps/auswertungen/mobilstationen', 'MIV');


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
        color: '#fbe870',
        ...mobilitaetsAngebote,
        ...ohneMS      
    }
];