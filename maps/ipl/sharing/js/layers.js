import { sharingStationsNoRealtimeDataLayers } from './filters.js';
import { urlParams } from '../../../../src/js/urlParams.js';


// ==============================
// URL PARAMS
// ==============================
let { layerFilter } = urlParams();


// ==============================
// SOURCES
// ==============================
export const sourceSharingVehicles = {
    layer: 'MobiData-BW:sharing_vehicles',
    style: 'MobiData-BW:mdbw_sharing_vehicles_default',
    bounds: [4.0, 45.8, 13.5, 54.6]
};

export const sourceSharingStations = {
    layer: 'MobiData-BW:sharing_stations',
    style: 'MobiData-BW:mdbw_sharing_stations_default',
    bounds: [4.0, 45.8, 13.5, 54.6]
};


// ==============================
// LAYERS: VEHICLES
// ==============================
const layerGroupSharingVehicles = {
    subGroup: 'Free-Floating-Fahrzeuge',
    source: 'sourceSharingVehicles',
    sourceLayer: 'sharing_vehicles'
};

function sharingVehicles({ id, layerGroup, layerFilter }) {
    return [
        {
            id: `sharing${id}_VehiclesOutdatedRealtimeData`,
            label: 'Echzeitdaten älter 30 Minuten',
            filter:
                [
                    'all',
                    ['==', ['get', 'form_factor'], layerFilter],
                    ['==', ['get', 'realtime_data_outdated'], true]
                ],
            color: '#cacaca',
            scope: ['car', 'bicycle', 'scooter', 'cargo_bicycle', 'moped'],
            ...layerGroupSharingVehicles,
            ...layerGroup
        },
        {
            id: `sharing${id}_VehiclesRealtimeData`,
            label: 'Fahrzeug verfügbar',
            filter:
                [
                    'all',
                    ['==', ['get', 'form_factor'], layerFilter],
                    [
                        'any',
                        ['==', ['get', 'realtime_data_outdated'], false],
                        ['==', ['get', 'realtime_data_outdated'], null]
                    ]
                ],
            color: '#91FFFF',
            scope: ['car', 'bicycle', 'scooter', 'cargo_bicycle', 'moped'],
            ...layerGroupSharingVehicles,
            ...layerGroup
        }
    ]
};


// ==============================
// PRESETS: VEHICLES
// ==============================
export const layersSharingVehicles = sharingVehicles(urlParams());
export const layersSharingCarVehicles = sharingVehicles(urlParams({ formFactor: 'car' })).filter(layer => layer.scope.includes('car'));
export const layersSharingBicycleVehicles = sharingVehicles(urlParams({ formFactor: 'bicycle' })).filter(layer => layer.scope.includes('bicycle'));;
export const layersSharingScooterVehicles = sharingVehicles(urlParams({ formFactor: 'scooter' })).filter(layer => layer.scope.includes('scooter'));;
export const layersSharingCargoBicycleVehicles = sharingVehicles(urlParams({ formFactor: 'cargo_bicycle' })).filter(layer => layer.scope.includes('cargo_bicycle'));;
export const layersSharingMopedVehicles = sharingVehicles(urlParams({ formFactor: 'moped' })).filter(layer => layer.scope.includes('moped'));;


// ==============================
// LAYERS: STATIONS
// ==============================
const layerGroupSharingStations = {
    subGroup: 'Stationen',
    source: 'sourceSharingStations',
    sourceLayer: 'sharing_stations'
};

function sharingStations({ id, layerGroup, layerFilter }) {
    return [
        {
            id: `sharing${id}_StationsNoRealtimeData`,
            label: 'Echtzeitdaten nicht vorhanden',
            filter:
                [
                    'all',
                    sharingStationsNoRealtimeDataLayers,
                    ['>=', ['get', `num_${layerFilter}s_available`], 0]
                ],
            color: '#615fdf',
            scope: ['car', 'cargo_bicycle'],
            ...layerGroupSharingStations,
            ...layerGroup
        },
        {
            id: `sharing${id}_StationsOutdatedRealtimeData`,
            label: 'Echtzeitdaten älter 30 Minuten',
            filter:
                [
                    'all',
                    ['!', sharingStationsNoRealtimeDataLayers],
                    ['>=', ['get', `num_${layerFilter}s_available`], 0],
                    [
                        'any',
                        ['==', ['get', 'is_virtual_station'], false],
                        ['!', ['has', 'is_virtual_station']]
                    ],
                    ['==', ['get', 'realtime_data_outdated'], true]
                ],
            color: '#cacaca',
            scope: ['car', 'bicycle', 'cargo_bicycle', 'moped'],
            ...layerGroupSharingStations,
            ...layerGroup
        },
        {
            id: `sharing${id}_StationsOccupied`,
            label: 'Fahrzeuge verfügbar',
            filter:
                [
                    'all',
                    ['!', sharingStationsNoRealtimeDataLayers],
                    ['>', ['get', `num_${layerFilter}s_available`], 0],
                    ['==', ['get', 'realtime_data_outdated'], false]
                ],
            color: '#fffb05',
            scope: ['car', 'bicycle', 'scooter', 'cargo_bicycle', 'moped'],
            ...layerGroupSharingStations,
            ...layerGroup
        },
        {
            id: `sharing${id}_StationsFree`,
            label: 'Fahrzeuge nicht verfügbar',
            filter:
                [
                    'all',
                    ['!', sharingStationsNoRealtimeDataLayers],
                    ['==', ['get', `num_${layerFilter}s_available`], 0],
                    ['==', ['get', 'realtime_data_outdated'], false]
                ],
            color: '#ffb805',
            scope: ['car', 'bicycle', 'scooter', 'cargo_bicycle', 'moped'],
            ...layerGroupSharingStations,
            ...layerGroup
        }
    ]
};


// ==============================
// PRESETS: STATIONS
// ==============================
export const layersSharingStations = sharingStations(urlParams());
export const layersSharingCarStations = sharingStations(urlParams({ formFactor: 'car' })).filter(layer => layer.scope.includes('car'));
export const layersSharingBicycleStations = sharingStations(urlParams({ formFactor: 'bicycle' })).filter(layer => layer.scope.includes('bicycle'));
export const layersSharingScooterStations = sharingStations(urlParams({ formFactor: 'scooter' })).filter(layer => layer.scope.includes('scooter'));
export const layersSharingCargoBicycleStations = sharingStations(urlParams({ formFactor: 'cargo_bicycle' })).filter(layer => layer.scope.includes('cargo_bicycle'));
export const layersSharingMopedStations = sharingStations(urlParams({ formFactor: 'moped' })).filter(layer => layer.scope.includes('moped'));