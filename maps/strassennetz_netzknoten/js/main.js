import {
    initializeMap,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../src/js/initializeMap.js';
import {
    sourceStrassennetz, layersStrassennetz,
    sourceNetzknoten, layersNetzknoten
} from './layers.js';
import {
    popupContentStrassennetz,
    popupContentNetzknoten
} from './popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // INITIALIZE MAP
    // ==============================  
    const map = initializeMap();
    basemaps(map);


    map.on('load', () => {

        // ==============================
        // SOURCES AND LAYERS
        // ==============================
        const sources = [
            { id: 'sourceNetzknoten', source: sourceNetzknoten },
            { id: 'sourceStrassennetz', source: sourceStrassennetz }
        ];
        sources.forEach(source => addSources(map, source));

        layers = [
            ...layersNetzknoten,
            ...layersStrassennetz
        ];
        layers.forEach(layer => addLayers(map, layer));


        // ==============================
        // LAYER CONTROL
        // ==============================     
        initializeControlLayers(map);


        // ==============================
        // MOVE LAYER
        // ==============================    
        map.moveLayer('netzknoten');
        map.on('styledata', () => {
            if (!window.__basemapSwitching) return;
            setTimeout(() => {
                if (map.getLayer('netzknoten')) {
                    map.moveLayer('netzknoten');
                }
            }, 0);
        });


        // ==============================
        // POPUPS
        // ============================== 
        popups(map, layersStrassennetz, popupContentStrassennetz);
        popups(map, layersNetzknoten, popupContentNetzknoten);


    });


});