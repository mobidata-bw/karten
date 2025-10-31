import { filterSubgrid } from './filters.js';
import { legendLine } from '../../../../src/js/controlLayers.js';
import { transitShapes } from './layers.js';


transitShapes.subGroup = 'DB Regio-Töchter';

export const layersDeutscheBahn = [
    {
        id: 'transitShapes_RVA',
        label: 'Regionalverkehr Allgäu',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('rva')
    },
    {
        id: 'transitShapes_DRB',
        label: 'DB Regio Bus Bayern',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('drb')
    },
    {
        id: 'transitShapes_RVS',
        label: 'Südwestbus',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('rvs')
    },
    {
        id: 'transitShapes_OVF',
        label: 'Ominbusverkehr Franken',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('ovf')
    },
    {
        id: 'transitShapes_SBG',
        label: 'Südbadenbus',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('sbg')
    },
    {
        id: 'transitShapes_RBS',
        label: 'Regional Bus Stuttgart',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('rbs')
    },
    {
        id: 'transitShapes_RAB',
        label: 'Regionalverkehr Alb-Bodensee',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('rab')
    },
     {
        id: 'transitShapes_RBO',
        label: 'Regionalbus Ostbayern',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('rbo')
    }
].sort((a, b) => b.label.localeCompare(a.label, 'de', { sensitivity: 'base' }));