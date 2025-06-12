import {
    map, shape, fillShape, lineShape, maplibreControls, geocoder,
    addSources, addLayers,
    basemaps,
    popups
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

const basemapSources = [], basemapLayers = [];


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // INITIALIZE MAP
    // ==============================  
    basemaps(map, { basemapSources, basemapLayers });
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
        popups(map, layersOEV, popupContentOEV);
        popups(map, layersMIV, popupContentMIV);
        popups(map, layersFahrrad, popupContentFahrrad);
        popups(map, layersScooter, popupContentScooter);


    });


});