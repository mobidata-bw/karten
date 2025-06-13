import {
    initializeMap, shape, fillShape, lineShape, maplibreControls, geocoder,
    addSources, addLayers,
    popups
} from '../../../../src/js/initializeMap.js';
import { sourceChargePoints, layersChargePointsPower, layersChargePointsDynamic } from './layers.js';
import { popupContent } from './popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // MAP CONTROLS
    // ==============================    
    const map = initializeMap();
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
            { id: 'sourceChargePoints', source: sourceChargePoints },
        ];
        sources.forEach(source => addSources(map, source));

        layers = [
            ...layersChargePointsPower,
            ...layersChargePointsDynamic
        ];
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