import {
    initializeMap,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import { Geoman } from '@geoman-io/maplibre-geoman-free';
import { NotificationsControl } from '../../../../src/plugins/maplibre-notifications-master/maplibre-notifications.js';
import {
    sourceParkApiCar,
    layersParkApiCarOccupancy as layersIpl
} from '../../../ipl/park-api/js/layers.js';
import { initializeControlLayers } from './controlLayers.js';
import { popupContent as popupContentIpl } from '../../../ipl/park-api/js/popupContent.js';
import { popupContent as popupContentDataCenter } from './popupContent.js';

import '@geoman-io/maplibre-geoman-free/dist/maplibre-geoman.css';
import '../../../../src/plugins/maplibre-notifications-master/maplibre-notifications.css';
import '../css/styles.css';

import { config } from './formGlobalVariables.js';
import { formCreateTableRecords } from './formCreateTableRecords.js';

export { layersIpl };
export let sourcesIpl = [], sourcesDataCenter = [], layers = [], layersDataCenter = [], updateDataCenter, notificationControl;


window.addEventListener('DOMContentLoaded', () => {


    // ==============================
    // INITIALIZE MAP
    // ==============================
    const map = initializeMap({
        center: [8.940, 48.599],
        zoom: 12,
        minZoom: 10,
        shape: 'shapesKonstanz'
    });
    basemaps(map);


    map.addControl(
        notificationControl = new NotificationsControl({
            timeout: 3000,
            closable: true,
            dismissable: true
        }),
        'bottom-right'
    );


    map.on('load', () => {

        // ==============================
        // SOURCES AND LAYERS
        // ==============================
        sourcesIpl = [{ id: 'sourceParkApiCar', source: sourceParkApiCar }];
        sourcesIpl.forEach(src => addSources(map, src));


        // ==============================
        // UPDATE DATA CENTER
        // ==============================
        updateDataCenter = function updateDataCenter() {
            sourcesDataCenter = [
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
                source: sourcesDataCenter[0].id,
                subGroup: 'Data Center',
                type: 'line',
                paint: { 'line-color': 'black', 'line-width': 2 },
                layout: { visibility: 'visible' },
                color: 'black'
            };

            const parkingSpots = {
                id: 'parkingSpots',
                label: 'Einzelparkplatz',
                source: sourcesDataCenter[1].id,
                subGroup: 'Data Center',
                type: 'circle',
                paint: {
                    'circle-radius': 5,
                    'circle-color': '#ffcc00',
                    'circle-stroke-color': 'black',
                    'circle-stroke-width': 1
                },
                layout: { visibility: 'visible' },
                color: '#ffcc00'
            };

            const promises = sourcesDataCenter.map(source =>
                fetch(source.url, {
                    method: 'GET',
                    headers: { 'xc-token': config.apiKey }
                })
                    .then(res => res.json())
                    .then(data => data.list || [])
                    .then(records => {
                        const features = records.map(record => {
                            if (record.GeoJSON) {
                                return { type: 'Feature', geometry: record.GeoJSON, properties: record };
                            } else if (record.Breitengrad && record.Längengrad) {
                                return {
                                    type: 'Feature',
                                    geometry: { type: 'Point', coordinates: [record.Längengrad, record.Breitengrad] },
                                    properties: record
                                };
                            }
                            return null;
                        });

                        const geojson = { type: 'FeatureCollection', features };
                        map.addSource(source.id, { type: 'geojson', data: geojson });

                        if (source.id === parkingSites.source) {
                            if (map.getLayer(parkingSites.id)) map.removeLayer(parkingSites.id);
                            map.addLayer(parkingSites);
                        }
                        if (source.id === parkingSpots.source) {
                            if (map.getLayer(parkingSpots.id)) map.removeLayer(parkingSpots.id);
                            map.addLayer(parkingSpots);
                        }
                    })
            );

            return Promise.all(promises).then(() => {
                layersDataCenter = [parkingSites, parkingSpots];
                popups(map, layersDataCenter, popupContentDataCenter);
            });
        };

        updateDataCenter().then(() => {
            layers = [...layersDataCenter, ...layersIpl];
            layersIpl.forEach(layer => addLayers(map, layer));
            initializeControlLayers(map);
        });

        config.form.addEventListener('submit', () => setTimeout(updateDataCenter, 1000));

        formCreateTableRecords(map);

       
        // ==============================
        // POPUPS
        // ============================== 
        popups(map, layersIpl, popupContentIpl);


        // ==============================
        // GEOMAN
        // ============================== 
        const gmOptions = {
            settings: { controlsPosition: 'bottom-right', throttlingDelay: 100 },
            controls: {
                draw: {
                    circle_marker: { uiEnabled: false }, polygon: { uiEnabled: false }, line: { uiEnabled: false },
                    rectangle: { uiEnabled: false }, circle: { uiEnabled: false }, marker: { uiEnabled: false },
                    freehand: { uiEnabled: false }, text_marker: { uiEnabled: false }
                },
                edit: {
                    drag: { uiEnabled: false }, change: { uiEnabled: false }, rotate: { uiEnabled: false },
                    cut: { uiEnabled: false }, delete: { uiEnabled: false }, split: { uiEnabled: false },
                    scale: { uiEnabled: false }, copy: { uiEnabled: false }, union: { uiEnabled: false },
                    difference: { uiEnabled: false }, line_simplification: { uiEnabled: false }, lasso: { uiEnabled: false }
                },
                helper: {
                    shape_markers: { uiEnabled: false }, pin: { uiEnabled: false }, snapping: { uiEnabled: false },
                    snap_guides: { uiEnabled: false }, measurements: { uiEnabled: false }, auto_trace: { uiEnabled: false },
                    geofencing: { uiEnabled: false }, zoom_to_features: { uiEnabled: false }, click_to_edit: { uiEnabled: false }
                }
            }
        };
        const gm = new Geoman(map, gmOptions);

        config.formParkingObject.addEventListener('change', () => {
            if (config.formParkingObject.value === 'Parkstreifen') {
                setTimeout(() => document.getElementById('geoJsonButton').addEventListener('click', () => gm.enableDraw('line')), 100);
            } else if (config.formParkingObject.value === 'Einzelparkplatz') {
                setTimeout(() => document.getElementById('latLonButton').addEventListener('click', () => gm.enableDraw('circle_marker')), 100);
            } else {
                gm.removeControl();
            }
        });
    });
});
