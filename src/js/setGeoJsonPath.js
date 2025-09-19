import { basePath } from '../utils/paths.js';


export function setGeoJsonPath(projectPath, geoJson) {

    return {
        type: 'geojson',
        data: basePath == '/' ? `/data/${projectPath}/${geoJson}.geojson` : `/karten_geojsons/${projectPath}/${geoJson}.geojson`
    };

};