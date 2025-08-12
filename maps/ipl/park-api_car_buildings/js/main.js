import {
    initializeMap,
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


    map.on('load', () => {

        // ==============================
        // SOURCES AND LAYERS
        // ============================== 
        const sources = [
            { id: 'sourceParkApiCarBuildings', source: sourceParkApiCarBuildings },
        ];
        sources.forEach(source => addSources(map, source));

        layers = map.layerGroups({
            'belegung': layersParkApiCarBuildingsOccupancy,
            'typ': layersParkApiCarBuildingsTypes,
            'parkobjekt': layersParkApiCarBuildingsObjects,
            'sonderparkplaetze': layersParkApiCarBuildingsSpecialParking
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