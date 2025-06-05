import { layerControlGrouped } from '/karten/assets/plugins/mapbox-layer-control/layerControlGrouped.js';
import { layersBicycle, layersParkApiItemOccupancy } from './main.js';
import { addControlLayers } from '/karten/assets/js/addControlLayers.js';


export function initializeControlLayers(map) {

    const configParkingSitesBicycle = {
        collapsed: false,
        layers: addControlLayers(layersBicycle, 'Gebündelte Fahrradabstellanlagen')
    };

    map.addControl(new layerControlGrouped(configParkingSitesBicycle), 'top-right');


    const configParkingSitesItem = {
        collapsed: false,
        layers: addControlLayers(layersParkApiItemOccupancy, 'Schließfächer an Fahrradabstellanlagen')
    };

    map.addControl(new layerControlGrouped(configParkingSitesItem), 'top-right');

};