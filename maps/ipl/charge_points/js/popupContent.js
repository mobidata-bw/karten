import { iplPath } from '../../../../src/utils/paths.js';
import { popupImages } from '../../../../src/js/popupImages.js';
import { popupCanvas } from './canvas.js';


export function popupContent(features) {
    // console.log(features)

    /* INITIALIZE VARIABLES */
    const {
        id,
        source,
        name,
        address,
        max_electric_power,
        operator_name
    } = features;

    /* MAPPING */   
    const datengeberMap = {
        "bnetza": "Bundesnetzagentur",
        "bnetza_api": "Bundesnetzagentur",
        "chargecloud_stuttgart": "Stadtwerke Stuttgart",
        "chargecloud_pforzheim": "Stadtwerke Pforzheim",
        "ochp_albwerk": "AlbWerk",
        "heilbronn_neckarbogen": "Stadtwerke Heilbronn",
        "opendata_swiss": "Open-Data-Plattform Schweiz",
        "chargecloud_tuebingen": "Stadtwerke Tübingen"
    };

    /* LOGOS */
    let logo = '';
    let datengeber = '';

    for (let key in datengeberMap) {
        if (source == key) {
            logo += popupImages(datengeberMap[key]);
            datengeber += `<td class="attContent">${datengeberMap[key]}</td>`;
        }
    };

    /* POPUP CONTENT */
    const htmlContent = `
        <table>
            <tr>
                ${logo}
                <th class="title">${address}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Datengeber</td>
                ${datengeber}
            </tr>
        ${(!operator_name || operator_name == '') ? '' : `
            <tr>
                <td class="att">Betreiber</td>
                <td class="attContent">${operator_name}</td>
            </tr> 
        `}
        ${!name ? '' : `
            <tr>
                <td class="att">Name</td>
                <td class="attContent">${name}</td>
            </tr>
        `}
        ${!max_electric_power ? '' : `
            <tr>
                <td class="att">Max. Ladeleistung</td>
                <td class="attContent">${(max_electric_power / 1000).toLocaleString('de-DE') + 'kW'}</td>
            </tr>
        `}
        </table>
            <br>
            <div class="title title2">Belegung Ladepunkte</div>
            <br>
        <table>
            <tr>
            <td><canvas class="canvasBar" id="canvas-${id}" width="300" height="100" /></td>
            </tr>
        </table><table>
            <tr>
                <td class="attContentLink"><a href="https://${iplPath}.mobidata-bw.de/ocpdb/api/public/v1/locations/${id}" target="_blank">&#10149 Open ChargePoint DataBase<a></td>
            </tr>
        </table>
    `;


    setTimeout(() => {
        popupCanvas(features);
    }, 0);


    return htmlContent;


};