import '../css/styles.css';

import {
    map, shape, fillShape, lineShape, maplibreControls, geocoder,
    addSources, addLayers,
    basemaps,
    popups
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

export let layers;



window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // INITIALIZE MAP
    // ==============================  
    basemaps(map);
    geocoder(map);
    maplibreControls(map);


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

        layers = layersOepnvGueteklassen;
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