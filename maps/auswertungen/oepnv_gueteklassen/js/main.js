import '../css/styles.css';

import {
    initializeMap,
    basemaps,
    setupLayerInteractions,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import { sourceOepnvGueteklassen, layersOepnvGueteklassen } from './layers.js';
import { popupContent } from './popupContent.js';
import { initializeControlLayers } from './controlLayers.js';
import { moveLayer } from './moveLayer.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // INITIALIZE MAP
    // ==============================  
    const map = initializeMap();
    basemaps(map, {
        style: 'railway'
    });


    map.on('load', () => {

        // ==============================
        // SOURCES AND LAYERS
        // ==============================        
        const sources = [
            { id: 'sourceOepnvGueteklassen', source: sourceOepnvGueteklassen }
        ];
        sources.forEach(source => addSources(map, source));

        layers = layersOepnvGueteklassen;
        layers.forEach(layer => addLayers(map, layer));


        // ==============================
        // LAYER CONTROL
        // ==============================     
        initializeControlLayers(map);


        // ==============================
        // MOVE LAYER
        // ==============================          
        moveLayer(map);

        map.on('styledata', () => {
            if (!(window.__layerSwitching || window.__basemapSwitching)) return;
            window.__layerSwitching = false;
            window.__basemapSwitching = false;
            moveLayer(map);
        });


        // ==============================
        // POPUPS
        // ============================== 
        setupLayerInteractions(map, layers, popupContent);


    });


});