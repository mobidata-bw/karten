import { setGeoJsonPath } from '../../../src/js/setGeoJsonPath.js';


// ==============================
// SOURCES
// ==============================
export const sourceFootway = {
    type: 'geojson',
    data: {
        type: 'FeatureCollection',
        features: []
    }
};

export const sourceMarked = {
    type: 'geojson',
    data: {
        type: 'FeatureCollection',
        features: []
    }
};

export const sourceUncontrolled = {
    type: 'geojson',
    data: {
        type: 'FeatureCollection',
        features: []
    }
};

export const sourceZebra = setGeoJsonPath('maps/pedestrian_crossings', 'zebra');


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
        url: setGeoJsonPath('maps/pedestrian_crossings', 'uncontrolled').data,
        visibility: 'none'
    },
    {
        id: 'footway',
        label: 'Footway',
        source: 'sourceFootway',
        color: '#75b9a2',
        ...layers,
        url: setGeoJsonPath('maps/pedestrian_crossings', 'footway').data,
        visibility: 'none'
    },
    {
        id: 'marked',
        label: 'Marked',
        source: 'sourceMarked',
        color: '#ffe280',
        ...layers,
        url: setGeoJsonPath('maps/pedestrian_crossings', 'marked').data,
        visibility: 'none'
    },
    {
        id: 'zebra',
        label: 'Zebra',
        source: 'sourceZebra',
        color: '#366491',
        ...layers
    }
];