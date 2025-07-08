import { sharingVehicles, sharingStations } from '../../../../src/js/layers/sharing/layers.js';
export { sourceSharingVehicles, sourceSharingStations } from '../../../../src/js/layers/sharing/layers.js';


// ==============================
// LAYERS
// ==============================
const sharingStationsScooter = {
    source: 'sourceSharingStations',
    sourceLayer: 'sharing_stations',
    group: 'E-Scooter-Sharing'
};

export const layersSharingScooter = [
    {
        id: 'sharingScooter_Vehicles',
        group: 'E-Scooter-Sharing',
        ...sharingVehicles,
        filter: sharingVehicles.filter('scooter')
    },
    {
        id: 'sharingScooter_StationsOccupied',
        ...sharingStations.OCCUPIED,
        filter: sharingStations.OCCUPIED.filter('scooters_standing'),
        ...sharingStationsScooter
    },
    {
        id: 'sharingScooter_StationsFree',
        ...sharingStationsScooter,
         ...sharingStations.FREE,
         filter: sharingStations.FREE.filter('scooters_standing'),
        ...sharingStationsScooter
    }
];