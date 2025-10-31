import {
    initializeMap,
    setupLayerInteractions,
    basemaps,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import { sourceWebcam, layersWebcam } from './layers.js';
import { popupContent } from './popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // MAP CONTROLS
    // ==============================    
    const map = initializeMap();
    basemaps(map);


    map.on('load', () => {

        // ==============================
        // SOURCES AND LAYERS
        // ==============================    
        const sources = [
            { id: 'sourceWebcam', source: sourceWebcam }
        ];
        sources.forEach(source => addSources(map, source));

        layers = layersWebcam;
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