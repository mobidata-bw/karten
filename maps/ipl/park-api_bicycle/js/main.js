import {
    initializeMap,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import {
    sourceParkApiBicycle, layersParkApiBicycleOccupancy, layersParkApiBicycleTypes,
    sourceParkApiItem, layersParkApiItemOccupancy
} from './layers.js';
import { popupContent } from '../../../../src/js/layers/parkApi/popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers, layersBicycle, layersItem;


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
            { id: 'sourceParkApiBicycle', source: sourceParkApiBicycle },
            { id: 'sourceParkApiItem', source: sourceParkApiItem },
        ];
        sources.forEach(source => addSources(map, source));

        layersBicycle = [
            ...layersParkApiBicycleOccupancy,
            ...layersParkApiBicycleTypes
        ];
        layersItem = layersParkApiItemOccupancy;
        layers = [
            ...layersBicycle,
            ...layersParkApiItemOccupancy
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