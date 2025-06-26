// ==============================
// SOURCES
// ==============================
export const sourceGuide = {
    type: 'geojson',
    data: 'data/Guide.geojson'
};

export const sourceNichtGefahreneTracen = {
    type: 'geojson',
    data: 'data/Nicht_gefahrene_Tracen.geojson'
};


// ==============================
// LAYERS
// ==============================
export const layersGuide = [
    {
        id: 'guide',
        label: 'Guide',
        group: 'Fahrradrouten',
        type: 'line',
        source: 'sourceGuide',
        color: 'green',
        lineWidth:
            [
                'interpolate', ['linear'], ['zoom'],
                14, 3,
                20, 5
            ]
    }
];

export const layersNichtGefahreneTracen = [
    {
        id: 'nichtGefahreneTracen',
        label: 'Nicht gefahrene Tracen',
        group: 'Fahrradrouten',
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