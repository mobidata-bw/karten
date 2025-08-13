// ==============================
// VEHICLES
// ==============================
export const sourceSharingVehicles = {
    layer: 'MobiData-BW:sharing_vehicles',
    style: 'MobiData-BW:mdbw_sharing_vehicles_default',
    bounds: [4.0, 45.8, 13.5, 54.6]
};

const layersSharingVehicles = {
    subGroup: 'Free-Floating-Fahrzeuge',
    source: 'sourceSharingVehicles',
    sourceLayer: 'sharing_vehicles'
};

export const sharingVehicles = {
    OUTDATED_REALTIME_DATA: {
        label: 'Echzeitdaten älter 30 Minuten',
        filter: (mode) => [
            'all',
            ['==', ['get', 'form_factor'], mode],
            ['==', ['get', 'realtime_data_outdated'], true]
        ],
        color: '#cacaca',
        ...layersSharingVehicles
    },
    REALTIME_DATA: {
        label: 'Fahrzeug verfügbar',
        filter: (mode) => [
            'all',
            ['==', ['get', 'form_factor'], mode],
            [
                'any',
                ['==', ['get', 'realtime_data_outdated'], false],
                ['==', ['get', 'realtime_data_outdated'], null]
            ]
        ],
        color: '#91FFFF',
        ...layersSharingVehicles
    }
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

const layersSharingStations = {
    subGroup: 'Stationen',
    source: 'sourceSharingStations',
    sourceLayer: 'sharing_stations'
};

export const sharingStations = {
    NO_REALTIME_DATA: {
        label: 'Echtzeitdaten nicht vorhanden',
        filter: (mode) => [
            'all',
            sharingNoRealtimeData,
            ['>=', ['get', `num_${mode}_available`], 0]
        ],
        color: '#615fdf',
        ...layersSharingStations
    },
    OUTDATED_REALTIME_DATA: {
        label: 'Echtzeitdaten älter 30 Minuten',
        filter: (mode) => [
            'all',
            ['!', sharingNoRealtimeData],
            ['>=', ['get', `num_${mode}_available`], 0],
            [
                'any',
                ['==', ['get', 'is_virtual_station'], false],
                ['!', ['has', 'is_virtual_station']]
            ],
            ['==', ['get', 'realtime_data_outdated'], true]
        ],
        color: '#cacaca',
        ...layersSharingStations
    },
    FREE: {
        label: 'Fahrzeuge verfügbar',
        filter: (mode) => [
            'all',
            ['!', sharingNoRealtimeData],
            ['>', ['get', `num_${mode}_available`], 0],
            ['==', ['get', 'realtime_data_outdated'], false]
        ],
        color: '#fffb05',
        ...layersSharingStations
    },
    OCCUPIED: {
        label: 'Fahrzeuge nicht verfügbar',
        filter: (mode) => [
            'all',
            ['!', sharingNoRealtimeData],
            ['==', ['get', `num_${mode}_available`], 0],
            ['==', ['get', 'realtime_data_outdated'], false]
        ],
        color: '#ffb805',
        ...layersSharingStations
    }
};