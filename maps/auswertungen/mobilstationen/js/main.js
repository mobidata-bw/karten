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
        {
            sourceMobilstationen, layersMobilstationen,
            sourceOEV, layersOEV,
            sourceMIV, layersMIV,
            sourceFahrrad, layersFahrrad,
            sourceScooter, layersScooter
        },
        { addSources, addLayers },
        { basemaps },
        { initializeControlLayers },
        { popups },
        {
            popupContentOEV,
            popupContentMIV,
            popupContentFahrrad,
            popupContentScooter
        }
    ] = await Promise.all([
        import('../../../../src/js/initializeMap.js'),
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
        map.addSource('shape', shape);
        map.addLayer(fillShape);
        map.addLayer(lineShape);


        // PROJECT LAYERS    
        const sources = [
            { id: 'sourceMobilstationen', source: sourceMobilstationen },
            { id: 'sourceOEV', source: sourceOEV },
            { id: 'sourceMIV', source: sourceMIV },
            { id: 'sourceFahrrad', source: sourceFahrrad },
            { id: 'sourceScooter', source: sourceScooter }
        ];
        sources.forEach(source => addSources(map, source));

        layers = [
            ...layersMobilstationen,
            ...layersOEV,
            ...layersMIV,
            ...layersFahrrad,
            ...layersScooter
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
        popups(map, layersOEV, popupContentOEV);
        popups(map, layersMIV, popupContentMIV);
        popups(map, layersFahrrad, popupContentFahrrad);
        popups(map, layersScooter, popupContentScooter);


    });


});