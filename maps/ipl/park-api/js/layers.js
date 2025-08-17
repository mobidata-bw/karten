import { occupancy, types } from '../../../../src/js/layers/parkApi/layers.js';
import { urlParams } from '../../../../src/js/layers/parkApi/urlParams.js';


// ==============================
// URL PARAMS
// ==============================
const { purpose, layerGroup, id } = urlParams();


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

export const sourceParkApiItem = {
    layer: 'MobiData-BW:park-api_item',
    style: 'MobiData-BW:mdbw_park-api_parking-object',
    bounds: [7.7, 47.7, 10.1, 49.5],
    server: 'test'
};



// ==============================
// LAYERS: OCCUPANCY
// ==============================
export const layersParkApiOccupancy = [
    {
        id: `parkApi${id}Occupancy_NoRealtimeInformation`,
        ...occupancy.NO_REALTIME_INFORMATION,
        ...layerGroup
    },
    {
        id: `parkApi${id}Occupancy_OutdatedRealtimeInformation`,
        ...occupancy.OUTDATED_REALTIME_INFORMATION,
        ...layerGroup
    },
    {
        id: `parkApi${id}Occupancy_Closed`,
        ...occupancy.CLOSED,
        ...layerGroup
    },
    {
        id: `parkApi${id}Occupancy_VeryLowAvailability`,
        ...occupancy.VERY_LOW_AVAILABILITY,
        ...layerGroup
    },
    {
        id: `parkApi${id}Occupancy_LowAvailability`,
        ...occupancy.LOW_AVAILABILITY,
        ...layerGroup
    },
    {
        id: `parkApi${id}Occupancy_HighAvailability`,
        ...occupancy.HIGH_AVAILABILITY,
        ...layerGroup
    }
];


// ==============================
// LAYERS: TYPE
// ==============================
const parkApiTypes = [
    {
        id: `parkApi${id}Types_Other`,
        ...types.OTHER,
        visibility: 'none',
        ...layerGroup,
        scope: ['car', 'bicycle']
    },
    {
        id: `parkApi${id}Types_OnStreet`,
        ...types.ON_STREET,
        visibility: 'none',
        ...layerGroup,
        scope: ['car']
    },
    {
        id: `parkApi${id}Types_OffStreet`,
        ...types.OFF_STREET,
        visibility: 'none',
        ...layerGroup,
        scope: ['car']
    },
    {
        id: `parkApi${id}Types_Underground`,
        ...types.UNDERGROUND,
        visibility: 'none',
        ...layerGroup,
        scope: ['car']
    },
    {
        id: `parkApi${id}Types_CarPark`,
        ...types.CAR_PARK,
        visibility: 'none',
        ...layerGroup,
        scope: ['car']
    },
    {
        id: `parkApi${id}Types_WallLoops`,
        ...types.WALL_LOOPS,
        visibility: 'none',
        ...layerGroup,
        scope: ['bicycle']
    },
    {
        id: `parkApi${id}Types_Stands`,
        ...types.STANDS,
        visibility: 'none',
        ...layerGroup,
        scope: ['bicycle']
    },
    {
        id: `parkApi${id}Types_Lockers`,
        ...types.LOCKERS,
        visibility: 'none',
        ...layerGroup,
        scope: ['bicycle', 'item']
    },
    {
        id: `parkApi${id}Types_Shed`,
        ...types.SHED,
        visibility: 'none',
        ...layerGroup,
        scope: ['bicycle']
    },
    {
        id: `parkApi${id}Types_TwoTier`,
        ...types.TWO_TIER,
        visibility: 'none',
        ...layerGroup,
        scope: ['bicycle']
    },
    {
        id: `parkApi${id}Types_Lockbox`,
        ...types.LOCKBOX,
        visibility: 'none',
        ...layerGroup,
        scope: ['bicycle', 'item']
    },
    {
        id: `parkApi${id}Types_SafeWallLoops`,
        ...types.SAFE_WALL_LOOPS,
        visibility: 'none',
        ...layerGroup,
        scope: ['bicycle']
    },
    {
        id: `parkApi${id}Types_Building`,
        ...types.BUILDING,
        visibility: 'none',
        ...layerGroup,
        scope: ['bicycle']
    },
    {
        id: `parkApi${id}Types_Floor`,
        ...types.FLOOR,
        visibility: 'none',
        ...layerGroup,
        scope: ['bicycle']
    }
];

export const layersParkApiTypes = parkApiTypes.filter(parkApiTypes => parkApiTypes.scope.includes(purpose));