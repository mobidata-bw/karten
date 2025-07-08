import { sharingVehicles, sharingStations } from '../../../../src/js/layers/sharing/layers.js';
export { sourceSharingVehicles, sourceSharingStations } from '../../../../src/js/layers/sharing/layers.js';


// ==============================
// LAYERS
// ==============================
export const layersSharingCar = [
    {
        id: 'sharingCar_VehiclesNoRealtimeData',
        group: 'Carsharing',
        subGroup: 'Free-Floating-Fahrzeuge',
        ...sharingVehicles.OUTDATED_REALTIME_DATA,
        filter: sharingVehicles.OUTDATED_REALTIME_DATA.filter('car')
    },
    {
        id: 'sharingCar_VehiclesRealtimeData',
        group: 'Carsharing',
        subGroup: 'Free-Floating-Fahrzeuge',
        ...sharingVehicles.REALTIME_DATA,
        filter: sharingVehicles.REALTIME_DATA.filter('car')
    },
    {
        id: 'sharingCar_StationsNoRealtimeData',
        group: 'Carsharing',
        subGroup: 'Stationen',
        ...sharingStations.NO_REALTIME_DATA,
        filter: sharingStations.NO_REALTIME_DATA.filter('cars')
    },
    {
        id: 'sharingCar_StationsOutdatedRealtimeData',
        group: 'Carsharing',
        subGroup: 'Stationen',
        ...sharingStations.OUTDATED_REALTIME_DATA,
        filter: sharingStations.OUTDATED_REALTIME_DATA.filter('cars')
    },
    {
        id: 'sharingCar_StationsOccupied',
        group: 'Carsharing',
        subGroup: 'Stationen',
        ...sharingStations.OCCUPIED,
        filter: sharingStations.OCCUPIED.filter('cars')
    },
    {
        id: 'sharingCar_StationsFree',
        group: 'Carsharing',
        subGroup: 'Stationen',
        ...sharingStations.FREE,
        filter: sharingStations.FREE.filter('cars')
    }
];