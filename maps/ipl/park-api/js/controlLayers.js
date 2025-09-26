import { layerControlGrouped } from '../../../../src/plugins/mapbox-layer-control/layerControlGrouped.js';
import '../../../../src/plugins/mapbox-layer-control/layerControl-patch.js';
import { layers, layersGeneral, layersDisabled, layersItem } from './main.js';
import { addControlLayers } from '../../../../src/js/addControlLayers.js';
import { urlParams } from '../../../../src/js/urlParams.js';


const { purpose, object, geometry, controlLayersTitle } = urlParams();

let layerControlDefault = null;

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

            if (layerControlDefault != null) {
                map.removeControl(layerControlDefault);
            };

            layerControlDefault = new layerControlGrouped(config), 'top-right';
            layerControlDefault._exclusiveAllGroups = true;
            map.addControl(layerControlDefault);

        });

        map.fire('zoomend');

    } else if (geometry == null && object == null) {

        let layersExtra, controlLayersTitleExtra;
        if (purpose == 'car') {
            layersExtra = layersDisabled;
            controlLayersTitleExtra = 'Behindertenparkplätze';
        } else if (purpose == 'bicycle') {
            layersExtra = layersItem;
            controlLayersTitleExtra = 'Schließfächer an Fahrradabstellanlagen';
        };

        const configDefault = {
            collapsed: false,
            layers: addControlLayers(layersGeneral, controlLayersTitle)
        };
        const layerControlDefault = new layerControlGrouped(configDefault);
        layerControlDefault._exclusiveAllGroups = true;
        map.addControl(layerControlDefault, 'top-right');

        const configExtra = {
            collapsed: false,
            directoriesCollapsed: true,
            layers: addControlLayers(layersExtra, controlLayersTitleExtra)
        };      
        const layerControlExtra = new layerControlGrouped(configExtra);
        map.addControl(layerControlExtra, 'top-right');

    } else {

        const configDefault = {
            collapsed: false,
            layers: addControlLayers(layers, controlLayersTitle)
        };
        const layerControlDefault = new layerControlGrouped(configDefault);
        layerControlDefault._exclusiveAllGroups = true;
        map.addControl(layerControlDefault, 'top-right');

    };


};