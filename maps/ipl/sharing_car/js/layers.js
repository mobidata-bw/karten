import { sharingVehicles, sharingStations } from '../../../../src/js/layers/sharing/layers.js';
export { sourceSharingVehicles, sourceSharingStations } from '../../../../src/js/layers/sharing/layers.js';


// ==============================
// LAYERS
// ==============================
export const layersSharingCarVehicles = [
    {
        id: 'sharingCar_VehiclesOutdatedRealtimeData',
        group: 'Carsharing',
        ...sharingVehicles.OUTDATED_REALTIME_DATA,
        filter: sharingVehicles.OUTDATED_REALTIME_DATA.filter('car')
    },
    {
        id: 'sharingCar_VehiclesRealtimeData',
        group: 'Carsharing',
        ...sharingVehicles.REALTIME_DATA,
        filter: sharingVehicles.REALTIME_DATA.filter('car')
    }  
];

export const layersSharingCarStations = [  
    {
        id: 'sharingCar_StationsNoRealtimeData',
        group: 'Carsharing',
        ...sharingStations.NO_REALTIME_DATA,
        filter: sharingStations.NO_REALTIME_DATA.filter('cars')
    },
    {
        id: 'sharingCar_StationsOutdatedRealtimeData',
        group: 'Carsharing',
        ...sharingStations.OUTDATED_REALTIME_DATA,
        filter: sharingStations.OUTDATED_REALTIME_DATA.filter('cars')
    },
    {
        id: 'sharingCar_StationsOccupied',
        group: 'Carsharing',
        ...sharingStations.OCCUPIED,
        filter: sharingStations.OCCUPIED.filter('cars')
    },
    {
        id: 'sharingCar_StationsFree',
        group: 'Carsharing',
        ...sharingStations.FREE,
        filter: sharingStations.FREE.filter('cars')
    }
];