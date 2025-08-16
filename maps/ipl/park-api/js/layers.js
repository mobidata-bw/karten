import { occupancy, types } from '../../../../src/js/layers/parkApi/layers.js';
import { urlParams } from '../../../../src/js/layers/parkApi/urlParams.js';


// ==============================
// URL PARAMS
// ==============================
const { layers, id } = urlParams();


// ==============================
// SOURCES
// ==============================
export const sourceParkApiCar = {
    layer: 'MobiData-BW:park-api_car',
    style: 'MobiData-BW:mdbw_park-api_parking-object',
    bounds: [5.9, 45.8, 17.0, 54.8],
    server: 'test'
};

export const sourceParkApiBicycle = {
    layer: 'MobiData-BW:park-api_bicycle',
    style: 'MobiData-BW:mdbw_park-api_parking-object',
    bounds: [7.1, 47.5, 13.5, 53.8],
    server: 'test'
};


// ==============================
// LAYERS
// ==============================
export const layersParkApiOccupancy = [
    {
        id: `parkApi${id}Occupancy_NoRealtimeInformation`,
        ...occupancy.NO_REALTIME_INFORMATION,
        ...layers
    },
    {
        id: `parkApi${id}Occupancy_OutdatedRealtimeInformation`,
        ...occupancy.OUTDATED_REALTIME_INFORMATION,
        ...layers
    },
    {
        id: `parkApi${id}Occupancy_Closed`,
        ...occupancy.CLOSED,
        ...layers
    },
    {
        id: `parkApi${id}Occupancy_VeryLowAvailability`,
        ...occupancy.VERY_LOW_AVAILABILITY,
        ...layers
    },
    {
        id: `parkApi${id}Occupancy_LowAvailability`,
        ...occupancy.LOW_AVAILABILITY,
        ...layers
    },
    {
        id: `parkApi${id}Occupancy_HighAvailability`,
        ...occupancy.HIGH_AVAILABILITY,
        ...layers
    }
];

export const layersParkApiCarTypes = [
    {
        id: `parkApi${id}Types_Other`,
        ...types.OTHER,
        visibility: 'none',
        ...layers
    },
    {
        id: `parkApi${id}Types_OnStreet`,
        ...types.ON_STREET,
        visibility: 'none',
        ...layers
    },
    {
        id: `parkApi${id}Types_OffStreet`,
        ...types.OFF_STREET,
        visibility: 'none',
        ...layers
    },
    {
        id: `parkApi${id}Types_Underground`,
        ...types.UNDERGROUND,
        visibility: 'none',
        ...layers
    },
    {
        id: `parkApi${id}Types_CarPark`,
        ...types.CAR_PARK,
        visibility: 'none',
        ...layers
    }
];

export const layersParkApiBicycleTypes = [
    {
        id: 'parkApiBicycleTypes_Other',
        ...types.OTHER,
        visibility: 'none',
       ...layers
    },
    {
        id: 'parkApiBicycleTypes_WallLoops',
        ...types.WALL_LOOPS,
        visibility: 'none',
       ...layers
    },
    {
        id: 'parkApiBicycleTypes_Stands',
        ...types.STANDS,
        visibility: 'none',
       ...layers
    },
    {
        id: 'parkApiBicycleTypes_Lockers',
        ...types.LOCKERS,
        visibility: 'none',
       ...layers
    },
    {
        id: 'parkApiBicycleTypes_Shed',
        ...types.SHED,
        visibility: 'none',
       ...layers
    },
    {
        id: 'parkApiBicycleTypes_TwoTier',
        ...types.TWO_TIER,
        visibility: 'none',
       ...layers
    },
    {
        id: 'parkApiBicycleTypes_Lockbox',
        ...types.LOCKBOX,
        visibility: 'none',
       ...layers
    },
    {
        id: 'parkApiBicycleTypes_SafeWallLoops',
        ...types.SAFE_WALL_LOOPS,
        visibility: 'none',
       ...layers
    },
    {
        id: 'parkApiBicycleTypes_Building',
        ...types.BUILDING,
        visibility: 'none',
       ...layers
    },
    {
        id: 'parkApiBicycleTypes_Floor',
        ...types.FLOOR,
        visibility: 'none',
       ...layers
    }
];