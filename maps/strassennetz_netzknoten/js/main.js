import {
    map,
    shape,
    fillShape,
    lineShape,
    maplibreInspectControl,
    maplibreNavigationControl,
    geocoder
} from '../../../src/js/initializeMap.js';
import {
    sourceStrassennetz, 
    sourceNetzknoten,
    layersStrassennetz, 
    layersNetzknoten
} from "./layers.js";
import {
    addSources,
    addLayers
} from '../../../src/js/layers/configSourcesLayers.js';
import { basemaps } from '../../../src/js/layerSwitcherControl.js';
import { initializeControlLayers } from './controlLayers.js';
import { popups } from '../../../src/js/popups.js';
import { 
    popupContentStrassennetz, 
    popupContentNetzknoten 
} from "./popupContent.js";
import '../../../src/plugins/mapbox-layer-control/layerControl.min.css';
import '../../../src/css/layerSwitcherControl.css';
import '../../../src/css/global.css';

export let layers;

const basemapSources = [], basemapLayers = [];


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // INITIALIZE MAP
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
            { id: 'sourceNetzknoten', source: sourceNetzknoten },
            { id: 'sourceStrassennetz', source: sourceStrassennetz }
        ];
        sources.forEach(source => addSources(map, source));

        layers = [
          
            ...layersNetzknoten,
            ...layersStrassennetz,
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
        popups(map, layersStrassennetz, popupContentStrassennetz);
        popups(map, layersNetzknoten, popupContentNetzknoten);



    });


});