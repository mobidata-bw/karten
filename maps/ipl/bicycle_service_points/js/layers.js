// ==============================
// SOURCES
// ==============================
export const sourceBicycleServicePoints = {
    layer: 'MobiData-BW:bicycle_service_points',
    style: '',
    bounds: [7.3, 47.4, 10.4, 49.7]
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
        filter:
            [
                '==', ['get', 'Datengeber'], 'SB_Fahrradreparaturstationen(Konstanz)'
            ],
        color: '#00ff00',
        ...layers
    },
    {
        id: 'freiburg',
        label: 'Stadt Freiburg im Breisgau',
        filter:
            [
                '==', ['get', 'Datengeber'], 'Frelo-Radreparaturstationen'
            ],
        color: 'black',
        ...layers
    },
    {
        id: 'adac',
        label: 'ADAC',
        filter:
            [
                '==', ['get', 'Datengeber'], 'ADAC'
            ],
        color: '#ffd000',
        ...layers
    },
    {
        id: 'TFIS',
        label: 'Touristisches Freizeitinformationssystem',
        filter:
            [
                'any',
                ['==', ['get', 'Datengeber'], 'TFISReparatur'],
                ['==', ['get', 'Datengeber'], 'TFISRadservicepunkte']
            ],
        color: '#cacaca',
        ...layers
    },
    {
        id: 'radvis',
        label: 'RadVIS',
        filter:
            [
                '==', ['get', 'Datengeber'], 'RadVIS'
            ],
        color: '#e6007d',
        ...layers
    },
    {
        id: 'radkultur',
        label: 'RadKULTUR',
        filter:
            [
                '==', ['get', 'Datengeber'], 'RadKULTUR'
            ],
        color: '#0d46a0ff',
        ...layers
    }
];