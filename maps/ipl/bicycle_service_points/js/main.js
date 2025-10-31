import {
    initializeMap,
    popups,
    basemaps,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import { sourceBicycleServicePoints, layersBicycleServicePoints } from './layers.js';
import { popupContent } from './popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // MAP CONTROLS
    // ==============================    
    const map = initializeMap();
    basemaps(map, {
        style: 'bicycle'
    });


    map.on('load', () => {

        // ==============================
        // SOURCES AND LAYERS
        // ==============================    
        const sources = [
            { id: 'sourceBicycleServicePoints', source: sourceBicycleServicePoints },
        ];
        sources.forEach(source => addSources(map, source));

        layers = layersBicycleServicePoints;
        layers.forEach(layer => addLayers(map, layer));


        // ==============================
        // LAYER CONTROL
        // ============================== 
        initializeControlLayers(map);


        // ==============================
        // POPUPS
        // ==============================       
        setupLayerInteractions(map, layers, popupContent);


    });


});