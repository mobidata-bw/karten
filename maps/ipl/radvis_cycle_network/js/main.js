import {
    map, shape, fillShape, lineShape, maplibreControls, geocoder,
    addSources, addLayers,
    basemaps,
    popups
} from '../../../../src/js/initializeMap.js';
import { sourceRadvis, layersRadvis } from './layers.js';
import { popupContent } from './popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers;

// const basemapSources = [], basemapLayers = [];


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // MAP CONTROLS
    // ==============================  
    // basemaps(map, { basemapSources, basemapLayers });
    basemaps(map);
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
            { id: 'sourceRadvis', source: sourceRadvis },
        ];
        sources.forEach(source => addSources(map, source));

        layers = layersRadvis;
        layers.forEach(layer => addLayers(map, layer));


        // ==============================
        // LAYER CONTROL
        // ============================== 
        initializeControlLayers(map);

        map.on('zoom', () => {
            initializeControlLayers(map);
        });


        // ==============================
        // BASEMAP LAYERS
        // ============================== 
        // basemapSources.push(
        //     { id: 'shape', source: shape },
        //     ...sources
        // );

        // basemapLayers.push(
        //     fillShape,
        //     lineShape,
        //     ...layers
        // );        


        // ==============================
        // POPUPS
        // ==============================       
        popups(map, layers, popupContent);


        // const style = map.getStyle();

        // // Alle Quellen-IDs
        // const sourceIds = Object.keys(style.sources);
        // let projectSources = [];
        // sourceIds.forEach(sourceId => {
        //     if (sourceId != 'openmaptiles') {
        //         projectSources.push(sourceId);
        //     }           
        // });
        // console.log('Quellen im Style:', projectSources);


        // // Alle Layer-IDs
        // const layerSources = style.layers.map(layer => layer);
        // let projectLayers = [];
        // layerSources.forEach(layerSource => {
        //     if (layerSource.source != 'openmaptiles') {
        //         projectLayers.push(layerSource.id);
        //     }           
        // });
        // console.log('Layer im Style:', projectLayers);
       





    });


});