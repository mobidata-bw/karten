import { layerControlGrouped } from '../../../src/plugins/mapbox-layer-control/layerControlGrouped.js';
import '../../../src/plugins/mapbox-layer-control/layerControl-patch.js';
import { layers } from './main.js';
import { addControlLayers } from '../../../src/js/addControlLayers.js';


export function initializeControlLayers(map) {

    const config = {
        collapsed: false,
        layers: addControlLayers(layers, 'Legende')
    };

    const layerControl = new layerControlGrouped(config);
  
    map.addControl(layerControl, 'top-right');

};