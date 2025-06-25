import {
    initializeMap, fillShape, lineShape,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import { shape } from './initializeMap.js';
import {
    sourceParking, layersParkingOnStreet, layersParkingOther,
    sourceTaxi, layersTaxi
} from './layers.js';
import {
    popupContentOnStreet,
    popupContentTaxis
} from './popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // INITIALIZE MAP
    // ==============================  
    const map = initializeMap({
        center: [9.479215, 47.655577],
        zoom: window.innerWidth < 577 ? 12.5 : 14.5,
        minZoom: 12
    });
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
            { id: 'sourceParking', source: sourceParking },
            { id: 'sourceTaxi', source: sourceTaxi }
        ];
        sources.forEach(source => addSources(map, source));

        layers = [
            ...layersParkingOnStreet,
            ...layersParkingOther,
            ...layersTaxi
        ];
        layers.forEach(layer => addLayers(map, layer));


        // ==============================
        // LAYER CONTROL
        // ==============================     
        initializeControlLayers(map);


        // ==============================
        // POPUPS
        // ============================== 
        popups(map, layersParkingOnStreet, popupContentOnStreet);
        popups(map, layersParkingOther, popupContentOnStreet);
        popups(map, layersTaxi, popupContentTaxis);


    });


});