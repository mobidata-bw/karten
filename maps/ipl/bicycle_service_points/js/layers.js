// ==============================
// SOURCES
// ==============================
export const sourceBicycleServicePoints = {
    layer: 'MobiData-BW:bicycle_service_points',
    style: '',
    bounds: [7.5, 47.4, 10.4, 49.7],
    server: 'test'
};


// ==============================
// LAYERS
// ==============================
const layers = {
    source: 'sourceBicycleServicePoints',
    sourceLayer: 'bicycle_service_points',
    group: 'Datengeber'
};

export const layersBicycleServicePoints = [
    {
        id: 'TFIS',
        label: 'Touristisches Freizeitinformationssystem',
        filter:
            [
                'any',
                ['==', ['get', 'QuelleLayer'], 'TFISReparatur'],
                ['==', ['get', 'QuelleLayer'], 'TFISRadservicepunkte']
            ],
        color: '#cacaca',
        ...layers
    },
    {
        id: 'radvis',
        label: 'RadVIS',
        filter:
            [
                '==', ['get', 'QuelleLayer'], 'RadVIS'
            ],
        color: '#e6007d',
        ...layers
    },
    {
        id: 'radkultur',
        label: 'RadKULTUR',
        filter:
            [
                '==', ['get', 'QuelleLayer'], 'RadKULTUR'
            ],
        color: '#0d46a0ff',
        ...layers
    },
    {
        id: 'konstanz',
        label: 'Stadt Konstanz',
        filter:
            [
                '==', ['get', 'QuelleLayer'], 'SB_Fahrradreparaturstationen(Konstanz)'
            ],
        color: '#00ff00',
        ...layers
    },
    {
        id: 'freiburg',
        label: 'Stadt Freiburg im Breisgau',
        filter:
            [
                '==', ['get', 'QuelleLayer'], 'Frelo-Radreparaturstationen'
            ],
        color: 'black',
        ...layers
    }
];