import '../css/styles.css';

import {
    map, shape, fillShape, lineShape, maplibreControls, geocoder,
    addSources, addLayers,
    basemaps,
    popups
} from '../../../src/js/initializeMap.js';
import { sourceCountCar, layersCountCar } from './layers.js';
import { popupContent } from './popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // INITIALIZE MAP
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
            { id: 'sourceCountCar', source: sourceCountCar }
        ];
        sources.forEach(source => addSources(map, source));

        layers = layersCountCar;
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