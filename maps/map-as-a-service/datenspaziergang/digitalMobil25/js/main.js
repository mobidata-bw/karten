import '../css/styles.css';

import {
    initializeMap,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../../src/js/initializeMap.js';
import {
    sourceMap, layersRoute, layersStations,
    sourceAbstellverbotszonen, sourceAbstellflaechen, layersScooterZones
} from './layers.js';
import {
    sourceSharingVehicles, sourceSharingStations,
    layersSharingCarVehicles, layersSharingCarStations,
    layersSharingScooterVehicles, layersSharingScooterStations
} from '../../../../ipl/sharing/js/layers.js';
import { sourceChargePoints, layersChargePointsOccupancy } from '../../../../ipl/charge_points/js/layers.js';
import { sourceTransitStops, layersTransitStops } from '../../../../ipl/gtfs/js/layers.js';
import { sourceParkApiCar, layersParkApiCarOccupancy } from '../../../../ipl/park-api/js/layers.js';
import { popupContent as popupContentRoute } from './popupContent.js';
import { popupContent as popupContentSharing } from '../../../../ipl/sharing/js/popupContent.js';
import { popupContent as popupContentChargePoints } from '../../../../ipl/charge_points/js/popupContent.js';
import { popupContentTransitStops } from '../../../../ipl/gtfs/js/popupContent.js';
import { popupContent as popupContentParkApi } from '../../../../ipl/park-api/js/popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layersDatenspaziergang, layersIpl;


window.addEventListener('DOMContentLoaded', () => {

    document.title = 'MobiData BW® - Datenspaziergang digitalMobil25';

    // ==============================
    // INITIALIZE MAP
    // ==============================  
    const map = initializeMap({
        configZoom: window.innerWidth < 577 ? 15 : 16,
        configCenter: [9.182133, 48.789396],
        configMinZoom: 12,
        configShape: 'shapeStuttgart'
    });
    basemaps(map);


    map.on('load', () => {

        // ==============================
        // SOURCES AND LAYERS
        // ==============================   
        const sources = [
            { id: 'sourceMap', source: sourceMap },
            { id: 'sourceAbstellverbotszonen', source: sourceAbstellverbotszonen },
            { id: 'sourceAbstellflaechen', source: sourceAbstellflaechen },
            { id: 'sourceSharingVehicles', source: sourceSharingVehicles },
            { id: 'sourceSharingStations', source: sourceSharingStations },
            { id: 'sourceChargePoints', source: sourceChargePoints },
            { id: 'sourceTransitStops', source: sourceTransitStops },
            { id: 'sourceParkApiCar', source: sourceParkApiCar }
        ];
        sources.forEach(source => addSources(map, source));

        layersDatenspaziergang = [
            ...layersRoute,
            ...layersStations
        ];
        layersDatenspaziergang.forEach(layer => addLayers(map, layer));

        const scooter = [
            ...layersScooterZones.map(layer => ({ ...layer, group: 'Station 3: E-Scooter-Sharing' })),
            ...layersSharingScooterVehicles.map(layer => ({ ...layer, group: 'Station 3: E-Scooter-Sharing' })),
            ...layersSharingScooterStations.map(layer => ({ ...layer, group: 'Station 3: E-Scooter-Sharing' }))
        ];

        layersIpl = [
            ...layersSharingCarStations.filter(layer => layer.id == 'sharingCar_StationsNoRealtimeData').map(layer => ({ ...layer, label: 'Station: Echtzeitdaten älter 30 Minuten', group: 'Station 1: Carsharing', visibility: 'visible' })),
            ...layersSharingCarStations.filter(layer => layer.id == 'sharingCar_StationsOccupied').map(layer => ({ ...layer, label: 'Station: Fahrzeuge nicht verfügbar', group: 'Station 1: Carsharing', visibility: 'visible' })),
            ...layersSharingCarStations.filter(layer => layer.id == 'sharingCar_StationsFree').map(layer => ({ ...layer, label: 'Station: Fahrzeuge verfügbar', group: 'Station 1: Carsharing', visibility: 'visible' })),

            ...layersChargePointsOccupancy.map(layer => ({ ...layer, group: 'Station 2: E-Ladesäulen' })),

            ...scooter.filter(layer => layer.id == 'abstellverbotszonen').map(layer => ({ ...layer, visibility: 'none' })),
            ...scooter.filter(layer => layer.id == 'abstellflaechen').map(layer => ({ ...layer, visibility: 'none' })),
            ...scooter.filter(layer => layer.id == 'sharingScooter_StationsOccupied').map(layer => ({ ...layer, label: 'Station: Fahrzeuge nicht verfügbar', visibility: 'none' })),
            ...scooter.filter(layer => layer.id == 'sharingScooter_StationsFree').map(layer => ({ ...layer, label: 'Station: Fahrzeuge verfügbar', visibility: 'none' })),
            ...scooter.filter(layer => layer.id == 'sharingScooter_VehiclesRealtimeData').map(layer => ({ ...layer, label: 'Fahrzeug: verfügbar', visibility: 'none' })),

            ...layersTransitStops.map(layer => ({ ...layer, group: 'Station 4: Haltestellen', visibility: 'none' })),

            ...layersParkApiCarOccupancy.filter(layer => layer.id != 'parkApiCarOccupancy_OutdatedRealtimeInformation').map(layer => ({ ...layer, group: 'Station 5: Parkplätze', visibility: 'none' }))
        ];
        layersIpl.forEach(layer => addLayers(map, layer));


        // ==============================
        // LAYER CONTROL
        // ==============================     
        initializeControlLayers(map);


        // ==============================
        // POPUPS
        // ============================== 
        popups(map, layersStations, popupContentRoute);
        popups(map, layersChargePointsOccupancy, popupContentChargePoints);
        popups(map, [...layersSharingCarVehicles, ...layersSharingCarStations, ...layersSharingScooterVehicles, ...layersSharingScooterStations], popupContentSharing);
        popups(map, layersTransitStops, popupContentTransitStops);
        popups(map, layersParkApiCarOccupancy, popupContentParkApi);


    });


});