import { occupancy, objects, specialParking } from '../../../../src/js/layers/parkApi/layers.js';


// ==============================
// SOURCES
// ==============================
export const sourceParkApiCarOnStreet = {
    layer: 'MobiData-BW:park-api_car_on-street',
    style: 'MobiData-BW:mdbw_park-api_parking-object',
    bounds: [6.7, 47.6, 9.5, 51.4],
    // server: 'test'
};


// ==============================
// LAYERS
// ==============================
const layers = {
    source: 'sourceParkApiCarOnStreet',
    sourceLayer: 'park-api_car_on-street',
    group: 'Straßen-Parkplätze'
};

export const layersParkApiCarOnStreetOccupancy = [
    {
        id: 'parkApiCarOnStreetOccupancy_NoRealtimeInformation',
        ...occupancy.NO_REALTIME_INFORMATION,
        ...layers
    },
    {
        id: 'parkApiCarOnStreetOccupancy_OutdatedRealtimeInformation',
        ...occupancy.OUTDATED_REALTIME_INFORMATION,
        ...layers
    },
    {
        id: 'parkApiCarOnStreetOccupancy_Closed',
        ...occupancy.CLOSED,
        ...layers
    },
    {
        id: 'parkApiCarOnStreetOccupancy_VeryLowAvailability',
        ...occupancy.VERY_LOW_AVAILABILITY,
        ...layers
    },
    {
        id: 'parkApiCarOnStreetOccupancy_LowAvailability',
        ...occupancy.LOW_AVAILABILITY,
        ...layers
    },
    {
        id: 'parkApiCarOnStreetOccupancy_HighAvailability',
        ...occupancy.HIGH_AVAILABILITY,
        ...layers
    }
];

export const layersParkApiCarOnStreetObjects = [
    {
        id: 'parkApiCarOnStreetObjects_Site',
        visibility: 'none',
        ...objects.PARKING_SITE,
        ...layers
    },
    {
        id: 'parkApiCarOnStreetObjects_Spot',
        visibility: 'none',
        ...objects.PARKING_SPOT,
        ...layers
    }
];

export const layersParkApiCarOnStreetSpecialParking = [
    {
        id: 'parkApiCarOnStreetSpecialParking_Disabled',
        visibility: 'none',
        ...specialParking.DISABLED,
        ...layers,
        exclusiveWithinGroup: true
    },
    {
        id: 'parkApiCarOnStreetSpecialParking_Family',
        visibility: 'none',
        ...specialParking.FAMILY,
        ...layers,
        exclusiveWithinGroup: true
    },
    {
        id: 'parkApiCarOnStreetSpecialParking_Charging',
        visibility: 'none',
        ...specialParking.CHARGING,
        ...layers,
        exclusiveWithinGroup: true
    },
    {
        id: 'parkApiCarOnStreetSpecialParking_Carsharing',
        visibility: 'none',
        ...specialParking.CARSHARING,
        ...layers,
        exclusiveWithinGroup: true
    }
];