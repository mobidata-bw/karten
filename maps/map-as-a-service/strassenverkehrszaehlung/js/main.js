import {
    initializeMap,
    basemaps,
    setupLayerInteractions,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import { sourceCountRavensburg, layersCountRavensburg } from './layers.js';
import { popupContent } from './popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // INITIALIZE MAP
    // ==============================  
    const map = initializeMap({
        configZoom: window.innerWidth < 577 ? 10 : 12,
        configCenter: [9.609503, 47.780424],
        configMinZoom: 10,
        configShape: 'shapeRavensburg'
    });
    basemaps(map);


    map.on('load', () => {

        // ==============================
        // SOURCES AND LAYERS
        // ==============================   
        map.on('styledata', () => {
            if (map.getLayer('fillShape')) {
                map.setLayoutProperty('fillShape', 'visibility', 'none');
            }
             if (map.getLayer('lineShape')) {
                map.setLayoutProperty('lineShape', 'visibility', 'none');
            }
        });

        const sources = [
            { id: 'sourceCountRavensburg', source: sourceCountRavensburg }
        ];
        sources.forEach(source => addSources(map, source));

        layers = layersCountRavensburg;
        layers.forEach(layer => addLayers(map, layer));


        // ==============================
        // LAYER CONTROL
        // ==============================     
        initializeControlLayers(map);


        // ==============================
        // POPUPS
        // ============================== 
        setupLayerInteractions(map, layers, popupContent);


    });


});