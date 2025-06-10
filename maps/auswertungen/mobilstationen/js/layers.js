// ==============================
// SOURCES
// ==============================
export const sourceMobilstationen = {
    type: 'geojson',
    data: 'https://www.mobidata-bw.de/karten_geojsons/maps/auswertungen/mobilstationen/Mobilstationen.geojson'
};
export const sourceOEV = {
    type: 'geojson',
    data: 'https://www.mobidata-bw.de/karten_geojsons/maps/auswertungen/mobilstationen/OEV.geojson'
};
export const sourceScooter = {
    type: 'geojson',
    data: {
        type: 'FeatureCollection',
        features: []
    }
};
export const sourceFahrrad = {
    type: 'geojson',
    data: {
        type: 'FeatureCollection',
        features: []
    }
};
export const sourceMIV = {
    type: 'geojson',
    data: {
        type: 'FeatureCollection',
        features: []
    }
};


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
        ...ohneMS,
        url: 'https://www.mobidata-bw.de/karten_geojsons/maps/auswertungen/mobilstationen/Scooter.geojson'
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
        ...ohneMS,
        url: 'https://www.mobidata-bw.de/karten_geojsons/maps/auswertungen/mobilstationen/Fahrrad.geojson'
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
        ...ohneMS,
        url: 'https://www.mobidata-bw.de/karten_geojsons/maps/auswertungen/mobilstationen/MIV.geojson'
    }
];