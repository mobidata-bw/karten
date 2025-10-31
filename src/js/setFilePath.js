import { mode } from '../utils/paths.js';


export function setFilePath(options = {}) {


    const format = options.format;
    const file = options.file;
    const generateId = options.generateId;
    const promoteId = options.promoteId;
    const directory = options.directory;

    let src;

    if (format == 'mbtiles') {
        src = {
            type: 'vector',
            url: `https://tiles.mobidata-bw.de/data/${file}.json`
        }
    }
    else if (format == 'geojson') {
        src = {
            type: 'geojson',
            data: mode == 'liveserver' ? `/data/${directory}/${file}.geojson` : `/karten_geojsons/${directory}/${file}.geojson`
        }
    };

    if (promoteId) src.promoteId = promoteId;
    if (generateId) src.generateId = generateId;

    return src;

};