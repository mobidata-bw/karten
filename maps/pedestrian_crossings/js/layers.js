// ==============================
// SOURCES
// ==============================
export const sourceFootway = {
    type: 'geojson',
    // data: '/karten_geojsons/maps/pedestrian_crossings/footway.geojson'
    data: {
        type: 'FeatureCollection',
        features: []
    }
};

export const sourceMarked = {
    type: 'geojson',
    // data: '/karten_geojsons/maps/pedestrian_crossings/marked.geojson'
    data: {
        type: 'FeatureCollection',
        features: []
    }
};

export const sourceUncontrolled = {
    type: 'geojson',
    // data: '/karten_geojsons/maps/pedestrian_crossings/uncontrolled.geojson'
    data: {
        type: 'FeatureCollection',
        features: []
    }
};

export const sourceZebra = {
    type: 'geojson',
    data: '/karten_geojsons/maps/pedestrian_crossings/zebra.geojson'
    // data: {
    //     type: 'FeatureCollection',
    //     features: []
    // }
};


// ==============================
// LAYERS
// ==============================
const layers = {
    group: 'Fußgängerüberwege'
};


export const layersPedestrianCrossings = [
    {
        id: 'uncontrolled',
        label: 'Uncontrolled',
        source: 'sourceUncontrolled',
        color: '#C4001F',
        ...layers,
        url: '/karten_geojsons/maps/pedestrian_crossings/uncontrolled.geojson',
        visibility: 'none'
    },
    {
        id: 'footway',
        label: 'Footway',
        source: 'sourceFootway',
        color: '#75b9a2',
        ...layers,
        url: '/karten_geojsons/maps/pedestrian_crossings/footway.geojson',
        visibility: 'none'
    },
    {
        id: 'marked',
        label: 'Marked',
        source: 'sourceMarked',
        color: '#ffe280',
        ...layers,
        url: '/karten_geojsons/maps/pedestrian_crossings/marked.geojson',
        visibility: 'none'
    },
    {
        id: 'zebra',
        label: 'Zebra',
        source: 'sourceZebra',
        color: '#366491',
        ...layers,
        // url: '/karten_geojsons/maps/pedestrian_crossings/zebra.geojson'
    }
];