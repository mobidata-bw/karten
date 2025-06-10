import { layerControlGrouped } from '../../../../src/plugins/mapbox-layer-control/layerControlGrouped.js';
import '../../../../src/plugins/mapbox-layer-control/layerControl-patch.js';
import { layers } from './main.js';
import { addControlLayers } from '../../../../src/js/addControlLayers.js';
import { control2 } from '../../../gebuendelte_daten/js/controlLayers.js'


export function initializeControlLayers(map) {

    map.removeControl(control2);

    const config = {
        collapsed: false,
        layers: addControlLayers(layers, 'Stadt Konstanz')
    };

    const layerControl = new layerControlGrouped(config);
  
    map.addControl(layerControl, 'top-right');

};