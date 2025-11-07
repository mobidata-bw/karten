import { filterSubgrid } from './filters.js';
import { legendLine, legendDoubleLine, legendQuadrupleLine, legendTripleLine } from '../../../../src/js/controlLayers.js';
import { transitShapes } from './layers.js';


transitShapes.subGroup = 'Ausland';

export const layersAbroad = [
    {
        id: 'transitShapes_VVT',
        label: 'Verkehrsverbund Tirol',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('vvt')
    },
    {
        id: 'transitShapes_VVV',
        label: 'Verkehrsverbund Vorarlberg',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('vvv')
    },
    {
        id: 'transitShapes_BVB',
        label: 'Basler Verkehrsbetrieb',
        symbol: () => legendDoubleLine('#a7007e', '#0065b0'),
        ...transitShapes,
        filter: filterSubgrid('bvb')
    },
    // {
    //     id: 'transitShapes_BEL',
    //     label: 'Mehrere belgische Verkehrsunternehmen',
    //     symbol: () => legendLine('#666666'),
    //     ...transitShapes,
    //     filter: filterSubgrid('bel')
    // },
    // {
    //     id: 'transitShapes_ALS',
    //     label: 'Fluo Grand Est',
    //     symbol: () => legendDoubleLine('#a7007e', '#0065b0'),
    //     ...transitShapes,
    //     filter: filterSubgrid('als')
    // },
    {
        id: 'transitShapes_OBB',
        label: 'Österreichische Bundesbahn',
        symbol: () => legendTripleLine('#a7007e', '#666666', '#0065b0'),
        ...transitShapes,
        filter: filterSubgrid('obb')
    },
    {
        id: 'transitShapes_STV',
        label: 'Steirischer Verkehrsverbund',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('stv')
    },
    {
        id: 'transitShapes_SBB',
        label: 'Schweizer Bundesbahn',
        symbol: () => legendQuadrupleLine('#a7007e', '#666666', '#0065b0', '#f39f18'),
        ...transitShapes,
        filter: filterSubgrid('sbb')
    }
].sort((a, b) => b.label.localeCompare(a.label, 'de', { sensitivity: 'base' }));