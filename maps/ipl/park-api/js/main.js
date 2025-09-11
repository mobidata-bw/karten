import {
    initializeMap,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import {
    sourceParkApiCar, sourceParkApiCarLines, sourceParkApiCarPolygons, sourceParkApiBicycle,
    layersParkApiOccupancy, layersParkApiType, layersParkApiOccupancyDisabled
} from './layers.js';
import { popupContent } from './popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers, layersDisabled, layersNotDisabled;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // MAP CONTROLS
    // ==============================  
    const map = initializeMap();
    basemaps(map);
 

    map.on('load', () => {

        // ==============================
        // SOURCES AND LAYERS
        // ============================== 
        const sources = [
            { id: 'sourceParkApiCar', source: sourceParkApiCar },
            { id: 'sourceParkApiCarLines', source: sourceParkApiCarLines },
            { id: 'sourceParkApiCarPolygons', source: sourceParkApiCarPolygons },
            { id: 'sourceParkApiBicycle', source: sourceParkApiBicycle }
        ];
        sources.forEach(source => addSources(map, source));

        layersDisabled = layersParkApiOccupancyDisabled;
        layersNotDisabled = [
            ...layersParkApiOccupancy,
           ...layersParkApiType        
        ]

        layers = map.layerGroups({
            'occupancy': layersParkApiOccupancy,
            'occupancy_disabled': layersParkApiOccupancyDisabled,
            'type': layersParkApiType        
        });
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