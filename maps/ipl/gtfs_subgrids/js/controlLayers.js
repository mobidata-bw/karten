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



    // const directory = 'ÖPNV-Linien (Teilnetze)';

    // const config = {
    //     collapsed: false,
    //     layers: [
    //         // SUBGRID 5
    //         {
    //             name: legendLine('#a7007e') + 'Würzburger Verkehrsverbund',
    //             id: layersTransitShapes_SubGrid5[0].id,
    //             group: 'Sonstige',
    //             directory: directory
    //         },
    //         {
    //             name:legendLine('#a7007e') + 'Verkehrsverbund Großraum Nürnberg',
    //             id: layersTransitShapes_SubGrid5[1].id,
    //             group: 'Sonstige',
    //             directory: directory
    //         },
    //         {
    //             name:legendLine('#a7007e') + 'Rhein-Main-Verkehrsverbund',
    //             id: layersTransitShapes_SubGrid5[2].id,
    //             group: 'Sonstige',
    //             directory: directory
    //         },
    //         {
    //             name: legendLine('#666666') + 'Verkehrsgemeinschaft Mittelthüringen',
    //             id: layersTransitShapes_SubGrid5[3].id,
    //             group: 'Sonstige',
    //             directory: directory
    //         },
    //         {
    //             name: legendLine('#a7007e') + 'Bürgerbusverkehre',
    //             id: layersTransitShapes_SubGrid5[4].id,
    //             group: 'Sonstige',
    //             directory: directory
    //         },
    //         {
    //             name: legendDoubleLine('#a7007e', '#666666') + 'Flix',
    //             id: layersTransitShapes_SubGrid5[5].id,
    //             group: 'Sonstige',
    //             directory: directory
    //         },
    //         {
    //             name: legendLine('#a7007e') + 'NVBW',
    //             id: layersTransitShapes_SubGrid5[6].id,
    //             group: 'Sonstige',
    //             directory: directory
    //         },
    //         // SUBGRID 4
    //         {
    //             name: legendDoubleLine('#a7007e', '#0065b0') + 'Basler Verkehrsbetrieb',
    //             id: layersTransitShapes_SubGrid4[0].id,
    //             group: 'Ausland',
    //             directory: directory
    //         },
    //         {
    //             name: legendQuadrupleLine('#a7007e', '#666666', '#0065b0', '#f39f18') + 'Schweizer Bundesbahn',
    //             id: layersTransitShapes_SubGrid4[1].id,
    //             group: 'Ausland',
    //             directory: directory
    //         },
    //         {
    //             name: legendDoubleLine('#a7007e', '#0065b0') + 'Fluo Grand Est',
    //             id: layersTransitShapes_SubGrid4[2].id,
    //             group: 'Ausland',
    //             directory: directory
    //         },
    //         // SUBGRID 3
    //         {
    //             name: legendLine('#a7007e') + 'Grasmann-Reisen',
    //             id: layersTransitShapes_SubGrid3[0].id,
    //             group: 'Verkehrsunternehmen',
    //             directory: directory
    //         },
    //         {
    //             name: legendLine('#a7007e') + 'Gute Reise Hauck',
    //             id: layersTransitShapes_SubGrid3[1].id,
    //             group: 'Verkehrsunternehmen',
    //             directory: directory
    //         },
    //         {
    //             name: legendLine('#a7007e') + 'Omnibus Weidachstein',
    //             id: layersTransitShapes_SubGrid3[2].id,
    //             group: 'Verkehrsunternehmen',
    //             directory: directory
    //         },
    //         {
    //             name: legendLine('#a7007e') + 'VAB',
    //             id: layersTransitShapes_SubGrid3[3].id,
    //             group: 'Verkehrsunternehmen',
    //             directory: directory
    //         },
    //         {
    //             name: legendLine('#a7007e') + 'Omnipart',
    //             id: layersTransitShapes_SubGrid3[4].id,
    //             group: 'Verkehrsunternehmen',
    //             directory: directory
    //         },
    //         {
    //             name: legendLine('#a7007e') + 'SWEG',
    //             id: layersTransitShapes_SubGrid3[5].id,
    //             group: 'Verkehrsunternehmen',
    //             directory: directory
    //         },
    //         {
    //             name: legendDoubleLine('#a7007e', '#0065b0') + 'VAG',
    //             id: layersTransitShapes_SubGrid3[6].id,
    //             group: 'Verkehrsunternehmen',
    //             directory: directory
    //         },
    //         {
    //             name: legendLine('#a7007e') + 'NVH (Teil des HNV)',
    //             id: layersTransitShapes_SubGrid3[7].id,
    //             group: 'Verkehrsunternehmen',
    //             directory: directory
    //         },
    //         {
    //             name: legendDoubleLine('#666666', '#0065b0') + 'Mehrere Eisenbahngesellschaften',
    //             id: layersTransitShapes_SubGrid3[8].id,
    //             group: 'Verkehrsunternehmen',
    //             directory: directory
    //         },
    //         // SUBGRID 2
    //         {
    //             name: legendLine('#a7007e') + 'Südwestbus',
    //             id: layersTransitShapes_SubGrid2[0].id,
    //             group: 'DB Regio-Töchter',
    //             directory: directory
    //         },
    //         {
    //             name: legendLine('#a7007e') + 'Ominbusverkehr Franken',
    //             id: layersTransitShapes_SubGrid2[1].id,
    //             group: 'DB Regio-Töchter',
    //             directory: directory
    //         },
    //         {
    //             name: legendLine('#a7007e') + 'Südbadenbus',
    //             id: layersTransitShapes_SubGrid2[2].id,
    //             group: 'DB Regio-Töchter',
    //             directory: directory
    //         },
    //         {
    //             name: legendLine('#a7007e') + 'Regional Bus Stuttgart',
    //             id: layersTransitShapes_SubGrid2[3].id,
    //             group: 'DB Regio-Töchter',
    //             directory: directory
    //         },
    //         {
    //             name: legendLine('#a7007e') + 'Regionalverkehr Alb-Bodensee',
    //             id: layersTransitShapes_SubGrid2[4].id,
    //             group: 'DB Regio-Töchter',
    //             directory: directory
    //         },
    //         // SUBGRID 1
    //         {
    //             name: legendLine('#a7007e') + 'VGF',
    //             id: layersTransitShapes_SubGrid1[0].id,
    //             group: 'Verkehrsverbünde',
    //             directory: directory
    //         },
    //         {
    //             name: legendLine('#a7007e') + 'KVSH',
    //             id: layersTransitShapes_SubGrid1[1].id,
    //             group: 'Verkehrsverbünde',
    //             directory: directory
    //         },
    //         {
    //             name: legendLine('#a7007e') + 'VPE',
    //             id: layersTransitShapes_SubGrid1[2].id,
    //             group: 'Verkehrsverbünde',
    //             directory: directory
    //         },
    //         {
    //             name: legendLine('#a7007e') + 'VHB',
    //             id: layersTransitShapes_SubGrid1[3].id,
    //             group: 'Verkehrsverbünde',
    //             directory: directory
    //         },
    //         {
    //             name: legendLine('#a7007e') + 'TGO',
    //             id: layersTransitShapes_SubGrid1[4].id,
    //             group: 'Verkehrsverbünde',
    //             directory: directory
    //         },
    //         {
    //             name: legendLine('#a7007e') + 'VGC',
    //             id: layersTransitShapes_SubGrid1[5].id,
    //             group: 'Verkehrsverbünde',
    //             directory: directory
    //         },
    //         {
    //             name: legendLine('#a7007e') + 'Move (VVR)',
    //             id: layersTransitShapes_SubGrid1[6].id,
    //             group: 'Verkehrsverbünde',
    //             directory: directory
    //         },
    //         {
    //             name: legendLine('#a7007e') + 'Move (VSB)',
    //             id: layersTransitShapes_SubGrid1[7].id,
    //             group: 'Verkehrsverbünde',
    //             directory: directory
    //         },
    //         {
    //             name: legendLine('#a7007e') + 'Move (TUTicket)',
    //             id: layersTransitShapes_SubGrid1[8].id,
    //             group: 'Verkehrsverbünde',
    //             directory: directory
    //         },
    //         {
    //             name: legendLine('#a7007e') + 'OstalbMobil',
    //             id: layersTransitShapes_SubGrid1[9].id,
    //             group: 'Verkehrsverbünde',
    //             directory: directory
    //         },
    //         {
    //             name: legendTripleLine('#a7007e', '#666666', '#0065b0') + 'HNV',
    //             id: layersTransitShapes_SubGrid1[10].id,
    //             group: 'Verkehrsverbünde',
    //             directory: directory
    //         },
    //         {
    //             name: legendDoubleLine('#a7007e', '#666666') + 'bodo',
    //             id: layersTransitShapes_SubGrid1[11].id,
    //             group: 'Verkehrsverbünde',
    //             directory: directory
    //         },
    //         {
    //             name: legendDoubleLine('#a7007e', '#0065b0') + 'KVV',
    //             id: layersTransitShapes_SubGrid1[12].id,
    //             group: 'Verkehrsverbünde',
    //             directory: directory
    //         },
    //         {
    //             name: legendDoubleLine('#a7007e', '#0065b0') + 'DING/HTV',
    //             id: layersTransitShapes_SubGrid1[13].id,
    //             group: 'Verkehrsverbünde',
    //             directory: directory
    //         },
    //         {
    //             name: legendDoubleLine('#a7007e', '#666666') + 'naldo',
    //             id: layersTransitShapes_SubGrid1[14].id,
    //             group: 'Verkehrsverbünde',
    //             directory: directory
    //         },
    //         {
    //             name: legendQuadrupleLine('#a7007e', '#0065b0', '#f39f18', '#808000') + 'VRN',
    //             id: layersTransitShapes_SubGrid1[15].id,
    //             group: 'Verkehrsverbünde',
    //             directory: directory
    //         },
    //         {
    //             name: legendTripleLine('#a7007e', '#666666', '#0065b0') + 'VVS',
    //             id: layersTransitShapes_SubGrid1[16].id,
    //             group: 'Verkehrsverbünde',
    //             directory: directory
    //         }
    //     ]
    // };


    // map.addControl(new layerControlGrouped(config), 'top-right');


};