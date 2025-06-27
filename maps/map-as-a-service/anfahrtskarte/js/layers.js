// ==============================
// SOURCES
// ==============================
export const sourceTourenGuides = {
    type: 'geojson',
    // data: 'data/Touren_Guides.geojson',
    data: '/karten_geojsons/maps/map-as-a-service/anfahrtskarte/Touren_Guides.geojson'
};

export const sourceTourenOhneGuides = {
    type: 'geojson',
    // data: 'data/Touren_ohne_Guides.geojson'
    data: '/karten_geojsons/maps/map-as-a-service/anfahrtskarte/Touren_ohne_Guides.geojson'
};


// ==============================
// LAYERS
// ==============================
const guides = {
    group: 'Touren mit Guides',
    type: 'line',
    source: 'sourceTourenGuides',
    lineWidth:
        [
            'interpolate', ['linear'], ['zoom'],
            14, 3,
            20, 5
        ]
};


export const layersTourenGuides = [
    {
        id: 'guides1',
        label: 'Christoph Wastian',
        color: 'green',
        filter:
            [
                '==', ['get', 'Guide'], 'Christoph Wastian'
            ],
        ...guides
    },
    {
        id: 'guides2',
        label: 'Monika Burkard',
        color: 'red',
        filter:
            [
                '==', ['get', 'Guide'], 'Monika Burkard'
            ],
        ...guides
    },
    {
        id: 'guides3',
        label: 'Paul Antoine Hillaert',
        color: 'orange',
        filter:
            [
                '==', ['get', 'Guide'], 'Paul Antoine Hillaert'
            ],
        ...guides
    },
    {
        id: 'guides4',
        label: 'Katharina Bitterle',
        color: 'green',
        filter:
            [
                '==', ['get', 'Guide'], 'Katharina Bitterle'
            ],
        ...guides
    },
    {
        id: 'guides5',
        label: 'Alexander Migl (ab Vaihingen), Malte Höfner (ab S-Süd)',
        color: 'blue',
        filter:
            [
                '==', ['get', 'Guide'], 'Alexander Migl (ab Vaihingen), Malte Höfner (ab S-Süd)'
            ],
        ...guides
    }
];


export const layersTourenOhneGuides = [
    {
        id: 'nichtGefahreneTracen',
        label: 'Touren ohne Guides',
        group: 'Touren ohne Guides',
        type: 'line',
        source: 'sourceTourenOhneGuides',
        lineWidth:
            [
                'interpolate', ['linear'], ['zoom'],
                14, 3,
                20, 5
            ],
        color: [
            'match',
            ['get', 'name'],
            'Fahrt am Morgen', '#e41a1c',
            'Stuttgart-West (8,3 km)', '#377eb8',
            'Stuttgart-West -> Stuttgart-Nord (1)', '#4daf4a',
            'Stuttgart-West -> Stuttgart-Nord (2)', '#984ea3',
            'Stuttgart-Ost -> Stuttgart-Nord (2,9 km)', '#ff7f00',
            '#000000'
        ],
        visibility: 'none'
    }
];