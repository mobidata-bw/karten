import { layerControlGrouped } from '../../../../src/plugins/mapbox-layer-control/layerControlGrouped.js';
import '../../../../src/plugins/mapbox-layer-control/layerControl-patch.js';
import { addControlLayers } from '../../../../src/js/addControlLayers.js';
import { layers } from './main.js';


export function initializeControlLayers(map) {

    const config = {
        collapsed: false,
        layers: addControlLayers(layers, 'ÖPNV-Linien (Teilnetze)')
    };

    const layerControl = new layerControlGrouped(config);

    layerControl._exclusiveAllGroups = true;
    // layerControl._exclusiveGroupsList = ['Ladeleistung', 'Belegung'];

    map.addControl(layerControl, 'top-right');   

};