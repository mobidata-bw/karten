import {
    initializeMap,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import {
    sourceTransitAssociations, layersTransitAssociations,
    sourceTransitShapes, layersTransitShapes
} from './layers.js';
import { popupContentTransitShapes as popupContent } from '../../gtfs/js/popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // MAP CONTROLS
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
            { id: 'sourceTransitAssociations', source: sourceTransitAssociations },
            { id: 'sourceTransitShapes', source: sourceTransitShapes }
        ];
        sources.forEach(source => addSources(map, source));

        layersTransitAssociations.forEach(layer => addLayers(map, layer));
        layers = layersTransitShapes;
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