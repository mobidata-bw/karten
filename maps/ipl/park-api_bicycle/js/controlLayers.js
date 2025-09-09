import { layerControlGrouped } from '../../../../src/plugins/mapbox-layer-control/layerControlGrouped.js';
import '../../../../src/plugins/mapbox-layer-control/layerControl-patch.js';
import { layersParkApiBicycle, layersParkApiItem } from './main.js';
import { addControlLayers } from '../../../../src/js/addControlLayers.js';


export function initializeControlLayers(map) {

    // ==============================
    // CONFIG1
    // ============================== 
    const config1 = {
        collapsed: false,
        layers: addControlLayers(layersParkApiBicycle, 'Gebündelte Fahrradabstellanlagen')
    };

    const layerControl1 = new layerControlGrouped(config1);
 
    layerControl1._exclusiveAllGroups = true;
  
    map.addControl(layerControl1, 'top-right');


    // ==============================
    // CONFIG 2
    // ============================== 
    const config2 = {
        collapsed: false,
        layers: addControlLayers(layersParkApiItem, 'Schließflächer an Fahrradabstellanlagen')
    };

    const layerControl2 = new layerControlGrouped(config2);
    
    map.addControl(layerControl2, 'top-right');
 
};