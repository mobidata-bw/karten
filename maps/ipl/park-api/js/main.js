import {
    initializeMap,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import {
    sourceParkApiCar, sourceParkApiCarPolygons, sourceParkApiBicycle,
    layersParkApiOccupancy, layersParkApiType
} from './layers.js';
import { popupContent } from './popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers;


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
            { id: 'sourceParkApiCarPolygons', source: sourceParkApiCarPolygons },
            { id: 'sourceParkApiBicycle', source: sourceParkApiBicycle }
        ];
        sources.forEach(source => addSources(map, source));

        layers = map.layerGroups({
            'occupancy': layersParkApiOccupancy,
            'type': layersParkApiType        
        });
        layers.forEach(layer => addLayers(map, layer));

        // console.log(layers);
        console.log({
            vis: map.getLayoutProperty('parkApiCarOccupancy_NoRealtimeInformation', 'visibility'),
            minzoom: map.getLayer('parkApiCarOccupancy_NoRealtimeInformation')?.minzoom,
            maxzoom: map.getLayer('parkApiCarOccupancy_NoRealtimeInformation')?.maxzoom,
            src: map.getLayer('parkApiCarOccupancy_NoRealtimeInformation')?.source,
            srcMin: map.getSource(map.getLayer('parkApiCarOccupancy_NoRealtimeInformation')?.source)?.minzoom
          });
    
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