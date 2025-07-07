import { sharingVehicles, sharingStations } from '../../../../src/js/layers/sharing/layers.js';
export { sourceSharingVehicles, sourceSharingStations } from '../../../../src/js/layers/sharing/layers.js';


// ==============================
// SOURCES
// ==============================
// export const sourceSharingStationsCar = {
//     layer: 'MobiData-BW:sharing_stations',
//     // style: 'MobiData-BW:mdbw_sharing_stations_default',
//     style: '',
//     bounds: [6.0, 45.8, 14.3, 54.3],
//     server: 'test'
// };


// ==============================
// LAYERS
// ==============================
const sharingStationsCar = {
    source: 'sourceSharingStationsCar',
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
        filter: sharingStations.NO_REALTIME_DATA.buildFilter('car'),
        ...sharingStationsCar
    },
    {
        id: 'sharingCar_StationsOutdatedRealtimeData',
        ...sharingStations.OUTDATED_REALTIME_DATA,
        filter: sharingStations.OUTDATED_REALTIME_DATA.buildFilter('car'),
        ...sharingStationsCar
    },
    {
        id: 'sharingCar_StationsOccupied',
        ...sharingStations.OCCUPIED,
        filter: sharingStations.OCCUPIED.buildFilter('car'),
        ...sharingStationsCar
    },
    {
        id: 'sharingCar_StationsFree',
        ...sharingStations.FREE,
        filter: sharingStations.FREE.buildFilter('car'),
        ...sharingStationsCar
    }
];