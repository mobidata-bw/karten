import { sharingVehicles } from '../../../../src/js/layers/sharing/sharingVehicles.js';
import { sharingStations } from '../../../../src/js/layers/sharing/sharingStations.js';
export { sourceSharingVehicles } from '../../../../src/js/layers/sharing/sharingVehicles.js';


// ==============================
// SOURCES
// ==============================
export const sourceSharingStationsBicycle = {
    layer: 'MobiData-BW:sharing_stations_bicycle',
    style: 'MobiData-BW:mdbw_sharing_stations_default',
    bounds: [6.0, 45.8, 13.5, 54.6],
    // server: 'test'
};

export const sourceSharingStationsCargoBicycle = {
    layer: 'MobiData-BW:sharing_stations_cargo_bicycle',
    style: 'MobiData-BW:mdbw_sharing_stations_default',
    bounds: [1.8, 45.8, 10.4, 54.6],
    // server: 'test'
};


// ==============================
// LAYERS
// ==============================
const sharingStationsBicycle = {
    source: 'sourceSharingStationsBicycle',
    sourceLayer: 'sharing_stations_bicycle',
    group: 'Bikesharing'
};

export const layersSharingBicycle = [
    {
        id: 'sharingBicycle_VehiclesBicycle',
        group: 'Bikesharing',
        ...sharingVehicles,
        filter: sharingVehicles.filter('bicycle')
    },
    {
        id: 'sharingBicycle_StationsOutdatedRealtimeData',
        ...sharingStations.OUTDATED_REALTIME_DATA,
        ...sharingStationsBicycle
    },
    {
        id: 'sharingBicycle_StationsOccupied',
        ...sharingStations.OCCUPIED,
        ...sharingStationsBicycle
    },
    {
        id: 'sharingBicycle_StationsFree',
        ...sharingStations.FREE,
        ...sharingStationsBicycle
    }
];


const sharingStationsCargoBicycle = {
    source: 'sourceSharingStationsCargoBicycle',
    sourceLayer: 'sharing_stations_cargo_bicycle',
    group: 'Lastenrad-Sharing'
};

export const layersSharingCargoBicycle = [
    {
        id: 'sharingCargoBicycleVehicles',
        group: 'Lastenrad-Sharing',
        ...sharingVehicles,
        filter: sharingVehicles.filter('cargo_bicycle')
    },
    {
        id: 'sharingCargoBicycle_StationsNoRealtimeData',
        ...sharingStations.NO_REALTIME_DATA,
        ...sharingStationsCargoBicycle
    },
    {
        id: 'sharingCargoBicycle_StationsOutdatedRealtimeData',
        ...sharingStations.OUTDATED_REALTIME_DATA,
        ...sharingStationsCargoBicycle
    },
    {
        id: 'sharingCargoBicycle_StationsOccupied',
        ...sharingStations.OCCUPIED,
        ...sharingStationsCargoBicycle
    },
    {
        id: 'sharingCargoBicycle_StationsFree',
        ...sharingStations.FREE,
        ...sharingStationsCargoBicycle
    }
];