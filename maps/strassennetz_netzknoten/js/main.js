import {
    initializeMap, shape, fillShape, lineShape,
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
            { id: 'sourceNetzknoten', source: sourceNetzknoten },
            { id: 'sourceStrassennetz', source: sourceStrassennetz }
        ];
        sources.forEach(source => addSources(map, source));

        layers = [
            ...layersNetzknoten,
            ...layersStrassennetz,
        ];
        layers.forEach(layer => addLayers(map, layer));


        // ==============================
        // LAYER CONTROL
        // ==============================     
        initializeControlLayers(map);


        // ==============================
        // POPUPS
        // ============================== 
        popups(map, layersStrassennetz, popupContentStrassennetz);
        popups(map, layersNetzknoten, popupContentNetzknoten);


    });


});