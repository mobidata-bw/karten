import { layerControlGrouped } from '../../../../src/plugins/mapbox-layer-control/layerControlGrouped.js';
import '../../../../src/plugins/mapbox-layer-control/layerControl-patch.js';
import { layers } from './main.js';
import { addControlLayers } from '../../../../src/js/addControlLayers.js';
import { urlParams } from '../../../../src/js/layers/parkApi/urlParams.js';


const { purpose, controlLayersTitle, controlLayersTitle1, controlLayersTitle2, id1, id2 } = urlParams();

console.log(purpose);


// ==============================
// CONTROL LAYERS
// ==============================
export function initializeControlLayers(map) {

    switch (purpose) {
        case 'car':

            const config = {
                collapsed: false,
                layers: addControlLayers(layers, controlLayersTitle)
            };
            const layerControl = new layerControlGrouped(config);

            layerControl1._exclusiveAllGroups = true;

            map.addControl(layerControl, 'top-right');

            break;

        case 'bicycle':

            const config1 = {
                collapsed: false,
                layers: addControlLayers(layers, 'Gebündelte Fahrradabstellanlagen')
            };

            const layerControl1 = new layerControlGrouped(config1);

            layerControl1._exclusiveAllGroups = true;
            // layerControl._exclusiveGroupsList = ['Ladeleistung', 'Belegung'];

            map.addControl(layerControl1, 'top-right');

            const config2 = {
                collapsed: false,
                layers: addControlLayers(layers, 'Schließfächer an Fahrradabstellanlagen')
            };

            const layerControl2 = new layerControlGrouped(config2);

            map.addControl(layerControl2, 'top-right');


            break;



    }

    // const config = {
    //     collapsed: false,
    //     layers: addControlLayers(layers, controlLayersTitle)
    // };

    // const layerControl = new layerControlGrouped(config);

    // layerControl._exclusiveAllGroups = true;
    // layerControl._exclusiveGroupsList = ['Ladeleistung', 'Belegung'];

    // map.addControl(layerControl, 'top-right');

};