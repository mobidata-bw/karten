import '../css/styles.css';


// ==============================
// SOURCES
// ==============================
export const sourceRoadworks = {
    type: 'raster',
    layer: 'MobiData-BW:roadworks'
};


// ==============================
// LAYERS
// ==============================
export const layersRoadworks = [
    {
        id: 'roadworks',
        label: 'Baustellen',
        group: 'Baustellen',
        type: 'raster',
        source: 'sourceRoadworks',
        layer: 'MobiData-BW:roadworks',
        style: 'mdbw_traffic_roadworks_default',
    }
];