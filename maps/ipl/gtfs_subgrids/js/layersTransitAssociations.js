import { filterSubgrid } from './filters.js';
import { legendLine, legendDoubleLine, legendTripleLine, legendQuadrupleLine } from '../../../../src/js/controlLayers.js';
import { transitShapes } from './layers.js';


transitShapes.subGroup = 'Verkehrsverbünde';

export const layersTransitAssociations = [
    {
        id: 'transitShapes_AVV',
        label: 'Augsburger Verkehrs- und Tarifverbund',

        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'avv')
    },
    {
        id: 'transitShapes_MVV',
        label: 'Münchner Verkehrs- und Tarifverbund',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'mvv')
    },
    {
        id: 'transitShapes_WVV',
        label: 'Würzburger Verkehrsverbund',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'wvv')
    },
    {
        id: 'transitShapes_VGN',
        label: 'Verkehrsverbund Großraum Nürnberg',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'vgn')
    },
    {
        id: 'transitShapes_RMV',
        label: 'Rhein-Main-Verkehrsverbund',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'rmv')
    },
    {
        id: 'transitShapes_FDS',
        label: 'Verkehrs-Gemeinschaft LK Freudenstadt',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'fds')
    },
    {
        id: 'transitShapes_VSH',
        label: 'Kreisverkehr Schwäbisch Hall',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'vsh')
    },
    {
        id: 'transitShapes_VPE',
        label: 'Verkehrsverbund Pforzheim-Enzkreis',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'vpe')
    },
    {
        id: 'transitShapes_VHB',
        label: 'Verkehrsverbund Hegau-Bodensee',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'vhb')
    },
    {
        id: 'transitShapes_TGO',
        label: 'Tarifverbund Ortenau',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'tgo')
    },
    {
        id: 'transitShapes_CW',
        label: 'Verkehrsgesellschaft Bäderkreis Calw',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(2, 'cw')
    },
    {
        id: 'transitShapes_VVR',
        label: 'Move (VVR)',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'vvr')
    },
    {
        id: 'transitShapes_VSB',
        label: 'Move (VSB)',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'vsb')
    },
    {
        id: 'transitShapes_TVV',
        label: 'Move (TUTicket)',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'tvv')
    },
    {
        id: 'transitShapes_OAM',
        label: 'OstalbMobil',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'oam')
    },
    {
        id: 'transitShapes_HNV',
        label: 'Hohenloher Haller Nahverkehr',
        symbol: () => legendTripleLine('#a7007e', '#666666', '#0065b0'),
        ...transitShapes,
        filter: filterSubgrid(3, 'hnv')
    },
    {
        id: 'transitShapes_BOD',
        label: 'Bodensee-Oberschwaben-Verkehrsverbund',
        symbol: () => legendDoubleLine('#a7007e', '#666666'),
        ...transitShapes,
        filter: filterSubgrid(3, 'bod')
    },
    {
        id: 'transitShapes_KVV',
        label: 'Karlsruhe Verkehrsverbund',
        symbol: () => legendDoubleLine('#a7007e', '#0065b0'),
        ...transitShapes,
        filter: filterSubgrid(3, 'kvv')
    },
    {
        id: 'transitShapes_DIN_HTV',
        label: 'Donau-Iller-Nahverkehrsverbund',
        symbol: () => legendDoubleLine('#a7007e', '#0065b0'),
        ...transitShapes,
        filter: filterSubgrid(3, 'din')
    },
    {
        id: 'transitShapes_TUB',
        label: 'Verkehrsverbund Neckar-Alb-Donau',
        symbol: () => legendDoubleLine('#a7007e', '#666666'),
        ...transitShapes,
        filter: filterSubgrid(3, 'tub')
    },
    {
        id: 'transitShapes_VRN',
        label: 'Verkehrsverbund Rhein-Neckar',
        symbol: () => legendQuadrupleLine('#a7007e', '#0065b0', '#f39f18', '#808000'),
        ...transitShapes,
        filter: filterSubgrid(3, 'vrn')
    },
    {
        id: 'transitShapes_VVS',
        label: 'Verkehrs- und Tarifverbund Stuttgart',
        symbol: () => legendTripleLine('#a7007e', '#666666', '#0065b0'),
        ...transitShapes,
        filter: filterSubgrid(3, 'vvs'),
        visibility: 'visible'
    }
].sort((a, b) => b.label.localeCompare(a.label, 'de', { sensitivity: 'base' }));