import { urlParams } from '../../../../src/js/urlParams.js';


// ==============================
// URL PARAMS
// ==============================
const { purpose, type, parking, geometry, object, layerFilter, layerGroup, id } = urlParams();


// ==============================
// SOURCES
// ==============================
export const sourceParkApiCar = {
    layer: 'MobiData-BW:park-api_car',
    style: 'MobiData-BW:mdbw_park-api_parking-object',
    bounds: [5.9, 45.8, 17.0, 54.8]
};

export const sourceParkApiCarLines = {
    layer: 'MobiData-BW:park-api_car_lines',
    style: 'MobiData-BW:mdbw_lines',
    bounds: [7, 46, 10, 50]
};

export const sourceParkApiCarPolygons = {
    layer: 'MobiData-BW:park-api_car_polygons',
    style: 'MobiData-BW:mdbw_polygons',
    bounds: [7, 46, 10, 50]
};

export const sourceParkApiBicycle = {
    layer: 'MobiData-BW:park-api_bicycle',
    style: 'MobiData-BW:mdbw_park-api_parking-object',
    bounds: [7.1, 47.5, 13.5, 53.8]
};


// ==============================
// LAYERS: OCCUPANCY
// ==============================
function parkApiOccupancy({ id, layerGroup, layerFilter }) {
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
            scope: ['car', 'bicycle', 'item', 'buildings', 'on_street', 'disabled', 'site', 'spot'],
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
            scope: ['car', 'bicycle', 'item', 'buildings', 'disabled'],
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
            scope: ['car', 'bicycle', 'item', 'buildings', 'disabled', 'site'],
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
            scope: ['car', 'bicycle', 'item', 'buildings', 'on_street', 'disabled', 'site', 'spot'],
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
            scope: ['car', 'bicycle', 'item', 'buildings', 'disabled', 'site'],
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
            scope: ['car', 'bicycle', 'item', 'buildings', 'on_street', 'disabled', 'site', 'spot'],
            ...layerGroup
        }
    ];
};


// ==============================
// URL PARAMS: OCCUPANCY
// ==============================
const functionParkApiOccupation = parkApiOccupancy(urlParams());

export let layersParkApiOccupancy;

if (purpose == 'car') {
    if (type == null && parking == null && geometry == null && object == null) {

        layersParkApiOccupancy = functionParkApiOccupation.filter
            (layer =>
                layer.scope.includes(purpose)
            );
    } else {
        layersParkApiOccupancy = functionParkApiOccupation.filter
            (layer =>
                layer.scope.includes(purpose) &&
                (
                    layer.scope.includes(type) ||
                    layer.scope.includes(parking) ||
                    layer.scope.includes(geometry) ||
                    layer.scope.includes(object)
                )
            );
    }
} else {
    layersParkApiOccupancy = functionParkApiOccupation;
};


// ==============================
// PRESETS: OCCUPANCY
// ==============================
export const layersParkApiCarOccupancy = parkApiOccupancy(urlParams({ purpose: 'car' })).filter(layer => layer.scope.includes('car'));
export const layersParkApiBicycleOccupancy = parkApiOccupancy(urlParams({ purpose: 'bicycle' })).filter(layer => layer.scope.includes('bicycle'));
export const layersParkApiItemOccupancy = parkApiOccupancy(urlParams({ purpose: 'item' })).filter(layer => layer.scope.includes('item'));


// ==============================
// LAYERS: TYPE
// ==============================
function parkApiType({ id, layerGroup, layerFilter }) {
    return [
        {
            id: `parkApi${id}Type_Other`,
            label: 'Sonstige',
            subGroup: 'Typ',
            filter:
                [
                    'all',
                    [
                        'any',
                        ['==', ['get', 'type'], 'OTHER'],
                        ['!', ['has', 'type']]
                    ],
                    layerFilter
                ],
            color: '#cacaca',
            visibility: 'none',
            scope: ['car', 'bicycle', 'buildings', 'on_street', 'disabled', 'polygon', 'site', 'spot'],
            ...layerGroup
        },
        {
            id: `parkApiCarType_OnStreet`,
            label: 'Straßen-Parkplatz',
            subGroup: 'Typ',
            filter:
                [
                    'all',
                    ['==', ['get', 'type'], 'ON_STREET'],
                    layerFilter
                ],
            color: 'black',
            scope: ['car', 'on_street', 'disabled', 'line', 'polygon', 'site', 'spot'],
            visibility: 'none',
            ...layerGroup
        },
        {
            id: `parkApiCarType_OffStreet`,
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
            scope: ['car', 'buildings', 'disabled', 'polygon', 'site', 'spot'],
            ...layerGroup
        },
        {
            id: `parkApiCarType_Underground`,
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
            scope: ['car', 'buildings', 'disabled', 'site'],
            ...layerGroup
        },
        {
            id: `parkApiCarType_CarPark`,
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
            scope: ['car', 'buildings', 'disabled', 'polygon', 'site'],
            ...layerGroup
        },
        {
            id: `parkApiBicycleType_WallLoops`,
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
            id: `parkApiBicycleType_Stands`,
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
            id: `parkApiBicycleType_LockersLockbox`,
            label: 'Fahrradbox',
            subGroup: 'Typ',
            filter:
                [
                    'all',
                    [
                        'any',
                        ['==', ['get', 'type'], 'LOCKERS'],
                        ['==', ['get', 'type'], 'LOCKBOX']

                    ],
                    ['==', ['get', 'purpose'], 'BIKE']
                ],
            color: '#ff9933',
            visibility: 'none',
            scope: ['bicycle'],
            ...layerGroup
        },
        {
            id: `parkApiItemType_LockersLockbox`,
            label: 'Schließfach',
            subGroup: 'Typ',
            filter:
                [
                    'all',
                    [
                        'any',
                        ['==', ['get', 'type'], 'LOCKERS'],
                        ['==', ['get', 'type'], 'LOCKBOX']

                    ],
                    ['==', ['get', 'purpose'], 'ITEM']
                ],
            color: '#ff9933',
            visibility: 'none',
            scope: ['item'],
            ...layerGroup
        },
        {
            id: `parkApiBicycleType_Shed`,
            label: 'Fahrrad-Sammelanlage',
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
            id: `parkApiBicycleType_TwoTier`,
            label: 'Offene Zweistock-Abstellanlage',
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
            id: `parkApiBicycleType_SafeWallLoops`,
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
            id: `parkApiBicycleType_Building`,
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
            id: `parkApiBicycleType_Floor`,
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


// ==============================
// URL PARAMS: TYPE
// ==============================
const functionParkApiType = parkApiType({ id, layerGroup, layerFilter });

if (geometry == 'polygon') {

    const zoom = 13;

    const properties = {
        subGroup: 'Typ',
        scope: ['car', 'polygon'],
        source: 'sourceParkApiCar',
        sourceLayer: 'park-api_car',
        type: 'circle',
        circleRadius: [
            'interpolate', ['linear'], ['zoom'],
            6, 5,
            9, 4,
            12, 3
        ]
    };

    const circleLayers =
        [
            {
                id: `parkApi${id}Type_Other_Circle`,
                label: 'Sonstige',
                filter:
                    [
                        'all',
                        [
                            'any',
                            ['==', ['get', 'type'], 'OTHER'],
                            ['!', ['has', 'type']]
                        ],
                        ['<', ['zoom'], zoom],
                        ['==', ['get', 'geojson'], 'POLYGON']
                    ],
                color: '#cacaca',
                ...properties
            },
            {
                id: `parkApi${id}Type_OnStreet_Circle`,
                label: 'Straßen-Parkplatz',
                filter:
                    [
                        'all',
                        ['==', ['get', 'type'], 'ON_STREET'],
                        ['<', ['zoom'], zoom],
                        ['==', ['get', 'geojson'], 'POLYGON']
                    ],
                color: 'black',
                ...properties
            },
            {
                id: `parkApi${id}Type_OffStreet_Circle`,
                label: 'Parkplatz abseits der Straße',
                filter:
                    [
                        'all',
                        ['==', ['get', 'type'], 'OFF_STREET_PARKING_GROUND'],
                        ['<', ['zoom'], zoom],
                        ['==', ['get', 'geojson'], 'POLYGON']
                    ],
                color: '#009688',
                ...properties
            },
            {
                id: `parkApi${id}Type_CarPark_Circle`,
                label: 'Parkhaus',
                filter:
                    [
                        'all',
                        ['==', ['get', 'type'], 'CAR_PARK'],
                        ['<', ['zoom'], zoom],
                        ['==', ['get', 'geojson'], 'POLYGON']
                    ],
                color: '#5587eb',
                ...properties
            }
        ];

    circleLayers.forEach(circleLayer => {
        functionParkApiType.push(circleLayer);
    });

};


export let layersParkApiType;

layersParkApiType = functionParkApiType
    .filter(layer => layer.scope.includes(purpose));

if (purpose == 'car') {
    if (type == null && parking == null && geometry == null && object == null) {
        layersParkApiType = functionParkApiType.filter(
            layer => layer.scope.includes(purpose)
        );
    } else {
        layersParkApiType = functionParkApiType.filter(
            layer =>
                layer.scope.includes(purpose) &&
                (
                    layer.scope.includes(type) ||
                    layer.scope.includes(parking) ||
                    layer.scope.includes(geometry) ||
                    layer.scope.includes(object)
                )
        );
    }
};


// ==============================
// PRESETS: TYPE
// ==============================
export const layersParkApiBicycleType = parkApiType(urlParams({ purpose: 'bicycle' }))
    .filter(layer => layer.scope.includes('bicycle'));