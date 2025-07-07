// ==============================
// VEHICLES
// ==============================
export const sourceSharingVehicles = {
    layer: 'MobiData-BW:sharing_vehicles',
    style: 'MobiData-BW:mdbw_sharing_vehicles_default',
    bounds: [4.0, 45.8, 13.5, 54.6]
};


export const sharingVehicles = {
    source: 'sourceSharingVehicles',
    sourceLayer: 'sharing_vehicles',
    label: 'Free-Floating-Fahrzeuge',
    filter: mode => ['==', ['get', 'form_factor'], mode],
    color: '#91FFFF'
};


// ==============================
// STATIONS
// ==============================
export const sourceSharingStations = {
    layer: 'MobiData-BW:sharing_stations',
    style: 'MobiData-BW:mdbw_sharing_stations_default',
    bounds: [4.0, 45.8, 13.5, 54.6],
    // server: 'test'
};

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
        color: '#615fdf',
        filter: (mode) => [
            'all',
            sharingNoRealtimeData,
            ['>=', ['get', `num_${mode}_available`], 0]
        ]
    },
    OUTDATED_REALTIME_DATA: {
        label: 'Station mit veralteten Echtzeitdaten',
        filter: (mode) => [
            'all',
            ['!', sharingNoRealtimeData],
            ['==', ['get', 'realtime_data_outdated'], true],
            ['>=', ['get', `num_${mode}_available`], 0]
        ],
        color: '#cacaca'
    },
    FREE: {
        label: 'Station mit freien Fahrzeugen',
        filter: (mode) => [
            'all',
            ['!', sharingNoRealtimeData],
            ['any',
                ['!', ['has', 'realtime_data_outdated']],
                ['==', ['get', 'realtime_data_outdated'], false]
            ],
            ['>', ['get', 'num_vehicles_available'], 0],
            ['>=', ['get', `num_${mode}_available`], 0]
        ],
        color: '#fffb05'
    },
    OCCUPIED: {
        label: 'Station ohne freie Fahrzeuge',
        filter: (mode) => [
            'all',
            ['!', sharingNoRealtimeData],
            ['any',
                ['!', ['has', 'realtime_data_outdated']],
                ['==', ['get', 'realtime_data_outdated'], false]
            ],
            ['==', ['get', 'num_vehicles_available'], 0],
            ['>=', ['get', `num_${mode}_available`], 0]
        ],
        color: '#ffb805'
    }
};