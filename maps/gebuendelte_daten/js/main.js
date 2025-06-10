import '../../../src/plugins/mapbox-layer-control/layerControl.min.css';
import '../../../src/css/layerSwitcherControl.css';
import '../../../src/css/global.css';

export let map, layers, layersIpl, layersGeoJson;

const basemapSources = [], basemapLayers = [];


window.addEventListener('DOMContentLoaded', async () => {

    // ==============================
    // LOAD MODULES
    // ==============================  
    const [
        { map: initialMap, shape, fillShape, lineShape, maplibreInspectControl, maplibreNavigationControl, geocoder },
        { sourceParkApiCarBuildings, layersParkApiCarBuildingsOccupancy },
        { sourceParkApiCarOnStreet, layersParkApiCarOnStreetOccupancy },
        { sourceParkApiBicycle, layersParkApiBicycleOccupancy },
        { sourceSharingVehicles },
        { sourceSharingStationsCar, layersSharingCar },
        { sourceSharingStationsBicycle, layersSharingBicycle },
        { sourceSharingStationsScooter, layersSharingScooter },
        { sourceSharingStationsCargoBicycle, layersSharingCargoBicycle },
        { sourceChargePoints, layersChargePointsPower },
        { sourceRadvis, layersRadvis },
        {
            sourceTransitStops, layersTransitStops,
            sourceTransitStations, layersTransitStations,
            sourceTransitShapes, layersTransitShapes
        },
        { sourceRoadworks, layersRoadworks },
        { sourceCountCar, layersCountCar },
        { sourceCountBicycle, layersCountBicycle },
        {
            sourceFootway,
            sourceMarked,
            sourceUncontrolled,
            sourceZebra,
            layersPedestrianCrossings },
        { wms },
        { addSources, addLayers },
        { basemaps },
        { initializeControlLayers },
        { popups },
        { popupContent: popupContentParkApi },
        { popupContent: popupContentSharing },
        { popupContent: popupContentChargePoints },
        { popupContent: popupContentRadvis },
        {
            popupContentTransitStops,
            popupContentTransitStations,
            popupContentTransitShapes
        },
        { popupContent: popupContentRoadworks },
        { popupContent: popupContentCountCar },
        { popupContent: popupContentCountBicycle },
        { popupContent: popupContentPedestrianCrossings }
    ] = await Promise.all([
        import('../../../src/js/initializeMap.js'),
        import('../../ipl/park-api_car_buildings/js/layers.js'),
        import('../../ipl/park-api_car_on-street/js/layers.js'),
        import('../../ipl/park-api_bicycle/js/layers.js'),
        import('../../../src/js/layers/sharing/sharingVehicles.js'),
        import('../../ipl/sharing_car/js/layers.js'),
        import('../../ipl/sharing_bicycle/js/layers.js'),
        import('../../ipl/sharing_scooter/js/layers.js'),
        import('../../ipl/sharing_cargo_bicycle/js/layers.js'),
        import('../../ipl/charge_points/js/layers.js'),
        import('../../ipl/radvis_cycle_network/js/layers.js'),
        import('../../ipl/gtfs/js/layers.js'),
        import('../../ipl/roadworks/js/layers.js'),
        import('../../count_car/js/layers.js'),
        import('../../count_bicycle/js/layers.js'),
        import('../../pedestrian_crossings/js/layers.js'),
        import('../../../src/js/wms.js'),
        import('../../../src/js/layers/configSourcesLayers.js'),
        import('../../../src/js/layerSwitcherControl.js'),
        import('./controlLayers.js'),
        import('../../../src/js/popups.js'),
        import('../../../src/js/layers/parkApi/parkApiPopups.js'),
        import('../../../src/js/layers/sharing/sharingPopups.js'),
        import('../../ipl/charge_points/js/popupContent.js'),
        import('../../ipl/radvis_cycle_network/js/popupContent.js'),
        import('../../ipl/gtfs/js/popupContent.js'),
        import('../../ipl/roadworks/js/popupContent.js'),
        import('../../count_car/js/popupContent.js'),
        import('../../count_bicycle/js/popupContent.js'),
        import('../../pedestrian_crossings/js/popupContent.js')
    ]);

    map = initialMap;


    // ==============================
    // MAP CONTROLS
    // ==============================  
    basemaps(map, { basemapSources, basemapLayers });
    geocoder(map);
    maplibreInspectControl(map);
    maplibreNavigationControl(map);


    // ==============================
    // SOURCES AND LAYERS
    // ==============================
    map.on('load', () => {


        // DEFAULT LAYERS
        map.addSource('shape', shape);
        map.addLayer(fillShape);
        map.addLayer(lineShape);


        // PROJECT LAYERS 
        const sources = [
            { id: 'sourceParkApiCarBuildings', source: sourceParkApiCarBuildings },
            { id: 'sourceParkApiCarOnStreet', source: sourceParkApiCarOnStreet },
            { id: 'sourceParkApiBicycle', source: sourceParkApiBicycle },
            { id: 'sourceSharingVehicles', source: sourceSharingVehicles },
            { id: 'sourceSharingStationsCar', source: sourceSharingStationsCar },
            { id: 'sourceSharingStationsBicycle', source: sourceSharingStationsBicycle },
            { id: 'sourceSharingStationsScooter', source: sourceSharingStationsScooter },
            { id: 'sourceSharingStationsCargoBicycle', source: sourceSharingStationsCargoBicycle },
            { id: 'sourceChargePoints', source: sourceChargePoints },
            { id: 'sourceRadvis', source: sourceRadvis },
            { id: 'sourceTransitStops', source: sourceTransitStops },
            { id: 'sourceTransitStations', source: sourceTransitStations },
            { id: sourceTransitShapes[0].id, source: sourceTransitShapes[0] },
            { id: sourceTransitShapes[1].id, source: sourceTransitShapes[1] },
            { id: sourceTransitShapes[2].id, source: sourceTransitShapes[2] },
            { id: sourceTransitShapes[3].id, source: sourceTransitShapes[3] },
            { id: sourceTransitShapes[4].id, source: sourceTransitShapes[4] },
            { id: sourceTransitShapes[5].id, source: sourceTransitShapes[5] },
            { id: 'sourceRoadworks', source: sourceRoadworks },
            { id: 'sourceCountCar', source: sourceCountCar },
            { id: 'sourceCountBicycle', source: sourceCountBicycle },
            { id: 'sourceFootway', source: sourceFootway },
            { id: 'sourceMarked', source: sourceMarked },
            { id: 'sourceUncontrolled', source: sourceUncontrolled },
            { id: 'sourceZebra', source: sourceZebra }
        ];
        sources.forEach(source => addSources(map, source));

        layersIpl = [
            ...layersParkApiCarBuildingsOccupancy,
            ...layersParkApiCarOnStreetOccupancy,
            ...layersParkApiBicycleOccupancy,
            ...layersSharingCar,
            ...layersSharingBicycle,
            ...layersSharingScooter,
            ...layersSharingCargoBicycle,
            ...layersChargePointsPower,
            ...layersRadvis,
            ...layersTransitStops,
            ...layersTransitStations,
            ...layersTransitShapes,
            ...layersRoadworks
        ];
        layersGeoJson = [
            ...layersCountCar,
            ...layersCountBicycle,
            ...layersPedestrianCrossings
        ];
        layers = [
            ...layersIpl,
            ...layersGeoJson
        ];

        layers.forEach(layer => {
            if (layer.source != 'sourceParkApiCarBuildings') {
                layer.visibility = 'none';
            }
            else {
                layer.visibility = 'visible';
            };
            addLayers(map, layer)
        });


        // ==============================
        // LAYER CONTROL
        // ============================== 
        initializeControlLayers(map);


        // ==============================
        // BASEMAP LAYERS
        // ============================== 
        basemapSources.push(
            { id: 'shape', source: shape },
            ...sources
        );

        basemapLayers.push(
            fillShape,
            lineShape,
            ...layers,
        );


        // ==============================
        // POPUPS
        // ==============================       
        popups(map, layersParkApiCarBuildingsOccupancy, popupContentParkApi);
        popups(map, layersParkApiCarOnStreetOccupancy, popupContentParkApi);
        popups(map, layersParkApiBicycleOccupancy, popupContentParkApi);
        popups(map, layersSharingCar, popupContentSharing);
        popups(map, layersSharingBicycle, popupContentSharing);
        popups(map, layersSharingScooter, popupContentSharing);
        popups(map, layersSharingCargoBicycle, popupContentSharing);
        popups(map, layersChargePointsPower, popupContentChargePoints);
        popups(map, layersRadvis, popupContentRadvis);
        popups(map, layersTransitStops, popupContentTransitStops);
        popups(map, layersTransitStations, popupContentTransitStations);
        popups(map, layersCountCar, popupContentCountCar);
        popups(map, layersCountBicycle, popupContentCountBicycle);
        popups(map, layersPedestrianCrossings, popupContentPedestrianCrossings);


        // ==============================
        // WMS & POPUPS
        // ==============================    
        wms(map, layersTransitShapes, popupContentTransitShapes);
        wms(map, layersRoadworks, popupContentRoadworks);


    });


});