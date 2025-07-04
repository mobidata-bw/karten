// ==============================
// SOURCES
// ==============================
export const sourceStrassennetz = {
    type: 'geojson',
    data: '/karten_geojsons/maps/strassennetz_netzknoten/BLK_Strassennetz_250130.geojson'
};

export const sourceNetzknoten = {
    type: 'geojson',
    data: {
        type: "FeatureCollection",
        features: []
    }   
};


// ==============================
// LAYERS
// ==============================
const strassennetz = {
    source: 'sourceStrassennetz',
    type: 'line',
    group: 'Straßennetz',
    lineWidth:
        [
            "interpolate", ["linear"], ["zoom"],
            6, 2,
            12, 3
        ]
};

export const layersStrassennetz = [
    {
        id: 'strassennetz_K',
        label: 'Kreisstraße',
        color: '#a88f00',
        filter:
            [
                "==", ["get", "StrassenArt"], "K"
            ],
        ...strassennetz
    },
    {
        id: 'strassennetz_L',
        label: 'Landstraße',
        color: '#00ff00',
        filter:
            [
                "==", ["get", "StrassenArt"], "L"
            ],
        ...strassennetz
    },
    {
        id: 'strassennetz_B',
        label: 'Bundesstraße',
        color: '#0089cd',
        filter:
            [
                "==", ["get", "StrassenArt"], "B"
            ],
        ...strassennetz
    }
];

export const layersNetzknoten = [
    {
        id: 'netzknoten',
        label: 'Netzknoten',
        group: 'Netzknoten',
        source: 'sourceNetzknoten',
        color: '#e12942',
        visibility: 'none',
        url: '/karten_geojsons/maps/strassennetz_netzknoten/BLK_Netzknoten_250130.geojson'
    }
];