import { filterSubgrid } from './filters.js';
import { legendLine, legendDoubleLine } from '../../../../src/js/controlLayers.js';
import { transitShapes } from './layers.js';


transitShapes.subGroup = 'Kommunale Betriebe';

export const layersMunicipalUtilities = [
    {
        id: 'transitShapes_VGS',
        label: 'Zweckverband Personennahverkehr Saarland',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('vgs')
    },
    {
        id: 'transitShapes_INV',
        label: 'Ingolstädter Verkehrsgesellschaft',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('inv')
    },
    {
        id: 'transitShapes_SCW',
        label: 'Stadtwerke Schweinfurt',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('scw')
    },
    {
        id: 'transitShapes_VAN',
        label: 'Verkehrs-Aktiengesellschaft Nürnberg',
        symbol: () => legendDoubleLine('#a7007e', '#0065b0'),
        ...transitShapes,
        filter: filterSubgrid('van')
    },
    {
        id: 'transitShapes_KGV',
        label: 'Kahlgrund Verkehrs-Gesellschaft',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('kgv')
    },
    {
        id: 'transitShapes_AVG',
        label: 'Augsburger Verkehrsgesellschaft',
        symbol: () => legendDoubleLine('#a7007e', '#0065b0'),
        ...transitShapes,
        filter: filterSubgrid('avg')
    },
    {
        id: 'transitShapes_ABV',
        label: 'Ansbacher Bäder und Verkehrs GmbH',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('abv')
    },
    {
        id: 'transitShapes_BAM',
        label: 'Stadtwerke Bamberg',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('bam')
    },
    {
        id: 'transitShapes_ABS',
        label: 'Stadtwerke Aschaffenburg',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('abs')
    },
    {
        id: 'transitShapes_VU',
        label: 'Verkehrsgemeinschaft am Bayerischen Untermain',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('vu', 2)
    },
    {
        id: 'transitShapes_NDO',
        label: 'Landkreis Neuburg-Schrobenhausen',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('ndo')
    },
    {
        id: 'transitShapes_SW1',
        label: 'Südwestdeutsche Landesverkehrs-GmbH',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('sw1')
    },
    {
        id: 'transitShapes_FRB',
        label: 'Freiburger Verkehrs AG',
        symbol: () => legendDoubleLine('#a7007e', '#0065b0'),
        ...transitShapes,
        filter: filterSubgrid('frb')
    },
    {
        id: 'transitShapes_FUE',
        label: 'infra Fürth',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('fue')
    },
    {
        id: 'transitShapes_ESW',
        label: 'Erlanger Stadtwerke',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('esw')
    }    
].sort((a, b) => b.label.localeCompare(a.label, 'de', { sensitivity: 'base' }));