import { layerControlGrouped } from '../../../../src/plugins/mapbox-layer-control/layerControlGrouped.js';
import '../../../../src/plugins/mapbox-layer-control/layerControl-patch.js';
import { layersBicycle, layersCargoBicycle } from './main.js';
import { addControlLayers } from '../../../../src/js/addControlLayers.js';


export function initializeControlLayers(map) {


    const config1 = {
        collapsed: false,
        layers: addControlLayers(layersBicycle, 'Bikesharing')
    };

    const layerControl1 = new layerControlGrouped(config1);
     
    map.addControl(layerControl1, 'top-right');


    const config2 = {
        collapsed: false,
        layers: addControlLayers(layersCargoBicycle, 'Lastenrad-Sharing')
    };

    const layerControl2 = new layerControlGrouped(config2);
     
    map.addControl(layerControl2, 'top-right');


};