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
        filter: filterSubgrid('avv')
    },
    {
        id: 'transitShapes_MVV',
        label: 'Münchner Verkehrs- und Tarifverbund',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('mvv')
    },
    {
        id: 'transitShapes_WVV',
        label: 'Würzburger Verkehrsverbund',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('wvv')
    },
    {
        id: 'transitShapes_VGN',
        label: 'Verkehrsverbund Großraum Nürnberg',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('vgn')
    },
    {
        id: 'transitShapes_RMV',
        label: 'Rhein-Main-Verkehrsverbund',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('rmv')
    },
    {
        id: 'transitShapes_FDS',
        label: 'Verkehrs-Gemeinschaft LK Freudenstadt',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('fds')
    },
    {
        id: 'transitShapes_VSH',
        label: 'Kreisverkehr Schwäbisch Hall',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('vsh')
    },
    {
        id: 'transitShapes_VPE',
        label: 'Verkehrsverbund Pforzheim-Enzkreis',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('vpe')
    },
    {
        id: 'transitShapes_VHB',
        label: 'Verkehrsverbund Hegau-Bodensee',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('vhb')
    },
    {
        id: 'transitShapes_TGO',
        label: 'Tarifverbund Ortenau',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('tgo')
    },
    {
        id: 'transitShapes_CW',
        label: 'Verkehrsgesellschaft Bäderkreis Calw',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('cw', 2)
    },
    {
        id: 'transitShapes_VVR',
        label: 'Move (VVR)',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('vvr')
    },
    {
        id: 'transitShapes_VSB',
        label: 'Move (VSB)',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('vsb')
    },
    {
        id: 'transitShapes_TVV',
        label: 'Move (TUTicket)',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('tvv')
    },
    {
        id: 'transitShapes_OAM',
        label: 'OstalbMobil',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('oam')
    },
    {
        id: 'transitShapes_HNV',
        label: 'Hohenloher Haller Nahverkehr',
        symbol: () => legendTripleLine('#a7007e', '#666666', '#0065b0'),
        ...transitShapes,
        filter: filterSubgrid('hnv')
    },
    {
        id: 'transitShapes_BOD',
        label: 'Bodensee-Oberschwaben-Verkehrsverbund',
        symbol: () => legendDoubleLine('#a7007e', '#666666'),
        ...transitShapes,
        filter: filterSubgrid('bod')
    },
    {
        id: 'transitShapes_KVV',
        label: 'Karlsruhe Verkehrsverbund',
        symbol: () => legendDoubleLine('#a7007e', '#0065b0'),
        ...transitShapes,
        filter: filterSubgrid('kvv')
    },
    {
        id: 'transitShapes_DIN_HTV',
        label: 'Donau-Iller-Nahverkehrsverbund',
        symbol: () => legendDoubleLine('#a7007e', '#0065b0'),
        ...transitShapes,
        filter: filterSubgrid('din')
    },
    {
        id: 'transitShapes_TUB',
        label: 'Verkehrsverbund Neckar-Alb-Donau',
        symbol: () => legendDoubleLine('#a7007e', '#666666'),
        ...transitShapes,
        filter: filterSubgrid('tub')
    },
    {
        id: 'transitShapes_VRN',
        label: 'Verkehrsverbund Rhein-Neckar',
        symbol: () => legendQuadrupleLine('#a7007e', '#0065b0', '#f39f18', '#808000'),
        ...transitShapes,
        filter: filterSubgrid('vrn')
    },
    {
        id: 'transitShapes_VVS',
        label: 'Verkehrs- und Tarifverbund Stuttgart',
        symbol: () => legendTripleLine('#a7007e', '#666666', '#0065b0'),
        ...transitShapes,
        filter: filterSubgrid('vvs'),
        visibility: 'visible'
    }
].sort((a, b) => b.label.localeCompare(a.label, 'de', { sensitivity: 'base' }));