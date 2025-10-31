import {
    initializeMap,
    basemaps,
    setupLayerInteractions,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import {
    sourceQuerschnittsdaten, layersQuerschnittsdaten,
    sourceZentraleBahnhoefe, layersZentraleBahnhoefe
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
            { id: 'sourceQuerschnittsdaten', source: sourceQuerschnittsdaten },
            { id: 'sourceZentraleBahnhoefe', source: sourceZentraleBahnhoefe }
        ];
        sources.forEach(source => addSources(map, source));

        layers = [
            ...layersZentraleBahnhoefe,
            ...layersQuerschnittsdaten
        ];
        layers.forEach(layer => addLayers(map, layer));


        // ==============================
        // LAYER CONTROL
        // ==============================     
        initializeControlLayers(map);


        // ==============================
        // MOVE LAYER
        // ==============================     
        map.moveLayer('zentraleBahnhoefe');


        // ==============================
        // POPUPS
        // ============================== 
        setupLayerInteractions(map, layersQuerschnittsdaten, popupContentAfzs, sources);
        setupLayerInteractions(map, layersZentraleBahnhoefe, popupContentStations);


    });


});