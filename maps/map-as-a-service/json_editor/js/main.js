import '../css/styles.css';
import 'jsoneditor/dist/jsoneditor.min.css';

import maplibregl from 'maplibre-gl';
import JSONEditor from 'jsoneditor/dist/jsoneditor.min.js';
import { saveAs } from 'file-saver';

import {
    initializeMap,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import {
    sourceParkApiCar, sourceParkApiBicycle,
    layersParkApiCarOccupancy as layersParkApiCar,
    layersParkApiBicycleOccupancy as layersParkApiBicycle
} from '../../../ipl/park-api/js/layers.js';
import { sourceTransitStops, layersTransitStops } from '../../../ipl/gtfs/js/layers.js';
import { popupContent as popupContentParkApi } from '../../../ipl/park-api/js/popupContent.js';
import { popupContentTransitStops } from '../../../ipl/gtfs/js/popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layersGeoJson, layersIpl;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // INITIALIZE MAP
    // ==============================  
    document.title = 'MobiData BW® - JSON-Editor';
    const map = initializeMap();
    basemaps(map);


    map.on('load', () => {

        // ==============================
        // SOURCES AND LAYERS
        // ==============================
        function toGeoJSON(json) {
            return {
                type: 'FeatureCollection',
                features: json.map(item => ({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [parseFloat(item.lon), parseFloat(item.lat)]
                    },
                    // json (input):
                    // [
                    //     {},
                    //     {}
                    // ]
                    // Object.entries (transform object into an array so that filter() and map() work):
                    // [
                    //     [
                    //         "0",
                    //         {
                    //             "source_id": 34,
                    //             "original_uid": "unit555",
                    //             "name": "Sinsheim, Bahnhof, Anlage rechts",
                    //             "public_url": "https://www.rad-safe.de/order/booking/?preselect_unit_uid=555",
                    //             "type": "LOCKERS",
                    //             "purpose": "BIKE",
                    //             "has_fee": true,
                    //             "has_realtime_data": true,
                    //             "static_data_updated_at": "2025-08-19T06:40:40Z",
                    //             "realtime_data_updated_at": "2025-08-19T07:17:00Z",
                    //             "lat": "49.2506290",
                    //             "lon": "8.8745540",
                    //             "capacity": 24,
                    //             "realtime_capacity": 24,
                    //             "realtime_free_capacity": 22,
                    //             "opening_hours": "24/7",
                    //             "id": 10011,
                    //             "created_at": "2024-08-20T11:33:52Z",
                    //             "modified_at": "2025-08-19T07:17:00Z"
                    //         }
                    //     ],
                    //     [
                    //         "1",
                    //      ...
                    // Object.fromEntries (transform array back to an object after filter() and map() were applied)
                    // {
                    //     "0": {
                    //         "source_id": 34,
                    //         "original_uid": "unit555",
                    //         "name": "Sinsheim, Bahnhof, Anlage rechts",
                    //         "public_url": "https://www.rad-safe.de/order/booking/?preselect_unit_uid=555",
                    //         "type": "LOCKERS",
                    //         "purpose": "BIKE",
                    //         "has_fee": true,
                    //         "has_realtime_data": true,
                    //         "static_data_updated_at": "2025-08-19T06:40:40Z",
                    //         "realtime_data_updated_at": "2025-08-19T07:17:00Z",
                    //         "lat": "49.2506290",
                    //         "lon": "8.8745540",
                    //         "capacity": 24,
                    //         "realtime_capacity": 24,
                    //         "realtime_free_capacity": 22,
                    //         "opening_hours": "24/7",
                    //         "id": 10011,
                    //         "created_at": "2024-08-20T11:33:52Z",
                    //         "modified_at": "2025-08-19T07:17:00Z"
                    //     },
                    //     "1": {
                    //         ...
                    properties: {
                        ...Object.fromEntries(
                            Object.entries(item)
                                .filter(([key]) =>
                                    ![
                                        'source_id',
                                        'static_data_updated_at',
                                        'realtime_data_updated_at',
                                        'realtime_capacity',
                                        'realtime_free_capacity',
                                        'created_at',
                                        'modified_at'
                                    ].includes(key))
                                .map(([key, value]) => [
                                    key == 'original_uid' ? key.replace(key, 'uid') : key, value
                                ])
                        ),
                        'type_new': '',
                        'address_new': '',
                        'max_height_new': 0,
                        'max_width_new': 0,
                        'description_new': '',
                        'fee_description_new': '',
                        'park_and_ride_type_new': [
                            ''
                        ],
                        'lat_new': '',
                        'lon_new': '',
                        'external_identifiers_new': [
                            {
                                'type': 'DHID',
                                'value': 'de:xx'
                            }
                        ],
                        'capacity_charging_new': '',
                        'capacity_cargobike_new': '',
                        'has_lighting_new': '',
                        'is_covered_new': '',
                        'has_fee_new': '',
                        'public_url_new': '',
                        'photo_url_new': ''
                    }
                }))
            }
        };

        const source_id = new URLSearchParams(window.location.search).get('source_id');
        const source = source_id == null ? '/daten/json_editor/parking-sites.json' : `https://api.mobidata-bw.de/park-api/api/public/v3/parking-sites?source_id=${source_id}`;
        // const source = source_id == null ? 'data/parking-sites.json' : `https://api.mobidata-bw.de/park-api/api/public/v3/parking-sites?source_id=${source_id}`;  
        let geojson;

        fetch(source)
            .then(response => response.json())
            .then(data => {
                geojson = toGeoJSON(data.items);
                buildLayers(geojson)
            });

        function buildLayers() {

            const sourceGeoJson = {
                type: 'geojson',
                data: geojson
            };

            layersGeoJson = [
                {
                    id: 'geoJson',
                    label: 'Parkobjekte',
                    color: 'black',
                    circleRadius: 6,
                    source: 'sourceGeoJson',
                    group: 'JSON-Editor'
                }
            ];

            const sources = [
                { id: 'sourceGeoJson', source: sourceGeoJson },
                { id: 'sourceParkApiCar', source: sourceParkApiCar },
                { id: 'sourceParkApiBicycle', source: sourceParkApiBicycle },
                { id: 'sourceTransitStops', source: sourceTransitStops }
            ];
            sources.forEach(source => addSources(map, source));

            layersIpl = [
                ...layersParkApiCar.map(layer => ({ ...layer, visibility: 'none' })),
                ...layersParkApiBicycle.map(layer => ({ ...layer, visibility: 'none' })),
                ...layersTransitStops.map(layer => ({ ...layer, visibility: 'none' }))
            ];
            const layers = [
                ...layersGeoJson,
                ...layersIpl
            ];
            layers.forEach(layer => addLayers(map, layer));


            // ==============================
            // JSONEDITOR
            // ==============================     
            const container = document.getElementById('jsoneditor');
            const options = {};
            const editor = new JSONEditor(container, options);

            const initialJson = {
                geojson
            };
            editor.set(initialJson);


            // ==============================
            // GET COORDINATES
            // ==============================           
            const buttonGetCoordinates = document.getElementById('getCoordinates');
            let clickHandler = null;

            buttonGetCoordinates.addEventListener('click', () => {

                const clicked = buttonGetCoordinates.classList.toggle('clicked');

                if (clicked) {

                    clickHandler = (e) => {
                        const { lng, lat } = e.lngLat;
                        const html = `                      
                        <table>
                            <tr>
                                <td class="att">Längengrad</td><td class="attContent">${lng.toFixed(6)}</td>
                            </tr><tr>
                                <td class="att">Breitengrad</td><td class="attContent">${lat.toFixed(6)}</td>
                            </tr>
                        </table>`;

                        new maplibregl.Popup()
                            .setLngLat([lng, lat])
                            .setHTML(html)
                            .addTo(map);
                    };

                    map.on('click', clickHandler);

                } else {

                    if (clickHandler) {
                        map.off('click', clickHandler);
                        clickHandler = null;
                    }

                }
            });


            // ==============================
            // FILE SAVER
            // ==============================     
            const saveJson = document.getElementById('saveJson');

            saveJson.addEventListener('click', function () {

                saveJson.classList.add('clicked');
                setTimeout(() => saveJson.classList.remove("clicked"), 1000);

                const updatedJson = editor.get().geojson.features;

                function toJson() {
                    return {
                        items: updatedJson.map(feature => feature.properties)

                    }
                };
                const json = toJson();

                const filteredJson = json.items.map(item =>
                    Object.fromEntries(
                        Object.entries(item)
                            .filter(([key]) =>
                                ![
                                    'name',
                                    'id',
                                    'source_id',
                                    'purpose',
                                    'public_url',
                                    'has_fee',
                                    'has_realtime_data',
                                    'opening_hours',
                                    'capacity',
                                ].includes(key))
                            .map(([key, value]) =>
                                key.includes('_new') ? [key.split('_new')[0], value] : [key, value]
                            )
                    )
                );

                const exportJson = { items: filteredJson };

                const blob = new Blob([JSON.stringify(exportJson, null, 2)], {
                    type: 'application/json;charset=utf-8'
                });
                saveAs(blob, 'export_parking-sites.json');

            });


            // ==============================
            // LAYER CONTROL
            // ==============================     
            initializeControlLayers(map);


            // ==============================
            // POPUPS
            // ============================== 
            popups(map, [...layersGeoJson, ...layersParkApiCar, ...layersParkApiBicycle], popupContentParkApi);
            popups(map, layersTransitStops, popupContentTransitStops);

        };


    });


});