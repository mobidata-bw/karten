// ==============================
// SOURCES
// ==============================
export const sourceBicycleServicePoints = {
    layer: 'MobiData-BW:bicycle_service_points',
    style: 'MobiData-BW:mdbw_bicycle_service_points',
    bounds: [7.2, 47.5, 10.4, 49.6],
    // server: 'test'
};


// ==============================
// LAYERS
// ==============================
const layers = {
    source: 'sourceBicycleServicePoints',
    sourceLayer: 'bicycle_service_points',
    group: 'Radservicepunkte',
    subGroup: 'Datengeber'
};

export const layersBicycleServicePoints = [
    {
        id: 'konstanz',
        label: 'Stadt Konstanz',
        filter: [
            '==', ['get', 'Datengeber'], 'Stadt Konstanz'
        ],
        color: '#00ff00',
        ...layers
    },
    {
        id: 'freiburg',
        label: 'Stadt Freiburg im Breisgau',
        filter: [
            '==', ['get', 'Datengeber'], 'Stadt Freiburg im Breisgau'
        ],
        color: 'black',
        ...layers
    },
    {
        id: 'adac',
        label: 'ADAC',
        filter: [
            '==', ['get', 'Datengeber'], 'ADAC'
        ],
        color: '#ffd000',
        ...layers
    },
    {
        id: 'TFIS',
        label: 'Touristisches Freizeitinformationssystem',
        filter: [
            '==', ['get', 'Datengeber'], 'Touristisches Freizeitinformationssystem'
        ],
        color: '#cacaca',
        ...layers
    },
    {
        id: 'radvis',
        label: 'RadVIS',
        filter: [
            '==', ['get', 'Datengeber'], 'RadVIS'
        ],
        color: '#e6007d',
        ...layers
    },
    {
        id: 'radkultur',
        label: 'RadKULTUR',
        filter: [
            '==', ['get', 'Datengeber'], 'RadKULTUR'
        ],
        color: '#0d46a0ff',
        ...layers
    }
];