import { sharingVehicles } from '../../../../src/js/layers/sharing/layers.js';
export { sourceSharingVehicles } from '../../../../src/js/layers/sharing/layers.js';


// ==============================
// LAYERS
// ==============================
export const layersSharingMoped = [
    {
        id: 'sharingMoped_VehiclesOutdatedRealtimeData',
        group: 'Mopedsharing',
        ...sharingVehicles.OUTDATED_REALTIME_DATA,
        filter: sharingVehicles.OUTDATED_REALTIME_DATA.filter('moped')
    },
    {
        id: 'sharingMoped_VehiclesRealtimeData',
        group: 'Mopedsharing',
        ...sharingVehicles.REALTIME_DATA,
        filter: sharingVehicles.REALTIME_DATA.filter('moped')
    },
];