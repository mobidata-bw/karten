import {
    map,
    shape,
    fillShape,
    lineShape,
    maplibreInspectControl,
    maplibreNavigationControl,
    geocoder
} from '../../../../src/js/initializeMap.js';
import { shapeRegierungsbezirke, lineShapeRegierungsbezirke } from './initializeMap.js';
import {
    sourceOepnvGueteklassenStuttgart,
    sourceOepnvGueteklassenKarlsruhe,
    sourceOepnvGueteklassenFreiburg,
    sourceOepnvGueteklassenTuebingen,
    layersOepnvGueteklassen as layers
} from './layers.js';
import {
    addSources,
    addLayers
} from '../../../../src/js/layers/configSourcesLayers.js';
import { basemaps } from '../../../../src/js/layerSwitcherControl.js';
import { initializeControlLayers } from './controlLayers.js';
import { popups } from '../../../../src/js/popups.js';
import { popupContent } from './popupContent.js';
import '../../../../src/plugins/mapbox-layer-control/layerControl.min.css';
import '../../../../src/css/layerSwitcherControl.css';
import '../../../../src/css/global.css';
import '../css/styles.css';

export { layers };

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
        map.addSource('shapeRegierungsbezirke', shapeRegierungsbezirke);
        map.addLayer(lineShapeRegierungsbezirke);

        map.addSource('shape', shape);
        map.addLayer(fillShape);
        map.addLayer(lineShape);


        // PROJECT LAYERS    
        const sources = [
            { id: 'sourceOepnvGueteklassenStuttgart', source: sourceOepnvGueteklassenStuttgart },
            { id: 'sourceOepnvGueteklassenKarlsruhe', source: sourceOepnvGueteklassenKarlsruhe },
            { id: 'sourceOepnvGueteklassenFreiburg', source: sourceOepnvGueteklassenFreiburg },
            { id: 'sourceOepnvGueteklassenTuebingen', source: sourceOepnvGueteklassenTuebingen }
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
            { id: 'shapeRegierungsbezirke', source: shapeRegierungsbezirke },
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