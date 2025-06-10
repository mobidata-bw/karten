import { layerControlGrouped } from '../../../../src/plugins/mapbox-layer-control/layerControlGrouped.js';
import '../../../../src/plugins/mapbox-layer-control/layerControl-patch.js';
import { layersBicycle, layersItem } from './main.js';
import { addControlLayers } from '../../../../src/js/addControlLayers.js';


export function initializeControlLayers(map) {

    // ==============================
    // BICYCLE
    // ============================== 
    const config1 = {
        collapsed: false,
        layers: addControlLayers(layersBicycle, 'Gebündelte Fahrradabstellanlagen')
    };

    const layerControl1 = new layerControlGrouped(config1);

    layerControl1._exclusiveAllGroups = true;
    // layerControl._exclusiveGroupsList = ['Ladeleistung', 'Belegung'];

    map.addControl(layerControl1, 'top-right');

    // ==============================
    // ITEM
    // ============================== 
    const config2 = {
        collapsed: false,
        layers: addControlLayers(layersItem, 'Gebündelte Fahrradabstellanlagen')
    };

    const layerControl2 = new layerControlGrouped(config2);

    map.addControl(layerControl2, 'top-right');

};