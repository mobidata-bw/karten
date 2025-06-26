import {
    initializeMap,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import {
    sourceGuides, layersGuides,
    sourceNichtGefahreneTracen, layersNichtGefahreneTracen
} from './layers.js';
import { popupContent } from './popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // INITIALIZE MAP
    // ==============================  
    const map = initializeMap({
        center: [9.1798, 48.7759],
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
            { id: 'sourceGuides', source: sourceGuides },
            { id: 'sourceNichtGefahreneTracen', source: sourceNichtGefahreneTracen }
        ];
        sources.forEach(source => addSources(map, source));

        layers = [
            ...layersGuides,
            ...layersNichtGefahreneTracen
        ];
        layers.forEach(layer => addLayers(map, layer));


        // ==============================
        // LAYER CONTROL
        // ==============================     
        initializeControlLayers(map);


        // ==============================
        // POPUPS
        // ============================== 
        //   popups(map, layers, popupContent);


    });


});