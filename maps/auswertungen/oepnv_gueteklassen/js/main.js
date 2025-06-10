import '../../../../src/plugins/mapbox-layer-control/layerControl.min.css';
import '../../../../src/css/layerSwitcherControl.css';
import '../../../../src/css/global.css';
import '../css/styles.css';

export let layers;

const basemapSources = [], basemapLayers = [];


window.addEventListener('DOMContentLoaded', async () => {

    // ==============================
    // LOAD MODULES
    // ==============================  
    const [
        { map, shape, fillShape, lineShape, maplibreInspectControl, maplibreNavigationControl, geocoder },
        { shapeRegierungsbezirke, lineShapeRegierungsbezirke },
        {
            sourceOepnvGueteklassenStuttgart,
            sourceOepnvGueteklassenKarlsruhe,
            sourceOepnvGueteklassenFreiburg,
            sourceOepnvGueteklassenTuebingen,
            layersOepnvGueteklassen
        },
        { addSources, addLayers },
        { basemaps },
        { initializeControlLayers },
        { popups },
        { popupContent }
    ] = await Promise.all([
        import('../../../../src/js/initializeMap.js'),
        import('./initializeMap.js'),
        import('./layers.js'),
        import('../../../../src/js/layers/configSourcesLayers.js'),
        import('../../../../src/js/layerSwitcherControl.js'),
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
        map.addSource('shapeRegierungsbezirke', shapeRegierungsbezirke);
        map.addLayer(lineShapeRegierungsbezirke);

        map.addSource('shape', shape);
        map.addLayer(fillShape);
        map.addLayer(lineShape);


        // PROJECT LAYERS    
        const sources = [
            { id: 'sourceOepnvGueteklassenStuttgart', source: sourceOepnvGueteklassenStuttgart },
            { id: 'sourceOepnvGueteklassenKarlsruhe', source: sourceOepnvGueteklassenKarlsruhe },
            { id: 'sourceOepnvGueteklassenFreiburg', source: sourceOepnvGueteklassenFreiburg },
            { id: 'sourceOepnvGueteklassenTuebingen', source: sourceOepnvGueteklassenTuebingen }
        ];
        sources.forEach(source => addSources(map, source));

        layers = layersOepnvGueteklassen;
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
            { id: 'shapeRegierungsbezirke', source: shapeRegierungsbezirke },
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