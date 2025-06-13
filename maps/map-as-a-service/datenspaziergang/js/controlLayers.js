import { layerControlGrouped } from '../../../../src/plugins/mapbox-layer-control/layerControlGrouped.js';
import '../../../../src/plugins/mapbox-layer-control/layerControl-patch.js';
import { layersIpl } from './main.js';
import { addControlLayers } from '../../../../src/js/addControlLayers.js';


export function initializeControlLayers(map) {

    const config = {
        collapsed: false,
        layers: addControlLayers(layersIpl, 'Datenspaziergang Stuttgart', 'group')
    };

    const layerControl = new layerControlGrouped(config);

    layerControl._exclusiveAllGroups = true;
  
    map.addControl(layerControl, 'top-right');

};