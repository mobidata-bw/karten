import { mode } from '../utils/paths.js';


export function setFilePath(format, projectPath, name) {

    let path;

    if (format == 'pmtiles') {        
        path = {
            url: mode == 'liveserver' ? `pmtiles:///data/${projectPath}/${name}.pmtiles` : `/karten_geojsons/${projectPath}/${name}.pmtiles`
        }
    }
    else if (format == 'geojson') {
        path = {
            type: 'geojson',
            data: mode == 'liveserver' ? `/data/${projectPath}/${name}.geojson` : `/karten_geojsons/${projectPath}/${name}.geojson`
        }
    };  

    return path;

};