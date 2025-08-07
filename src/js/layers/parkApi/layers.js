export const occupancy = {
    NO_REALTIME_INFORMATION: {
        label: 'Echtzeitdaten fehlen',
        subGroup: 'Belegung',
        filter:
            [
                'any',
                /* PARKING SITE */
                [
                    'all',
                    ['==', ['get', 'parking_object'], 'site'],
                    ['==', ['get', 'has_realtime_data'], false]
                ],
                /* PARKING SPOT */
                [
                    'all',
                    ['==', ['get', 'parking_object'], 'spot'],
                    [
                        'any',
                        ['==', ['get', 'realtime_status'], 'UNKNOWN'],
                        ['==', ['get', 'has_realtime_data'], false]
                    ]
                ]
            ],
        color: '#615fdf'
    },
    OUTDATED_REALTIME_INFORMATION: {
        label: 'Echtzeitdaten veraltet',
        subGroup: 'Belegung',
        filter:
            [
                'all',
                ['==', ['get', 'realtime_data_outdated'], true],
                ['!=', ['get', 'source_id'], 55] // exception since Mannheim only pushes when new event occurs                
            ],
        color: '#cacaca'
    },
    CLOSED: {
        label: 'Geschlossen',
        subGroup: 'Belegung',
        filter:
            [
                '==', ['get', 'realtime_opening_status'], 'CLOSED'
            ],
        color: '#880000'
    },
    VERY_LOW_AVAILABILITY: {
        label: 'Kaum Plätze (unter 2%)',
        subGroup: 'Belegung',
        filter:
            [
                'any',
                /* PARKING SITE */
                [
                    'all',
                    ['==', ['get', 'parking_object'], 'site'],
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
                    ]
                ],
                /* PARKING SPOT */
                [
                    'all',
                    ['==', ['get', 'parking_object'], 'spot'],
                    ['==', ['get', 'realtime_status'], 'TAKEN'],
                    [
                        'any',
                        ['==', ['get', 'realtime_data_outdated'], false],
                        ['==', ['get', 'source_id'], 55]
                    ]
                ]
            ],
        color: '#ed0000'
    },
    LOW_AVAILABILITY: {
        label: 'Wenig Plätze (2 bis 20%)',
        subGroup: 'Belegung',
        filter:
            [
                /* PARKING SITE */
                'all',
                ['==', ['get', 'parking_object'], 'site'],
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
                ]
            ],
        color: '#dfab27'
    },
    HIGH_AVAILABILITY: {
        label: 'Viele Plätze (über 20%)',
        subGroup: 'Belegung',
        filter:
            [
                'any',
                /* PARKING SITE */
                [
                    'all',
                    ['==', ['get', 'parking_object'], 'site'],
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
                    ]
                ],
                /* PARKING SPOT */
                [
                    'all',
                    ['==', ['get', 'parking_object'], 'spot'],
                    ['==', ['get', 'realtime_status'], 'AVAILABLE'],
                    [
                        'any',
                        ['==', ['get', 'realtime_data_outdated'], false],
                        ['==', ['get', 'source_id'], 55]
                    ]
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
                '==', ['get', 'type'], 'CAR_PARK'
            ],
        color: '#5587eb'
    },
    UNDERGROUND: {
        label: 'Tiefgarage',
        subGroup: 'Typ',
        filter:
            [
                '==', ['get', 'type'], 'UNDERGROUND'
            ],
        color: '#BF91B6'
    },
    OFF_STREET_PARKING_GROUND: {
        label: 'Parkplatz abseits der Straße',
        subGroup: 'Typ',
        filter:
            [
                '==', ['get', 'type'], 'OFF_STREET_PARKING_GROUND'
            ],
        color: '#009688'
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
        label: 'Parkstreifen',
        subGroup: 'Parkobjekt',
        filter:
            [
                '==', ['get', 'parking_object'], 'site'
            ],
        color: '#25604c'
    }
};

export const specialParking = {
    DISABLED: {
        label: 'Behinderte',
        subGroup: 'Sonderparkplätze',
        filter:
            [
                'any',
                ['>', 'capacity_disabled', 0],
                ['==', 'restriction_type', 'DISABLED']
            ],
        color: '#005ea8'
    },
    WOMAN: {
        label: 'Frauen',
        subGroup: 'Sonderparkplätze',
        filter:
            [
                'any',
                ['>', 'capacity_woman', 0],
                ['==', 'restriction_type', 'WOMAN']
            ],
        color: '#cb3234'
    },
    FAMILY: {
        label: 'Familien',
        subGroup: 'Sonderparkplätze',
        filter:
            [
                'any',
                ['>', 'capacity_family', 0],
                ['==', 'restriction_type', 'FAMILY']
            ],
        color: '#CC33FF'
    },
    CHARGING: {
        label: 'Lademöglichkeit',
        subGroup: 'Sonderparkplätze',
        filter:
            [
                'any',
                ['>', 'capacity_charging', 0],
                ['==', 'restriction_type', 'CHARGING']
            ],
        color: '#95a819'
    },
    CARSHARING: {
        label: 'Carsharing',
        subGroup: 'Sonderparkplätze',
        filter:
            [
                'any',
                ['>', 'capacity_carsharing', 0],
                ['==', 'restriction_type', 'CARSHARING']
            ],
        color: '#56c1d1'
    }
};

