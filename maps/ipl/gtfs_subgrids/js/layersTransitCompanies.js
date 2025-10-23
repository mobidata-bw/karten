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
        filter: filterSubgrid(3, 'smr')
    },
    {
        id: 'transitShapes_RMB',
        label: 'Rombs Touristik GmbH & Co',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'rmb')
    },
    {
        id: 'transitShapes_ROH',
        label: 'Röhler StadtBus Roth',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'roh')
    },
    {
        id: 'transitShapes_KLZ',
        label: 'O.K. Reisen - Kleinhenz GmbH',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'klz')
    },
    {
        id: 'transitShapes_ETG',
        label: 'Ehard Touristik GmbH Schwabach',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'etg')
    },
    {
        id: 'transitShapes_BCL',
        label: 'BusClassic',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'bcl')
    },
    {
        id: 'transitShapes_VOG',
        label: 'Vogel Omnibus',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'vog')
    },
    {
        id: 'transitShapes_HGG',
        label: 'Heiner Geis GmbH',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'hgg')
    },
    {
        id: 'transitShapes_KRG',
        label: 'Kraus Reisen GmbH',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'krg')
    },
    {
        id: 'transitShapes_KRA',
        label: 'Omnibus Kraus',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'kra')
    },
    {
        id: 'transitShapes_BUR',
        label: 'Burlein und Sohn & Wagenhäuser',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'bur')
    },
    {
        id: 'transitShapes_GRH',
        label: 'Grasmann-Reisen',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'grh')
    },
    {
        id: 'transitShapes_GHU',
        label: 'Gute Reise Hauck',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'ghu')
    },
    {
        id: 'transitShapes_GAI',
        label: 'Omnibus Weidachstein',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'gai')
    },
    {
        id: 'transitShapes_OMP',
        label: 'Omnipart',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'omp')
    },
    {
        id: 'transitShapes_LYS',
        label: 'Lyst-Reisen Stefan Lyding KG',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'lys')
    },
    {
        id: 'transitShapes_GEI',
        label: 'Kurt Geis GmbH',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'gei')
    },
    {
        id: 'transitShapes_OSM',
        label: 'Omnibus-Service Mellrichstadt',
        symbol: () => legendLine('#a7007e'),
        ...transitShapes,
        filter: filterSubgrid(3, 'osm')
    }
].sort((a, b) => b.label.localeCompare(a.label, 'de', { sensitivity: 'base' }));