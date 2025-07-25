import { occupancy, types, objects, specialParking } from '../../../../src/js/layers/parkApi/layers.js';


// ==============================
// SOURCES
// ==============================
export const sourceParkApiCarBuildings = {
    layer: 'MobiData-BW:park-api_car_buildings',
    style: 'MobiData-BW:mdbw_park-api_parking-object',
    bounds: [5.9, 45.8, 17.0, 54.8],
    // server: 'test'
};


// ==============================
// LAYERS
// ==============================
const layers = {
    source: 'sourceParkApiCarBuildings',
    sourceLayer: 'park-api_car_buildings',
    group: 'Parkplätze und Parkbauten'
};

export const layersParkApiCarBuildingsOccupancy = [
    {
        id: 'parkApiCarBuildingsOccupancy_NoRealtimeInformation',
        ...occupancy.NO_REALTIME_INFORMATION,
        ...layers
    },
    {
        id: 'parkApiCarBuildingsOccupancy_OutdatedRealtimeInformation',
        ...occupancy.OUTDATED_REALTIME_INFORMATION,
        ...layers
    },
    {
        id: 'parkApiCarBuildingsOccupancy_VeryLowAvailabilityOrClosed',
        ...occupancy.VERY_LOW_AVAILABILITY_OR_CLOSED,
        ...layers
    },
    {
        id: 'parkApiCarBuildingsOccupancy_LowAvailability',
        ...occupancy.LOW_AVAILABILITY,
        ...layers
    },
    {
        id: 'parkApiCarBuildingsOccupancy_HighAvailability',
        ...occupancy.HIGH_AVAILABILITY,
        ...layers
    }
];

export const layersParkApiCarBuildingsTypes = [
    {
        id: 'parkApiCarBuildingsTypes_Other',
        ...types.OTHER,
        visibility: 'none',
        ...layers
    },
    {
        id: 'parkApiCarBuildingsTypes_OffStreetParkingGround',
        ...types.OFF_STREET_PARKING_GROUND,
        visibility: 'none',
        ...layers
    },
    {
        id: 'parkApiCarBuildingsTypes_Underground',
        ...types.UNDERGROUND,
        visibility: 'none',
        ...layers
    },
    {
        id: 'parkApiCarBuildingsTypes_CarPark',
        ...types.CAR_PARK,
        visibility: 'none',
        ...layers
    }
];

export const layersParkApiCarBuildingsObjects = [
    {
        id: 'parkApiCarBuildingsObjects_Site',       
        visibility: 'none',
        ...objects.PARKING_SITE,
        label: 'Parkbau',
        ...layers
    },
    {
        id: 'parkApiCarBuildingsObjects_Spot',
        visibility: 'none',
        ...objects.PARKING_SPOT,
        ...layers
    }
];

export const layersParkApiCarBuildingsSpecialParking = [
    {
        id: 'parkApiCarBuildingsSpecialParking_Disabled',
        visibility: 'none',
        ...specialParking.DISABLED,
        ...layers,
        exclusiveWithinGroup: true
    },
    {
        id: 'parkApiCarBuildingsSpecialParking_Woman',
        visibility: 'none',
        ...specialParking.WOMAN,
        ...layers,
        exclusiveWithinGroup: true
    },
    {
        id: 'parkApiCarBuildingsSpecialParking_Family',
        visibility: 'none',
        ...specialParking.FAMILY,
        ...layers,
        exclusiveWithinGroup: true
    },
    {
        id: 'parkApiCarBuildingsSpecialParking_Charging',
        visibility: 'none',
        ...specialParking.CHARGING,
        ...layers,
        exclusiveWithinGroup: true
    },
    {
        id: 'parkApiCarBuildingsSpecialParking_Carsharing',
        visibility: 'none',
        ...specialParking.CARSHARING,
        ...layers,
        exclusiveWithinGroup: true
    }
];