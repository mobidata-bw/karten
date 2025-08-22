import '../css/styles.css';
import 'jsoneditor/dist/jsoneditor.min.css';

import JSONEditor from 'jsoneditor/dist/jsoneditor.min.js';
import * as FileSaver from 'file-saver';

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
                type: "FeatureCollection",
                features: json.map(item => ({
                    type: "Feature",
                    geometry: {
                        type: "Point",
                        coordinates: [parseFloat(item.lon), parseFloat(item.lat)]
                    },
                    properties: { ...item }
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
            const container = document.getElementById("jsoneditor");
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

                function toJson() {
                    return {
                        items: updatedJson.map(feature => feature.properties)
                    }
                };
                const json = toJson();

                const blob = new Blob([JSON.stringify(json, null, 2)], {
                    type: "application/json"
                });
                FileSaver.saveAs(blob, "export.json");

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