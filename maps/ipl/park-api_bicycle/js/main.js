import '../../../../src/plugins/mapbox-layer-control/layerControl.min.css';
import '../../../../src/css/layerSwitcherControl.css';
import '../../../../src/css/global.css';

export let layers, layersBicycle, layersItem;

const basemapSources = [], basemapLayers = [];

window.addEventListener('DOMContentLoaded', async () => {

    // ==============================
    // LOAD MODULES
    // ==============================  
    const [
        { map, shape, fillShape, lineShape, maplibreInspectControl, maplibreNavigationControl, geocoder },
        {
            sourceParkApiBicycle, layersParkApiBicycleOccupancy, layersParkApiBicycleTypes,
            sourceParkApiItem, layersParkApiItemOccupancy
        },
        { addSources, addLayers },
        { basemaps },
        { initializeControlLayers },
        { popups },
        { popupContent }
    ] = await Promise.all([
        import('../../../../src/js/initializeMap.js'),
        import('./layers.js'),
        import('../../../../src/js/layers/configSourcesLayers.js'),
        import('../../../../src/js/layerSwitcherControl.js'),
        import('./controlLayers.js'),
        import('../../../../src/js/popups.js'),
        import('../../../../src/js/layers/parkApi/parkApiPopups.js')
    ]);


    // ==============================
    // MAP CONTROLS
    // ==============================  
    basemaps(map, { basemapSources, basemapLayers });
    geocoder(map);
    maplibreInspectControl(map);
    maplibreNavigationControl(map);


    // ==============================
    // SOURCES AND LAYERS
    // ==============================
    map.on('load', () => {


        // DEFAULT LAYERS
        map.addSource('shape', shape);
        map.addLayer(fillShape);
        map.addLayer(lineShape);


        // PROJECT LAYERS             
        const sources = [
            { id: 'sourceParkApiBicycle', source: sourceParkApiBicycle },
            { id: 'sourceParkApiItem', source: sourceParkApiItem },
        ];
        sources.forEach(source => addSources(map, source));

        layersBicycle = [
            ...layersParkApiBicycleOccupancy,
            ...layersParkApiBicycleTypes,
        ];
        layersItem = layersParkApiItemOccupancy;
        layers = [
            ...layersBicycle,
            ...layersParkApiItemOccupancy
        ];
        layers.forEach(layer => addLayers(map, layer));


        // ==============================
        // LAYER CONTROL
        // ============================== 
        initializeControlLayers(map);


        // ==============================
        // BASEMAP LAYERS
        // ============================== 
        basemapSources.push(
            { id: 'shape', source: shape },
            ...sources
        );

        basemapLayers.push(
            fillShape,
            lineShape,
            ...layers
        );


        // ==============================
        // POPUPS
        // ==============================       
        popups(map, layers, popupContent);


    });


});