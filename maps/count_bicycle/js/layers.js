// ==============================
// SOURCES
// ==============================
export const sourceCountBicycle = {
    type: 'geojson',
    data: '/karten_geojsons/maps/count_bicycle/fahrradzaehler_tageswerten_gesamt.geojson'
};


// ==============================
// LAYERS
// ==============================
const layers = {
    source: 'sourceCountBicycle',
    group: 'Fahrradzählstellen'
};


export const layersCountBicycle = [
      {
        id: 'countBicycle1',
        label: 'bis 100 Tsd.',
        filter:
            [
                '<=', ['get', '2024_ALL'], 100000
            ],
        color: '#ffe600',
        ...layers
    },  
    {
        id: 'countBicycle2',
        label: '100 - 500 Tsd.',
        filter:
            [
                'all',
                ['>', ['get', '2024_ALL'], 100000],
                ['<=', ['get', '2024_ALL'], 500000]
            ],
        color: '#f6b500',
        ...layers
    },
    {
        id: 'countBicycle3',
        label: '500 Tsd. - 1 Mio.',
        filter:
            [
                'all',
                ['>', ['get', '2024_ALL'], 500000],
                ['<=', ['get', '2024_ALL'], 1000000]
            ],
        color: '#e78300',
        ...layers
    },
    {
        id: 'countBicycle4',
        label: '1-2 Mio.',
        filter:
            [
                'all',
                ['>', ['get', '2024_ALL'], 1000000],
                ['<=', ['get', '2024_ALL'], 2000000]
            ],
        color: '#d25000',
        ...layers
    },  
    {
        id: 'countBicycle5',
        label: 'über 2 Mio.',
        filter:
            [
                '>', ['get', '2024_ALL'], 2000000
            ],
        color: '#b70101',
        ...layers
    }
];