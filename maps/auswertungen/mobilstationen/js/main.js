import {
    initializeMap, shape, fillShape, lineShape,  
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import {
    sourceMobilstationen, layersMobilstationen,
    sourceOEV, layersOEV,
    sourceMIV, layersMIV,
    sourceFahrrad, layersFahrrad,
    sourceScooter, layersScooter
} from './layers.js';
import {
    popupContentOEV,
    popupContentMIV,
    popupContentFahrrad,
    popupContentScooter
} from './popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // INITIALIZE MAP
    // ==============================  
    const map = initializeMap();
    basemaps(map);


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
            { id: 'sourceMobilstationen', source: sourceMobilstationen },
            { id: 'sourceOEV', source: sourceOEV },
            { id: 'sourceMIV', source: sourceMIV },
            { id: 'sourceFahrrad', source: sourceFahrrad },
            { id: 'sourceScooter', source: sourceScooter }
        ];
        sources.forEach(source => addSources(map, source));

        layers = [
            ...layersMobilstationen,
            ...layersOEV,
            ...layersMIV,
            ...layersFahrrad,
            ...layersScooter
        ];
        layers.forEach(layer => addLayers(map, layer));


        // ==============================
        // LAYER CONTROL
        // ==============================     
        initializeControlLayers(map);


        // ==============================
        // POPUPS
        // ============================== 
        popups(map, layersOEV, popupContentOEV);
        popups(map, layersMIV, popupContentMIV);
        popups(map, layersFahrrad, popupContentFahrrad);
        popups(map, layersScooter, popupContentScooter);


    });


});