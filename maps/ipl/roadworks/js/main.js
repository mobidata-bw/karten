import {
    initializeMap, shape, fillShape, lineShape,
    basemaps,
    wms,
    addSources, addLayers,
} from '../../../../src/js/initializeMap.js';
import { sourceRoadworks, layersRoadworks } from './layers.js';
import { popupContent } from './popupContent.js';
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
            { id: 'sourceRoadworks', source: sourceRoadworks },
        ];
        sources.forEach(source => addSources(map, source));

        layers = layersRoadworks;
        layers.forEach(layer => addLayers(map, layer));


        // ==============================
        // LAYER CONTROL
        // ============================== 
        initializeControlLayers(map);


        // ==============================
        // WMS & POPUPS
        // ==============================    
        wms(map, layers, popupContent);


    });

});