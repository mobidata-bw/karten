import 'maplibre-gl/dist/maplibre-gl.css';
import maplibregl from 'maplibre-gl';

import '../css/styles.css';

import {
    /*map, */shape, fillShape, lineShape, maplibreControls, geocoder,
    addSources, addLayers,
    basemaps,
    popups
} from '../../../../src/js/initializeMap.js';
import { sourceParkApiCarOnStreet, layersParkApiCarOnStreetOccupancy, layersParkApiCarOnStreetObjects, layersParkApiCarOnStreetSpecialParking } from './layers.js';
import { popupContent } from '../../../../src/js/layers/parkApi/popupContent.js';
import { initializeControlLayers } from './controlLayers.js';

export let layers;


window.addEventListener('DOMContentLoaded', () => {

    // ==============================
    // MAP CONTROLS
    // ==============================  
    // basemaps(map);

    const CENTER = [9.0, 48.68];
    const ZOOM   = window.innerWidth < 577 ? 6 : 7.1;
    const BOUNDS = [
      [5.8,  47.2],   // Southwest: [lon, lat]
      [15.2, 55.1]    // Northeast: [lon, lat]
    ];
  
    const map = new maplibregl.Map({
      container: 'map',
      style:     'https://tiles.mobidata-bw.de/styles/streets/style.json',
      center:    CENTER,       // initial, kann überschrieben werden
      zoom:      ZOOM,         // initial
      minZoom:   4,
      maxBounds: BOUNDS,       // initial, aber nur im Konstruktor evtl. nicht früh genug
      attributionControl: false
    });

    function resetView() {
        map.setCenter(CENTER);
        map.setZoom(ZOOM);
        map.setMaxBounds(BOUNDS);
      }
    
      // 2) jedes Mal, wenn der Style (wieder) geladen ist
      map.on('style.load', resetView);
    
      // 3) falls Style schon vor Listener-Registrierung geladen ist
      if (map.isStyleLoaded && map.isStyleLoaded()) {
        resetView();
      }

          geocoder(map);
    maplibreControls(map);


    // ==============================
    // SOURCES AND LAYERS
    // ==============================   
    map.on('load', () => {

        // DEFAULT LAYERS
        map.addSource('shape', shape);
        map.addLayer(fillShape);
        map.addLayer(lineShape);


        // PROJECT LAYERS             
        const sources = [
            { id: 'sourceParkApiCarOnStreet', source: sourceParkApiCarOnStreet },
        ];
        sources.forEach(source => addSources(map, source));

        layers = [
            ...layersParkApiCarOnStreetOccupancy,
            ...layersParkApiCarOnStreetObjects,
            ...layersParkApiCarOnStreetSpecialParking
        ];

        layers.forEach(layer => addLayers(map, layer));


        // ==============================
        // LAYER CONTROL
        // ============================== 
        initializeControlLayers(map);


        // ==============================
        // POPUPS
        // ==============================       
        popups(map, layers, popupContent);


    });


});