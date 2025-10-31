import {
    initializeMap,
    basemaps,
    setupLayerInteractions,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
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
        configZoom: window.innerWidth < 577 ? 12.5 : 14.5,
        configCenter: [9.479215, 47.655577],
        configMinZoom: 12,
        configShape: 'shapeFriedrichshafen'
    });
    basemaps(map);


    map.on('load', () => {

        // ==============================
        // SOURCES AND LAYERS
        // ==============================
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
        setupLayerInteractions(map, [...layersParkingOnStreet, ...layersParkingOther], popupContentOnStreet, sources);
        setupLayerInteractions(map, layersTaxi, popupContentTaxis);


    });


});