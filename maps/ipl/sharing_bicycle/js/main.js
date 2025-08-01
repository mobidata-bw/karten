import {
    initializeMap,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import {
    sourceSharingVehicles,
    sourceSharingStations,
    layersSharingBicycle,
    layersSharingCargoBicycle
} from './layers.js';
import { popupContent } from '../../../../src/js/layers/sharing/popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers, layersBicycle, layersCargoBicycle;


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
            { id: 'sourceSharingVehicles', source: sourceSharingVehicles },
            { id: 'sourceSharingStations', source: sourceSharingStations }
        ];
        sources.forEach(source => addSources(map, source));

        layersBicycle = layersSharingBicycle;
        layersCargoBicycle = layersSharingCargoBicycle;
        layers = [
            ...layersSharingBicycle,
            ...layersSharingCargoBicycle
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