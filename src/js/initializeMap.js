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

export { addSources, addLayers } from './configSourcesLayers.js';
export { basemaps } from '../js/layerSwitcherControl.js';
export { popups } from '../js/popups.js';
export { wms } from '../js/wms.js';

export let map;


export function initializeMap({ configZoom, configCenter, configMinZoom, configShape } = {}) {

    // ==============================
    // MAP
    // ==============================
    let lat, lng, zoom;

    const params = new URLSearchParams(window.location.search);
  
    if (params.has('zoom') && params.has('lat') && params.has('lng')) {
        lat = parseFloat(params.get('lat'));
        lng = parseFloat(params.get('lng'));
        zoom = parseFloat(params.get('zoom'));
        // console.log("B: ", lat, lng, zoom);
    }
    else if (configZoom && configCenter) {
        lat = configCenter[0];
        lng = configCenter[1];
        zoom = configZoom;
        // console.log("A: ", lat, lng, zoom);
    } else {
        lat = 9.000;
        lng = 48.680;
        zoom = window.innerWidth < 577 ? 6 : 7.1;
        // console.log("C: ", lat, lng, zoom);
    };

    map = new maplibregl.Map({
        container: 'map',
        style: 'https://tiles.mobidata-bw.de/styles/streets/style.json',
        center: [lat, lng],
        zoom: zoom,
        minZoom: configMinZoom || 4,
        maxBounds: [[-21.4, 35.1], [40.9, 72.4]],
        attributionControl: false,
        pixelRatio: 1
    });

    map.once('load', () => {
        map.resize();
        map.jumpTo({
            center: [lat, lng],
            zoom: zoom
        });
        map.getContainer().style.visibility = 'visible';
    });


    // ==============================
    // SOURCES AND LAYERS
    // ==============================
    map.on('load', () => {

        const shape = configShape ? `/karten_geojsons/boundaries/${configShape}` : (window.innerWidth < 473 ? '/karten_geojsons/boundaries/shapesBadenWuerttembergSimplified.geojson' : '/karten_geojsons/boundaries/shapesBadenWuerttemberg.geojson');

        map.addSource('shape', {
            'type': 'geojson',
            'data': shape
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


        map.layerGroups = (groups) => {
            return Object.entries(groups).flatMap(([name, layers]) => {
                if (params.get(name) === 'false') return [];

                // if (params.get(name) === 'invisible') {
                //     requestAnimationFrame(() => {
                //         const element = document.getElementById(`layerGroup_${name}`).parentNode;
                //         if (element) {
                //             element.style.display = 'none';
                //         }
                //     });
                // }

                return layers.filter(layer => params.get(layer.id) != 'false');
            });
        };

    });


    // ==============================
    // MAP CONTROLS
    // ============================== 
    const maplibreGeocoder = {
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

    const geolocateControl = new maplibregl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    });

    const maplibreInspect = new MaplibreInspect({
        popup: new maplibregl.Popup({
            closeButton: false,
            closeOnClick: false
        })
    });

    // check if smartphone/tablet or desktop
    if (window.innerWidth < 502) {

        map.addControl(geolocateControl, 'top-left');

    } else if (window.innerWidth >= 502){

        map.addControl(
            new MaplibreGeocoder(maplibreGeocoder, {
                maplibregl,
                language: 'de',
                showResultsWhileTyping: true,
                popup: true
            }),
            'top-left',

        );

        map.addControl(maplibreInspect, 'top-left');

    };

    map.addControl(
        new maplibregl.NavigationControl({
            showZoom: window.innerWidth < 502 ? false : true,
            showCompass: true,
            visualizePitch: true,
        }),
        'top-left'
    ) 


    return map;

};