import { sharingVehicles } from '../../../../src/js/layers/sharing/sharingVehicles.js';
import { sharingStations } from '../../../../src/js/layers/sharing/sharingStations.js';
export { sourceSharingVehicles } from '../../../../src/js/layers/sharing/sharingVehicles.js';


// ==============================
// SOURCES
// ==============================
export const sourceSharingStationsCargoBicycle = {
    layer: 'MobiData-BW:sharing_stations_cargo_bicycle',
    style: 'MobiData-BW:mdbw_sharing_stations_default',
    bounds: [1.8, 45.8, 10.4, 54.6],
    // server: 'test'
};


// ==============================
// LAYERS
// ==============================
const sharingStationsCargoBicycle = {
    source: 'sourceSharingStationsCargoBicycle',
    sourceLayer: 'sharing_stations_cargo_bicycle',
    group: 'Lastenrad-Sharing'
};

export const layersSharingCargoBicycle = [
    {
        id: 'sharingCargoBicycleVehicles',
        group: 'Lastenrad-Sharing',
        ...sharingVehicles,
        filter: sharingVehicles.filter('cargo_bicycle')
    },
    {
        id: 'sharingCargoBicycle_StationsNoRealtimeData',
        ...sharingStations.NO_REALTIME_DATA,
        ...sharingStationsCargoBicycle
    },
    {
        id: 'sharingCargoBicycle_StationsOutdatedRealtimeData',
        ...sharingStations.OUTDATED_REALTIME_DATA,
        ...sharingStationsCargoBicycle
    },
    {
        id: 'sharingCargoBicycle_StationsOccupied',
        ...sharingStations.OCCUPIED,
        ...sharingStationsCargoBicycle
    },
    {
        id: 'sharingCargoBicycle_StationsFree',
        ...sharingStations.FREE,
        ...sharingStationsCargoBicycle
    }
];