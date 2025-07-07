import { sharingVehicles } from '../../../../src/js/layers/sharing/layers.js';
export { sourceSharingVehicles } from '../../../../src/js/layers/sharing/layers.js';


// ==============================
// LAYERS
// ==============================
export const layersSharingMoped = [
    {
        id: 'sharingMoped_Vehicles',
        group: 'Moped-Sharing',
        ...sharingVehicles,
        filter: sharingVehicles.filter('moped')
    }   
];