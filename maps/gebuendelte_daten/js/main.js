import {
    initializeMap, map, shape, fillShape, lineShape,
    basemaps,
    popups,
    wms,
    addSources, addLayers
} from '../../../src/js/initializeMap.js';

import { sourceParkApiCarBuildings, layersParkApiCarBuildingsOccupancy } from '../../ipl/park-api_car_buildings/js/layers.js';
import { sourceParkApiCarOnStreet, layersParkApiCarOnStreetOccupancy } from '../../ipl/park-api_car_on-street/js/layers.js';
import { sourceParkApiBicycle, layersParkApiBicycleOccupancy } from '../../ipl/park-api_bicycle/js/layers.js';
import { sourceSharingVehicles } from '../../../src/js/layers/sharing/sharingVehicles.js';
import { sourceSharingStationsCar, layersSharingCar } from '../../ipl/sharing_car/js/layers.js';
import { sourceSharingStationsBicycle, layersSharingBicycle } from '../../ipl/sharing_bicycle/js/layers.js';
import { sourceSharingStationsScooter, layersSharingScooter } from '../../ipl/sharing_scooter/js/layers.js';
import { sourceSharingStationsCargoBicycle, layersSharingCargoBicycle } from '../../ipl/sharing_cargo_bicycle/js/layers.js';
import { sourceChargePoints, layersChargePointsPower } from '../../ipl/charge_points/js/layers.js';
import { sourceRadvis, layersRadvis } from '../../ipl/radvis_cycle_network/js/layers.js';
import {
    sourceTransitStops, layersTransitStops,
    sourceTransitStations, layersTransitStations,
    sourceTransitShapes, layersTransitShapes
} from '../../ipl/gtfs/js/layers.js';
import { sourceRoadworks, layersRoadworks } from '../../ipl/roadworks/js/layers.js';
import { sourceCountCar, layersCountCar } from '../../count_car/js/layers.js';
import { sourceCountBicycle, layersCountBicycle } from '../../count_bicycle/js/layers.js';
import { sourceFootway, sourceMarked, sourceUncontrolled, sourceZebra, layersPedestrianCrossings } from '../../pedestrian_crossings/js/layers.js';

import { popupContent as popupContentParkApi } from '../../../src/js/layers/parkApi/popupContent.js';
import { popupContent as popupContentSharing } from '../../../src/js/layers/sharing/popupContent.js';
import { popupContent as popupContentChargePoints } from '../../ipl/charge_points/js/popupContent.js';
import { popupContent as popupContentRadvis } from '../../ipl/radvis_cycle_network/js/popupContent.js';
import {
    popupContentTransitStops,
    popupContentTransitStations,
    popupContentTransitShapes
} from '../../ipl/gtfs/js/popupContent.js';
import { popupContent as popupContentRoadworks } from '../../ipl/roadworks/js/popupContent.js';
import { popupContent as popupContentCountCar } from '../../count_car/js/popupContent.js';
import { popupContent as popupContentCountBicycle } from '../../count_bicycle/js/popupContent.js';
import { popupContent as popupContentPedestrianCrossings } from '../../pedestrian_crossings/js/popupContent.js';

import { initializeControlLayers } from './controlLayers.js';

export let layers, layersIpl, layersGeoJson;

export { map };


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // MAP CONTROLS
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
            { id: 'sourceParkApiCarBuildings', source: sourceParkApiCarBuildings },
            { id: 'sourceParkApiCarOnStreet', source: sourceParkApiCarOnStreet },
            { id: 'sourceParkApiBicycle', source: sourceParkApiBicycle },
            { id: 'sourceSharingVehicles', source: sourceSharingVehicles },
            { id: 'sourceSharingStationsCar', source: sourceSharingStationsCar },
            { id: 'sourceSharingStationsBicycle', source: sourceSharingStationsBicycle },
            { id: 'sourceSharingStationsScooter', source: sourceSharingStationsScooter },
            { id: 'sourceSharingStationsCargoBicycle', source: sourceSharingStationsCargoBicycle },
            { id: 'sourceChargePoints', source: sourceChargePoints },
            { id: 'sourceRadvis', source: sourceRadvis },
            { id: 'sourceTransitStops', source: sourceTransitStops },
            { id: 'sourceTransitStations', source: sourceTransitStations },
            { id: sourceTransitShapes[0].id, source: sourceTransitShapes[0] },
            { id: sourceTransitShapes[1].id, source: sourceTransitShapes[1] },
            { id: sourceTransitShapes[2].id, source: sourceTransitShapes[2] },
            { id: sourceTransitShapes[3].id, source: sourceTransitShapes[3] },
            { id: sourceTransitShapes[4].id, source: sourceTransitShapes[4] },
            { id: sourceTransitShapes[5].id, source: sourceTransitShapes[5] },
            { id: 'sourceRoadworks', source: sourceRoadworks },
            { id: 'sourceCountCar', source: sourceCountCar },
            { id: 'sourceCountBicycle', source: sourceCountBicycle },
            { id: 'sourceFootway', source: sourceFootway },
            { id: 'sourceMarked', source: sourceMarked },
            { id: 'sourceUncontrolled', source: sourceUncontrolled },
            { id: 'sourceZebra', source: sourceZebra }
        ];
        sources.forEach(source => addSources(map, source));

        layersIpl = [
            ...layersParkApiCarBuildingsOccupancy,
            ...layersParkApiCarOnStreetOccupancy,
            ...layersParkApiBicycleOccupancy,
            ...layersSharingCar,
            ...layersSharingBicycle,
            ...layersSharingScooter,
            ...layersSharingCargoBicycle,
            ...layersChargePointsPower,
            ...layersRadvis,
            ...layersTransitStops,
            ...layersTransitStations,
            ...layersTransitShapes,
            ...layersRoadworks
        ];
        layersGeoJson = [
            ...layersCountCar,
            ...layersCountBicycle,
            ...layersPedestrianCrossings
        ];
        layers = [
            ...layersIpl,
            ...layersGeoJson
        ];

        layers.forEach(layer => {
            if (layer.source != 'sourceParkApiCarBuildings') {
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
        // POPUPS
        // ==============================       
        popups(map, layersParkApiCarBuildingsOccupancy, popupContentParkApi);
        popups(map, layersParkApiCarOnStreetOccupancy, popupContentParkApi);
        popups(map, layersParkApiBicycleOccupancy, popupContentParkApi);
        popups(map, layersSharingCar, popupContentSharing);
        popups(map, layersSharingBicycle, popupContentSharing);
        popups(map, layersSharingScooter, popupContentSharing);
        popups(map, layersSharingCargoBicycle, popupContentSharing);
        popups(map, layersChargePointsPower, popupContentChargePoints);
        popups(map, layersRadvis, popupContentRadvis);
        popups(map, layersTransitStops, popupContentTransitStops);
        popups(map, layersTransitStations, popupContentTransitStations);
        popups(map, layersCountCar, popupContentCountCar);
        popups(map, layersCountBicycle, popupContentCountBicycle);
        popups(map, layersPedestrianCrossings, popupContentPedestrianCrossings);


        // ==============================
        // WMS & POPUPS
        // ==============================    
        wms(map, layersTransitShapes, popupContentTransitShapes);
        wms(map, layersRoadworks, popupContentRoadworks);


    });


});