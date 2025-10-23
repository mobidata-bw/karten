import '../css/styles.css';

import {
    initializeMap,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import { shapeTransitAssociations, lineShapeTransitAssociations } from './initializeMap.js';
import { sourceTransitShapes } from './layers.js';
import { layersTransitAssociations } from './layersTransitAssociations.js';
import { layersMunicipalUtilities } from './layersMunicipalUtilities.js';
import { layersDeutscheBahn } from './layersDeutscheBahn.js';
import { layersTransitCompanies } from './layersTransitCompanies.js';
import { layersAbroad } from './layersAbroad.js';
import { layersOther } from './layersOther.js';
import { popupContentTransitShapes as popupContent } from '../../gtfs/js/popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // MAP CONTROLS
    // ==============================  
    const map = initializeMap();
    basemaps(map, {
        style: 'railway'
    });


    map.on('load', () => {

        // ==============================
        // SOURCES AND LAYERS
        // ============================== 
        map.addSource('shapeTransitAssociations', shapeTransitAssociations);
        map.addLayer(lineShapeTransitAssociations);

        map.on('styledata', () => {
            if (map.getLayer('lineShape')) {
                map.setLayoutProperty('lineShape', 'visibility', 'none');
            }
        });

        const sources = [
            { id: 'sourceTransitShapes', source: sourceTransitShapes }
        ];
        sources.forEach(source => addSources(map, source));

        layers = [
            ...layersTransitAssociations,
            ...layersMunicipalUtilities,
            ...layersDeutscheBahn,
            ...layersTransitCompanies,
            ...layersAbroad,
            ...layersOther,
        ];
        layers.forEach(layer => addLayers(map, layer));


        // ==============================
        // LAYER CONTROL
        // ==============================
        initializeControlLayers(map);


        // ==============================
        // POPUPS
        // ==============================       
        popups(map, layers, popupContent);


    });


});