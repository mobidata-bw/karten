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

export const layersChargePointsOccupancy = [
    // {
    //     id: 'chargePointsOccupancy_Static',
    //     label: 'Echtzeitdaten nicht vorhanden',
    //     subGroup: 'Belegung',
    //     filter:
    //         [
    //             'all',
    //             ['>', ['get', 'chargepoint_static_count'], 0],
    //             ['==', ['get', 'chargepoint_outoforder_count'], 0],
    //             ['==', ['get', 'chargepoint_unknown_count'], 0],
    //             ['==', ['get', 'chargepoint_inoperative_count'], 0],
    //             ['==', ['get', 'chargepoint_available_count'], 0],
    //             ['==', ['get', 'chargepoint_charging_count'], 0]
    //         ],
    //     color: '#615fdf',
    //     visibility: 'none',
    //     ...layers
    // },
    // {
    //     id: 'chargePointsOccupancy_Realtime',
    //     label: 'Echtzeitdaten verfügbar',
    //     subGroup: 'Belegung',
    //     filter:
    //         [
    //             'all',
    //             ['==', ['get', 'chargepoint_static_count'], 0],
    //             [
    //                 'any',
    //                 ['>', ['get', 'chargepoint_outoforder_count'], 0],
    //                 ['>', ['get', 'chargepoint_unknown_count'], 0],
    //                 ['>', ['get', 'chargepoint_inoperative_count'], 0],
    //                 ['>', ['get', 'chargepoint_available_count'], 0],
    //                 ['>', ['get', 'chargepoint_charging_count'], 0]
    //             ]
    //         ],
    //     color: '#dfab27',
    //     visibility: 'none',
    //     ...layers
    // }
    {
        id: 'chargePointsOccupancy_OutdatedRealtimeInformation',
        label: 'Echtzeitdaten nicht vorhanden',
        subGroup: 'Belegung',
        filter: [
            '==', ['get', 'realtime_data_outdated'], true
        ],
        color: '#cacaca',
        visibility: 'none',
        ...layers
    },
    {
        id: 'chargePointsOccupancy_StaticUnknown',
        label: 'Status unbekannt',
        subGroup: 'Belegung',
        filter: [
            'all',
            ['==', ['get', 'chargepoint_available_count'], 0],
            ['==', ['get', 'chargepoint_charging_count'], 0],
            [
                'any',
                ['>', ['get', 'chargepoint_static_count'], 0],
                ['>', ['get', 'chargepoint_unknown_count'], 0]
            ],
            ['==', ['get', 'realtime_data_outdated'], false]
        ],
        color: '#006eaf',
        visibility: 'none',
        ...layers
    },
    {
        id: 'chargePointsOccupancy_InoperativeOutOfOrder',
        label: 'Ladesäule nicht nutzbar',
        subGroup: 'Belegung',
        filter: [
            'all',
            ['==', ['get', 'chargepoint_available_count'], 0],
            ['==', ['get', 'chargepoint_charging_count'], 0],
            [
                'any',
                ['>', ['get', 'chargepoint_inoperative_count'], 0],
                ['>', ['get', 'chargepoint_outoforder_count'], 0]
            ],
            ['==', ['get', 'realtime_data_outdated'], false]
        ],
        color: '#3a4044',
        visibility: 'none',
        ...layers
    },
    {
        id: 'chargePointsOccupancy_Charging',
        label: 'Ladesäule frei',
        subGroup: 'Belegung',
        filter: [
            'all',
            ['>', ['get', 'chargepoint_charging_count'], 0],
            ['==', ['get', 'chargepoint_available_count'], 0],
            ['==', ['get', 'realtime_data_outdated'], false]
        ],
        color: '#ed0000',
        visibility: 'none',
        ...layers
    },
    {
        id: 'chargePointsOccupancy_Available',
        label: 'Ladesäule belegt',
        subGroup: 'Belegung',
        filter: [
            'all',
            ['>', ['get', 'chargepoint_available_count'], 0],
            ['==', ['get', 'realtime_data_outdated'], false]
        ],
        color: '#059b02',
        visibility: 'none',
        ...layers
    }
];