/* ====================================================================== */
/* https://docs.maptiler.com/sdk-js/examples/control-style-switcher/      */
/* ====================================================================== */
import MaplibreGeocoder from '@maplibre/maplibre-gl-geocoder';
import { basePath } from '../utils/paths.js';
import maplibregl from 'maplibre-gl';

export let layerSwitcher;

let attributionControl = null;


export function basemaps(map) {

    const sources = new Map(), layers = new Map();

    const addSource = map.addSource.bind(map);
    map.addSource = (id, src) => {
        sources.set(id, src);
        return addSource(id, src);
    };

    const addLayer = map.addLayer.bind(map);
    map.addLayer = (layer) => {
        layers.set(layer.id, layer);
        return addLayer(layer);
    };

    map.on('styledata', () => {
        setTimeout(() => {

            for (let [id, src] of sources) {
                if (!map.getSource(id)) map.addSource(id, src);
            }
            for (let layer of layers.values()) {
                if (!map.getLayer(layer.id)) map.addLayer(layer);
            }


            if (map.getStyle().name == 'Dark Matter') {

                const shapeLayers = map
                    .getStyle()
                    .layers
                    .filter(layer => /Shape$/.test(layer.id));

                shapeLayers.forEach(shapeLayer => {
                    if (shapeLayer.type == 'line') {
                        map.setPaintProperty(shapeLayer.id, 'line-color', 'white');
                    }
                    else if (shapeLayer.type == 'fill') {
                        map.setPaintProperty(shapeLayer.id, 'fill-color', 'white');
                    }
                });

            }

        }, 0);
    });




    const mapLibre = "<a href='https://maplibre.org/' target='_blank'>MapLibre</a>";
    const openStreetMap = "<a href='https://www.openstreetmap.org/copyright' target='_blank'>© OpenStreetMap Mitwirkende</a>";
    const mapTiler = "<a href='https://www.maptiler.com/copyright/' target='_blank'>© MapTiler</a>";
    const lgl = "<a href='https://www.lgl-bw.de/' target='_blank'>© LGL-BW</a>";

    const baseMaps = {
        'streets': {
            img: `${basePath}img/basemaps/streets.png`,
            style: 'https://tiles.mobidata-bw.de/styles/streets/style.json',
            title: 'Straßen',
            attribution: `<div class='maplibregl-ctrl-attrib-inner'> ${mapLibre} | ${openStreetMap} ${mapTiler} </div>`
        },
        'bicycle': {
            img: `${basePath}img/basemaps/bicycle.png`,
            style: 'https://tiles.mobidata-bw.de/styles/bicycle/style.json',
            title: 'Fahrrad',
            attribution: `<div class='maplibregl-ctrl-attrib-inner'> ${mapLibre} | ${openStreetMap} ${mapTiler} </div>`
        },
        'darkmatter': {
            img: `${basePath}img/basemaps/darkmatter.png`,
            style: 'https://tiles.mobidata-bw.de/styles/darkmatter/style.json',
            title: 'Dunkelmodus',
            attribution: `<div class='maplibregl-ctrl-attrib-inner'> ${mapLibre} | ${openStreetMap} ${mapTiler} </div>`
        },
        'aerialphotos': {
            img: `${basePath}img/basemaps/aerialphotos.png`,
            style: 'https://tiles.mobidata-bw.de/styles/aerialphotos/style.json',
            title: 'Luftbild',
            attribution: `<div class='maplibregl-ctrl-attrib-inner'> ${mapLibre} | ${openStreetMap} ${mapTiler} ${lgl} </div>`
        },
        'basemap': {
            img: `${basePath}img/basemaps/terrain.png`,
            style: 'https://sgx.geodatenzentrum.de/gdz_basemapde_vektor/styles/bm_web_top.json',
            title: 'Geländemodell',
            attribution: `<div class='maplibregl-ctrl-attrib-inner'> ${mapLibre} </div>`
        }
    };

    /* Default Attribution Control */
    attributionControl = new maplibregl.AttributionControl({
        compact: true,
        customAttribution: baseMaps['streets'].attribution
    });
    map.addControl(attributionControl);


    let initialStyle = Object.keys(baseMaps)[0];


    class layerSwitcherControl {
        constructor(options) {
            this._options = { ...options };
            this._container = document.createElement('div');
            this._container.classList.add('maplibregl-ctrl');
            this._container.classList.add('maplibregl-ctrl-basemaps');
            this._container.classList.add('closed');
            switch (this._options.expandDirection || 'right') {
                case 'top':
                    this._container.classList.add('reverse');
                case 'down':
                    this._container.classList.add('column');
                    break;
                case 'left':
                    this._container.classList.add('reverse');
                case 'right':
                    this._container.classList.add('row');
            }
            this._container.addEventListener('mouseenter', () => {
                this._container.classList.remove('closed');
            });
            this._container.addEventListener('mouseleave', () => {
                this._container.classList.add('closed');
            });

        }

        onAdd(map) {
            this._map = map;
            const basemaps = this._options.basemaps;
            Object.keys(basemaps).forEach((layerId) => {
                const base = basemaps[layerId];
                const basemapContainer = document.createElement('img');
                basemapContainer.src = base.img;
                basemapContainer.classList.add('basemap');
                basemapContainer.dataset.id = layerId;
                basemapContainer.title = base.title;

                basemapContainer.addEventListener('click', () => {


                    const activeElement = this._container.querySelector('.active');

                    if (activeElement) {
                        activeElement.classList.remove('active');
                    }
                    basemapContainer.classList.add('active');

                    map.setStyle(base.style);


                    /* Dynamic Attribution Control */
                    if (attributionControl != null) {
                        map.removeControl(attributionControl);
                    }

                    attributionControl = new maplibregl.AttributionControl({
                        compact: true,
                        customAttribution: base.attribution
                    });

                    map.addControl(attributionControl);


                    // // if dark mode is selected, set white instead of black color
                    // // fillShape and fillLine therefore must be the first two layers handed over to the array 'layers'    
                    // if (base.title == 'Dunkelmodus') {
                    //     layers[0].paint['fill-color'] = 'white';
                    //     layers[1].paint['line-color'] = 'white';
                    // } else {
                    //     layers[0].paint['fill-color'] = 'black';
                    //     layers[1].paint['line-color'] = 'black';
                    // };


                });
                basemapContainer.classList.add('hidden');
                this._container.appendChild(basemapContainer);
                if (this._options.initialBasemap.id === layerId) {
                    basemapContainer.classList.add('active');
                }

            });
            return this._container;
        }

        onRemove() {
            this._container.parentNode?.removeChild(this._container);
            delete this._map;
        }
    };

    map.setStyle(baseMaps[initialStyle].style);

    // /* Fix that with each setStyle() all layers and sources are removed */
    // map.on('styledata', () => {

    //     setTimeout(() => {

    //         basemapSources.forEach((sourceConfig) => {

    //             if (!map.getSource(sourceConfig.id)) {

    //                 if (sourceConfig.id == 'shape') {
    //                     map.addSource(sourceConfig.id, sourceConfig.source);
    //                 }
    //                 else {
    //                     addSources(map, sourceConfig);
    //                 }

    //             }
    //         });

    //         basemapLayers.forEach((layerConfig) => {

    //             if (!map.getLayer(layerConfig.id)) {

    //                 // fillShape and lineShape are not added to the map through addLayers()
    //                 if (layerConfig.id == 'fillShape' || layerConfig.id == 'lineShape') {
    //                     map.addLayer(layerConfig);
    //                 }

    //                 else {
    //                     addLayers(map, layerConfig);
    //                 }

    //             };

    //         });

    //     }, 100);

    // });


    layerSwitcher = new layerSwitcherControl({ basemaps: baseMaps, initialBasemap: { id: initialStyle } });

    map.addControl(layerSwitcher, 'bottom-left');

    // map.addControl(new layerSwitcherControl({ basemaps: baseMaps, initialBasemap: { id: initialStyle } }), 'bottom-left');


};