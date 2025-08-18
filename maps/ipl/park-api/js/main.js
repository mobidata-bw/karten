import {
    initializeMap,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import {
    sourceParkApiCar, sourceParkApiBicycle,
    layersParkApiOccupancy, layersParkApiType
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
            { id: 'sourceParkApiCar', source: sourceParkApiCar },
            { id: 'sourceParkApiBicycle', source: sourceParkApiBicycle }
        ];
        sources.forEach(source => addSources(map, source));

        layers = map.layerGroups({
            'occupancy': layersParkApiOccupancy,
            'type': layersParkApiType        
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