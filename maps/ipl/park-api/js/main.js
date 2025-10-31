import {
    initializeMap,
    basemaps,
    setupLayerInteractions,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import {
    sourceParkApiCar, sourceParkApiCarLines, sourceParkApiCarPolygons, sourceParkApiBicycle,
    layersParkApiOccupancy, layersParkApiType,
    layersParkApiOccupancyDisabled, layersParkApiOccupancyDisabledBuildings, layersParkApiOccupancyDisabledOnStreet,
    layersParkApiItemOccupancy
} from './layers.js';
import { popupContent } from './popupContent.js';
import { initializeControlLayers } from './controlLayers.js';
import { urlParams } from '../../../../src/js/urlParams.js';

export let layers, layersGeneral, layersDisabled, layersItem = layersParkApiItemOccupancy;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // URL PARAMS
    // ==============================  
    const { purpose, type, geometry, object } = urlParams();


    // ==============================
    // MAP CONTROLS
    // ==============================  
    const map = initializeMap();

    const options = {};
    if (purpose == 'bicycle') options.style = 'bicycle';
    basemaps(map, options);


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

        let addLayersDisabled, addLayersItem;

        if (purpose == 'car') {
            if (geometry == null && object == null) {
                addLayersDisabled = true;
                if (type == null) {
                    layersDisabled = layersParkApiOccupancyDisabled;
                } else if (type == 'buildings') {
                    layersDisabled = layersParkApiOccupancyDisabledBuildings;
                } else {
                    layersDisabled = layersParkApiOccupancyDisabledOnStreet;
                }
            } else {
                addLayersDisabled = false;
            }
        } else if (purpose == 'bicycle') {
            addLayersItem = true;
        };
        layersGeneral = [
            ...layersParkApiOccupancy,
            ...layersParkApiType
        ];
        layers = [
            ...layersGeneral,
            ...(addLayersDisabled ? layersDisabled : ''),
            ...(addLayersItem ? layersItem : '')
        ];
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