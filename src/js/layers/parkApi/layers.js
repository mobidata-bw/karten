import { urlParams } from './urlParams';

const { layerFilter } = urlParams();


// ==============================
// LAYERS
// ==============================
export const occupancy = {
    NO_REALTIME_INFORMATION: {
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
        color: '#615fdf'
    },
    OUTDATED_REALTIME_INFORMATION: {
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
        color: '#cacaca'
    },
    CLOSED: {
        label: 'Geschlossen',
        subGroup: 'Belegung',
        filter:
            [
                'all',
                ['==', ['get', 'realtime_opening_status'], 'CLOSED'],
                layerFilter
            ],
        color: '#880000'
    },
    VERY_LOW_AVAILABILITY: {
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
        color: '#ed0000'
    },
    LOW_AVAILABILITY: {
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
        color: '#dfab27'
    },
    HIGH_AVAILABILITY: {
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
        color: '#059b02'
    }
};

export const types = {
    /* CAR */
    CAR_PARK: {
        label: 'Parkhaus',
        subGroup: 'Typ',
        filter:
            [
                'all',
                ['==', ['get', 'type'], 'CAR_PARK'],
                layerFilter
            ],
        color: '#5587eb'
    },
    UNDERGROUND: {
        label: 'Tiefgarage',
        subGroup: 'Typ',
        filter:
            [
                'all',
                ['==', ['get', 'type'], 'UNDERGROUND'],
                layerFilter
            ],
        color: '#BF91B6'
    },
    OFF_STREET: {
        label: 'Parkplatz abseits der Straße',
        subGroup: 'Typ',
        filter:
            [
                'all',
                ['==', ['get', 'type'], 'OFF_STREET_PARKING_GROUND'],
                layerFilter
            ],
        color: '#009688'
    },
    ON_STREET: {
        label: 'Straßen-Parkplatz',
        subGroup: 'Typ',
        filter:
            [
                'all',
                ['==', ['get', 'type'], 'ON_STREET'],
                layerFilter
            ],
        color: 'yellow'
    },
    /* BIKE */
    FLOOR: {
        label: 'Abstellfläche',
        subGroup: 'Typ',
        filter:
            [
                '==', ['get', 'type'], 'FLOOR'
            ],
        color: 'black'
    },
    BUILDING: {
        label: 'Parkhaus',
        subGroup: 'Typ',
        filter:
            [
                '==', ['get', 'type'], 'BUILDING'
            ],
        color: '#c2e72a'
    },
    LOCKBOX: {
        label: 'Schließfach',
        subGroup: 'Typ',
        filter:
            [
                '==', ['get', 'type'], 'LOCKBOX'
            ],
        color: 'white'
    },
    TWO_TIER: {
        label: 'Zweistock-Abstellanlage',
        subGroup: 'Typ',
        filter:
            [
                '==', ['get', 'type'], 'TWO_TIER'
            ],
        color: '#009688'
    },
    SHED: {
        label: 'Sammelanlage',
        subGroup: 'Typ',
        filter:
            [
                '==', ['get', 'type'], 'SHED'
            ],
        color: '#ee5959'
    },
    LOCKERS: {
        label: 'Fahrradschrank',
        subGroup: 'Typ',
        filter:
            [
                '==', ['get', 'type'], 'LOCKERS'
            ],
        color: '#ff9933'
    },
    STANDS: {
        label: 'Anlehnbügel',
        subGroup: 'Typ',
        filter:
            [
                '==', ['get', 'type'], 'STANDS'
            ],
        color: '#bf91b6'
    },
    SAFE_WALL_LOOPS: {
        label: 'Vorderradhalter mit Sicherung',
        subGroup: 'Typ',
        filter:
            [
                '==', ['get', 'type'], 'SAFE_WALL_LOOPS'
            ],
        color: '#30D5C8'
    },
    WALL_LOOPS: {
        label: 'Vorderradhalter',
        subGroup: 'Typ',
        filter:
            [
                '==', ['get', 'type'], 'WALL_LOOPS'
            ],
        color: '#5587eb'
    },
    OTHER: {
        label: 'Sonstige',
        subGroup: 'Typ',
        filter:
            [
                '==', ['get', 'type'], 'OTHER'
            ],
        color: '#cacaca'
    }
};

export const objects = {
    PARKING_SPOT: {
        label: 'Einzelparkplatz',
        subGroup: 'Parkobjekt',
        filter:
            [
                '==', ['get', 'parking_object'], 'spot'
            ],
        color: '#92474d'
    },
    PARKING_SITE: {
        label: 'Parkbau oder Parkstreifen',
        subGroup: 'Parkobjekt',
        filter:
            [
                '==', ['get', 'parking_object'], 'site'
            ],
        color: '#25604c'
    }
};