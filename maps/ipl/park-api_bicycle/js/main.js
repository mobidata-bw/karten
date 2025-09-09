import {
    initializeMap,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import {
    sourceParkApiBicycle,
    layersParkApiBicycleOccupancy, layersParkApiBicycleType,
    layersParkApiItemOccupancy
} from '../../park-api/js/layers.js';
import { popupContent } from '../../park-api/js/popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers, layersParkApiBicycle, layersParkApiItem;


window.addEventListener('DOMContentLoaded', () => {

    document.title = 'MobiData BW® - Gebündelte Fahrradabstellanlagen und Schließfächer';

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
            { id: 'sourceParkApiBicycle', source: sourceParkApiBicycle }
        ];
        sources.forEach(source => addSources(map, source));

        layersParkApiBicycle = [
            ...layersParkApiBicycleOccupancy,
            ...layersParkApiBicycleType
        ];
        layersParkApiItem = layersParkApiItemOccupancy.map(layer => ({ ...layer, subGroup: `${layer.subGroup} ` }));
        layers = [
            ...layersParkApiBicycle,
            ...layersParkApiItem
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