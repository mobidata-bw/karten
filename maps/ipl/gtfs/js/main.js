import '../css/styles.css';

import {
    map, shape, fillShape, lineShape, maplibreControls, geocoder,
    addSources, addLayers,
    basemaps,
    popups,
    wms
} from '../../../../src/js/initializeMap.js';
import {
    sourceTransitStops, layersTransitStops,
    sourceTransitStations, layersTransitStations,
    sourceTransitShapes, layersTransitShapes
} from './layers.js';
import {
    popupContentTransitStops,
    popupContentTransitStations,
    popupContentTransitShapes
} from './popupContent.js';
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
            { id: 'sourceTransitStops', source: sourceTransitStops },
            { id: 'sourceTransitStations', source: sourceTransitStations },
            { id: sourceTransitShapes[0].id, source: sourceTransitShapes[0] },
            { id: sourceTransitShapes[1].id, source: sourceTransitShapes[1] },
            { id: sourceTransitShapes[2].id, source: sourceTransitShapes[2] },
            { id: sourceTransitShapes[3].id, source: sourceTransitShapes[3] },
            { id: sourceTransitShapes[4].id, source: sourceTransitShapes[4] },
            { id: sourceTransitShapes[5].id, source: sourceTransitShapes[5] }
        ];
        sources.forEach(source => addSources(map, source));

        layers = [
            ...layersTransitStops,
            ...layersTransitStations,
            ...layersTransitShapes
        ];
        layers.forEach(layer => addLayers(map, layer));


        // ==============================
        // LAYER CONTROL
        // ==============================
        initializeControlLayers(map);
      

        // ==============================
        // POPUPS
        // ==============================       
        popups(map, layersTransitStops, popupContentTransitStops);
        popups(map, layersTransitStations, popupContentTransitStations);


        // ==============================
        // WMS & POPUPS
        // ==============================    
        wms(map, layersTransitShapes, popupContentTransitShapes);


    });


});