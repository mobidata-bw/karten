// ==============================
// SOURCES
// ==============================
export const sourceGuides = {
    type: 'geojson',
    // data: 'data/Touren_Guides.geojson',
    data: '/karten_geojsons/maps/map-as-a-service/anfahrtskarte/Touren_Guides.geojson'
};

export const sourceNichtGefahreneTracen = {
    type: 'geojson',
    // data: 'data/Nicht_gefahrene_Tracen.geojson'
    data: '/karten_geojsons/maps/map-as-a-service/anfahrtskarte/Nicht_gefahrene_Tracen.geojson'
};


// ==============================
// LAYERS
// ==============================
const guides = {
    group: 'Guides',
    type: 'line',
    source: 'sourceGuides',
    lineWidth:
    [
        'interpolate', ['linear'], ['zoom'],
        14, 3,
        20, 5
    ]
};


export const layersGuides = [
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
    }    ,
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

export const layersNichtGefahreneTracen = [
    {
        id: 'nichtGefahreneTracen',
        label: 'Sonstige Fahrten',
        group: 'Sonstige Fahrten',
        type: 'line',
        source: 'sourceNichtGefahreneTracen',
        color: 'red',
        lineWidth:
            [
                'interpolate', ['linear'], ['zoom'],
                14, 3,
                20, 5
            ]
    }
];