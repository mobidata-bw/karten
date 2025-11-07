import { filterSubgrid, prefixes2, prefixes3 } from './filters.js';
import { legendLine, legendDoubleLine } from '../../../../src/js/controlLayers.js';
import { transitShapes } from './layers.js';


transitShapes.subGroup = 'Sonstige';

export const layersOther = [
    {
        id: 'transitShapes_WithoutCategory',
        label: 'Übrige Verkehre (falls vorhanden)',
        symbol: () => legendLine('grey'),
        ...transitShapes,
        filter: [
            'all',
            ['!', ['in', ['slice', ['get', 'route_ids'], 0, 2], ['literal', prefixes2]]],
            ['!', ['in', ['slice', ['get', 'route_ids'], 0, 3], ['literal', prefixes3]]]
        ]
    },
    {
        id: 'transitShapes_NTH',
        label: 'Verkehrsgemeinschaft Mittelthüringen',
        symbol: () => legendLine('#666666'),
        ...transitShapes,
        filter: filterSubgrid('nth'),
        color: '#666666'
    },
    {
        id: 'transitShapes_NVB',
        label: 'Nahverkehrsgesellschaft Baden-Württemberg',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('nvb')
    },
    {
        id: 'transitShapes_DDB',
        label: 'Mehrere Eisenbahngesellschaften',
        symbol: () => legendDoubleLine('#666666', '#0065b0'),
        ...transitShapes,
        filter: filterSubgrid('ddb')
    },
    // {
    //     id: 'transitShapes_BUS',
    //     label: 'Flix',
    //     symbol: () => legendDoubleLine('#a7007e', '#666666'),
    //     ...transitShapes,
    //     filter: filterSubgrid('bus')
    // },
    {
        id: 'transitShapes_HN',
        label: 'Bürgerbusverkehre',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('hn-')
    }
];