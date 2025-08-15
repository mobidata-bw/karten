import { occupancy, types, objects, specialParking } from '../../../../src/js/layers/parkApi/layers.js';


// ==============================
// SOURCES
// ==============================
export const sourceParkApiCar = {
    layer: 'MobiData-BW:park-api_car',
    style: 'MobiData-BW:mdbw_park-api_parking-object',
    bounds: [5.9, 45.8, 17.0, 54.8],
    server: 'test'
};


// ==============================
// LAYERS
// ==============================
const layers = {
    source: 'sourceParkApiCar',
    sourceLayer: 'park-api_car',
    group: 'Parkplätze'
};

export const layersParkApiCarOccupancy = [
    {
        id: 'parkApiCarOccupancy_NoRealtimeInformation',
        ...occupancy.NO_REALTIME_INFORMATION,
        ...layers
    },
    {
        id: 'parkApiCarOccupancy_OutdatedRealtimeInformation',
        ...occupancy.OUTDATED_REALTIME_INFORMATION,
        ...layers
    },
    {
        id: 'parkApiCarOccupancy_Closed',
        ...occupancy.CLOSED,
        ...layers
    },
    {
        id: 'parkApiCarOccupancy_VeryLowAvailability',
        ...occupancy.VERY_LOW_AVAILABILITY,
        ...layers
    },
    {
        id: 'parkApiCarOccupancy_LowAvailability',
        ...occupancy.LOW_AVAILABILITY,
        ...layers
    },
    {
        id: 'parkApiCarOccupancy_HighAvailability',
        ...occupancy.HIGH_AVAILABILITY,
        ...layers
    }
];

export const layersParkApiCarTypes = [
    {
        id: 'parkApiCarTypes_Other',
        ...types.OTHER,
        visibility: 'none',
        ...layers
    },
    {
        id: 'parkApiCarTypes_OnStreet',
        ...types.ON_STREET,
        visibility: 'none',
        ...layers
    },
    {
        id: 'parkApiCarTypes_OffStreetParkingGround',
        ...types.OFF_STREET_PARKING_GROUND,
        visibility: 'none',
        ...layers
    },
    {
        id: 'parkApiCarTypes_Underground',
        ...types.UNDERGROUND,
        visibility: 'none',
        ...layers
    },
    {
        id: 'parkApiCarTypes_CarPark',
        ...types.CAR_PARK,
        visibility: 'none',
        ...layers
    }   
];

export const layersParkApiCarObjects = [
    {
        id: 'parkApiCarObjects_Site',       
        visibility: 'none',
        ...objects.PARKING_SITE,
        ...layers
    },
    {
        id: 'parkApiCarObjects_Spot',
        visibility: 'none',
        ...objects.PARKING_SPOT,
        ...layers
    }
];

export const layersParkApiCarSpecialParking = [
    {
        id: 'parkApiCarSpecialParking_Disabled',
        visibility: 'none',
        ...specialParking.DISABLED,
        ...layers,
        exclusiveWithinGroup: true
    },
    {
        id: 'parkApiCarSpecialParking_Woman',
        visibility: 'none',
        ...specialParking.WOMAN,
        ...layers,
        exclusiveWithinGroup: true
    },
    {
        id: 'parkApiCarSpecialParking_Family',
        visibility: 'none',
        ...specialParking.FAMILY,
        ...layers,
        exclusiveWithinGroup: true
    },
    {
        id: 'parkApiCarSpecialParking_Charging',
        visibility: 'none',
        ...specialParking.CHARGING,
        ...layers,
        exclusiveWithinGroup: true
    },
    {
        id: 'parkApiCarSpecialParking_Carsharing',
        visibility: 'none',
        ...specialParking.CARSHARING,
        ...layers,
        exclusiveWithinGroup: true
    }
];