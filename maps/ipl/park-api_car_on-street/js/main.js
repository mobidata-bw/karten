import { map, shape, fillShape, lineShape, maplibreInspectControl, maplibreNavigationControl, geocoder } from '/karten/assets/js/maplibre-initializeMap.js';
import { sourceParkApiCarOnStreet, layersParkApiCarOnStreetOccupancy, layersParkApiCarOnStreetObjects, layersParkApiCarOnStreetSpecialParking } from './layers.js';
import { addSources, addLayers } from '/karten/assets/js/layers/maplibre-configSourcesLayers.js';
import { basemaps } from '/karten/assets/js/maplibre-layerSwitcherControl.js';
import { initializeControlLayers } from './controlLayers.js';
import { popups } from '/karten/assets/js/maplibre-popups.js';
import { popupContent } from '/karten/assets/js/layers/parkApi/parkApiPopups.js';
export let layers;


const basemapSources = [];
const basemapLayers = [];


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // MAP CONTROLS
    // ==============================  
    basemaps(map, { basemapSources, basemapLayers });

    geocoder(map);

    maplibreInspectControl(map);
    maplibreNavigationControl(map);


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
        popups(map, layers, popupContent);


    });


});