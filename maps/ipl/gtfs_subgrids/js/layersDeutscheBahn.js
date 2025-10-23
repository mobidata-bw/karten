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
        filter: filterSubgrid(3, 'rva')
    },
    {
        id: 'transitShapes_DRB',
        label: 'DB Regio Bus Bayern',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'drb')
    },
    {
        id: 'transitShapes_RVS',
        label: 'Südwestbus',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'rvs')
    },
    {
        id: 'transitShapes_OVF',
        label: 'Ominbusverkehr Franken',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'ovf')
    },
    {
        id: 'transitShapes_SBG',
        label: 'Südbadenbus',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'sbg')
    },
    {
        id: 'transitShapes_RBS',
        label: 'Regional Bus Stuttgart',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'rbs')
    },
    {
        id: 'transitShapes_RAB',
        label: 'Regionalverkehr Alb-Bodensee',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'rab')
    },
     {
        id: 'transitShapes_RBO',
        label: 'Regionalbus Ostbayern',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'rbo')
    }
].sort((a, b) => b.label.localeCompare(a.label, 'de', { sensitivity: 'base' }));