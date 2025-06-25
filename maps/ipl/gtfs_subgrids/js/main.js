import {
    initializeMap, shape, fillShape, lineShape,   
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import { sourceTransitShapes, layersTransitShapes } from './layers.js';
import { popupContentTransitShapes as popupContent } from '../../gtfs/js/popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // MAP CONTROLS
    // ==============================  
    const map = initializeMap();
    basemaps(map);


    // ==============================
    // SOURCES AND LAYERS
    // ==============================
    map.on('load', () => {

        // DEFAULT LAYERS
        map.addSource('shape', shape);
        map.addLayer(fillShape);
        map.addLayer(lineShape);


        // PROJECT LAYERS            
        const sources = [
            { id: 'sourceTransitShapes', source: sourceTransitShapes }
        ];
        sources.forEach(source => addSources(map, source));

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