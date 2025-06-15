
import { map } from '../../../gebuendelte_daten/js/main.js';
import {shapeKonstanz, lineShapeKonstanz, fillShapeKonstanz } from './initializeMap.js';
import {   
    addSources, addLayers,  
    basemaps,
    popups
} from '../../../../src/js/initializeMap.js';
import {
    sourceKonstanzPls, layersKonstanzPls,
    sourceKonstanzBehindertenparken, layersKonstanzBehindertenparken
} from './layers.js';
import {
    popKonstanzPls,
    popKonstanzBehindertenparken
} from './popupContent.js';
import { initializeControlLayers } from './controlLayers.js';
import { layerSwitcher } from '../../../../src/js/layerSwitcherControl.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // INITIALIZE MAP
    // ==============================  
    basemaps(map);

    map.removeControl(layerSwitcher);
    map.setCenter([9.156810, 47.701872]);
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