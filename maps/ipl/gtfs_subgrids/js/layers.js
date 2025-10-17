import { setFilePath } from '../../../../src/js/setFilePath.js';
import { legendLine, legendDoubleLine, legendTripleLine, legendQuadrupleLine } from '../../../../src/js/controlLayers.js';


// ==============================
// SOURCES
// ==============================
export const sourceTransitShapes = {
    layer: 'MobiData-BW:transit_shapes_with_routes',
    style: 'MobiData-BW:mdbw_transit_routes_default',
    bounds: [4.3, 45.8, 15.4, 53.8]
};

export const sourceTransitAssociations = setFilePath({ format: 'mbtiles', file: 'transitAssociations' });


// ==============================
// LAYERS
// ==============================
export const layersTransitAssociations = [
    {
        id: 'transitAssociations',
        source: 'sourceTransitAssociations',
        sourceLayer: 'transitAssociations',
        type: 'fill',
        color: 'rgba(0,0,0,0)',
        fillOpacity: 0,
        fillOutlineColor: 'black'
    }
];

const transitShapes = {
    type: 'line',
    source: 'sourceTransitShapes',
    sourceLayer: 'transit_shapes_with_routes',
    lineWidth:
        [
            "interpolate", ["linear"], ["zoom"],
            6, 1,
            12, 2
        ],
    color: [
        'match',
        ['get', 'route_type'],
        '0', '#0065B0',
        '2', '#666666',
        '3', '#A7007E',
        '4', '#FF7F24',
        '7', '#FF0000',
        '#cacaca'
    ],
    exclusiveWithinGroup: true
};

// already categorized
const prefixes2 = ['cw', 'vu'];
const prefixes3 = [
    'fds', 'vsh', 'vpe', 'vhb', 'tgo', 'vvr',
    'vsb', 'tvv', 'oam', 'hnv', 'bod', 'kvv',
    'din', 'tub', 'vrn', 'vvs', 'rvs', 'ovf',
    'sbg', 'rbs', 'rab', 'grh', 'ghu', 'gai',
    'omp', 'swg', 'frb', 'swh', 'ddb', 'bvb',
    'sbb', 'als', 'wvv', 'vgn', 'rmv', 'nth',
    'hn-', 'bus', 'nvb'
];


export const layersTransitShapes = [
    // VERKEHRSVERBÜNDE
    {
        id: 'transitShapes_FDS',
        label: 'VGF',
        subGroup: 'Verkehrsverbünde',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'fds'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_VSH',
        label: 'KVSH',
        subGroup: 'Verkehrsverbünde',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'vsh'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_VPE',
        label: 'VPE',
        subGroup: 'Verkehrsverbünde',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'vpe'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_VHB',
        label: 'VHB',
        subGroup: 'Verkehrsverbünde',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'vhb'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_TGO',
        label: 'TGO',
        subGroup: 'Verkehrsverbünde',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'tgo'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_CW',
        label: 'VGC',
        subGroup: 'Verkehrsverbünde',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 2], 'cw'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_VVR',
        label: 'Move (VVR)',
        subGroup: 'Verkehrsverbünde',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'vvr'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_VSB',
        label: 'Move (VSB)',
        subGroup: 'Verkehrsverbünde',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'vsb'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_TVV',
        label: 'Move (TUTicket)',
        subGroup: 'Verkehrsverbünde',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'tvv'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_OAM',
        label: 'OstalbMobil',
        subGroup: 'Verkehrsverbünde',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'oam'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_HNV',
        label: 'HNV',
        subGroup: 'Verkehrsverbünde',
        symbol: () => legendTripleLine('#a7007e', '#666666', '#0065b0'),
        ...transitShapes,
        filter:
            [
                '==', ['slice', ['get', 'route_ids'], 0, 3], 'hnv'
            ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_BOD',
        label: 'bodo',
        subGroup: 'Verkehrsverbünde',
        symbol: () => legendDoubleLine('#a7007e', '#666666'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'bod'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_KVV',
        label: 'KVV',
        subGroup: 'Verkehrsverbünde',
        symbol: () => legendDoubleLine('#a7007e', '#0065b0'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'kvv'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_DIN_HTV',
        label: 'DING/HTV',
        subGroup: 'Verkehrsverbünde',
        symbol: () => legendDoubleLine('#a7007e', '#0065b0'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'din'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_TUB',
        label: 'naldo',
        subGroup: 'Verkehrsverbünde',
        symbol: () => legendDoubleLine('#a7007e', '#666666'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'tub'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_VRN',
        label: 'VRN',
        subGroup: 'Verkehrsverbünde',
        symbol: () => legendQuadrupleLine('#a7007e', '#0065b0', '#f39f18', '#808000'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'vrn'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_VVS',
        label: 'VVS',
        subGroup: 'Verkehrsverbünde',
        symbol: () => legendTripleLine('#a7007e', '#666666', '#0065b0'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'vvs'
        ]
    },
    // DB Regio-Töchter
    {
        id: 'transitShapes_RVS',
        label: 'Südwestbus',
        subGroup: 'DB Regio-Töchter',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'rvs'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_OVF',
        label: 'Ominbusverkehr Franken',
        subGroup: 'DB Regio-Töchter',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'ovf'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_SBG',
        label: 'Südbadenbus',
        subGroup: 'DB Regio-Töchter',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'sbg'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_RBS',
        label: 'Regional Bus Stuttgart',
        subGroup: 'DB Regio-Töchter',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'rbs'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_RAB',
        label: 'Regionalverkehr Alb-Bodensee',
        subGroup: 'DB Regio-Töchter',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'rab'
        ],
        visibility: 'none'
    },
    // // Verkehrsunternehmen
    {
        id: 'transitShapes_GRH',
        label: 'Grasmann-Reisen',
        subGroup: 'Verkehrsunternehmen',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'grh'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_GHU',
        label: 'Gute Reise Hauck',
        subGroup: 'Verkehrsunternehmen',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'ghu'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_GAI',
        label: 'Omnibus Weidachstein',
        subGroup: 'Verkehrsunternehmen',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'gai'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_VU',
        label: 'VAB',
        subGroup: 'Verkehrsunternehmen',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 2], 'vu'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_OMP',
        label: 'Omnipart',
        subGroup: 'Verkehrsunternehmen',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'omp'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_SWG',
        label: 'SWEG',
        subGroup: 'Verkehrsunternehmen',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'swg'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_FRB',
        label: 'VAG',
        subGroup: 'Verkehrsunternehmen',
        symbol: () => legendDoubleLine('#a7007e', '#0065b0'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'frb'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_SWH',
        label: 'NVH (Teil des HNV)',
        subGroup: 'Verkehrsunternehmen',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'swh'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_DDB',
        label: 'Mehrere Eisenbahngesellschaften',
        subGroup: 'Verkehrsunternehmen',
        symbol: () => legendDoubleLine('#666666', '#0065b0'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'ddb'
        ],
        visibility: 'none'
    },
    // // Ausland
    {
        id: 'transitShapes_BVB',
        label: 'Basler Verkehrsbetrieb',
        subGroup: 'Ausland',
        symbol: () => legendDoubleLine('#a7007e', '#0065b0'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'bvb'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_SBB',
        label: 'Schweizer Bundesbahn',
        subGroup: 'Ausland',
        symbol: () => legendQuadrupleLine('#a7007e', '#666666', '#0065b0', '#f39f18'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'sbb'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_ALS',
        label: 'Fluo Grand Est',
        subGroup: 'Ausland',
        symbol: () => legendDoubleLine('#a7007e', '#0065b0'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'als'
        ],
        visibility: 'none'
    },
    // Sonstige
    {
        id: 'transitShapes_WithoutCategory',
        label: 'Übrige Verkehre',
        subGroup: 'Sonstige',
        symbol: () => legendLine('grey'),
        ...transitShapes,
        filter: [
            'all',
            ['!', ['in', ['slice', ['get', 'route_ids'], 0, 2], ['literal', prefixes2]]],
            ['!', ['in', ['slice', ['get', 'route_ids'], 0, 3], ['literal', prefixes3]]]
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_WVV',
        label: 'Würzburger Verkehrsverbund',
        subGroup: 'Sonstige',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'wvv'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_VGN',
        label: 'Verkehrsverbund Großraum Nürnberg',
        subGroup: 'Sonstige',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'vgn'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_RMV',
        label: 'Rhein-Main-Verkehrsverbund',
        subGroup: 'Sonstige',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'rmv'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_NTH',
        label: 'Verkehrsgemeinschaft Mittelthüringen',
        subGroup: 'Sonstige',
        symbol: () => legendLine('#666666'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'nth'
        ],
        color: '#666666',
        visibility: 'none'
    },
    {
        id: 'transitShapes_HN',
        label: 'Bürgerbusverkehre',
        subGroup: 'Sonstige',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'hn-'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_BUS',
        label: 'Flix',
        subGroup: 'Sonstige',
        symbol: () => legendDoubleLine('#a7007e', '#666666'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'bus'
        ],
        visibility: 'none'
    },
    {
        id: 'transitShapes_NVB',
        label: 'NVBW',
        subGroup: 'Sonstige',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: [
            '==', ['slice', ['get', 'route_ids'], 0, 3], 'nvb'
        ],
        visibility: 'none'
    }
];