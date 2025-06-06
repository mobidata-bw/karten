import {
    map,
    shape,
    fillShape,
    lineShape,
    maplibreInspectControl,
    maplibreNavigationControl,
    geocoder
} from '../../../../src/js/initializeMap.js';
import { popupContent } from './popupContent.js';
import { wms } from '../../../../src/js/wms.js';
import {
    sourceRoadworks,
    layersRoadworks as layers
} from './layers.js';
import {
addSources,
addLayers
} from '../../../../src/js/layers/configSourcesLayers.js';
import { basemaps } from '../../../../src/js/layerSwitcherControl.js';
import { initializeControlLayers } from './controlLayers.js';
import '../../../../src/plugins/mapbox-layer-control/layerControl.min.css';
import '../../../../src/css/layerSwitcherControl.css';
import '../../../../src/css/global.css';

export { layers };

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
            { id: 'sourceRoadworks', source: sourceRoadworks },
        ];
        sources.forEach(source => addSources(map, source));

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
        // WMS & POPUPS
        // ==============================    
        wms(map, layers, popupContent);


    });

});