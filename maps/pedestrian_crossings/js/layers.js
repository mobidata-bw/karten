// ==============================
// SOURCES
// ==============================
export const sourceFootway = {
    type: 'geojson',
    data: 'https://www.mobidata-bw.de/karten_geojsons/maps/pedestrian_crossings/footway.geojson'
};

export const sourceMarked = {
    type: 'geojson',
    data: 'https://www.mobidata-bw.de/karten_geojsons/maps/pedestrian_crossings/marked.geojson'
};

export const sourceUncontrolled = {
    type: 'geojson',
    data: 'https://www.mobidata-bw.de/karten_geojsons/maps/pedestrian_crossings/uncontrolled.geojson'
};

export const sourceZebra = {
    type: 'geojson',
    data: 'https://www.mobidata-bw.de/karten_geojsons/maps/pedestrian_crossings/zebra.geojson'
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
        ...layers
    },
    {
        id: 'footway',
        label: 'Footway',
        source: 'sourceFootway',
        color: '#75b9a2',
        ...layers
    },
    {
        id: 'marked',
        label: 'Marked',
        source: 'sourceMarked',
        color: '#ffe280',
        ...layers
    },
    {
        id: 'zebra',
        label: 'Zebra',
        source: 'sourceZebra',
        color: '#366491',
        ...layers
    }
];