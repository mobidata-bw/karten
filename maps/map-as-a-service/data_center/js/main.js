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
    layersParkApiCarOnStreetObjects as layersIpl
} from '../../../ipl/park-api_car_on-street/js/layers.js'
import {
    addSources,
    addLayers
} from '../../../../src/js/layers/configSourcesLayers.js';
import { basemaps } from '../../../../src/js/layerSwitcherControl.js';
import { initializeControlLayers } from './controlLayers.js';
import { popups } from '../../../../src/js/popups.js';
import { popupContent as popupContentIpl } from '../../../../src/js/layers/parkApi/parkApiPopups.js';
import { popupContent as popupContentDataCenter } from './popupContent.js';
import { Geoman } from '@geoman-io/maplibre-geoman-free';
import '@geoman-io/maplibre-geoman-free/dist/maplibre-geoman.css';
import '../../../../src/plugins/mapbox-layer-control/layerControl.min.css';
import '../../../../src/css/layerSwitcherControl.css';
import '../../../../src/css/global.css';
import '../css/styles.css';


import { config } from './formGlobalVariables.js';
import { formCreateTableRecords } from './formCreateTableRecords.js'
export { layersIpl };
export let layers, updateDataCenter;

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

        layers = [
            ...layersIpl
        ];

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
        // POPUPS
        // ==============================       
        popups(map, layers, popupContentIpl);


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
                    // rectangle: { uiEnabled: false },
                    // circle: { uiEnabled: false },
                    // marker: { uiEnabled: false },
                    // freehand: { uiEnabled: false },
                    // text_marker: { uiEnabled: false }
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

       new Geoman(map, gmOptions);

       

        config.formParkingObject.addEventListener("change", function () {

            if (config.formParkingObject.value == 'Parkstreifen') {
                map.pm.addControls({
                    drawCircleMarker: false,
                    drawPolyline: true
                })
            } else if (config.formParkingObject.value == 'Einzelparkplatz') {
                map.pm.addControls({
                    drawCircleMarker: true,
                    drawPolyline: false
                })
            } else {
                map.pm.addControls({
                    drawCircleMarker: false,
                    drawPolyline: false
                })
            }
        });

        // map.on('pm:create', function (e) {
        //     if (e.shape === 'CircleMarker') {
        //         e.layer.setRadius(5);
        //     }
        // });

        config.formParkingObject.addEventListener("change", function () {
            if (config.formParkingObject.value == 'Parkstreifen') {
                setTimeout(() => {
                    document.getElementById('geoJsonButton').addEventListener("click", function () {
                        map.pm.enableDraw("Line");
                    });
                }, 100);
            } else if (config.formParkingObject.value == 'Einzelparkplatz') {
                setTimeout(() => {
                    document.getElementById('latLonButton').addEventListener("click", function () {
                        map.pm.enableDraw("CircleMarker");
                    });
                }, 100);
            }
        });


       
        updateDataCenter =
            function updateDataCenter() {

                const sources = [
                    {
                        url: 'https://app.nocodb.com/api/v2/tables/m8djfhqn3wv21gi/records?offset=0&limit=25&where=&viewId=vw7kwxaqt2xvp9x0',
                        id: 'sourceParkingSites'
                    },
                    {
                        url: 'https://app.nocodb.com/api/v2/tables/m4xmt3pj6vfggvp/records?offset=0&limit=25&where=&viewId=vw0phi31f6rv7kn4',
                        id: 'sourceParkingSpots'
                    }
                ];

                const parkingSites = {
                    id: 'parkingSites',
                    label: 'Parkstreifen',
                    source: sources[0].id,
                    subGroup: 'Data Center',
                    type: 'line',
                    paint: {
                        'line-color': 'black',
                        'line-width': 2
                    }                    
                };

                const parkingSpots = {
                    id: 'parkingSpots',
                    label: 'Einzelparkplatz',
                    source: sources[1].id,
                    subGroup: 'Data Center',
                    type: 'circle',
                    paint: {
                        'circle-radius': 5,
                        'circle-color': '#ffcc00',
                        'circle-stroke-color': 'black',
                        'circle-stroke-width': 1
                    }                    
                };


                sources.forEach(source => {
                    fetch(source.url, {
                        method: 'GET',
                        headers: { 'xc-token': config.apiKey }
                    })
                        .then(response => response.json())
                        .then(data => data.list || [])
                        .then(records => {
                            // console.log(records)
                            const features = records.map(record => {
                                if (record.GeoJSON) {
                                    return {
                                        type: 'Feature',
                                        geometry: record.GeoJSON,
                                        properties: record
                                    };
                                } else if (record.Breitengrad && record.Längengrad) {
                                    return {
                                        type: 'Feature',
                                        geometry: {
                                            type: 'Point',
                                            coordinates: [record.Längengrad, record.Breitengrad]
                                        },
                                        properties: record
                                    };
                                } else {
                                    return null;
                                }
                            });

                            const geojson = {
                                type: 'FeatureCollection',
                                features
                            };

                            map.addSource(source.id, {
                                type: 'geojson',
                                data: geojson
                            });

                            if (map.getLayer(parkingSites.id) && source.id === parkingSites.source) {
                                map.removeLayer(parkingSites.id);
                            };
                            if (map.getLayer(parkingSpots.id) && source.id === parkingSpots.source) {
                                map.removeLayer(parkingSpots.id);
                            };


                            if (source.id === 'sourceParkingSites') {
                                map.addLayer(parkingSites)
                            };
                            if (source.id === 'sourceParkingSpots') {
                                map.addLayer(parkingSpots)
                            };

                            const layersDataCenter = [
                                parkingSites,
                                parkingSpots
                            ];                        

                            popups(map, layersDataCenter, popupContentDataCenter);

                        })
                        .catch(err => console.error('Fehler beim Laden von', source.url, err));
                });

            };

        updateDataCenter();

        config.form.addEventListener('submit', function () {
            setTimeout(function () {
                updateDataCenter();
            }, 2000);
        });




        //NocoDB API REQUESTS  
        formCreateTableRecords(map);

    });

});