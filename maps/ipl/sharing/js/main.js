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
            { id: 'sourceSharingStations', source: sourceSharingStations },
            { id: 'sourceSharingVehicles', source: sourceSharingVehicles }
        ];
        sources.forEach(source => addSources(map, source));

        layers = map.layerGroups({
            'vehicles': layersSharingVehicles,
            'stations': layersSharingStations,
        });
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