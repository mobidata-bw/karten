import {
    fillShape, lineShape, maplibreControls, geocoder,
    addSources, addLayers,
    basemaps,
    popups
} from '../../../../src/js/initializeMap.js';
import {
    map, shape
} from './initializeMap.js';
import {
    sourceRoute, layersRoute,
    sourceStations, layersStations    
} from './layers.js';
import { sourceChargePoints, layersChargePointsDynamic } from '../../../ipl/charge_points/js/layers.js';
import { sourceSharingVehicles } from '../../../../src/js/layers/sharing/sharingVehicles.js';
import { sourceSharingStationsScooter, layersSharingScooter } from '../../../ipl/sharing_scooter/js/layers.js';
import { sourceSharingStationsCar, layersSharingCar } from '../../../ipl/sharing_car/js/layers.js';
import { sourceCountBicycle, layersCountBicycle } from '../../../count_bicycle/js/layers.js';
import { sourceParkApiBicycle, layersParkApiBicycleOccupancy } from '../../../ipl/park-api_bicycle/js/layers.js';
import { popupContent as popupContentStations } from './popupContent.js';
import { popupContent as popupContentChargePoints } from '../../../ipl/charge_points/js/popupContent.js';
import { popupContent as popupContentSharing } from '../../../../src/js/layers/sharing/popupContent.js';
import { popupContent as popupContentCountBicycle } from '../../../count_bicycle/js/popupContent.js';
import { popupContent as popupContentParkApi } from '../../../../src/js/layers/parkApi/popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layersDatenspaziergang, layersIpl;



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
        map.addSource('shape', shape);
        map.addLayer(fillShape);
        map.addLayer(lineShape);


        // PROJECT LAYERS    
        const sources = [
            { id: 'sourceRoute', source: sourceRoute },
            { id: 'sourceStations', source: sourceStations },
            { id: 'sourceChargePoints', source: sourceChargePoints },
            { id: 'sourceSharingVehicles', source: sourceSharingVehicles },
            { id: 'sourceSharingStationsScooter', source: sourceSharingStationsScooter },
            { id: 'sourceSharingStationsCar', source: sourceSharingStationsCar },
            { id: 'sourceCountBicycle', source: sourceCountBicycle },
            { id: 'sourceParkApiBicycle', source: sourceParkApiBicycle }
        ];
        sources.forEach(source => addSources(map, source));

        layersDatenspaziergang = [
            ...layersRoute,
            ...layersStations
        ];
        addLayers(map, ...layersDatenspaziergang);

        layersIpl = [
            ...layersChargePointsDynamic,
            ...layersSharingScooter,
            ...layersCountBicycle,
            ...layersSharingCar,
            ...layersParkApiBicycleOccupancy
        ];
        layersIpl.forEach(layer => {
            if (layer.source != 'sourceChargePoints') {
                layer.visibility = 'none';
            }
            else {
                layer.visibility = 'visible';
            };
            addLayers(map, layer)
        });


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
            ...layersIpl,
            ...layersDatenspaziergang
        );


        // ==============================
        // POPUPS
        // ============================== 
        popups(map, layersStations, popupContentStations);
        popups(map, layersChargePointsDynamic, popupContentChargePoints);
        popups(map, layersSharingScooter, popupContentSharing);
        popups(map, layersSharingCar, popupContentSharing);
        popups(map, layersCountBicycle, popupContentCountBicycle);
        popups(map, layersCountBicycle, popupContentParkApi);


    });


});