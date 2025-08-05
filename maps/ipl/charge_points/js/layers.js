// ==============================
// SOURCES
// ==============================
export const sourceChargePoints = {
    layer: 'MobiData-BW:charge_points',
    style: 'MobiData-BW:mdbw_charge_points_dynamic',
    bounds: [5.2, 47.2, 15.8, 55.7],
    // server: 'test'
};


// ==============================
// LAYERS
// ==============================
const layers = {
    source: 'sourceChargePoints',
    sourceLayer: 'charge_points',
    group: 'E-Ladesäulen',
    circleRadius: [
        'interpolate', ['linear'], ['zoom'],
        6, 4,
        12, 5
    ],
};

export const layersChargePointsPower = [
    {
        id: 'chargePointsPower_Normal',
        label: 'Ladesäule',
        subGroup: 'Ladeleistung',
        filter:
            [
                '<=', ['get', 'max_electric_power'], 22000
            ],
        color: '#08a4a7',
        ...layers
    },
    {
        id: 'chargePointsPower_Fast',
        label: 'Schnellladesäule',
        subGroup: 'Ladeleistung',
        filter:
            [
                '>', ['get', 'max_electric_power'], 22000
            ],
        color: '#91FFFF',
        ...layers
    },
    {
        id: 'chargePointsPower_Unknown',
        label: 'Ladeleistung unbekannt',
        subGroup: 'Ladeleistung',
        filter:
            [
                '==', ['get', 'max_electric_power'], null
            ],
        color: '#cacaca',
        ...layers
    }
];

export const layersChargePointsDynamic = [
    {
        id: 'chargePointsDynamic_Static',
        label: 'Echtzeitdaten fehlen',
        subGroup: 'Belegung',
        filter:
            [
                'any',
                ['==', ['get', 'source'], 'bnetza_api'],
                ['==', ['get', 'source'], 'opendata_swiss']
            ],
        color: '#615fdf',
        visibility: 'none',
        ...layers
    },
    {
        id: 'chargePointsDynamic_Realtime',
        label: 'Echtzeitdaten verfügbar',
        subGroup: 'Belegung',
        filter:
            [
                'all',
                ['!=', ['get', 'source'], 'bnetza_api'],
                ['!=', ['get', 'source'], 'opendata_swiss']
            ],
        color: '#dfab27',
        visibility: 'none',
        ...layers
    }
];