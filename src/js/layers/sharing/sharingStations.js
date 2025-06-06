const sharingNoRealtimeData = [
    'any',
    ['==', ['get', 'feed_id'], 'oekostadt_renningen'],
    ['==', ['get', 'feed_id'], 'gruene-flotte_freiburg'],
    ['==', ['get', 'feed_id'], 'swu2go'],
    ['==', ['get', 'feed_id'], 'conficars_ulm'],
    ['==', ['get', 'feed_id'], 'naturenergie_sharing'],
    ['==', ['get', 'feed_id'], 'coono'],
    ['match', ['slice', ['get', 'feed_id'], 0, 10], 'stadtmobil', true, false],
    ['match', ['slice', ['get', 'feed_id'], 0, 8], 'teilauto', true, false]
];

export const sharingStations = {
    NO_REALTIME_DATA: {
        label: 'Station ohne Echtzeitdaten',
        filter: sharingNoRealtimeData,
        color: '#615fdf'
    },
    OUTDATED_REALTIME_DATA: {
        label: 'Station mit veralteten Echtzeitdaten',
        filter:
            [
                'all',
                ['!', sharingNoRealtimeData],
                ['==', ['get', 'realtime_data_outdated'], true]
            ],
        color: '#cacaca'
    },
    FREE: {
        label: 'Station mit freien Fahrzeugen',
        filter:
            [
                'all',
                ['!', sharingNoRealtimeData],
                ['any',
                    ['!', ['has', 'realtime_data_outdated']],
                    ['==', ['get', 'realtime_data_outdated'], false]
                ],
                ['>', ['get', 'num_vehicles_available'], 0]
            ],
        color: '#fffb05'
    },
    OCCUPIED: {
        label: 'Station ohne freie Fahrzeuge',
        filter:
            [
                'all',
                ['!', sharingNoRealtimeData],
                ['any',
                    ['!', ['has', 'realtime_data_outdated']],
                    ['==', ['get', 'realtime_data_outdated'], false]
                ],
                ['==', ['get', 'num_vehicles_available'], 0],
            ],
        color: '#ffb805'
    }
};