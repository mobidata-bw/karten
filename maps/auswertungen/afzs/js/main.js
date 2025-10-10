import {
    initializeMap,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import {
    sourceAfzs, layersAfzs,
    sourceStations, layersStations
} from './layers.js';
import { popupContentStations, popupContentAfzs } from './popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // INITIALIZE MAP
    // ==============================  
    const map = initializeMap();
    basemaps(map, {
        style: 'railway'
    });


    map.on('load', () => {

        // ==============================
        // SOURCES AND LAYERS
        // ==============================
        const sources = [
            { id: 'sourceAfzs', source: sourceAfzs },
            { id: 'sourceStations', source: sourceStations }
        ];
        sources.forEach(source => addSources(map, source));

        layers = [
            ...layersStations,
            ...layersAfzs
        ];
        layers.forEach(layer => addLayers(map, layer));


        // ==============================
        // LAYER CONTROL
        // ==============================     
        initializeControlLayers(map);


        // ==============================
        // MOVE LAYER
        // ==============================     
        map.moveLayer('stations');


        // ==============================
        // POPUPS
        // ============================== 
        popups(map, layersStations, popupContentStations);
        popups(map, layersAfzs, popupContentAfzs);


    });


});