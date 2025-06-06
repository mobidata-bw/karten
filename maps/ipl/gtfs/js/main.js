import {
    map,
    shape,
    fillShape,
    lineShape,
    maplibreInspectControl,
    maplibreNavigationControl,
    geocoder
} from '../../../../src/js/initializeMap.js';
import { wms } from '../../../../src/js/wms.js';
import {
    sourceTransitStops, 
    layersTransitStops,
    sourceTransitStations, 
    layersTransitStations,
    sourceTransitShapes, 
    layersTransitShapes
} from './layers.js';
import {
    addSources,
    addLayers
} from '../../../../src/js/layers/configSourcesLayers.js';
import { basemaps } from '../../../../src/js/layerSwitcherControl.js';
import { initializeControlLayers } from './controlLayers.js';
import { popups } from '../../../../src/js/popups.js';;
import { popupContentTransitStops, popupContentTransitStations, popupContentTransitShapes } from './popupContent.js';
import '../../../../src/plugins/mapbox-layer-control/layerControl.min.css';
import '../../../../src/css/layerSwitcherControl.css';
import '../../../../src/css/global.css';
import '../css/styles.css';

export let layers;

const basemapSources = [], basemapLayers = [];


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
        popups(map, layersTransitStops, popupContentTransitStops);
        popups(map, layersTransitStations, popupContentTransitStations);


        // ==============================
        // WMS & POPUPS
        // ==============================    
        wms(map, layersTransitShapes, popupContentTransitShapes);


    });


});