// Übrige Verkehre
export const prefixes2 = ['cw', 'vu'];
export const prefixes3 = [
    'fds', 'vsh', 'vpe', 'vhb', 'tgo', 'vvr',
    'vsb', 'tvv', 'oam', 'hnv', 'bod', 'kvv',
    'din', 'tub', 'vrn', 'vvs', 'rvs', 'ovf',
    'sbg', 'rbs', 'rab', 'grh', 'ghu', 'gai',
    'omp', 'sw1', 'frb', 'ddb', 'bvb', 'hgg',
    'sbb', 'als', 'wvv', 'vgn', 'rmv', 'nth',
    'hn-', 'bus', 'nvb', 'abs', 'abv', 'avg',
    'bam', 'bel', 'bur', 'drb', 'inv', 'kgv',
    'mvv', 'obb', 'rva', 'scw', 'van', 'vvt',
    'vvv', 'avv', 'bcl', 'etg', 'klz', 'rmb',
    'roh', 'smr', 'vgs', 'vog', 'ndo', 'fue',
    'krg', 'esw', 'kra', 'lys', 'gei', 'rbo',
    'osm', 'str', 'stv'
];

export function filterSubgrid(id, prefix = 3) {
    return [
        '==', ['slice', ['get', 'route_ids'], 0, prefix], `${id}`
    ];
};