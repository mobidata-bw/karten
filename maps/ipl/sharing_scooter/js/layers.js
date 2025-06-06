import { sharingVehicles } from '../../../../src/js/layers/sharing/sharingVehicles.js';
import { sharingStations } from '../../../../src/js/layers/sharing/sharingStations.js';
export { sourceSharingVehicles } from '../../../../src/js/layers/sharing/sharingVehicles.js';


// ==============================
// SOURCES
// ==============================
export const sourceSharingStationsScooter = {
    layer: 'MobiData-BW:sharing_stations_scooters_standing',
    style: 'MobiData-BW:mdbw_sharing_stations_default',
    bounds: [4.3, 46.9, 9.9, 50.0],
    // server: 'test'
};


// ==============================
// LAYERS
// ==============================
const sharingStationsScooter = {
    source: 'sourceSharingStationsScooter',
    sourceLayer: 'sharing_stations_scooters_standing',
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
        ...sharingStationsScooter
    },
    {
        id: 'sharingScooter_StationsFree',
        ...sharingStationsScooter,
         ...sharingStations.FREE,
        ...sharingStationsScooter
    }
];