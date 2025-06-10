import { shapeKonstanz, lineShapeKonstanz, fillShapeKonstanz } from './initializeMap.js';
import { map } from '../../../gebuendelte_daten/js/main.js';
import {
    sourceKonstanzPls,
    layersKonstanzPls,
    sourceKonstanzBehindertenparken,
    layersKonstanzBehindertenparken
} from './layers.js';
import {
    addSources,
    addLayers
} from '../../../../src/js/layers/configSourcesLayers.js';
import { initializeControlLayers } from './controlLayers.js';
import { popups } from '../../../../src/js/popups.js';
import {
    popKonstanzPls,
    popKonstanzBehindertenparken
} from './popupContent.js';
import { layerSwitcher } from '../../../../src/js/layerSwitcherControl.js';
import '../../../../src/plugins/mapbox-layer-control/layerControl.min.css';
import '../../../../src/css/layerSwitcherControl.css';
import '../../../../src/css/global.css';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

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