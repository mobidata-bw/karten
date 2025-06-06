import { sharingVehicles } from '../../../../src/js/layers/sharing/sharingVehicles.js';
import { sharingStations } from '../../../../src/js/layers/sharing/sharingStations.js';
export { sourceSharingVehicles } from '../../../../src/js/layers/sharing/sharingVehicles.js';


// ==============================
// SOURCES
// ==============================
export const sourceSharingStationsCar = {
    layer: 'MobiData-BW:sharing_stations_car',
    style: 'MobiData-BW:mdbw_sharing_stations_default',
    bounds: [6.0, 45.8, 14.3, 54.3],
    // server: 'test'
};


// ==============================
// LAYERS
// ==============================
const sharingStationsCar = {
    source: 'sourceSharingStationsCar',
    sourceLayer: 'sharing_stations_car',
    group: 'Carsharing'
};

export const layersSharingCar = [
    {
        id: 'sharingCar_Vehicles',
        group: 'Carsharing',
        ...sharingVehicles,
        filter: ['==', ['get', 'form_factor'], 'car']
    },
    {
        id: 'sharingCar_StationsNoRealtimeData',
        ...sharingStations.NO_REALTIME_DATA,
        ...sharingStationsCar
    },
    {
        id: 'sharingCar_StationsOutdatedRealtimeData',
        ...sharingStations.OUTDATED_REALTIME_DATA,
        ...sharingStationsCar
    },
    {
        id: 'sharingCar_StationsOccupied',
        ...sharingStations.OCCUPIED,
        ...sharingStationsCar
    },
    {
        id: 'sharingCar_StationsFree',
        ...sharingStations.FREE,
        ...sharingStationsCar
    }
];