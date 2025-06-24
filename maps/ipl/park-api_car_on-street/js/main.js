import 'maplibre-gl/dist/maplibre-gl.css';
import maplibregl from 'maplibre-gl';

import '../css/styles.css';

import {
    map, shape, fillShape, lineShape, maplibreControls, geocoder,
    addSources, addLayers,
    basemaps,
    popups
} from '../../../../src/js/initializeMap.js';
import { sourceParkApiCarOnStreet, layersParkApiCarOnStreetOccupancy, layersParkApiCarOnStreetObjects, layersParkApiCarOnStreetSpecialParking } from './layers.js';
import { popupContent } from '../../../../src/js/layers/parkApi/popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // MAP CONTROLS
    // ==============================  
    basemaps(map);
    geocoder(map);
    maplibreControls(map);


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
            { id: 'sourceParkApiCarOnStreet', source: sourceParkApiCarOnStreet },
        ];
        sources.forEach(source => addSources(map, source));

        layers = [
            ...layersParkApiCarOnStreetOccupancy,
            ...layersParkApiCarOnStreetObjects,
            ...layersParkApiCarOnStreetSpecialParking
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