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



const car = urlParams({ purpose: 'car' });
const bicycle = urlParams({ purpose: 'bicycle' });


// ==============================
// LAYERS: OCCUPANCY
// ==============================
export const layersParkApiCarOccupancy = [
    {
        id: `parkApi${car.id}Occupancy_NoRealtimeInformation`,
        ...occupancy.NO_REALTIME_INFORMATION,
        ...car.layerGroup
    },
    {
        id: `parkApi${car.id}Occupancy_OutdatedRealtimeInformation`,
        ...occupancy.OUTDATED_REALTIME_INFORMATION,
        ...car.layerGroup
    },
    {
        id: `parkApi${car.id}Occupancy_Closed`,
        ...occupancy.CLOSED,
        ...car.layerGroup
    },
    {
        id: `parkApi${car.id}Occupancy_VeryLowAvailability`,
        ...occupancy.VERY_LOW_AVAILABILITY,
        ...car.layerGroup
    },
    {
        id: `parkApi${car.id}Occupancy_LowAvailability`,
        ...occupancy.LOW_AVAILABILITY,
        ...car.layerGroup
    },
    {
        id: `parkApi${car.id}Occupancy_HighAvailability`,
        ...occupancy.HIGH_AVAILABILITY,
        ...car.layerGroup
    }
];

export const layersParkApiBicycleOccupancy = [
    { id: `parkApi${bicycle.id}Occupancy_NoRealtimeInformation`, ...occupancy.NO_REALTIME_INFORMATION, ...bicycle.layerGroup },
    { id: `parkApi${bicycle.id}Occupancy_OutdatedRealtimeInformation`, ...occupancy.OUTDATED_REALTIME_INFORMATION, ...bicycle.layerGroup },
    { id: `parkApi${bicycle.id}Occupancy_Closed`, ...occupancy.CLOSED, ...bicycle.layerGroup },
    { id: `parkApi${bicycle.id}Occupancy_VeryLowAvailability`, ...occupancy.VERY_LOW_AVAILABILITY, ...bicycle.layerGroup },
    { id: `parkApi${bicycle.id}Occupancy_LowAvailability`, ...occupancy.LOW_AVAILABILITY, ...bicycle.layerGroup },
    { id: `parkApi${bicycle.id}Occupancy_HighAvailability`, ...occupancy.HIGH_AVAILABILITY, ...bicycle.layerGroup }
];


// ==============================
// LAYERS: TYPES
// ==============================
const parkApiTypes = (ctx) => [
    {
        id: `parkApi${ctx.id}Types_Other`,
        ...types.OTHER, visibility: 'none',
        ...ctx.layerGroup,
        scope: ['car', 'bicycle']
    },
    {
        id: `parkApi${ctx.id}Types_OnStreet`,
        ...types.ON_STREET, visibility: 'none',
        ...ctx.layerGroup,
        scope: ['car']
    },
    {
        id: `parkApi${ctx.id}Types_OffStreet`,
        ...types.OFF_STREET, visibility: 'none',
        ...ctx.layerGroup,
        scope: ['car']
    },
    {
        id: `parkApi${ctx.id}Types_Underground`,
        ...types.UNDERGROUND, visibility: 'none',
        ...ctx.layerGroup,
        scope: ['car']
    },
    {
        id: `parkApi${ctx.id}Types_CarPark`,
        ...types.CAR_PARK, visibility: 'none',
        ...ctx.layerGroup,
        scope: ['car']
    },
    // … bicycle-spezifische Typen …
];


export const layersParkApiCarTypes = parkApiTypes(car).filter(t => t.scope.includes('car'));
export const layersParkApiBicycleTypes = parkApiTypes(bicycle).filter(t => t.scope.includes('bicycle'));
// export const layersParkApiTypesItem = parkApiTypes(item).filter(t => t.scope.includes('item'));


console.log(layersParkApiCarTypes);