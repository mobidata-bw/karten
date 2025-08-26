import { layerControlGrouped } from '../../../../src/plugins/mapbox-layer-control/layerControlGrouped.js';
import '../../../../src/plugins/mapbox-layer-control/layerControl-patch.js';
import { layersGeoJson, layersIpl } from './main.js';
import { addControlLayers } from '../../../../src/js/addControlLayers.js';


export function initializeControlLayers(map) {

    // ==============================
    // CONFIG 1
    // ==============================
    const config1 = {
        collapsed: false,
        layers: addControlLayers(layersGeoJson, 'JSON-Editor')
    };

    const layerControl1 = new layerControlGrouped(config1);

    map.addControl(layerControl1, 'top-right');


    // ==============================
    // CONFIG 2
    // ==============================
    const config2 = {
        collapsed: false,
        layers: addControlLayers(layersIpl, 'Integrationsplattform', 'group')
    };

    const layerControl2 = new layerControlGrouped(config2);

    map.addControl(layerControl2, 'top-right');


    // ==============================
    // LAYER ORDER
    // ==============================
    map.moveLayer('geoJson');


};