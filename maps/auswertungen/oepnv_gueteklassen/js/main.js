import '../css/styles.css';

import {
    initializeMap,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import { shapeRegierungsbezirke, lineShapeRegierungsbezirke } from './initializeMap.js';
import {
    sourceOepnvGueteklassenStuttgart,
    sourceOepnvGueteklassenKarlsruhe,
    sourceOepnvGueteklassenFreiburg,
    sourceOepnvGueteklassenTuebingen,
    layersOepnvGueteklassen
} from './layers.js';
import { popupContent } from './popupContent.js';
import { initializeControlLayers } from './controlLayers.js';
import { legendHtml } from './legend.js';
import { moveLayer } from './moveLayer.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // INITIALIZE MAP
    // ==============================  
    const map = initializeMap();
    basemaps(map, {
        style: 'railway'
    });


    map.on('load', () => {

        // ==============================
        // SOURCES AND LAYERS
        // ==============================        
        map.addSource('shapeRegierungsbezirke', shapeRegierungsbezirke);
        map.addLayer(lineShapeRegierungsbezirke);


        const sources = [
            { id: 'sourceOepnvGueteklassenStuttgart', source: sourceOepnvGueteklassenStuttgart },
            { id: 'sourceOepnvGueteklassenKarlsruhe', source: sourceOepnvGueteklassenKarlsruhe },
            { id: 'sourceOepnvGueteklassenFreiburg', source: sourceOepnvGueteklassenFreiburg },
            { id: 'sourceOepnvGueteklassenTuebingen', source: sourceOepnvGueteklassenTuebingen }
        ];
        sources.forEach(source => addSources(map, source));

        layers = layersOepnvGueteklassen;
        layers.forEach(layer => addLayers(map, layer));


        // ==============================
        // LAYER CONTROL
        // ==============================     
        initializeControlLayers(map);


        // ==============================
        // LEGEND
        // ==============================   
        const element = document.getElementById('legend');
        if (element) element.innerHTML = legendHtml;
        

        // ==============================
        // MOVE LAYER
        // ==============================          
        moveLayer(map);

        map.on('styledata', () => {
            if (!(window.__layerSwitching || window.__basemapSwitching)) return;
            window.__layerSwitching = false;
            window.__basemapSwitching = false;
            moveLayer(map);
        });


        // ==============================
        // POPUPS
        // ============================== 
        popups(map, layers, popupContent);


    });


});