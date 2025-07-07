import { sharingVehicles, sharingStations } from '../../../../src/js/layers/sharing/layers.js';
export { sourceSharingVehicles, sourceSharingStations } from '../../../../src/js/layers/sharing/layers.js';


// ==============================
// LAYERS
// ==============================
const sharingStationsBicycle = {
    source: 'sourceSharingStations',
    sourceLayer: 'sharing_stations'    
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
        group: 'Bikesharing',
        ...sharingStations.OUTDATED_REALTIME_DATA,
        filter: sharingStations.OUTDATED_REALTIME_DATA.filter('bicycles'),
        ...sharingStationsBicycle
    },
    {
        id: 'sharingBicycle_StationsOccupied',
        group: 'Bikesharing',
        ...sharingStations.OCCUPIED,
        filter: sharingStations.OCCUPIED.filter('bicycles'),
        ...sharingStationsBicycle
    },
    {
        id: 'sharingBicycle_StationsFree',
        group: 'Bikesharing',
        ...sharingStations.FREE,
        filter: sharingStations.FREE.filter('bicycles'),
        ...sharingStationsBicycle
    }
];


export const layersSharingCargoBicycle = [
    {
        id: 'sharingCargoBicycleVehicles',
        group: 'Lastenrad-Sharing',
        ...sharingVehicles,
        filter: sharingVehicles.filter('cargo_bicycle'),
        visibility: 'none'
    },
    {
        id: 'sharingCargoBicycle_StationsNoRealtimeData',
        group: 'Lastenrad-Sharing',
        ...sharingStations.NO_REALTIME_DATA,
        filter: sharingStations.NO_REALTIME_DATA.filter('cargo_bicycles'),
        ...sharingStationsBicycle,
        visibility: 'none'
    },
    {
        id: 'sharingCargoBicycle_StationsOutdatedRealtimeData',
        group: 'Lastenrad-Sharing',
        ...sharingStations.OUTDATED_REALTIME_DATA,
        filter: sharingStations.OUTDATED_REALTIME_DATA.filter('cargo_bicycles'),
        ...sharingStationsBicycle,
        visibility: 'none'
    },
    {
        id: 'sharingCargoBicycle_StationsOccupied',
        group: 'Lastenrad-Sharing',
        ...sharingStations.OCCUPIED,
        filter: sharingStations.OCCUPIED.filter('cargo_bicycles'),
        ...sharingStationsBicycle,
        visibility: 'none'
    },
    {
        id: 'sharingCargoBicycle_StationsFree',
        group: 'Lastenrad-Sharing',
        ...sharingStations.FREE,
        filter: sharingStations.FREE.filter('cargo_bicycles'),
        ...sharingStationsBicycle,
        visibility: 'none'
    }
];