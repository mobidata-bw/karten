// ==============================
// SOURCES
// ==============================
export const sourceNvbw = {
    type: 'geojson',
    // data: 'data/nvbw.geojson'
    data: '/karten_geojsons/maps/map-as-a-service/anfahrtskarte/nvbw.geojson'
};

export const sourceTouren = {
    type: 'geojson',
    // data: 'data/touren.geojson',
    data: '/karten_geojsons/maps/map-as-a-service/anfahrtskarte/touren.geojson'
};


// ==============================
// LAYERS
// ==============================
export const layersNvbw = [
    {
        id: 'nvbw',
        type: 'fill',
        source: 'sourceNvbw',
        color: '#006eaf',
        fillOutlineColor: 'black'
    }
];


const touren = {
    type: 'line',
    source: 'sourceTouren',
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
        label: 'Bad Cannstatt > König-Karl-Brücke > Rosensteinpark',
        group: 'Touren mit Guides',
        color: 'green',
        filter:
            [
                '==', ['get', 'Guide'], 'Christoph Wastian'
            ],
        ...touren
    },
    {
        id: 'guides2',
        label: 'Westbahnhof > Reinsburgstr. > Theo > Hbf.',
        group: 'Touren mit Guides',
        color: 'red',
        filter:
            [
                '==', ['get', 'Guide'], 'Monika Burkard'
            ],
        ...touren
    },
    {
        id: 'guides3',
        label: 'S-West, Hölderlinplatz - Eberhardstr. > Schlossgarten',
        group: 'Touren mit Guides',
        color: 'orange',
        filter:
            [
                '==', ['get', 'Guide'], 'Paul Antoine Hillaert'
            ],
        ...touren
    },
    {
        id: 'guides4',
        label: 'S-West Bebelstr. > Theo > Hbf > Milaneo',
        group: 'Touren mit Guides',
        color: 'green',
        filter:
            [
                '==', ['get', 'Guide'], 'Katharina Bitterle'
            ],
        ...touren
    },
    {
        id: 'guides5',
        label: 'S-Vaihingen > Hauptradroute 1 > S-Süd > Schlossgarten',
        group: 'Touren mit Guides',
        color: 'blue',
        filter:
            [
                '==', ['get', 'Guide'], 'Alexander Migl (ab Vaihingen), Malte Höfner (ab S-Süd)'
            ],
        ...touren
    }
];


export const layersTourenOhneGuides = [
    {
        id: 'ohneGuides1',
        label: 'Heusteigviertel > Schlossgarten > Rosensteinpark',
        group: 'Touren ohne Guides',
        color: '#e41a1c',
        visibility: 'none',
        filter:
            [
                '==', ['get', 'name'], 'Fahrt am Morgen'
            ],
        ...touren
    },
    {
        id: 'ohneGuides2',
        label: 'S-West > Killesberg > Feuerbacher Tal > Pragsattel',
        group: 'Touren ohne Guides',
        color: '#377eb8',
        visibility: 'none',
        filter:
            [
                '==', ['get', 'name'], 'Stuttgart-West -> Stuttgart-Nord (1)'
            ],
        ...touren
    },
    {
        id: 'ohneGuides3',
        label: 'S-Ost > Rosensteinpark > Posthof',
        group: 'Touren ohne Guides',
        color: '#4daf4a',
        visibility: 'none',
        filter:
            [
                '==', ['get', 'name'], 'Stuttgart-Ost -> Stuttgart-Nord (2,9 km)'
            ],
        ...touren
    },
    {
        id: 'ohneGuides4',
        label: 'S-West > Katharinenhospital > Milaneo (und zurück)',
        group: 'Touren ohne Guides',
        color: '#984ea3',
        visibility: 'none',
        filter:
            [
                '==', ['get', 'name'], 'Stuttgart-West (8,3 km)'
            ],
        ...touren
    },
    {
        id: 'ohneGuides5',
        label: 'S-West > Panoramastr. > Milaneo',
        group: 'Touren ohne Guides',
        color: '#ff7f00',
        visibility: 'none',
        filter:
            [
                '==', ['get', 'name'], 'Stuttgart-West -> Stuttgart-Nord (2)'
            ],
        ...touren
    }
];