import { layerControlGrouped } from '/karten/assets/plugins/mapbox-layer-control/layerControlGrouped.js';
import { layers } from './main.js';
import { addControlLayers } from '/karten/assets/js/addControlLayers.js';


export function initializeControlLayers(map) {

    const config = {
        collapsed: false,
        layers: addControlLayers(layers, 'Gebündelte Straßen-Parkplätze')
    };

    map.addControl(new layerControlGrouped(config), 'top-right');

    // map.moveLayer('parkApiCarOnStreetSpecialParking_Disabled', 'parkApiCarOnStreetSpecialParking_Carsharing');

};