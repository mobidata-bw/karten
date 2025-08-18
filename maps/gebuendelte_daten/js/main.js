import '../css/styles.css';

import {
    initializeMap, map,
    basemaps,
    popups,
    wms,
    addSources, addLayers
} from '../../../src/js/initializeMap.js';
import {
    sourceParkApiCar, sourceParkApiBicycle,
    layersParkApiCarOccupancy as layersParkApiCar,
    layersParkApiBicycleOccupancy as layersParkApiBicycle
} from '../../ipl/park-api/js/layers.js';
import {
    sourceSharingVehicles, sourceSharingStations,
    layersSharingCarVehicles, layersSharingCarStations,
    layersSharingBicycleVehicles, layersSharingBicycleStations,
    layersSharingScooterVehicles, layersSharingScooterStations,
    layersSharingCargoBicycleVehicles, layersSharingCargoBicycleStations,
    layersSharingMopedVehicles, layersSharingMopedStations
} from '../../ipl/sharing/js/layers.js';
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

import { popupContent as popupContentParkApi } from '../../ipl/park-api/js/popupContent.js';
import { popupContent as popupContentSharing } from '../../ipl/sharing/js/popupContent.js';
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


    map.on('load', () => {

        // ==============================
        // SOURCES AND LAYERS
        // ==============================
        const sources = [
            { id: 'sourceParkApiCar', source: sourceParkApiCar },
            { id: 'sourceParkApiBicycle', source: sourceParkApiBicycle },
            { id: 'sourceSharingVehicles', source: sourceSharingVehicles },
            { id: 'sourceSharingStations', source: sourceSharingStations },
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

        const layersSharing = [
            ...layersSharingCarVehicles,
            ...layersSharingCarStations,
            ...layersSharingBicycleVehicles,
            ...layersSharingBicycleStations,
            ...layersSharingScooterVehicles,
            ...layersSharingScooterStations,
            ...layersSharingCargoBicycleVehicles,
            ...layersSharingCargoBicycleStations,
            ...layersSharingMopedVehicles,
            ...layersSharingMopedStations
        ];

        layersIpl = [
            ...layersParkApiCar,
            ...layersParkApiBicycle,
            ...layersSharing.filter(layer => layer.id.includes('StationsNoRealtimeData')).map(layer => ({ ...layer, label: 'Station: Echtzeitdaten nicht vorhanden' })),
            ...layersSharing.filter(layer => layer.id.includes('StationsOutdatedRealtimeData')).map(layer => ({ ...layer, label: 'Station: Echtzeitdaten älter 30 Minuten' })),
            ...layersSharing.filter(layer => layer.id.includes('StationsOccupied')).map(layer => ({ ...layer, label: 'Station: Fahrzeuge nicht vorhanden' })),
            ...layersSharing.filter(layer => layer.id.includes('StationsFree')).map(layer => ({ ...layer, label: 'Station: Fahrzeuge verfügbar' })),
            ...layersSharing.filter(layer => layer.id.includes('VehiclesOutdatedRealtimeData')).map(layer => ({ ...layer, label: 'Fahrzeug: Echtzeitdaten älter 30 Minuten' })),
            ...layersSharing.filter(layer => layer.id.includes('VehiclesRealtimeData')).map(layer => ({ ...layer, label: 'Fahrzeug: verfügbar' })),

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
            if (layer.source != 'sourceParkApiCar') {
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

        document.querySelectorAll('.config2.mgl-layerControlDirectory>div:not(.directory)').forEach(element => {
            element.style.setProperty('display', 'none', 'important');
        });


        // ==============================
        // POPUPS
        // ==============================       
        popups(map, [...layersParkApiCar, ...layersParkApiBicycle], popupContentParkApi);
        popups(map, layersSharing, popupContentSharing);
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