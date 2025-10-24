import {
    initializeMap,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../src/js/initializeMap.js';
import { sourceTruckRoutes, layersTruckRoutes } from './layers.js';
import { popupContent } from './popupContent.js';
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
            { id: 'sourceTruckRoutes', source: sourceTruckRoutes }
        ];
        sources.forEach(source => addSources(map, source));

        layers = layersTruckRoutes;
        layers.forEach(layer => addLayers(map, layer));


        // ==============================
        // LAYER CONTROL
        // ==============================     
        initializeControlLayers(map);


        // ==============================
        // POPUPS
        // ============================== 
        popups(map, layers, popupContent);


    });


});