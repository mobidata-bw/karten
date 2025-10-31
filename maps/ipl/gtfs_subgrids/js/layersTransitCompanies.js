import { filterSubgrid } from './filters.js';
import { legendLine } from '../../../../src/js/controlLayers.js';
import { transitShapes } from './layers.js';


transitShapes.subGroup = 'Verkehrsunternehmen';

export const layersTransitCompanies = [
    {
        id: 'transitShapes_SMR',
        label: 'Schmetterling Reisen',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('smr')
    },
    {
        id: 'transitShapes_RMB',
        label: 'Rombs Touristik GmbH & Co',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('rmb')
    },
    {
        id: 'transitShapes_ROH',
        label: 'Röhler StadtBus Roth',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('roh')
    },
    {
        id: 'transitShapes_KLZ',
        label: 'O.K. Reisen - Kleinhenz GmbH',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('klz')
    },
    {
        id: 'transitShapes_ETG',
        label: 'Ehard Touristik GmbH Schwabach',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('etg')
    },
    {
        id: 'transitShapes_BCL',
        label: 'BusClassic',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('bcl')
    },
    {
        id: 'transitShapes_VOG',
        label: 'Vogel Omnibus',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('vog')
    },
    {
        id: 'transitShapes_HGG',
        label: 'Heiner Geis GmbH',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('hgg')
    },
    {
        id: 'transitShapes_KRG',
        label: 'Kraus Reisen GmbH',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('krg')
    },
    {
        id: 'transitShapes_KRA',
        label: 'Omnibus Kraus',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('kra')
    },
    {
        id: 'transitShapes_BUR',
        label: 'Burlein und Sohn & Wagenhäuser',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('bur')
    },
    {
        id: 'transitShapes_GRH',
        label: 'Grasmann-Reisen',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('grh')
    },
    {
        id: 'transitShapes_GHU',
        label: 'Gute Reise Hauck',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('ghu')
    },
    {
        id: 'transitShapes_GAI',
        label: 'Omnibus Weidachstein',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('gai')
    },
    {
        id: 'transitShapes_OMP',
        label: 'Omnipart',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('omp')
    },
    {
        id: 'transitShapes_LYS',
        label: 'Lyst-Reisen Stefan Lyding KG',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('lys')
    },
    {
        id: 'transitShapes_GEI',
        label: 'Kurt Geis GmbH',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('gei')
    },
    {
        id: 'transitShapes_OSM',
        label: 'Omnibus-Service Mellrichstadt',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid('osm')
    }
].sort((a, b) => b.label.localeCompare(a.label, 'de', { sensitivity: 'base' }));