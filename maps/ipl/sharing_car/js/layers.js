import { sharingVehicles, sharingStations } from '../../../../src/js/layers/sharing/layers.js';
export { sourceSharingVehicles, sourceSharingStations } from '../../../../src/js/layers/sharing/layers.js';


// ==============================
// LAYERS
// ==============================
const sharingStationsCar = {
    source: 'sourceSharingStations',
    sourceLayer: 'sharing_stations',
    group: 'Carsharing'   
};


export const layersSharingCar = [
    {
        id: 'sharingCar_Vehicles',
        group: 'Carsharing',
        ...sharingVehicles,
        filter: sharingVehicles.filter('car')
    },
    {
        id: 'sharingCar_StationsNoRealtimeData',
        ...sharingStations.NO_REALTIME_DATA,
        filter: sharingStations.NO_REALTIME_DATA.filter('cars'),
        ...sharingStationsCar
    },
    {
        id: 'sharingCar_StationsOutdatedRealtimeData',
        ...sharingStations.OUTDATED_REALTIME_DATA,
        filter: sharingStations.OUTDATED_REALTIME_DATA.filter('cars'),
        ...sharingStationsCar
    },
    {
        id: 'sharingCar_StationsOccupied',
        ...sharingStations.OCCUPIED,
        filter: sharingStations.OCCUPIED.filter('cars'),
        ...sharingStationsCar
    },
    {
        id: 'sharingCar_StationsFree',
        ...sharingStations.FREE,
        filter: sharingStations.FREE.filter('cars'),
        ...sharingStationsCar
    }
];