import { iplPath } from '../../../../src/utils/paths.js';
import { popupImages } from '../../../../src/js/popupImages.js';
import { popupCanvas } from './canvas.js';


export function popupContent(features) {
    // console.log(features)

    /* INITIALIZE VARIABLES */
    const id = features.id;
    const source = features.source;
    const name = features.name;
    const address = features.address;
    const maxElectricPower = features.max_electric_power;
    const operatorName = features.operator_name;


    /* MAPPING */
    let datengeberMapping = new Map();

    datengeberMapping = {
        "bnetza": "Bundesnetzagentur",
        "bnetza_api": "Bundesnetzagentur",
        "chargecloud_stuttgart": "Stadtwerke Stuttgart",
        "chargecloud_pforzheim": "Stadtwerke Pforzheim",
        "ochp_albwerk": "AlbWerk",
        "heilbronn_neckarbogen": "Stadtwerke Heilbronn",
        "opendata_swiss": "Open-Data-Plattform Schweiz"
    };


    /* LOGOS */
    let logo = '';
    let datengeber = '';

    for (let key in datengeberMapping) {
        if (source == key) {
            logo += popupImages(datengeberMapping[key]);
            datengeber += `<td class="attContent">${datengeberMapping[key]}</td>`;
        }
    };


    /* POPUP CONTENT */
    const htmlContent =
        '<table>\
                <tr>' +
        logo +
        '<th class="title">' + address + '</th>\
                </tr>\
            </table><br><table>\
                <tr>\
                    <td class="att">Datengeber</td>' +
        datengeber +
        '</tr>' +
        ((!operatorName || operatorName == '') ? '' : (
            '<tr>\
        <td class="att">Betreiber</td>\
        <td class="attContent">' + operatorName + '</td>\
        </tr>'
        )) +
        ((!name) ? '' : (
            '<tr>\
            <td class="att">Name</td>\
            <td class="attContent">' + name + '</td>\
            </tr>'
        )) +
        ((!maxElectricPower) ? '' : (
            '<tr>\
                <td class="att">Max. Ladeleistung</td>\
                <td class="attContent">' + (maxElectricPower / 1000).toLocaleString('de-DE') + 'kW' + '</td>\
            </tr>'
        )) +
        '</table>\
            <br>\
            <div class="title title2">Belegung Ladepunkte</div>\
            <br>\
            <table>\
                <tr>\
                    <td><canvas id="canvas-' + id + '" width="300" height="100" /></td>\
                </tr>\
            </table><table>\
                <tr>\
                    <td class="attContentLink"><a href="https://' + iplPath + '.mobidata-bw.de/ocpdb/api/public/v1/locations/' + id + '" target="_blank">&#10149 Open ChargePoint DataBase<a></td>\
                </tr>\
            </table>';


    setTimeout(() => {
        popupCanvas(features);
    }, 0);


    return htmlContent;


};