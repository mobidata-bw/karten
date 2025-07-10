import '../css/styles.css';

import {
    initializeMap,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import {
    sourceRoute, layersRoute,
    sourceStations, layersStations,
    sourceAbstellzonen, layersScooterZones
} from './layers.js';
import { sourceChargePoints, layersChargePointsDynamic } from '../../../ipl/charge_points/js/layers.js';
import { sourceSharingVehicles, sourceSharingStations } from '../../../../src/js/layers/sharing/layers.js';
import { layersSharingScooter } from '../../../ipl/sharing_scooter/js/layers.js';
import { sourceTransitStops, layersTransitStops } from '../../../ipl/gtfs/js/layers.js';
import { layersSharingCar } from '../../../ipl/sharing_car/js/layers.js';
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
    const map = initializeMap({
        center: [9.1798, 48.7759],
        zoom: window.innerWidth < 577 ? 12.5 : 14.5,
        minZoom: 12,
        shape: 'shapesStuttgart.geojson'
    });
    basemaps(map);


    map.on('load', () => {

        // ==============================
        // SOURCES AND LAYERS
        // ==============================   
        const sources = [
            { id: 'sourceRoute', source: sourceRoute },
            { id: 'sourceStations', source: sourceStations },
            { id: 'sourceAbstellzonen', source: sourceAbstellzonen },
            { id: 'sourceChargePoints', source: sourceChargePoints },
            { id: 'sourceSharingVehicles', source: sourceSharingVehicles },
            { id: 'sourceSharingStations', source: sourceSharingStations },
            { id: 'sourceTransitStops', source: sourceTransitStops },
            { id: 'sourceCountBicycle', source: sourceCountBicycle },
            { id: 'sourceParkApiBicycle', source: sourceParkApiBicycle }
        ];
        sources.forEach(source => addSources(map, source));

        layersDatenspaziergang = [
            ...layersRoute,
            ...layersStations
        ];
        layersDatenspaziergang.forEach(layer => addLayers(map, layer));

        const scooter = [
            ...layersScooterZones.map(layer => ({ ...layer, group: 'Station 2: E-Scooter-Sharing' })),
            ...layersSharingScooter.map(layer => ({ ...layer, group: 'Station 2: E-Scooter-Sharing' }))
        ];

        layersIpl = [
            ...layersChargePointsDynamic.map(layer => ({ ...layer, group: 'Station 1: E-Ladesäulen' })),

            ...scooter.filter(layer => layer.id == 'abstellverbotszonen'),
            ...scooter.filter(layer => layer.id == 'abstellflaechen'),
            ...scooter.filter(layer => layer.id == 'sharingScooter_StationsOccupied').map(layer => ({ ...layer, label: 'Station: ohne verfügbare Fahrzeuge' })),
            ...scooter.filter(layer => layer.id == 'sharingScooter_StationsFree').map(layer => ({ ...layer, label: 'Station: verfügbare Fahrzeuge' })),
            ...scooter.filter(layer => layer.id == 'sharingScooter_VehiclesRealtimeData').map(layer => ({ ...layer, label: 'Fahrzeug: verfügbar' })),,

            ...layersTransitStops.map(layer => ({ ...layer, group: 'Station 3: Haltestellen' })), ,
            ...layersCountBicycle.filter(layer => layer.id == 'countBicycle3').map(layer => ({ ...layer, label: 'Fahrradzählstellen', group: 'Station 4: Fahrradzählstellen' })),

            ...layersSharingCar.filter(layer => layer.id == 'sharingCar_StationsNoRealtimeData').map(layer => ({ ...layer, label: 'Station: ohne Echtzeitdaten', group: 'Station 5: Carsharing' })),
            ...layersSharingCar.filter(layer => layer.id == 'sharingCar_StationsOccupied').map(layer => ({ ...layer, label: 'Station: ohne verfügbare Fahrzeuge', group: 'Station 5: Carsharing' })),
            ...layersSharingCar.filter(layer => layer.id == 'sharingCar_StationsFree').map(layer => ({ ...layer, label: 'Station: verfügbare Fahrzeuge', group: 'Station 5: Carsharing' })),

            ...layersParkApiBicycleOccupancy.filter(layer => layer.id != 'parkApiBicycleOccupancy_OutdatedRealtimeInformation').map(layer => ({ ...layer, group: 'Station 6: Fahrradabstellanlagen' }))
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
        // POPUPS
        // ============================== 
        popups(map, layersStations, popupContentStations);
        popups(map, layersChargePointsDynamic, popupContentChargePoints);
        popups(map, layersSharingScooter, popupContentSharing);
        popups(map, layersSharingCar, popupContentSharing);
        popups(map, layersCountBicycle, popupContentCountBicycle);
        popups(map, layersParkApiBicycleOccupancy, popupContentParkApi);


    });


});