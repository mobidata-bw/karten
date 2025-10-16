import { mode } from '../utils/paths.js';


export function setFilePath(options = {}) {


    const format = options.format;
    const file = options.file;
    const directory = options.directory;

    let src;

    if (format == 'mbtiles') {
        src = {
            type: 'vector',
            url: `https://tiles.mobidata-bw.de/data/${file}.json`
        }
    }
    else if (format == 'pmtiles') {
        src = {
            type: 'vector',
            url: mode == 'liveserver' ? `pmtiles:///data/${directory}/${file}.pmtiles` : `pmtiles:///karten_geojsons/${directory}/${file}.pmtiles`
        }
    }
    else if (format == 'geojson') {
        src = {
            type: 'geojson',
            data: mode == 'liveserver' ? `/data/${directory}/${file}.geojson` : `/karten_geojsons/${directory}/${file}.geojson`
        }
    };

    return src;

};