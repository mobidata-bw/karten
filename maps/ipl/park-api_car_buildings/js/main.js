import {
    initializeMap, shape, fillShape, lineShape,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import { sourceParkApiCarBuildings, layersParkApiCarBuildingsOccupancy, layersParkApiCarBuildingsObjects, layersParkApiCarBuildingsTypes, layersParkApiCarBuildingsSpecialParking } from './layers.js';
import { popupContent } from '../../../../src/js/layers/parkApi/popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // MAP CONTROLS
    // ==============================  
    const map = initializeMap();
    basemaps(map);


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
            { id: 'sourceParkApiCarBuildings', source: sourceParkApiCarBuildings },
        ];
        sources.forEach(source => addSources(map, source));

        layers = [
            ...layersParkApiCarBuildingsOccupancy,
            ...layersParkApiCarBuildingsTypes,
            ...layersParkApiCarBuildingsObjects,
            ...layersParkApiCarBuildingsSpecialParking
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