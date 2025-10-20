import { layerControlGrouped } from '../../../src/plugins/mapbox-layer-control/layerControlGrouped.js';
import '../../../src/plugins/mapbox-layer-control/layerControl-patch.js';
import { layersIpl, layersNonIpl } from './main.js';
import { addControlLayers } from '../../../src/js/addControlLayers.js';
import { summarizeControlLayers } from '../../../src/js/summarizeControlLayers.js';
export let control2;


export function initializeControlLayers(map) {


    // ==============================
    // CONFIG1
    // ============================== 
    const config1 = {
        collapsed: false,
        layers: addControlLayers(layersIpl, 'Integrationsplattform', 'group')
    };

    map.addControl(new layerControlGrouped(config1), 'top-right');


    // ==============================
    // CONFIG 2
    // ============================== 
    const config2 = {
        collapsed: false,
        directoriesCollapsed: true,
        layers: addControlLayers(layersNonIpl, 'Weitere Datenprofile', 'group')
    };

    control2 = new layerControlGrouped(config2);

    map.addControl(control2, 'top-right');


    // ==============================
    // SUMMARIZE CONTROL LAYERS
    // ============================== 
    summarizeControlLayers(map);

};