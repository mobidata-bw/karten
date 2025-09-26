import {
    initializeMap,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import {
    sourceSharingVehicles, layersSharingVehicles,
    sourceSharingStations, layersSharingStations
} from './layers.js';
import { popupContent } from './popupContent.js';
import { initializeControlLayers } from './controlLayers.js';
import { urlParams } from '../../../../src/js/urlParams.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // URL PARAMS
    // ==============================  
    const { formFactor } = urlParams();


    // ==============================
    // MAP CONTROLS
    // ==============================  
    const map = initializeMap();

    const options = {};
    if (formFactor == 'bicycle' || formFactor == 'cargo_bicycle' || formFactor == 'scooter') options.style = 'bicycle';
    basemaps(map, options);


    map.on('load', () => {

        // ==============================
        // SOURCES AND LAYERS
        // ==============================
        const sources = [
            { id: 'sourceSharingStations', source: sourceSharingStations },
            { id: 'sourceSharingVehicles', source: sourceSharingVehicles }
        ];
        sources.forEach(source => addSources(map, source));

        layers = [
            ...layersSharingVehicles,
            ...layersSharingStations
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