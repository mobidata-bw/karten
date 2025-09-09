import { iplPath } from '../../../../src/utils/paths.js';


export function popupSources() {

    return fetch(`https://${iplPath}.mobidata-bw.de/park-api/api/public/v3/sources`)
        .then(response => response.json())
        .then(data => {
            const items = data.items;
            return items;
        });

};