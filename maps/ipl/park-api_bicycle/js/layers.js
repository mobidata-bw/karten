import { occupancy, types } from '/karten/assets/js/layers/parkApi/parkApiStyles.js';


// ==============================
// SOURCES
// ==============================
export const sourceParkApiBicycle = {
    layer: 'MobiData-BW:park-api_bicycle',
    style: 'MobiData-BW:mdbw_park-api_parking-object',
    bounds: [7.1, 47.5, 13.5, 53.8],
    // server: 'test'
};

export const sourceParkApiItem = {
    layer: 'MobiData-BW:park-api_item',
    style: 'MobiData-BW:mdbw_park-api_parking-object',
    bounds: [7.7, 47.7, 10.1, 49.5],
    // server: 'test'
};


// ==============================
// LAYERS
// ==============================
const layersBicycle = {
    source: 'sourceParkApiBicycle',
    sourceLayer: 'park-api_bicycle',
    group: 'Fahrradabstellanlagen'
};

const layersItem = {
    source: 'sourceParkApiItem',
    sourceLayer: 'park-api_item',
    group: 'Schließfächer an Fahrradabstellanlagen'
};


export const layersParkApiBicycleOccupancy = [
    {
        id: 'parkApiBicycleOccupancy_NoRealtimeInformation',
        ...occupancy.NO_REALTIME_INFORMATION,
        ...layersBicycle
    },
    {
        id: 'parkApiBicycleOccupancy_OutdatedRealtimeInformation',
        ...occupancy.OUTDATED_REALTIME_INFORMATION,
        ...layersBicycle
    },
    {
        id: 'parkApiBicycleOccupancy_VeryLowAvailabilityOrClosed',
        ...occupancy.VERY_LOW_AVAILABILITY_OR_CLOSED,
        ...layersBicycle
    },
    {
        id: 'parkApiBicycleOccupancy_LowAvailability',
        ...occupancy.LOW_AVAILABILITY,
        ...layersBicycle
    },
    {
        id: 'parkApiBicycleOccupancy_HighAvailability',
        ...occupancy.HIGH_AVAILABILITY,
        ...layersBicycle
    }
];

export const layersParkApiBicycleTypes = [
    {
        id: 'parkApiBicycleTypes_Other',
        ...types.OTHER,
        visibility: 'none',
        ...layersBicycle
    },
    {
        id: 'parkApiBicycleTypes_WallLoops',
        ...types.WALL_LOOPS,
        visibility: 'none',
        ...layersBicycle
    },
    {
        id: 'parkApiBicycleTypes_Stands',
        ...types.STANDS,
        visibility: 'none',
        ...layersBicycle
    },
    {
        id: 'parkApiBicycleTypes_Lockers',
        ...types.LOCKERS,
        visibility: 'none',
        ...layersBicycle
    },
    {
        id: 'parkApiBicycleTypes_Shed',
        ...types.SHED,
        visibility: 'none',
        ...layersBicycle
    },
    {
        id: 'parkApiBicycleTypes_TwoTier',
        ...types.TWO_TIER,
        visibility: 'none',
        ...layersBicycle
    },
    {
        id: 'parkApiBicycleTypes_Lockbox',
        ...types.LOCKBOX,
        visibility: 'none',
        ...layersBicycle
    },
    {
        id: 'parkApiBicycleTypes_SafeWallLoops',
        ...types.SAFE_WALL_LOOPS,
        visibility: 'none',
        ...layersBicycle
    },
    {
        id: 'parkApiBicycleTypes_Building',
        ...types.BUILDING,
        visibility: 'none',
        ...layersBicycle
    },
    {
        id: 'parkApiBicycleTypes_Floor',
        ...types.FLOOR,
        visibility: 'none',
        ...layersBicycle
    }
];

export const layersParkApiItemOccupancy = [
    {
        id: 'parkApiItemOccupancy_NoRealtimeInformation',
        ...occupancy.NO_REALTIME_INFORMATION,
        subGroup: 'Belegung ', // overwrite parkApiStyles.js
        visibility: 'none',
        ...layersItem
    },
    {
        id: 'parkApiItemOccupancy_OutdatedRealtimeInformation',
        ...occupancy.OUTDATED_REALTIME_INFORMATION,
        subGroup: 'Belegung ', // overwrite parkApiStyles.js
        visibility: 'none',
        ...layersItem
    },
    {
        id: 'parkApiItemOccupancy_VeryLowAvailabilityOrClosed',
        ...occupancy.VERY_LOW_AVAILABILITY_OR_CLOSED,
        subGroup: 'Belegung ', // overwrite parkApiStyles.js

        visibility: 'none',
        ...layersItem
    },
    {
        id: 'parkApiItemOccupancy_LowAvailability',
        ...occupancy.LOW_AVAILABILITY,
        subGroup: 'Belegung ', // overwrite parkApiStyles.js
        visibility: 'none',
        ...layersItem
    },
    {
        id: 'parkApiItemOccupancy_HighAvailability',
        ...occupancy.HIGH_AVAILABILITY,
        subGroup: 'Belegung ', // overwrite parkApiStyles.js
        visibility: 'none',
        ...layersItem
    }
];