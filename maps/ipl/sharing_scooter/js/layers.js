import { sharingVehicles, sharingStations } from '../../../../src/js/layers/sharing/layers.js';
export { sourceSharingVehicles, sourceSharingStations } from '../../../../src/js/layers/sharing/layers.js';


// ==============================
// LAYERS
// ==============================
export const layersSharingScooter = [    
    {
        id: 'sharingScooter_VehiclesOutdatedRealtimeData',
        group: 'E-Scooter-Sharing',
        ...sharingVehicles.OUTDATED_REALTIME_DATA,
        filter: sharingVehicles.OUTDATED_REALTIME_DATA.filter('scooter')
    },
    {
        id: 'sharingScooter_VehiclesRealtimeData',
        group: 'E-Scooter-Sharing',
        ...sharingVehicles.REALTIME_DATA,
        filter: sharingVehicles.REALTIME_DATA.filter('scooter')
    },
    {
        id: 'sharingScooter_StationsOccupied',
        group: 'E-Scooter-Sharing',
        ...sharingStations.OCCUPIED,
        filter: sharingStations.OCCUPIED.filter('scooters_standing')
    },
    {
        id: 'sharingScooter_StationsFree',
        group: 'E-Scooter-Sharing',
        ...sharingStations.FREE,
        filter: sharingStations.FREE.filter('scooters_standing')
    }
];