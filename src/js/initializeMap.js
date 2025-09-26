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

import { setGeoJsonPath } from './setGeoJsonPath.js';

export { addSources, addLayers } from './configSourcesLayers.js';
export { basemaps } from '../js/layerSwitcherControl.js';
export { popups } from '../js/popups.js';
export { wms } from '../js/wms.js';

export let map;


export function initializeMap({ configZoom, configCenter, configMinZoom, configShape } = {}) {

    // ==============================
    // MAP
    // ==============================   
    const params = new URLSearchParams(window.location.search);
    let lng, lat, zoom;

    if (params.has('zoom') && params.has('lng') && params.has('lat')) {
        lng = parseFloat(params.get('lng'));
        lat = parseFloat(params.get('lat'));
        zoom = parseFloat(params.get('zoom'));
    }
    else if (configZoom && configCenter) {
        lng = configCenter[0];
        lat = configCenter[1];
        zoom = configZoom;
    } else {
        lng = 9.000;
        lat = 48.680;
        zoom = window.innerWidth < 577 ? 6 : 7.1;
    };

    map = new maplibregl.Map({
        container: 'map',
        // style: 'https://tiles.mobidata-bw.de/styles/streets/style.json', moved setStyle to layerSwitcherControl.js
        center: [lng, lat],
        zoom: zoom,
        minZoom: configMinZoom || 4,
        maxBounds: [[-21.4, 35.1], [40.9, 72.4]],
        attributionControl: false
        // pixelRatio: 1
    });

    map.once('load', () => {
        map.resize();
        map.jumpTo({
            center: [lng, lat],
            zoom: zoom
        });
        map.getContainer().style.visibility = 'visible';

        // initialize moveend event after initial resize
        setUrlParams();
    });

    function setUrlParams() {
        map.on('moveend', () => {
            const { lng, lat } = map.getCenter();
            const url = new URL(window.location.href);
            url.searchParams.set('lng', lng.toFixed(6));
            url.searchParams.set('lat', lat.toFixed(6));
            url.searchParams.set('zoom', map.getZoom().toFixed(2));
            history.replaceState(history.state, '', url.href);
        })
    };


    // ==============================
    // SOURCES AND LAYERS
    // ==============================
    map.on('load', () => {

        const shape =
            configShape ?
                setGeoJsonPath('shapes', configShape) :
                (
                    window.innerWidth < 473 ?
                        setGeoJsonPath('shapes', 'shapeBadenWuerttembergSimplified') :
                        setGeoJsonPath('shapes', 'shapeBadenWuerttemberg')
                );

        map.addSource('shape', shape);

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

        // map.layerGroups = (groups) => {
        //     return Object.entries(groups).flatMap(([name, layers]) => {
        //         if (params.get(name) === 'false') return [];              
        //         return layers.filter(layer => params.get(layer.id) != 'false');
        //     });
        // };

        //   layers = map.layerGroups({
        //     'transit_stops': layersTransitStops,
        //     'transit_stations': layersTransitStations,
        //     'transit_shapes': layersTransitShapes
        // });
        // layers.forEach(layer => addLayers(map, layer));

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

    } else if (window.innerWidth > 502) {

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