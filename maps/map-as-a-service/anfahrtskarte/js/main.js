import {
    initializeMap,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import {
    sourceNvbw, layersNvbw,
    sourceTouren, layersTourenGuides, layersTourenOhneGuides
} from './layers.js';
import { popupContent } from './popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // INITIALIZE MAP
    // ==============================  
    const map = initializeMap({
        center: [9.193717, 48.795933],
        zoom: window.innerWidth < 577 ? 12.5 : 14.5,
        minZoom: 12,
        shape: 'shapesStuttgart.geojson'
    });
    basemaps(map);


    map.on('load', () => {

        // ==============================
        // SOURCES AND LAYERS
        // ==============================   
        const sources = [
            { id: 'sourceNvbw', source: sourceNvbw },         
            { id: 'sourceTouren', source: sourceTouren }
        ];
        sources.forEach(source => addSources(map, source));

        layers = [
            ...layersTourenGuides,
            ...layersTourenOhneGuides
        ];
        layers.forEach(layer => addLayers(map, layer));

        layersNvbw.forEach(layer => addLayers(map, layer));


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