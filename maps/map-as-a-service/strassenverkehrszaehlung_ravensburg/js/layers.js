// ==============================
// SOURCES
// ==============================
export const sourceCountRavensburg = {
    type: 'geojson',
    // data: 'data/strassenverkehrszaehlung_ravensburg.geojson'
    data: '/karten_geojsons/maps/map-as-a-service/strassenverkehrszaehlung_ravensburg/strassenverkehrszaehlung_ravensburg.geojson'
};


// ==============================
// LAYERS
// ==============================
const layers = {
    source: 'sourceCountRavensburg',
    group: 'Straßenverkehrszählung Ravensburg',
};

export const layersCountRavensburg = [
    {
        id: 'countRavensburg1',
        label: 'bis 1 Tsd.',
        filter:
        [
            '<=', ['get', 'SUMME'], 1000
        ],
        color: '#ffe600',
        ...layers
    },
    {
        id: 'countRavensburg2',
        label: '1 - 5 Tsd.',
        filter:
        [
            'all',
            ['>', ['get', 'SUMME'], 1000],
            ['<=', ['get', 'SUMME'], 5000]
        ],
        color: '#f6b500',
        ...layers
    },
    {
        id: 'countRavensburg3',
        label: '5 Tsd. - 15 Tsd.',
        filter:
            [
                'all',
                ['>', ['get', 'SUMME'], 5000],
                ['<=', ['get', 'SUMME'], 15000]
            ],
        color: '#e78300',
        ...layers
    },
    {
        id: 'countRavensburg4',
        label: '15 Tsd. - 30 Tsd.',
        filter:
        [
            'all',
            ['>', ['get', 'SUMME'], 15000],
            ['<=', ['get', 'SUMME'], 30000]
        ],
    color: '#d25000',
        ...layers
    },
    {
        id: 'countRavensburg5',
        label: 'über 30 Tsd.',
        filter:
            [
                '>', ['get', 'SUMME'], 30000
            ],
        color: '#b70101',
        ...layers
    }
];