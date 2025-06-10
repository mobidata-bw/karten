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
        { map, shape, fillShape, lineShape, maplibreInspectControl, maplibreNavigationControl, geocoder },
        { sourceRoadworks, layersRoadworks },
        { wms },
        { addSources, addLayers },
        { basemaps },
        { initializeControlLayers },
        { popups },
        { popupContent }
    ] = await Promise.all([
        import('../../../../src/js/initializeMap.js'),
        import('./layers.js'),
        import('../../../../src/js/wms.js'),
        import('../../../../src/js/layers/configSourcesLayers.js'),
        import('../../../../src/js/layerSwitcherControl.js'),
        import('./controlLayers.js'),
        import('../../../../src/js/popups.js'),
        import('./popupContent.js')
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
            { id: 'sourceRoadworks', source: sourceRoadworks },
        ];
        sources.forEach(source => addSources(map, source));

        layers = layersRoadworks;
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
        // WMS & POPUPS
        // ==============================    
        wms(map, layers, popupContent);


    });

});