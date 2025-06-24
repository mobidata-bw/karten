import { iplPath } from '../utils/paths.js';
import maplibregl from 'maplibre-gl';


export function wms(map, layers, popupContent) {

    // ==============================
    // POINTER BEHAVIOR IN WMS
    // ==============================


    map.on('mousemove', (e) => {
        const activeLayers = layers.filter(layer => {
            const lyr = map.getLayer(layer.id);
            return lyr && map.getLayoutProperty(layer.id, 'visibility') !== 'none';
        });
        map.getCanvas().style.cursor = activeLayers.length > 0 ? 'pointer' : 'normal';
    });


    map.on('click', async (e) => {


        // ==============================
        // FILTER ACTIVE LAYERS
        // ==============================
        const activeLayers = layers.filter(layer => {
            const lyr = map.getLayer(layer.id);
            return lyr && map.getLayoutProperty(layer.id, 'visibility') !== 'none';
        });
        if (activeLayers.length === 0) return;

        // console.log(activeLayers)


        // ==============================
        // BOUNDS AND CONTAINER SIZE
        // ==============================
        const bounds = map.getBounds();
        const container = map.getContainer().getBoundingClientRect();


        // ==============================
        // BOUNDING BOX
        // ==============================
        const bbox = [
            bounds.getSouth(),  // miny
            bounds.getWest(),   // minx
            bounds.getNorth(),  // maxy
            bounds.getEast()    // maxx
        ].join(',');

        // Calculate click point into container pixel coordinates
        const point = map.project(e.lngLat);


        // ==============================
        // REQUEST PARAMETERS & URL CONSTRUCTION
        // ==============================
        const requests = activeLayers.map(async layer => {
            const params = {
                SERVICE: 'WMS',
                VERSION: '1.3.0',
                REQUEST: 'GetFeatureInfo',
                LAYERS: layer.layer,
                QUERY_LAYERS: layer.layer,
                STYLES: layer.style,
                BBOX: bbox,
                CRS: 'EPSG:4326',
                WIDTH: container.width,
                HEIGHT: container.height,
                FORMAT: 'image/png',
                INFO_FORMAT: 'application/json',
                i: Math.round(point.x),
                j: Math.round(point.y),
                buffer: 5,
            };

            if (layer.cql) {
                params.CQL_FILTER = layer.cql;
            };

            const queryString = Object.keys(params)
                .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
                .join('&');
            const url = `https://${iplPath}.mobidata-bw.de/geoserver/ows?${queryString}`;


            // ==============================
            // FETCH WMS DATA & PARSE JSON RESPONSE
            // ==============================
            try {
                const response = await fetch(url);
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('GetFeatureInfo-Fehler:', error);
                return null;
            }
        });


        // ==============================
        // POPUPS
        // ==============================
        const results = await Promise.all(requests);

        // console.log(results);        

        results.forEach(result => {
            if (result.features.length > 0) {
                const features = result.features[0].properties;
                new maplibregl.Popup()
                    .setLngLat(e.lngLat)
                    .setHTML(popupContent(features))
                    .addTo(map);
            }
        });

    });


};