import { layerControlGrouped } from '../../../../src/plugins/mapbox-layer-control/layerControlGrouped.js';
import '../../../../src/plugins/mapbox-layer-control/layerControl-patch.js';
import { layers } from './main.js';
import { addControlLayers } from '../../../../src/js/addControlLayers.js';
import { urlParams } from '../../../../src/js/urlParams.js';


let layerControl = null;

const { geometry, controlLayersTitle } = urlParams();

export function initializeControlLayers(map) {

    if (geometry == 'polygon') {

        map.on('zoomend', function () {

            const currentZoom = map.getZoom();
            let filteredLayers;

            if (currentZoom < 13) {
                filteredLayers = layers.filter(layer => layer.id.includes('Circle'));                
                map.setLayoutProperty('parkApiCarType_Other_Circle', 'visibility', 'visible');
                map.setLayoutProperty('parkApiCarType_OnStreet_Circle', 'visibility', 'visible');
                map.setLayoutProperty('parkApiCarType_OffStreet_Circle', 'visibility', 'visible');
                map.setLayoutProperty('parkApiCarType_CarPark_Circle', 'visibility', 'visible');;
            } else {
                filteredLayers = layers.filter(layer => !layer.id.includes('Circle'));             
                map.setLayoutProperty('parkApiCarType_Other_Circle', 'visibility', 'none');
                map.setLayoutProperty('parkApiCarType_OnStreet_Circle', 'visibility', 'none');
                map.setLayoutProperty('parkApiCarType_OffStreet_Circle', 'visibility', 'none');
                map.setLayoutProperty('parkApiCarType_CarPark_Circle', 'visibility', 'none');
            };

            const config = {
                collapsed: false,
                layers: addControlLayers(filteredLayers, controlLayersTitle)
            };

            if (layerControl != null) {
                map.removeControl(layerControl);
            };

            layerControl = new layerControlGrouped(config), 'top-right';

            layerControl._exclusiveAllGroups = true;
            // layerControl._exclusiveGroupsList = ['Ladeleistung', 'Belegung'];

            map.addControl(layerControl);

        });

        map.fire('zoomend');

    } else {

        const config = {
            collapsed: false,
            layers: addControlLayers(layers, controlLayersTitle)
        };

        const layerControl = new layerControlGrouped(config);

        layerControl._exclusiveAllGroups = true;
        // layerControl._exclusiveGroupsList = ['Ladeleistung', 'Belegung'];

        map.addControl(layerControl, 'top-right');

    }

};