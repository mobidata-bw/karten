import { urlParams } from '../../../../src/js/urlParams.js';


// ==============================
// URL PARAMS
// ==============================
const { purpose, type, parking, geometry, layerFilter } = urlParams();


// ==============================
// SOURCES
// ==============================
export const sourceParkApiCar = {
    layer: 'MobiData-BW:park-api_car',
    style: 'MobiData-BW:mdbw_park-api_parking-object',
    bounds: [5.9, 45.8, 17.0, 54.8]
};

export const sourceParkApiCarPolygons = {
    layer: 'MobiData-BW:park-api_car_polygons',
    style: 'polygon',
    bounds: [5.9, 45.8, 17.0, 54.8],
    server: 'test'
};

export const sourceParkApiBicycle = {
    layer: 'MobiData-BW:park-api_bicycle',
    style: 'MobiData-BW:mdbw_park-api_parking-object',
    bounds: [7.1, 47.5, 13.5, 53.8]
};


// ==============================
// LAYERS: OCCUPANCY
// ==============================
function parkApiOccupancy({ id, layerGroup }) {
    return [
        {
            id: `parkApi${id}Occupancy_NoRealtimeInformation`,
            label: 'Echtzeitdaten nicht vorhanden',
            subGroup: 'Belegung',
            filter:
                [
                    'any',
                    /* PARKING SITE */
                    [
                        'all',
                        ['==', ['get', 'parking_object'], 'site'],
                        ['==', ['get', 'has_realtime_data'], false],
                        layerFilter
                    ],
                    /* PARKING SPOT */
                    [
                        'all',
                        ['==', ['get', 'parking_object'], 'spot'],
                        [
                            'any',
                            ['==', ['get', 'realtime_status'], 'UNKNOWN'],
                            ['==', ['get', 'has_realtime_data'], false]
                        ],
                        layerFilter
                    ]
                ],
            color: '#615fdf',
            ...layerGroup
        },
        {
            id: `parkApi${id}Occupancy_OutdatedRealtimeInformation`,
            label: 'Echtzeitdaten älter 30 Minuten',
            subGroup: 'Belegung',
            filter:
                [
                    'all',
                    ['==', ['get', 'has_realtime_data'], true],
                    ['==', ['get', 'realtime_data_outdated'], true],
                    layerFilter,
                    ['!=', ['get', 'source_id'], 55] // exception since Mannheim only pushes when new event occurs                    
                ],
            color: '#cacaca',
            ...layerGroup
        },
        {
            id: `parkApi${id}Occupancy_Closed`,
            label: 'Geschlossen',
            subGroup: 'Belegung',
            filter:
                [
                    'all',
                    ['==', ['get', 'realtime_opening_status'], 'CLOSED'],
                    layerFilter
                ],
            color: '#880000',
            ...layerGroup
        },
        {
            id: `parkApi${id}Occupancy_VeryLowAvailability`,
            label: 'Kaum Plätze (unter 2 %)',
            subGroup: 'Belegung',
            filter:
                [
                    'any',
                    /* PARKING SITE */
                    [
                        'all',
                        ['==', ['get', 'parking_object'], 'site'],
                        ['==', ['get', 'has_realtime_data'], true],
                        [
                            'all',
                            ['>=', ['get', 'realtime_free_capacity'], 0],
                            ['<',
                                ['/',
                                    ['*', 1.0, ['get', 'realtime_free_capacity']],
                                    [
                                        'case',
                                        ['has', 'realtime_capacity'],
                                        ['get', 'realtime_capacity'],
                                        ['get', 'capacity']
                                    ]
                                ],
                                0.02
                            ],
                            ['!=', ['get', 'realtime_opening_status'], 'CLOSED'],
                        ],
                        [
                            'any',
                            ['==', ['get', 'realtime_data_outdated'], false],
                            ['==', ['get', 'source_id'], 55]
                        ],
                        layerFilter
                    ],
                    /* PARKING SPOT */
                    [
                        'all',
                        ['==', ['get', 'parking_object'], 'spot'],
                        ['==', ['get', 'realtime_status'], 'TAKEN'],
                        ['==', ['get', 'has_realtime_data'], true],
                        [
                            'any',
                            ['==', ['get', 'realtime_data_outdated'], false],
                            ['==', ['get', 'source_id'], 55]
                        ],
                        layerFilter
                    ]
                ],
            color: '#ed0000',
            ...layerGroup
        },
        {
            id: `parkApi${id}Occupancy_LowAvailability`,
            label: 'Wenig Plätze (2 bis 20 %)',
            subGroup: 'Belegung',
            filter:
                [
                    /* PARKING SITE */
                    'all',
                    ['==', ['get', 'parking_object'], 'site'],
                    ['==', ['get', 'has_realtime_data'], true],
                    [
                        'all',
                        ['>=',
                            ['/',
                                ['*', 1.0, ['get', 'realtime_free_capacity']],
                                [
                                    'case',
                                    ['has', 'realtime_capacity'],
                                    ['get', 'realtime_capacity'],
                                    ['get', 'capacity']
                                ]
                            ],
                            0.02
                        ],
                        ['<=',
                            ['/',
                                ['*', 1.0, ['get', 'realtime_free_capacity']],
                                [
                                    'case',
                                    ['has', 'realtime_capacity'],
                                    ['get', 'realtime_capacity'],
                                    ['get', 'capacity']
                                ]
                            ],
                            0.2
                        ]
                    ],
                    ['!=', ['get', 'realtime_opening_status'], 'CLOSED'],
                    [
                        'any',
                        ['==', ['get', 'realtime_data_outdated'], false],
                        ['==', ['get', 'source_id'], 55]
                    ],
                    layerFilter
                ],
            color: '#dfab27',
            ...layerGroup
        },
        {
            id: `parkApi${id}Occupancy_HighAvailability`,
            label: 'Viele Plätze (über 20 %)',
            subGroup: 'Belegung',
            filter:
                [
                    'any',
                    /* PARKING SITE */
                    [
                        'all',
                        ['==', ['get', 'parking_object'], 'site'],
                        ['==', ['get', 'has_realtime_data'], true],
                        ['>',
                            ['/',
                                ['*', 1.0, ['get', 'realtime_free_capacity']],
                                [
                                    'case',
                                    ['has', 'realtime_capacity'],
                                    ['get', 'realtime_capacity'],
                                    ['get', 'capacity']
                                ]
                            ],
                            0.2
                        ],
                        ['!=', ['get', 'realtime_opening_status'], 'CLOSED'],
                        [
                            'any',
                            ['==', ['get', 'realtime_data_outdated'], false],
                            ['==', ['get', 'source_id'], 55]
                        ],
                        layerFilter
                    ],
                    /* PARKING SPOT */
                    [
                        'all',
                        ['==', ['get', 'parking_object'], 'spot'],
                        ['==', ['get', 'realtime_status'], 'AVAILABLE'],
                        ['==', ['get', 'has_realtime_data'], true],
                        [
                            'any',
                            ['==', ['get', 'realtime_data_outdated'], false],
                            ['==', ['get', 'source_id'], 55]
                        ],
                        layerFilter
                    ],
                ],
            color: '#059b02',
            ...layerGroup
        }
    ];
};

export const layersParkApiOccupancy = parkApiOccupancy(urlParams());
export const layersParkApiCarOccupancy = parkApiOccupancy(urlParams({ purpose: 'car' }));
export const layersParkApiBicycleOccupancy = parkApiOccupancy(urlParams({ purpose: 'bicycle' }));
export const layersParkApiItemOccupancy = parkApiOccupancy(urlParams({ purpose: 'item' }));


// ==============================
// LAYERS: TYPE
// ==============================
function parkApiType({ id, layerGroup, layerFilter }) {
    return [
        {
            id: `parkApi${id}Types_Other`,
            label: 'Sonstige',
            subGroup: 'Typ',
            filter:
                [
                    'any',
                    ['==', ['get', 'type'], 'OTHER'],
                    ['!', ['has', 'type']]
                ],
            color: '#cacaca',
            visibility: 'none',
            scope: ['car', 'bicycle', 'buildings', 'on_street', 'disabled', 'polygon'],
            ...layerGroup
        },
        {
            id: `parkApi${id}Types_OnStreet`,
            label: 'Straßen-Parkplatz',
            subGroup: 'Typ',
            filter:
                [
                    'all',
                    ['==', ['get', 'type'], 'ON_STREET'],
                    layerFilter
                ],
            color: 'yellow',
            ...layerGroup,
            scope: ['car', 'on_street'],
            visibility: 'none'
        },
        {
            id: `parkApi${id}Types_OffStreet`,
            label: 'Parkplatz abseits der Straße',
            subGroup: 'Typ',
            filter:
                [
                    'all',
                    ['==', ['get', 'type'], 'OFF_STREET_PARKING_GROUND'],
                    layerFilter
                ],
            color: '#009688',
            visibility: 'none',
            scope: ['car', 'buildings', 'disabled'],
            ...layerGroup
        },
        {
            id: `parkApi${id}Types_Underground`,
            label: 'Tiefgarage',
            subGroup: 'Typ',
            filter:
                [
                    'all',
                    ['==', ['get', 'type'], 'UNDERGROUND'],
                    layerFilter
                ],
            color: '#BF91B6',
            visibility: 'none',
            scope: ['car', 'buildings', 'disabled'],
            ...layerGroup
        },
        {
            id: `parkApi${id}Types_CarPark`,
            label: 'Parkhaus',
            subGroup: 'Typ',
            filter:
                [
                    'all',
                    ['==', ['get', 'type'], 'CAR_PARK'],
                    layerFilter
                ],
            color: '#5587eb',
            visibility: 'none',
            scope: ['car', 'buildings', 'disabled'],
            ...layerGroup
        },
        {
            id: `parkApi${id}Types_WallLoops`,
            label: 'Vorderradhalter',
            subGroup: 'Typ',
            filter:
                [
                    '==', ['get', 'type'], 'WALL_LOOPS'
                ],
            color: '#5587eb',
            visibility: 'none',
            scope: ['bicycle'],
            ...layerGroup
        },
        {
            id: `parkApi${id}Types_Stands`,
            label: 'Anlehnbügel',
            subGroup: 'Typ',
            filter:
                [
                    '==', ['get', 'type'], 'STANDS'
                ],
            color: '#bf91b6',
            visibility: 'none',
            scope: ['bicycle'],
            ...layerGroup
        },
        {
            id: `parkApi${id}Types_Lockers`,
            label: 'Fahrradschrank',
            subGroup: 'Typ',
            filter:
                [
                    '==', ['get', 'type'], 'LOCKERS'
                ],
            color: '#ff9933',
            visibility: 'none',
            scope: ['bicycle', 'item'],
            ...layerGroup
        },
        {
            id: `parkApi${id}Types_Shed`,
            label: 'Sammelanlage',
            subGroup: 'Typ',
            filter:
                [
                    '==', ['get', 'type'], 'SHED'
                ],
            color: '#ee5959',
            visibility: 'none',
            scope: ['bicycle'],
            ...layerGroup,
        },
        {
            id: `parkApi${id}Types_TwoTier`,
            label: 'Zweistock-Abstellanlage',
            subGroup: 'Typ',
            filter:
                [
                    '==', ['get', 'type'], 'TWO_TIER'
                ],
            color: '#009688',
            visibility: 'none',
            scope: ['bicycle'],
            ...layerGroup
        },
        {
            id: `parkApi${id}Types_Lockbox`,
            label: 'Schließfach',
            subGroup: 'Typ',
            filter:
                [
                    '==', ['get', 'type'], 'LOCKBOX'
                ],
            color: 'white',
            ...layerGroup,
            scope: ['bicycle', 'item'],
            visibility: 'none'
        },
        {
            id: `parkApi${id}Types_SafeWallLoops`,
            label: 'Vorderradhalter mit Sicherung',
            subGroup: 'Typ',
            filter:
                [
                    '==', ['get', 'type'], 'SAFE_WALL_LOOPS'
                ],
            color: '#30D5C8',
            visibility: 'none',
            scope: ['bicycle'],
            ...layerGroup
        },
        {
            id: `parkApi${id}Types_Building`,
            label: 'Parkhaus',
            subGroup: 'Typ',
            filter:
                [
                    '==', ['get', 'type'], 'BUILDING'
                ],
            color: '#c2e72a',
            visibility: 'none',
            scope: ['bicycle'],
            ...layerGroup
        },
        {
            id: `parkApi${id}Types_Floor`,
            label: 'Abstellfläche',
            subGroup: 'Typ',
            filter:
                [
                    '==', ['get', 'type'], 'FLOOR'
                ],
            color: 'black',
            visibility: 'none',
            scope: ['bicycle'],
            ...layerGroup
        }
    ];
};

export let layersParkApiType;

layersParkApiType = parkApiType(urlParams())
    .filter(layer => layer.scope.includes(purpose));

if ((type != 'null' && type != null) || (parking != 'null' && parking != null) || (geometry != 'null' && geometry != null)) {
    layersParkApiType = parkApiType(urlParams())
        .filter(layer => layer.scope.includes(purpose))
        .filter(layer => layer.scope.includes(type) || layer.scope.includes(parking) || layer.scope.includes(geometry));
};