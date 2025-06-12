import {
    sourceParkApiCarOnStreet,
    layersParkApiCarOnStreetObjects as layersIpl
} from '../../../ipl/park-api_car_on-street/js/layers.js';
import {
    addSources,
    addLayers
} from '../../../../src/js/layers/configSourcesLayers.js';
import { initializeControlLayers } from './controlLayers.js';
import { popups } from '../../../../src/js/popups.js';
import { popupContent as popupContentIpl } from '../../../../src/js/layers/parkApi/popupContent.js';
import { popupContent as popupContentDataCenter } from './popupContent.js';

import '../../../../src/plugins/mapbox-layer-control/layerControl.min.css';
import '../../../../src/css/layerSwitcherControl.css';
import '../../../../src/css/global.css';
import '../css/styles.css';

import { config } from './formGlobalVariables.js';
import { formCreateTableRecords } from './formCreateTableRecords.js';

export { layersIpl };
export let sourcesIpl = [], sourcesDataCenter = [], layers = [], layersDataCenter = [], updateDataCenter, notificationControl;

window.addEventListener('DOMContentLoaded', () => {

    const [
        {
            fillShape,
            lineShape,
            maplibreInspectControl,
            maplibreNavigationControl,
            geocoder
        },
        { map, shape },
        { Geoman },
        { NotificationsControl }
    ] = await Promise.all([
        import('../../../../src/js/initializeMap.js'),
        import('./initializeMap.js'),
        import('@geoman-io/maplibre-geoman-free'),
        import('../../../../src/plugins/maplibre-notifications-master/maplibre-notifications.js')
    ]);

    await Promise.all([
        import('@geoman-io/maplibre-geoman-free/dist/maplibre-geoman.css'),
        import('../../../../src/plugins/maplibre-notifications-master/maplibre-notifications.css')
    ]);

    // ==============================
    // INITIALIZE MAP
    // ==============================
    geocoder(map);
    maplibreControls(map);
    
    map.addControl(
        notificationControl = new NotificationsControl({
            timeout: 3000,
            closable: true,
            dismissable: true
        }),
        'bottom-right'
    );

    map.on('load', () => {
        // IPL Quellen hinzufügen
        sourcesIpl = [{ id: 'sourceParkApiCarOnStreet', source: sourceParkApiCarOnStreet }];
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

        // DEFAULT LAYERS
        map.addSource('shape', shape);
        map.addLayer(fillShape);
        map.addLayer(lineShape);

        // POPUPS für IPL
        popups(map, layersIpl, popupContentIpl);

        // GEOMAN Initialisieren für interaktive Zeichnung
        const gmOptions = {
            settings: { controlsPosition: 'bottom-right', throttlingDelay: 100 },
            controls: { /* deine Optionen */ }
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
