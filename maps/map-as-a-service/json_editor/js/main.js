import '../css/styles.css';
import 'jsoneditor/dist/jsoneditor.min.css';

import JSONEditor from 'jsoneditor/dist/jsoneditor.min.js';
import { saveAs } from 'file-saver';

import {
    initializeMap,
    basemaps,
    popups,
    addSources, addLayers
} from '../../../../src/js/initializeMap.js';
import { popupContent } from '../../../ipl/park-api/js/popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // INITIALIZE MAP
    // ==============================  
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
                    properties: {
                        ...Object.fromEntries(
                            Object.entries(item)
                                .filter(([key]) =>
                                    key != 'static_data_updated_at' &&
                                    key != 'realtime_data_updated_at' &&
                                    key != 'realtime_capacity' &&
                                    key != 'realtime_free_capacity' &&
                                    key != 'created_at' &&
                                    key != 'modified_at'
                                )
                                .map(([key, value]) => [
                                    key == 'type' || key == 'lat' || key == 'lon' ? key.replace(key, `${key}_default`) : key, value
                                ])
                        ),
                        'type': '',
                        'address': '',
                        'max_height': 0,
                        'max_width': 0,
                        'description': '',
                        'fee_description': '',
                        'park_and_ride_type': [
                            ''
                        ],
                        'lat': '',
                        'lon': '',
                        'external_identifiers': [
                            {
                                'type': 'DHID',
                                'value': 'de:xx'
                            }
                        ]
                    }
                }))
            }
        };

        let geojson;

        // fetch('data/parking-sites.json')
            fetch('/daten/json_editor/parking-sites.json')
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

            const layersGeoJson = [
                {
                    id: 'geoJson',
                    label: 'Parkobjekte',
                    color: '#7D97DD',
                    source: 'sourceGeoJson',
                    group: 'JSON-Editor'
                }
            ];

            const sources = [
                { id: 'sourceGeoJson', source: sourceGeoJson }
            ];
            sources.forEach(source => addSources(map, source));

            layers = layersGeoJson;
            layers.forEach(layer => addLayers(map, layer));


            // ==============================
            // JSONEDITOR
            // ==============================     
            const container = document.getElementById('jsoneditor');
            const options = {};
            const editor = new JSONEditor(container, options);

            const initialJson = {
                geojson
            }
            editor.set(initialJson)


            // ==============================
            // FILE SAVER
            // ==============================                    
            document.getElementById('saveJson').addEventListener('click', function () {

                const updatedJson = editor.get().geojson.features;

                const now = new Date();
                const date = String(now.getDate()).padStart(2, "0");
                const month = String(now.getMonth() + 1).padStart(2, "0");
                const year = String(now.getFullYear()).slice(-2);
                const time = year + month + date;

                function toJson() {
                    return {
                        items: updatedJson.map(feature => feature.properties)
                    }
                };
                const json = toJson();

                const blob = new Blob([JSON.stringify(json, null, 2)], {
                    type: 'application/json;charset=utf-8'
                });
                saveAs(blob, `${time}_parking-sites.json`);

            });


            // ==============================
            // LAYER CONTROL
            // ==============================     
            initializeControlLayers(map);


            // ==============================
            // POPUPS
            // ============================== 
            popups(map, layers, popupContent);

        };


    });


});