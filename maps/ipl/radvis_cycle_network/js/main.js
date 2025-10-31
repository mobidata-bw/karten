import {
    initializeMap,
    basemaps,
    setupLayerInteractions,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import { sourceRadvis, layersRadvis } from './layers.js';
import { popupContent } from './popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // MAP CONTROLS
    // ==============================  
    // basemaps(map);
    const map = initializeMap();
    basemaps(map, {
        style: 'bicycle'
    });


    map.on('load', () => {

        // ==============================
        // SOURCES AND LAYERS
        // ==============================
        const sources = [
            { id: 'sourceRadvis', source: sourceRadvis },
        ];
        sources.forEach(source => addSources(map, source));

        layers = layersRadvis;
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