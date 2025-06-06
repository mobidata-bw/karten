// ==============================
// SOURCES
// ==============================
export const sourceSharingVehicles = {
    layer: 'MobiData-BW:sharing_vehicles',
    style: 'MobiData-BW:mdbw_sharing_vehicles_default',
    bounds: [4.0, 45.8, 13.5, 54.6]
};


// ==============================
// LAYERS
// ==============================
export const sharingVehicles = {
    source: 'sourceSharingVehicles',
    sourceLayer: 'sharing_vehicles',
    label: 'Free-Floating-Fahrzeuge',
    filter: mode => ['==', ['get', 'form_factor'], mode],
    color: '#91FFFF'
};

// export const sharingVehicles = {
//     REALTIME_DATA: {
//         source: 'sourceSharingVehicles',
//         sourceLayer: 'sharing_vehicles',
//         label: 'Free-Floating-Fahrzeuge',
//        buildFilter: (mode) => [
//             'all',
//             ['==', ['get', 'realtime_data_outdated'], false],
//             ['==', ['get', 'form_factor'], mode]
//         ],
//         color: '#91FFFF'
//     },
//     OUTDATED_REALTIME_DATA: {
//         source: 'sourceSharingVehicles',
//         sourceLayer: 'sharing_vehicles',
//         label: 'Free-Floating-Fahrzeuge',
//           buildFilter: (mode) => [
//             'all',
//             ['==', ['get', 'realtime_data_outdated'], true],
//             ['==', ['get', 'form_factor'], mode]
//         ],
//         color: '#91FFFF'
//     }
// };