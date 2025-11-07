
import { map } from '../../../gebuendelte_daten/js/main.js';
import { shapeKonstanz, lineShapeKonstanz, fillShapeKonstanz } from './initializeMap.js';
import {
    setupLayerInteractions,
    addSources, addLayers
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

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    map.on('load', () => {

        // ==============================
        // INITIALIZE MAP
        // ==============================  
        map.setCenter([9.156810, 47.701872]);
        map.setMaxBounds([
            [9.034195, 47.606163],
            [9.286880, 47.780866]
        ]);

        map.once('load', () => {
            map.resize();
            map.jumpTo({ center: [9.156810, 47.701872] });
            map.getContainer().style.visibility = 'visible';
        });


        // ==============================
        // SOURCES AND LAYERS
        // ==============================
        map.addSource('shapeKonstanz', shapeKonstanz);
        map.addLayer(fillShapeKonstanz);
        map.addLayer(lineShapeKonstanz);

        map.on('styledata', () => {
            if (map.getLayer('fillShape')) {
                map.setLayoutProperty('fillShape', 'visibility', 'none');
            }
            if (map.getLayer('lineShape')) {
                map.setLayoutProperty('lineShape', 'visibility', 'none');
            }
        });


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
        setupLayerInteractions(map, layersKonstanzPls, popKonstanzPls);
        setupLayerInteractions(map, layersKonstanzBehindertenparken, popKonstanzBehindertenparken);


    });


});