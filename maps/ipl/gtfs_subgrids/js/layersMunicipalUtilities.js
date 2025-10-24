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
        filter: filterSubgrid(3, 'vgs')
    },
    {
        id: 'transitShapes_INV',
        label: 'Ingolstädter Verkehrsgesellschaft',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'inv')
    },
    {
        id: 'transitShapes_SCW',
        label: 'Stadtwerke Schweinfurt',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'scw')
    },
    {
        id: 'transitShapes_VAN',
        label: 'Verkehrs-Aktiengesellschaft Nürnberg',
        symbol: () => legendDoubleLine('#a7007e', '#0065b0'),
        ...transitShapes,
        filter: filterSubgrid(3, 'van')
    },
    {
        id: 'transitShapes_KGV',
        label: 'Kahlgrund Verkehrs-Gesellschaft',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'kgv')
    },
    {
        id: 'transitShapes_AVG',
        label: 'Augsburger Verkehrsgesellschaft',
        symbol: () => legendDoubleLine('#a7007e', '#0065b0'),
        ...transitShapes,
        filter: filterSubgrid(3, 'avg')
    },
    {
        id: 'transitShapes_ABV',
        label: 'Ansbacher Bäder und Verkehr',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'abv')
    },
    {
        id: 'transitShapes_BAM',
        label: 'Stadtverkehr Bamberg',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'bam')
    },
    {
        id: 'transitShapes_ABS',
        label: 'Stadtverkehr Aschaffenburg',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'abs')
    },
    {
        id: 'transitShapes_VU',
        label: 'Verkehrsgemeinschaft am Bayerischen Untermain',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(2, 'vu')
    },
    {
        id: 'transitShapes_NDO',
        label: 'Landkreis Neuburg-Schrobenhausen',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'ndo')
    },
    // {
    //     id: 'transitShapes_SWG',
    //     label: 'SWEG',
    //     subGroup: 'Verkehrsunternehmen',
    //     symbol: () => legendLine('#a7007e'),
    //     ...transitShapes,
    //     filter: filterSubgrid(3, 'swg')
    // },
    {
        id: 'transitShapes_SW1',
        label: 'Südwestdeutsche Landesverkehrs-GmbH',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'sw1')
    },
    {
        id: 'transitShapes_FRB',
        label: 'Freiburger Verkehrs AG',
        symbol: () => legendDoubleLine('#a7007e', '#0065b0'),
        ...transitShapes,
        filter: filterSubgrid(3, 'frb')
    },
    {
        id: 'transitShapes_FUE',
        label: 'Stadtverkehr Fürth',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'fue')
    },
    {
        id: 'transitShapes_ESW',
        label: 'Erlanger Stadtwerke',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'esw')
    }    
].sort((a, b) => b.label.localeCompare(a.label, 'de', { sensitivity: 'base' }));