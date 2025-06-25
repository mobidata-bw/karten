import {
    initializeMap, shape, fillShape, lineShape,
    basemaps,
    popups,
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
            { id: 'sourceRadvis', source: sourceRadvis },
        ];
        sources.forEach(source => addSources(map, source));

        layers = layersRadvis;
        layers.forEach(layer => addLayers(map, layer));


        // ==============================
        // LAYER CONTROL
        // ============================== 
        initializeControlLayers(map);

        map.on('zoom', () => {
            initializeControlLayers(map);
        });


        // ==============================
        // POPUPS
        // ==============================       
        popups(map, layers, popupContent);


    });


});