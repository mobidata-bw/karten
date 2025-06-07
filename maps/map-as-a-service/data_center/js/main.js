import {
    maplibreInspectControl,
    maplibreNavigationControl,
    geocoder
} from '../../../../src/js/initializeMap.js';
import {
    map,
    shape,
    fillShape,
    lineShape
} from './initializeMap.js';
import {
    sourceParkApiCarOnStreet,
    layersParkApiCarOnStreetObjects as layers
} from '../../../ipl/park-api_car_on-street/js/layers.js'
import {
    addSources,
    addLayers
} from '../../../../src/js/layers/configSourcesLayers.js';


// import { config } from './formGlobalVariables.js';
// import { formCreateTableRecords } from './formCreateTableRecords.js'
// import { controlLayersBase, controlLayersOver1, controlLayersOver2 } from './controlLayers.js';
// import { popupContentTable } from './popups.js';
// export let layersIpl, map, updateDataCenter, notificationControl;

// const parkApiCarOnStreet = Array(2).fill(null);
import { basemaps } from '../../../../src/js/layerSwitcherControl.js';
import { initializeControlLayers } from './controlLayers.js';
import { popups } from '../../../../src/js/popups.js';
import { popupContent } from '../../../../src/js/layers/parkApi/parkApiPopups.js';

import { Geoman } from '@geoman-io/maplibre-geoman-free';
import '@geoman-io/maplibre-geoman-free/dist/maplibre-geoman.css';

import '../../../../src/plugins/mapbox-layer-control/layerControl.min.css';
import '../../../../src/css/layerSwitcherControl.css';
import '../../../../src/css/global.css';
import '../css/styles.css';

export { layers };

const basemapSources = [], basemapLayers = [];


window.addEventListener('DOMContentLoaded', () => {


    // ==============================
    // INITIALIZE MAP
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
            { id: 'sourceParkApiCarOnStreet', source: sourceParkApiCarOnStreet }
        ];
        sources.forEach(source => addSources(map, source));

        layers.forEach(layer => addLayers(map, layer));


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
            ...layers
        );


        // ==============================
        // GEOMAN
        // ==============================     
        const gmOptions = {
            settings: {
                controlsPosition: 'bottom-right',  // Position der Toolbar :contentReference[oaicite:0]{index=0}
                throttlingDelay: 100
            },
            controls: {
                draw: {
                    // Leaflet: drawCircleMarker → MapLibre: circle_marker
                    circle_marker: { uiEnabled: false },
                    polygon: { uiEnabled: false },
                    line: { uiEnabled: true }, // entspricht drawPolyline
                    rectangle: { uiEnabled: false },
                    circle: { uiEnabled: false },
                    marker: { uiEnabled: false },
                    freehand: { uiEnabled: false },
                    text_marker: { uiEnabled: false }
                },
                edit: {
                    drag: { uiEnabled: false },
                    change: { uiEnabled: false }, // bearbeiten (Vertex hinzufügen/entfernen)
                    rotate: { uiEnabled: false },
                    cut: { uiEnabled: false },
                    delete: { uiEnabled: false }, // removalMode
                    split: { uiEnabled: false },
                    scale: { uiEnabled: false },
                    copy: { uiEnabled: false },
                    union: { uiEnabled: false },
                    difference: { uiEnabled: false },
                    line_simplification: { uiEnabled: false },
                    lasso: { uiEnabled: false }
                },
                helper: {
                    shape_markers: { uiEnabled: false },
                    pin: { uiEnabled: false },
                    snapping: { uiEnabled: false },
                    snap_guides: { uiEnabled: false },
                    measurements: { uiEnabled: false },
                    auto_trace: { uiEnabled: false },
                    geofencing: { uiEnabled: false },
                    zoom_to_features: { uiEnabled: false },
                    click_to_edit: { uiEnabled: false }
                }
            }
        };

        const geoman = new Geoman(map, gmOptions);


        // config.formParkingObject.addEventListener("change", function () {

        //     if (config.formParkingObject.value == 'Parkstreifen') {
        //         map.pm.addControls({
        //             drawCircleMarker: false,
        //             drawPolyline: true
        //         })
        //     } else if (config.formParkingObject.value == 'Einzelparkplatz') {
        //         map.pm.addControls({
        //             drawCircleMarker: true,
        //             drawPolyline: false
        //         })
        //     } else {
        //         map.pm.addControls({
        //             drawCircleMarker: false,
        //             drawPolyline: false
        //         })
        //     }
        // });

        // map.pm.Toolbar.changeControlOrder([
        //     'drawCircleMarker',
        //     'drawPolyline'
        // ]);
        // map.pm.setPathOptions({
        //     color: 'rgb(51, 136, 255)',
        //     weight: 2,
        // });
        // map.on('pm:create', function (e) {
        //     if (e.shape === 'CircleMarker') {
        //         e.layer.setRadius(5);
        //     }
        // });

        // config.formParkingObject.addEventListener("change", function () {
        //     if (config.formParkingObject.value == 'Parkstreifen') {
        //         setTimeout(() => {
        //             document.getElementById('geoJsonButton').addEventListener("click", function () {
        //                 map.pm.enableDraw("Line");
        //             });
        //         }, 100);
        //     } else if (config.formParkingObject.value == 'Einzelparkplatz') {
        //         setTimeout(() => {
        //             document.getElementById('latLonButton').addEventListener("click", function () {
        //                 map.pm.enableDraw("CircleMarker");
        //             });
        //         }, 100);
        //     }
        // });


        // /* LAYERS */
        // map.createPane('boundary'); map.getPane('boundary').style.zIndex = 400;
        // map.createPane('B'); map.getPane('B').style.zIndex = 401;
        // map.createPane('A'); map.getPane('A').style.zIndex = 402;

        // new L.GeoJSON.AJAX('./data/herrenberg.geojson', {
        //     className: 'shapesKonstanz',
        //     interactive: false,
        //     pmIgnore: true,
        // }).addTo(map);


        // /* NocoDB */
        // const parkingSites = L.layerGroup().addTo(map);
        // const parkingSpots = L.layerGroup().addTo(map);
        // const form = document.getElementById('form');
        // const sidebarUpdateDataCenter = document.getElementById('updateDataCenter');

        // updateDataCenter =
        //     function updateDataCenter() {

        //         const sources = [
        //             {
        //                 url: 'https://app.nocodb.com/api/v2/tables/m8djfhqn3wv21gi/records?offset=0&limit=25&where=&viewId=vw7kwxaqt2xvp9x0',
        //                 layer: parkingSites
        //             },
        //             {
        //                 url: 'https://app.nocodb.com/api/v2/tables/m4xmt3pj6vfggvp/records?offset=0&limit=25&where=&viewId=vw0phi31f6rv7kn4',
        //                 layer: parkingSpots
        //             }
        //         ];

        //         parkingSites.clearLayers();
        //         parkingSpots.clearLayers();


        //         const options = {
        //             method: 'GET',
        //             headers: { 'xc-token': config.apiKey }
        //         };

        //         sources.forEach(source => {
        //             fetch(source.url, options)
        //                 .then(res => res.json())
        //                 .then(data => data.list || [])
        //                 .then(records => {
        //                     records.forEach(record => {
        //                         let featureLayer;

        //                         if (record.GeoJSON) {
        //                             featureLayer = L.geoJSON(record.GeoJSON, {
        //                                 pane: 'B',
        //                                 className: 'lineLayer'
        //                             });

        //                         } else if (record.Breitengrad && record.Längengrad) {
        //                             featureLayer = L.circleMarker(
        //                                 [record.Breitengrad, record.Längengrad],
        //                                 {
        //                                     pane: 'A',
        //                                     radius: 5,
        //                                     className: 'pointLayer'
        //                                 }
        //                             );

        //                         } else {
        //                             return;
        //                         }

        //                         featureLayer.bindPopup(popupContentTable(record));
        //                         source.layer.addLayer(featureLayer);
        //                     });
        //                 })
        //                 .catch(err => console.error('Fehler beim Laden von', source.url, err));
        //         });

        //     };

        // updateDataCenter();

        // sidebarUpdateDataCenter.addEventListener('click', updateDataCenter, false);

        // form.addEventListener('submit', function () {

        //     setTimeout(function () {
        //         updateDataCenter();
        //     }, 2000);
        // });


        // /* IPL LAYERS */
        // const url = 'https://api.mobidata-bw.de/geoserver/ows?SERVICE=WMS&';

        // const layersOptionsParkApiCarOnStreet = {
        //     layers: 'MobiData-BW:park-api_car_on-street',
        //     transparent: true,
        //     format: 'image/png',
        //     pane: 'A',
        //     maxZoom: 20
        // };
        // function initializeLayersParkingSitesCar(array, index, layerOptions) {
        //     array[index] = L.tileLayer.betterWms(url, { ...layersOptionsParkApiCarOnStreet, ...layerOptions });
        // };

        // initializeLayersParkingSitesCar(parkApiCarOnStreet, 0, {
        //     cql_filter: "parking_object == 'site'",
        //     styles: 'mdbw_park-api_parking-object',
        // });
        // initializeLayersParkingSitesCar(parkApiCarOnStreet, 1, {
        //     cql_filter: "parking_object == 'spot'",
        //     styles: 'mdbw_park-api_parking-object',
        // });


        // //control layers 
        // function createLayersIpl() {
        //     return [
        //         ...parkApiCarOnStreet,
        //     ];
        // };
        // layersIpl = createLayersIpl();

        // controlLayersBase(map);
        // controlLayersOver1(map, parkingSites, parkingSpots);
        // controlLayersOver2(map, layersIpl);


        // //NocoDB API REQUESTS  
        // formCreateTableRecords(map);

    });

});