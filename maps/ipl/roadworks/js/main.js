import {
    map, shape, fillShape, lineShape, maplibreControls, geocoder,
    addSources, addLayers,
    basemaps,
    wms
} from '../../../../src/js/initializeMap.js';
import { sourceRoadworks, layersRoadworks } from './layers.js';
import { popupContent } from './popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {
    
    // ==============================
    // MAP CONTROLS
    // ==============================  
    basemaps(map);
    geocoder(map);
    maplibreControls(map);   


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