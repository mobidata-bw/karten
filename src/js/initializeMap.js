import 'maplibre-gl/dist/maplibre-gl.css';
import '@maplibre/maplibre-gl-inspect/dist/maplibre-gl-inspect.css';
import '@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css';
import '../plugins/mapbox-layer-control/layerControl.min.css';
import '../css/layerSwitcherControl.css';
import '../css/geocoder.css';
import '../css/layerControl.css';
import '../css/global.css';

import maplibregl from 'maplibre-gl';
import MaplibreInspect from '@maplibre/maplibre-gl-inspect';
import MaplibreGeocoder from '@maplibre/maplibre-gl-geocoder';

export { addSources, addLayers } from '../js/layers/configSourcesLayers.js';
export { basemaps } from '../js/layerSwitcherControl.js';
export { popups } from '../js/popups.js';
export { wms } from '../js/wms.js';

export let map;



export function initializeMap({ center, zoom, minZoom, shape } = {}) {

    // ==============================
    // MAP
    // ==============================
    const defaultCenter = [9.000, 48.680];
    const defaultZoom = window.innerWidth < 577 ? 6 : 7.1;

    map = new maplibregl.Map({
        container: 'map',
        style: 'https://tiles.mobidata-bw.de/styles/streets/style.json',
        center: center || defaultCenter,
        zoom: zoom || defaultZoom,
        minZoom: minZoom || 4,
        maxBounds: [[-21.4, 35.1], [40.9, 72.4]],
        attributionControl: false,
        pixelRatio: 1
    });

    map.once('load', () => {
        map.resize();
        map.jumpTo({
            center: center || defaultCenter,
            zoom: zoom || defaultZoom
        });
        map.getContainer().style.visibility = 'visible';
    });


    // ==============================
    // SOURCES AND LAYERS
    // ==============================
    map.on('load', () => {

        map.addSource('shape', {
            'type': 'geojson',
            'data': shape ? `/karten_geojsons/boundaries/${shape}` : '/karten_geojsons/boundaries/shapesBadenWuerttemberg.geojson'
        });

        map.addLayer({
            'id': 'fillShape',
            'type': 'fill',
            'source': 'shape',
            'paint': {
                'fill-color': 'black',
                'fill-opacity': 0.1,
            }
        });

        map.addLayer({
            'id': 'lineShape',
            'type': 'line',
            'source': 'shape',
            'paint': {
                'line-color': 'black',
                'line-width': 2
            }
        });

    });


    // ==============================
    // GEOCODER
    // ==============================
    const geocoderApi = {
        forwardGeocode: async (config) => {
            const features = [];
            try {

                const minX = 1.5;
                const minY = 45.7;
                const maxX = 16.0;
                const maxY = 55.3;

                const viewbox = `${minX},${maxY},${maxX},${minY}`;

                const request =
                    `https://nominatim.openstreetmap.org/search?q=${config.query
                    }&format=geojson&polygon_geojson=1&addressdetails=1&viewbox=${viewbox}`;
                const response = await fetch(request);
                const geojson = await response.json();
                for (const feature of geojson.features) {

                    const center = [
                        feature.bbox[0] +
                        (feature.bbox[2] - feature.bbox[0]) / 2,
                        feature.bbox[1] +
                        (feature.bbox[3] - feature.bbox[1]) / 2
                    ];

                    const point = {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: center
                        },
                        place_name: feature.properties.display_name,
                        properties: feature.properties,
                        text: feature.properties.display_name,
                        place_type: ['place'],
                        center
                    };
                    features.push(point);
                }
            } catch (e) {
                console.error(`Failed to forwardGeocode with error: ${e}`);
            }

            return {
                features
            };
        },
    };

    map.addControl(
        new MaplibreGeocoder(geocoderApi, {
            maplibregl,
            // collapsed: true,
            language: 'de',
            showResultsWhileTyping: true,
            popup: true
        }),
        'top-left',

    );


    // ==============================
    // MAP CONTROLS
    // ==============================
    map.addControl(
        new MaplibreInspect({
            popup: new maplibregl.Popup({
                closeButton: false,
                closeOnClick: false
            })
        }),
        'top-left'
    );
    map.addControl(
        new maplibregl.NavigationControl({
            showZoom: window.innerWidth < 577 ? false : true,
            showCompass: true,
            visualizePitch: true,
        }),
        'top-left'
    );



    return map;

};