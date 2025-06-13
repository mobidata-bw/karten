import 'maplibre-gl/dist/maplibre-gl.css';
import '@maplibre/maplibre-gl-inspect/dist/maplibre-gl-inspect.css';
import '@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css';
import '../plugins/mapbox-layer-control/layerControl.min.css';
import '../css/styleFlipperControl.css';
import '../css/global.css';

import maplibregl from 'maplibre-gl';
import StyleFlipperControl from 'maplibre-gl-style-flipper';
import MaplibreInspect from '@maplibre/maplibre-gl-inspect';
import MaplibreGeocoder from '@maplibre/maplibre-gl-geocoder';

export { addSources, addLayers } from '../js/layers/configSourcesLayers.js';
export { popups } from '../js/popups.js';
export { wms } from '../js/wms.js';


// ==============================
// MAP
// ==============================
let attributionControl = null;


export function initializeMap() {

    const mapLibre = "<a href='https://maplibre.org/' target='_blank'>MapLibre</a>";
    const openStreetMap = "<a href='https://www.openstreetmap.org/copyright' target='_blank'>© OpenStreetMap Mitwirkende</a>";
    const mapTiler = "<a href='https://www.maptiler.com/copyright/' target='_blank'>© MapTiler</a>";
    const lgl = "<a href='https://www.lgl-bw.de/' target='_blank'>© LGL-BW</a>";

    const mapStyles = {
        'Straßen': {
            code: 'streets',
            url: 'https://tiles.mobidata-bw.de/styles/streets/style.json',
            image: '/img/basemaps/streets.png',
            attribution: `<div class='maplibregl-ctrl-attrib-inner'> ${mapLibre} | ${openStreetMap} ${mapTiler} </div>`
        },
        'Fahrrad': {
            code: 'bicycle',
            url: 'https://tiles.mobidata-bw.de/styles/bicycle/style.json',
            image: '/img/basemaps/bicycle.png',
            attribution: `<div class='maplibregl-ctrl-attrib-inner'> ${mapLibre} | ${openStreetMap} ${mapTiler} </div>`
        },
        'Dunkelmodus': {
            code: 'darkmatter',
            url: 'https://tiles.mobidata-bw.de/styles/darkmatter/style.json',
            image: '/img/basemaps/darkmatter.png',
            attribution: `<div class='maplibregl-ctrl-attrib-inner'> ${mapLibre} | ${openStreetMap} ${mapTiler} </div>`
        },
        'Luftbilder': {
            code: 'aerialphotos',
            url: 'https://tiles.mobidata-bw.de/styles/aerialphotos/style.json',
            image: '/img/basemaps/aerialphotos.png',
            attribution: `<div class='maplibregl-ctrl-attrib-inner'> ${mapLibre} | ${openStreetMap} ${mapTiler} ${lgl} </div>`
        },
        'Geländemodell': {
            code: 'terrain',
            url: 'https://sgx.geodatenzentrum.de/gdz_basemapde_vektor/styles/bm_web_top.json',
            image: '/img/basemaps/terrain.png',
            attribution: `<div class='maplibregl-ctrl-attrib-inner'> ${mapLibre} </div>`
        },
    };

    const map = new maplibregl.Map({
        container: 'map',
        style: mapStyles['Straßen'].url,
        center: [9.000, 48.680],
        zoom: window.innerWidth < 577 ? 6 : 7.1,
        minZoom: 4,
        maxBounds: [[-21.4, 35.1], [40.9, 72.4]],
        attributionControl: false
    });

    const styleFlipperControl = new StyleFlipperControl(mapStyles);
   
    styleFlipperControl.setCurrentStyleCode('streets');

    map.addControl(styleFlipperControl, 'bottom-left');

    attributionControl = new maplibregl.AttributionControl({
        compact: true,
        customAttribution: mapStyles['Straßen'].attribution
    });
    map.addControl(attributionControl);

    // if (attributionControl != null) {
    //     map.removeControl(attributionControl);
    // }

    // attributionControl = new maplibregl.AttributionControl({
    //     compact: true,
    //     customAttribution: base.attribution
    // });

    // map.addControl(attributionControl);


    return map;
    
};


// ==============================
// SOURCES AND LAYERS
// ==============================
export const shape = {
    'type': 'geojson',
    'data': 'https://www.mobidata-bw.de/karten_geojsons/public/data/boundaries/shapesBadenWuerttemberg.geojson'
};

export const fillShape = {
    'id': 'fillShape',
    'type': 'fill',
    'source': 'shape',
    'paint': {
        'fill-color': 'black',
        'fill-opacity': 0.1,
    }
};

export const lineShape = {
    'id': 'lineShape',
    'type': 'line',
    'source': 'shape',
    'paint': {
        'line-color': 'black',
        'line-width': 2
    }
};


// ==============================
// MAP CONTROLS
// ==============================
export function maplibreControls(map) {

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

};


// ==============================
// GEOCODER
// ==============================
export function geocoder(map) {

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

};