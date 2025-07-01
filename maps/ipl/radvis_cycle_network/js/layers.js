// ==============================
// SOURCES
// ==============================
export const sourceRadvis = {
    layer: 'MobiData-BW:radvis_cycle_network',
    style: 'MobiData-BW:mdbw_radvis_cn_all',
    // bounds: [7.5, 47.5, 10.2, 49.6]
};


// ==============================
// LAYERS
// ==============================
const layers = {
    type: 'line',
    source: 'sourceRadvis',
    sourceLayer: 'radvis_cycle_network',
    group: 'Radnetze',
    lineWidth:
        [
            'interpolate', ['linear'], ['zoom'],
            6, 2,
            12, 3
        ]
};

export const layersRadvis = [
    {
        id: 'radvis_KommunalesNetz',
        label: 'Kommunales Netz',
        filter:
            [
                'case',
                ['>=', ['zoom'], 12],
                [
                    'all',
                    ['==', ['get', 'ext_bw_kommunetz'], 1],
                    ['!=', ['get', 'ext_bw_kreisnetz'], 1],
                    ['!=', ['get', 'ext_bw_landesnetz'], 1]
                ],
                false
            ],
        color: '#0020aa',
        visibility: 'none',
        ...layers
    },
    {
        id: 'radvis_Kreisnetz',
        label: 'Kreisnetz',
        filter:
            [
                'case',
                ['>=', ['zoom'], 10],
                [
                    'all',
                    ['==', ['get', 'ext_bw_kreisnetz'], 1],
                    ['!=', ['get', 'ext_bw_landesnetz'], 1]
                ],
                false
            ],
        color: '#008001',
        visibility: 'none',
        ...layers
    },
    {
        id: 'radvis_RadNetzBw',
        label: 'RadNETZ BW',
        filter:
            [
                '==', ['get', 'ext_bw_landesnetz'], 1
            ],
        color: '#ff7f00',
        ...layers
    }
];