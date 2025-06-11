import '../../../../src/plugins/mapbox-layer-control/layerControl.min.css';
import '../../../../src/css/layerSwitcherControl.css';
import '../../../../src/css/global.css';

import { getMap, initializedMap } from '../../../gebuendelte_daten/js/main.js';

export let layers;


window.addEventListener('DOMContentLoaded', async () => {

    // ==============================
    // LOAD MODULES
    // ==============================  
    await initializedMap;
    const map = getMap();

    
    const [
        { shapeKonstanz, lineShapeKonstanz, fillShapeKonstanz },
        {
            sourceKonstanzPls, layersKonstanzPls,
            sourceKonstanzBehindertenparken, layersKonstanzBehindertenparken
        },
        { addSources, addLayers },
        { initializeControlLayers },
        { popups },
        {
            popKonstanzPls,
            popKonstanzBehindertenparken
        },
        { layerSwitcher }
    ] = await Promise.all([
        import('./initializeMap.js'),
        import('./layers.js'),
        import('../../../../src/js/layers/configSourcesLayers.js'),
        import('./controlLayers.js'),
        import('../../../../src/js/popups.js'),
        import('./popupContent.js'),
        import('../../../../src/js/layerSwitcherControl.js')
    ]);

    
    // ==============================
    // INITIALIZE MAP
    // ==============================  
    map.removeControl(layerSwitcher);
    map.setCenter([9.156810, 47.701872]);
    map.setStyle('https://tiles.mobidata-bw.de/styles/streets/style.json');
    map.setMaxBounds([
        [9.034195, 47.606163],
        [9.286880, 47.780866]
    ]);


    // ==============================
    // SOURCES AND LAYERS
    // ==============================
    map.on('load', () => {

        // DEFAULT LAYERS
        map.addSource('shapeKonstanz', shapeKonstanz);
        map.addLayer(fillShapeKonstanz);
        map.addLayer(lineShapeKonstanz);

        map.setLayoutProperty('fillShape', 'visibility', 'none');
        map.setLayoutProperty('lineShape', 'visibility', 'none');


        // PROJECT LAYERS    
        const sources = [
            { id: 'sourceKonstanzPls', source: sourceKonstanzPls },
            { id: 'sourceKonstanzBehindertenparken', source: sourceKonstanzBehindertenparken }
        ];
        sources.forEach(source => addSources(map, source));

        layers = [
            ...layersKonstanzBehindertenparken,
            ...layersKonstanzPls
        ];
        layers.forEach(layer => addLayers(map, layer));


        // ==============================
        // LAYER CONTROL
        // ==============================     
        initializeControlLayers(map);


        // ==============================
        // POPUPS
        // ============================== 
        popups(map, layersKonstanzPls, popKonstanzPls);
        popups(map, layersKonstanzBehindertenparken, popKonstanzBehindertenparken);



    });


});