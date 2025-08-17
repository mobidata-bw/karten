import { layerControlGrouped } from '../../../src/plugins/mapbox-layer-control/layerControlGrouped.js';
import '../../../src/plugins/mapbox-layer-control/layerControl-patch.js';
import { layersIpl, layersGeoJson } from './main.js';
import { addControlLayers } from '../../../src/js/addControlLayers.js';
export let control2;


export function initializeControlLayers(map) {


    // ==============================
    // CONFIG1
    // ============================== 
    const config1 = {
        collapsed: false,
        layers: addControlLayers(layersIpl, 'Integrationsplattform', 'group')
    };

    map.addControl(new layerControlGrouped(config1), 'top-right');


    // ==============================
    // CONFIG 2
    // ============================== 
    const config2 = {
        collapsed: false,
        layers: addControlLayers(layersGeoJson, 'Weitere Datenprofile', 'group')
    };

    control2 = new layerControlGrouped(config2);

    map.addControl(control2, 'top-right');

    // add class to add different max-height for config2 
    document.getElementById('Weitere_Datenprofile').parentElement.classList.add('config2');


    // ==============================
    // GROUP LAYER VISIBILITY
    // ============================== 
    const groupLabels = document.querySelectorAll('label.mgl-layerControlGroupHeading');

    function updateGroup(label, toggle = false) {

        const group = label.parentElement;
        const groupLayers = group.querySelectorAll('div.checkbox');

        groupLayers.forEach(groupLayer => {

            const groupLayerId = groupLayer.querySelector('input[type="checkbox"]').id;
            const visibility = map.getLayoutProperty(groupLayerId, 'visibility');

            if (visibility === 'visible') {
                toggle ? groupLayer.classList.add('hiddenGroupLayers') : groupLayer.classList.remove('hiddenGroupLayers');
                // label.style.fontWeight = 'unset';
            } else {
                toggle ? groupLayer.classList.remove('hiddenGroupLayers') : groupLayer.classList.add('hiddenGroupLayers');
                // label.style.fontWeight = 'unset';            
            }

        });
    };

    groupLabels.forEach(label => {
        updateGroup(label, false);

        label.addEventListener('click', () => {
            updateGroup(label, true);
        });
    });


};