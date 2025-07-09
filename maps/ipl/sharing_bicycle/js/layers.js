import { sharingVehicles, sharingStations } from '../../../../src/js/layers/sharing/layers.js';
export { sourceSharingVehicles, sourceSharingStations } from '../../../../src/js/layers/sharing/layers.js';


// ==============================
// LAYERS
// ==============================
export const layersSharingBicycle = [
    {
        id: 'sharingBicycle_VehiclesNoRealtimeData',
        group: 'Bikesharing',
        ...sharingVehicles.OUTDATED_REALTIME_DATA,
        filter: sharingVehicles.OUTDATED_REALTIME_DATA.filter('bicycle')
    },
    {
        id: 'sharingBicycle_VehiclesRealtimeData',
        group: 'Bikesharing',
        ...sharingVehicles.REALTIME_DATA,
        filter: sharingVehicles.REALTIME_DATA.filter('bicycle')
    },
    {
        id: 'sharingBicycle_StationsOutdatedRealtimeData',
        group: 'Bikesharing',
        subGroup: 'Stationen',
        ...sharingStations.OUTDATED_REALTIME_DATA,
        filter: sharingStations.OUTDATED_REALTIME_DATA.filter('bicycles')
    },
    {
        id: 'sharingBicycle_StationsOccupied',
        group: 'Bikesharing',
        subGroup: 'Stationen',
        ...sharingStations.OCCUPIED,
        filter: sharingStations.OCCUPIED.filter('bicycles')
    },
    {
        id: 'sharingBicycle_StationsFree',
        group: 'Bikesharing',
        subGroup: 'Stationen',
        ...sharingStations.FREE,
        filter: sharingStations.FREE.filter('bicycles')
    }
];


export const layersSharingCargoBicycle = [
    {
        id: 'sharingCargoBicycle_VehiclesNoRealtimeData',
        group: 'Lastenrad-Sharing',
        ...sharingVehicles.OUTDATED_REALTIME_DATA,
        filter: sharingVehicles.OUTDATED_REALTIME_DATA.filter('cargo_bicycle'),
        subGroup: 'Free-Floating-Fahrzeuge ',
        visibility: 'none'
    },
    {
        id: 'sharingCargoBicycle_VehiclesRealtimeData',
        group: 'Lastenrad-Sharing',      
        ...sharingVehicles.REALTIME_DATA,  
        filter: sharingVehicles.REALTIME_DATA.filter('cargo_bicycle'),
        subGroup: 'Free-Floating-Fahrzeuge ',
        visibility: 'none'
    },
    {
        id: 'sharingCargoBicycle_StationsNoRealtimeData',
        group: 'Lastenrad-Sharing',
        ...sharingStations.NO_REALTIME_DATA,       
        filter: sharingStations.NO_REALTIME_DATA.filter('cargo_bicycles'),
        subGroup: 'Stationen ',
        visibility: 'none'
    },
    {
        id: 'sharingCargoBicycle_StationsOutdatedRealtimeData',
        group: 'Lastenrad-Sharing',
        ...sharingStations.OUTDATED_REALTIME_DATA,
        filter: sharingStations.OUTDATED_REALTIME_DATA.filter('cargo_bicycles'),
        subGroup: 'Stationen ',
        visibility: 'none'
    },
    {
        id: 'sharingCargoBicycle_StationsOccupied',
        group: 'Lastenrad-Sharing',
        ...sharingStations.OCCUPIED,
        filter: sharingStations.OCCUPIED.filter('cargo_bicycles'),
        subGroup: 'Stationen ',
        visibility: 'none'
    },
    {
        id: 'sharingCargoBicycle_StationsFree',
        group: 'Lastenrad-Sharing',
        ...sharingStations.FREE,       
        filter: sharingStations.FREE.filter('cargo_bicycles'),
        subGroup: 'Stationen ',
        visibility: 'none'
    }
];