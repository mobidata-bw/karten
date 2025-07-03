import { sharingVehicles } from '../../../../src/js/layers/sharing/sharingVehicles.js';
export { sourceSharingVehicles } from '../../../../src/js/layers/sharing/sharingVehicles.js';


// ==============================
// LAYERS
// ==============================
export const layersSharingMoped = [
    {
        id: 'sharingCar_Vehicles',
        group: 'Moped-Sharing',
        ...sharingVehicles,
        filter: ['==', ['get', 'form_factor'], 'moped']
    }   
];