import {
    map, shape, fillShape, lineShape, maplibreControls, geocoder,
    addSources, addLayers,
    basemaps,
    popups
} from '../../../../src/js/initializeMap.js';
import {
    sourceParkApiBicycle, layersParkApiBicycleOccupancy, layersParkApiBicycleTypes,
    sourceParkApiItem, layersParkApiItemOccupancy
} from './layers.js';
import { popupContent } from '../../../../src/js/layers/parkApi/popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers, layersBicycle, layersItem;


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
            { id: 'sourceParkApiBicycle', source: sourceParkApiBicycle },
            { id: 'sourceParkApiItem', source: sourceParkApiItem },
        ];
        sources.forEach(source => addSources(map, source));

        layersBicycle = [
            ...layersParkApiBicycleOccupancy,
            ...layersParkApiBicycleTypes
        ];
        layersItem = layersParkApiItemOccupancy;
        layers = [
            ...layersBicycle,
            ...layersParkApiItemOccupancy
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