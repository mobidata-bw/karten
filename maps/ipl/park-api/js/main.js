import {
    initializeMap,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import {
    sourceParkApiCar, sourceParkApiBicycle, sourceParkApiItem,
    // layersParkApiCarOccupancy, layersParkApiCarTypes
    layersParkApiOccupancy, layersParkApiTypes
} from './layers.js';
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
            { id: 'sourceParkApiCar', source: sourceParkApiCar },
            { id: 'sourceParkApiBicycle', source: sourceParkApiBicycle },
            { id: 'sourceParkApiItem', source: sourceParkApiItem }
        ];
        sources.forEach(source => addSources(map, source));

        layers = map.layerGroups({
            // 'occupancy': layersParkApiCarOccupancy,
            // 'types': layersParkApiCarTypes
            'occupancy': layersParkApiOccupancy,
            'types': layersParkApiTypes
        });
        layers.forEach(layer => addLayers(map, layer));

        console.log(layers[0]);


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