// ==============================
// SOURCES
// ==============================
export const sourceVerkehrszaehlungRavensburg = {
    type: 'geojson',
    data: 'data/verkehrszaehlung_ravensburg.geojson'
    // data: '/karten_geojsons/maps/map-as-a-service/verkehrszaehlung_ravensburg/verkehrszaehlung_ravensburg.geojson'
};


// ==============================
// LAYERS
// ==============================
const layers = {
    source: 'sourceVerkehrszaehlungRavensburg',
    group: 'Verkehrszählung',
};

export const layersVerkehrszaehlungRavensburg = [
    {
        id: 'guides1',
        label: 'bis 1 Tsd.',
        filter:
        [
            '<=', ['get', 'SUMME'], 1000
        ],
        color: '#ffe600',
        ...layers
    },
    {
        id: 'guides2',
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
        id: 'guides3',
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
        id: 'guides4',
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
        id: 'guides5',
        label: 'über 30 Tsd.',
        filter:
            [
                '>', ['get', 'SUMME'], 30000
            ],
        color: '#b70101',
        ...layers
    }
];