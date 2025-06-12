import {
    fillShape, lineShape, maplibreControls, geocoder,
    addSources, addLayers,
    basemaps,
    popups
} from '../../../../src/js/initializeMap.js';
import {
    map, shape
} from './initializeMap.js';
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

const basemapSources = [], basemapLayers = [];


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // INITIALIZE MAP
    // ==============================  
    basemaps(map, { basemapSources, basemapLayers });
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
        // BASEMAP LAYERS
        // ============================== 
        basemapSources.push(
            { id: 'shape', source: shape },
            ...sources
        );

        basemapLayers.push(
            fillShape,
            lineShape,
            ...layers
        );


        // ==============================
        // POPUPS
        // ============================== 
        popups(map, layersParkingOnStreet, popupContentOnStreet);
        popups(map, layersParkingOther, popupContentOnStreet);
        popups(map, layersTaxi, popupContentTaxis);


    });


});