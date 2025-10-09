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

    map.moveLayer('netzknoten');
    map.on('styledata', () => {
        if (!window.__basemapSwitching) return;
        setTimeout(() => {
            if (map.getLayer('netzknoten')) {
                map.moveLayer('netzknoten');
            }
        }, 0);
    });

    map.addControl(layerControl, 'top-right');

};