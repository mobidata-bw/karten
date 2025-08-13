import { sharingVehicles } from '../../../../src/js/layers/sharing/layers.js';
export { sourceSharingVehicles } from '../../../../src/js/layers/sharing/layers.js';


// ==============================
// LAYERS
// ==============================
export const layersSharingMopedVehicles = [
    {
        id: 'sharingMoped_VehiclesOutdatedRealtimeData',
        group: 'E-Kleinkraftrad-Sharing',
        ...sharingVehicles.OUTDATED_REALTIME_DATA,
        filter: sharingVehicles.OUTDATED_REALTIME_DATA.filter('moped')
    },
    {
        id: 'sharingMoped_VehiclesRealtimeData',
        group: 'E-Kleinkraftrad-Sharing',
        ...sharingVehicles.REALTIME_DATA,
        filter: sharingVehicles.REALTIME_DATA.filter('moped')
    },
];