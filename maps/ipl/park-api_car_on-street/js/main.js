import '../css/styles.css';

import {
    initializeMap,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import { sourceParkApiCarOnStreet, layersParkApiCarOnStreetOccupancy, layersParkApiCarOnStreetObjects, layersParkApiCarOnStreetSpecialParking } from './layers.js';
import { popupContent } from '../../../../src/js/layers/parkApi/popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // MAP CONTROLS
    // ==============================  
    const map = initializeMap();
    basemaps(map);


    map.on('load', () => {

        // ==============================
        // SOURCES AND LAYERS
        // ==============================
        const sources = [
            { id: 'sourceParkApiCarOnStreet', source: sourceParkApiCarOnStreet },
        ];
        sources.forEach(source => addSources(map, source));

        layers = [
            ...layersParkApiCarOnStreetOccupancy,
            ...layersParkApiCarOnStreetObjects,
            ...layersParkApiCarOnStreetSpecialParking
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