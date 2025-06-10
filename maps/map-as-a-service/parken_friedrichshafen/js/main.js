import '../../../../src/plugins/mapbox-layer-control/layerControl.min.css';
import '../../../../src/css/layerSwitcherControl.css';
import '../../../../src/css/global.css';

export let layers;

const basemapSources = [], basemapLayers = [];


window.addEventListener('DOMContentLoaded', async () => {

    // ==============================
    // LOAD MODULES
    // ==============================  
    const [
        { fillShape, lineShape, maplibreInspectControl, maplibreNavigationControl, geocoder },
        { map, shape },
        {
            sourceParking, layersParkingOnStreet, layersParkingOther,
            sourceTaxi, layersTaxi
        },
        { addSources, addLayers },
        { initializeControlLayers },
        { popups },
        {
            popupContentOnStreet,
            popupContentTaxis
        }
    ] = await Promise.all([
        import('../../../../src/js/initializeMap.js'),
        import('./initializeMap.js'),
        import('./layers.js'),
        import('../../../../src/js/layers/configSourcesLayers.js'),
        import('./controlLayers.js'),
        import('../../../../src/js/popups.js'),
        import('./popupContent.js')
    ]);


    // ==============================
    // INITIALIZE MAP
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
            { id: 'sourceParking', source: sourceParking },
            { id: 'sourceTaxi', source: sourceTaxi }
        ];
        sources.forEach(source => addSources(map, source));

        layers = [
            ...layersParkingOnStreet,
            ...layersParkingOther,
            ...layersTaxi
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
        popups(map, layersParkingOnStreet, popupContentOnStreet);
        popups(map, layersParkingOther, popupContentOnStreet);
        popups(map, layersTaxi, popupContentTaxis);


    });


});