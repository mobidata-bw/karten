import { mode } from '../utils/paths.js';


export function setGeoJsonPath(projectPath, geoJson) {

    return {
        type: 'geojson',
        data: mode == 'liveserver' ? `/data/${projectPath}/${geoJson}.geojson` : `/karten_geojsons/${projectPath}/${geoJson}.geojson`
    };

};