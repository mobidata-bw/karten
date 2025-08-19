import { layerControlGrouped } from '../../../../src/plugins/mapbox-layer-control/layerControlGrouped.js';
import '../../../../src/plugins/mapbox-layer-control/layerControl-patch.js';
import { layers } from './main.js';
import { addControlLayers } from '../../../../src/js/addControlLayers.js';
import { urlParams } from '../../../../src/js/urlParams.js';


const { controlLayersTitle } = urlParams();

export function initializeControlLayers(map) {

    const config = {
        collapsed: false,
        layers: addControlLayers(layers, controlLayersTitle)
    };

    const layerControl = new layerControlGrouped(config);
     
    map.addControl(layerControl, 'top-right');

};