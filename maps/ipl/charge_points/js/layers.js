// ==============================
// SOURCES
// ==============================
export const sourceChargePoints = {
    layer: 'MobiData-BW:charge_points',
    style: 'MobiData-BW:mdbw_charge_points_dynamic',
    bounds: [5.2, 47.2, 15.8, 55.7]
};


// ==============================
// LAYERS
// ==============================
const layers = {
    source: 'sourceChargePoints',
    sourceLayer: 'charge_points',
    group: 'E-Ladesäulen',
    circleRadius: [
        "interpolate", ["linear"], ["zoom"],
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
        label: 'Unbekannte Ladeleistung',
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
        label: 'Ohne Echtzeitinformationen',
        subGroup: 'Belegung',
        filter:
            [
                '!=', ['get', 'chargepoint_static_count'], 0
            ],
        color: '#615fdf',
        visibility: 'none',
        ...layers
    },
    {
        id: 'chargePointsDynamic_Realtime',
        label: 'Mit Echtzeitinformationen',
        subGroup: 'Belegung',
        filter:
            [
                '==', ['get', 'chargepoint_static_count'], 0
            ],
        color: '#dfab27',
        visibility: 'none',
        ...layers
    },
];