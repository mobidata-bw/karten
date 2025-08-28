import {
    initializeMap,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import { sourceVerkehrszaehlungRavensburg, layersVerkehrszaehlungRavensburg } from './layers.js';
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
        // configShape: 'shapesStuttgart.geojson'
    });
    basemaps(map);


    map.on('load', () => {

        // ==============================
        // SOURCES AND LAYERS
        // ==============================   
        const sources = [
            { id: 'sourceVerkehrszaehlungRavensburg', source: sourceVerkehrszaehlungRavensburg }          
        ];
        sources.forEach(source => addSources(map, source));

        layers = layersVerkehrszaehlungRavensburg;
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