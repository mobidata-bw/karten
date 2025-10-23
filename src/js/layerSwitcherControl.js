/* ====================================================================== */
/* https://docs.maptiler.com/sdk-js/examples/control-style-switcher/      */
/* ====================================================================== */
import { basemapConfig, styleBasemaps } from './basemaps.js';
import maplibregl from 'maplibre-gl';
export let layerSwitcher;

let attributionControl = null;
let preservedActiveLayers = null;


export function basemaps(map, options = {}) {

    /* Set Style */
    const style = options.style;
    const setStyle = style ? style : 'streets';

    /* Default Attribution Control */
    attributionControl = new maplibregl.AttributionControl({
        compact: true,
        customAttribution: basemapConfig[setStyle].attribution
    });
    map.addControl(attributionControl);

    /* Set Style */
    let initialStyle = setStyle;


    // ==============================
    // DEFINE CLASS
    // ==============================  
    class layerSwitcherControl {
        constructor(options) {
            this._options = { ...options };
            this._container = document.createElement('div');
            this._container.classList.add('maplibregl-ctrl');
            this._container.classList.add('maplibregl-ctrl-basemaps');
            this._container.classList.add('closed');
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

                /* Construct HTML */
                const basemapContainer = document.createElement('figure');
                basemapContainer.classList.add('basemap');
                basemapContainer.dataset.id = layerId;

                const img = document.createElement('img');
                img.classList.add('img');
                img.src = base.img;

                const figcaption = document.createElement('figcaption');
                figcaption.classList.add('figcaption');
                figcaption.innerText = base.title;

                basemapContainer.append(img, figcaption);


                // ==============================
                // BASEMAP CONTAINER EVENTS
                // ==============================  
                basemapContainer.addEventListener('click', () => {

                    const activeElement = this._container.querySelector('.active');
                    if (activeElement) activeElement.classList.remove('active');
                    basemapContainer.classList.add('active');

                    /* Set Style */
                    window.__basemapSwitching = true; // set variable to true as soon as basemap is clicked
                    preservedActiveLayers = [];
                    layers.forEach(layer => {
                        if (map.getLayoutProperty(layer.id, 'visibility') == 'visible') preservedActiveLayers.push(layer.id);
                    });

                    /* Set Style */
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

    map.setStyle(basemapConfig[initialStyle].style);

    layerSwitcher = new layerSwitcherControl({ basemaps: basemapConfig, initialBasemap: { id: initialStyle } });
    map.addControl(layerSwitcher, 'bottom-left');

    /* Re-add sources and layers */
    const sources = new Map(), layers = new Map();

    const _addSource = map.addSource.bind(map);
    map.addSource = (id, src) => {
        sources.set(id, src);
        return _addSource(id, src);
    };
    const _addLayer = map.addLayer.bind(map);
    map.addLayer = (layer, beforeId) => {
        layers.set(layer.id, layer);
        return _addLayer(layer, beforeId);
    };

    /* Set Visibility */
    let activeLayers = [];

    /* Style basemaps */
    map.on('load', () => {
        styleBasemaps(map, layers);
    });


    // ==============================
    // SWITCH BASEMAP EVENTS
    // ============================== 
    map.on('styledata', () => {

        /* Re-add sources and layers */
        for (let [id, src] of sources) {
            if (!map.getSource(id)) map.addSource(id, src);
        };
        for (let layer of layers.values()) {
            if (!map.getLayer(layer.id)) map.addLayer(layer);
        };

        /* Set visibility */
        activeLayers.length = 0;
        layers.forEach(layer => {
            if (map.getLayer(layer.id)) {
                if (map.getLayoutProperty(layer.id, 'visibility') == 'visible') activeLayers.push(layer.id)
            }
        });
        if (!window.__basemapSwitching) return; // if false then no further actions
        const restoreArray = Array.isArray(preservedActiveLayers) ? preservedActiveLayers : activeLayers;
        // console.log(restoreArray);
        layers.forEach(layer => {
            if (restoreArray.includes(layer.id)) map.setLayoutProperty(layer.id, 'visibility', 'visible');
            else map.setLayoutProperty(layer.id, 'visibility', 'none');
        });

        /* Style basemaps */
        styleBasemaps(map, layers);

        /* Set Visibility: Reset flag and array */
        window.__basemapSwitching = false;
        preservedActiveLayers = null;

    });

};