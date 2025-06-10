import { layerControlGrouped } from '../../../../src/plugins/mapbox-layer-control/layerControlGrouped.js';
import '../../../../src/plugins/mapbox-layer-control/layerControl-patch.js';
import { layers } from './main.js';
import { addControlLayers } from '../../../../src/js/addControlLayers.js';

let layerControl = null;


export function initializeControlLayers(map) {

    /* DYNAMIC VISIBILITY */
    const currentZoom = map.getZoom();
    
    // map.on('zoomend', function () {
    //     console.log(currentZoom);
    // });
    
    if (currentZoom >= 10) {
        map.setLayoutProperty(layers[1].id, 'visibility', 'visible');
    } else {
        map.setLayoutProperty(layers[1].id, 'visibility', 'none');
    };
    if (currentZoom >= 12) {
        map.setLayoutProperty(layers[0].id, 'visibility', 'visible');
    } else {
        map.setLayoutProperty(layers[0].id, 'visibility', 'none');
    };


    const config = {
        collapsed: false,
        layers: addControlLayers(layers, 'Legende', 'group')
    };


    if (layerControl != null) {
        map.removeControl(layerControl);
    };

    layerControl = new layerControlGrouped(config), 'top-right';

    map.addControl(layerControl);


};